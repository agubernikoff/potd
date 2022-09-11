class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id,:pick,:odds,:caption,:status,:result,:start,:confidence,:created_at,:files,:comments
  belongs_to :user
  has_many :tails
  has_many :fades

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
end
