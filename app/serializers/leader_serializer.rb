class LeaderSerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers

  attributes :id,:username,:w,:l,:winP,:backP,:agg_success,:isAdmin,:profile_picture
  
  has_many :tails
  has_many :fades
  
  def profile_picture
    rails_blob_path(object.profile_picture,only_path:true) if object.profile_picture.attached?
  end
end
