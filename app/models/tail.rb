class Tail < ApplicationRecord
  belongs_to :post
  belongs_to :user

  validates :user_id, uniqueness: {scope: :post_id}
  validates :user_id, presence: true
  validate :already_faded
  validate :not_yourself
  validate :post_is_graded

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
end
