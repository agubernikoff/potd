class FadeSerializer < ActiveModel::Serializer
  attributes :id,:post_id,:user_id,:post_result

  def post_result
    Post.find(object.post_id).result
  end
end
