class CommentSerializer < ActiveModel::Serializer
  attributes :id,:comment,:post_id
  belongs_to :user
end
