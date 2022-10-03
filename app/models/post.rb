class Post < ApplicationRecord
  belongs_to :user
  has_many :tails,dependent: :destroy
  has_many :users, through: :tails
  has_many :fades, dependent: :destroy
  has_many :users, through: :fades
  has_many :comments,dependent: :destroy
  has_many :users, through: :comments
  
  has_many_attached :files

  before_save :set_confidence

  after_save :update_associated_users

  before_destroy :game_started

  validates :caption, presence: true
  validates :user_id, presence: true
  validates :pick, presence: true
  validates :odds, presence: true
  validates :start, presence: true

  # validate :acceptable_files

  def acceptable_files
    return unless files.attached?

    unless files.byte_size <= 1.megabyte
      errors.add(:files, "is too big")
    end

    acceptable = ["files/jpeg", "files/png","files/gif","files/MP4","files/MOV"]
    unless acceptable.include?(files.content_type)
      errors.add(:files, "must be a JPEG, PNG, GIF, MOV, or MP4 file")
    end

    unless files.length<=10
      errors.add(:files, "...too many attachments. Max is 10")
    end
  end

  def set_confidence
    user_success= self.user.agg_success
    unless self.tails.empty? && self.fades.empty?

      total_tails = self.tails.length
      total_fades = self.fades.length
      total_reactions= total_tails + total_fades

      tail_success= self.tails.map{|t| t.user.agg_success}
      fade_success= self.fades.map{|f| f.user.agg_success*-1}

      reactions=[*tail_success, *fade_success]
      avg=reactions.sum/reactions.length.to_f

      x=avg*0.25

      confidence=x+user_success

      self.write_attribute(:confidence,confidence)

    else self.write_attribute(:confidence,user_success)
    end
  end

  def update_associated_users
    self.tails.each{|t|t.save}
    self.fades.each{|f|f.save}
    self.user.save
  end

  def game_started
    if self.start < DateTime.now
      throw :abort
    end
  end

end
