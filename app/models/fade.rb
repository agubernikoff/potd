class Fade < ApplicationRecord
  belongs_to :post
  belongs_to :user

  validates :user_id, uniqueness: {scope: :post_id}
  validates :user_id, presence: true
  validate :already_tailed
  validate :not_yourself
  # validate :post_is_graded
  # validate :game_started

  # before_destroy :game_started_destroy

  before_save :set_post_result

  def already_tailed
    if self.post.tails.find_by(user_id: self.user_id)
      errors.add(:base,"You cannot fade a post you have already tailed")
    end
  end

  def not_yourself
    if self.post.user_id == self.user_id
      errors.add(:base,"You cannot tail or fade yourself")
    end
  end

  # def post_is_graded
  #   if self.post.status == 'graded'
  #     errors.add(:base,"You cannot tail or fade posts that have already been graded.")
  #   end
  # end

  # def game_started
  #   if self.post.start < DateTime.now
  #     errors.add(:base,"You cannot tail or fade a post whose game has already started.")
  #   end
  # end

  # def game_started_destroy
  #   if post.start < DateTime.now
  #     throw :abort
  #   end
  # end

  def set_post_result
    result = self.post.result
    self.write_attribute(:post_result,result)
  end
end
