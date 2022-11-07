class UserSerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers

  attributes :id,:username,:w,:l,:winP,:backP,:agg_success,:isAdmin,:profile_picture,:league_records
  has_many :posts
  has_many :tails
  has_many :fades
  has_many :comments
  
  def profile_picture
    rails_blob_path(object.profile_picture,only_path:true) if object.profile_picture.attached?
  end

  def league_records
    records=[]
    object.posts.map{|p|p.league}.uniq.each do |league|
      w=object.posts.where(status:'graded',league:league,result:'w').length
      l=object.posts.where(status:'graded',league:league,result:'l').length
      push=object.posts.where(status:'graded',league:league,result:'p').length
      winP=w.to_f/(w.to_f+l.to_f)
      if push>0
        record={league:league, record:"#{w} - #{l}", winP:winP}
      else record={league:league, record:"#{w} - #{l} - #{push}", winP:winP}
    end
      records<<record
    end
    return records
  end
end
