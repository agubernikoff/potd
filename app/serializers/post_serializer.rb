class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id,:pick,:odds,:caption,:status,:result,:start,:confidence,:created_at,:files,:comments,:tails,:fades,:last_pick,:last_ten
  belongs_to :user

  def files
    return unless object.files.attached?

    def file_url(file)
    rails_blob_path(file,only_path:true) 
    end

    object.files.map do |file|
      file.blob.attributes.slice(:filename,:byte_size,:id).merge(url: file_url(file))
    end
    
  end

  def comments
    ActiveModelSerializers::SerializableResource.new(object.comments,each_serializer: CommentSerializer)
  end

  def tails
    ActiveModelSerializers::SerializableResource.new(object.tails,each_serializer: TailSerializer)
  end

  def fades
    ActiveModelSerializers::SerializableResource.new(object.fades,each_serializer: FadeSerializer)
  end

  def last_pick
    index=object.user.posts.index(object)
    if index>0
      object.user.posts[index-1]
    else {}
  end
  end

  def last_ten
    index=object.user.posts.index(object)
    if index>0 && object.user.posts.length>10
      object.user.posts.slice(index-11,index-1).map{|p| p.result}
    elsif index>0 && object.user.posts.length<10
      object.user.posts.slice(0,index-1).map{|p| p.result}
    else {}
  end
  end
end
