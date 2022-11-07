class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true,uniqueness: true
    validates :password, presence: true,length:{minimum:8},on: :create
    has_many :posts,dependent: :destroy
    has_many :tails
    has_many :fades
    has_many :comments

    has_one_attached :profile_picture

    validate :acceptable_profile_picture

    before_save :set_w,:set_l,:set_p,:set_winP,:set_backP,:set_agg_success

  def acceptable_profile_picture
    return unless profile_picture.attached?

    unless profile_picture.byte_size <= 1.megabyte
      errors.add(:profile_picture, "is too big")
    end

    acceptable_types = ["image/jpeg", "image/png"]
    unless acceptable_types.include?(profile_picture.content_type)
      errors.add(:profile_picture, "must be a JPEG or PNG")
    end
  end

  def set_w
    self.write_attribute(:w,posts.where(result:'w').length)
  end

  def set_l
    self.write_attribute(:l,posts.where(result:'l').length)
  end

  def set_p
    self.write_attribute(:p,posts.where(result:'p').length)
  end

  def set_winP
    total= w+l
    percentage=w.to_f/total.to_f
    if w==0 && l==0
      self.write_attribute(:winP,0)
    else self.write_attribute(:winP,percentage)
    end
  end

  def set_backP
    total_tails= self.tails.filter{|t|t.post_result && t.post_result!='p'}.length
    successful_tails=self.tails.where(post_result:'w').length
    total_fades= self.fades.filter{|t|t.post_result && t.post_result!='p'}.length
    successful_fades=self.fades.where(post_result:'l').length
    total=total_tails+total_fades
    puts total_tails
    puts successful_tails
    puts total_fades
    puts successful_fades
    total_success=successful_tails+successful_fades
    percentage=total_success.to_f/total.to_f
    if total_tails==0 && total_fades==0
      self.write_attribute(:backP,0)
    else self.write_attribute(:backP,percentage)
    end
  end

  def set_agg_success
    aggregate_success=winP+(backP*0.25)
    self.write_attribute(:agg_success,aggregate_success)
  end

end
