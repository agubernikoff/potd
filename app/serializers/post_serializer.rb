class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id,:pick,:odds,:caption,:status,:result,:start,:confidence,:created_at,:files,:comments,:tails,:fades,:last_pick,:last_ten
  belongs_to :user

  def files
    return unless object.files[0]

    def file_url(file)
      rails_representation_url(file,only_path:true) 
    end

    # object.get_variants.map do |file|
    #   file.blob.attributes.slice(:filename,:byte_size,:id).merge(url: file_url(file))
    #   # rails_representation_url(file, only_path: true)
    # end
    object.files.map{|f|f.variant(resize_to_limit: [500, 300])}.map{|v|rails_representation_url(v,only_path:true)}
    
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
    object.user.posts.filter{|p|p.status =='graded'}.sort_by{|p|p.created_at}.last
  end

  def last_ten
    object.user.posts.filter{|p|p.status =='graded'}.sort_by{|p|p.created_at}.reverse!.last(10)
  end
end
