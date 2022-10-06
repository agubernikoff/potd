class Tail < ApplicationRecord
  belongs_to :post
  belongs_to :user

  validates :user_id, uniqueness: {scope: :post_id}
  validates :user_id, presence: true
  validate :already_faded,on: :create
  validate :not_yourself,on: :create
  validate :post_is_graded,on: :create
  validate :game_started,on: :create

  before_destroy :game_started_destroy

  def already_faded
    if self.post.fades.find_by(user_id: self.user_id)
      errors.add(:base,"You cannot tail a post you have already faded.")
    end
  end

  def not_yourself
    if self.post.user_id == self.user_id
      errors.add(:base,"You cannot tail or fade yourself.")
    end
  end

  def post_is_graded
    if self.post.status == 'graded'
      errors.add(:base,"You cannot tail or fade posts that have already been graded.")
    end
  end

  def game_started
    if self.post.start < DateTime.now
      errors.add(:base,"You cannot tail or fade a post whose game has already started.")
    end
  end

  def game_started_destroy
    if post.start < DateTime.now
      throw :abort
    end
  end
end
