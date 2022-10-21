class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound,with: :render_not_found
    rescue_from ActiveRecord::RecordNotDestroyed,with: :not_destroyed
    skip_before_action :is_logged_in?, only: [:index,:longest_odds,:update,:show]
    
    def index
      # session.delete :number
      # session[:number] ||=25
      posts=Post.all.filter{|p| p.start.in_time_zone('Pacific Time (US & Canada)').tomorrow.midnight > DateTime.now.in_time_zone('Pacific Time (US & Canada)')}
      render json: posts
      # render json: posts.first(session[:number])
      
      # if session[:number] +25 > posts.length
      #   session[:number]=posts.length
      # elsif session[:number] < posts.length
      #   session[:number]+=25
      # end
    end

    def longest_odds
      posts=Post.find_longest_odds
      render json: posts
    end

    def show
      post = Post.find(params[:id])
      render json: post
    end

    def create
      post= Post.create!(post_params)
      render json: post, status: :created
    end

    def update
      post = Post.find(params[:id])
      post.update!(post_params)
      render json: post, status: :updated
    end

    def grade
      current_user=User.find(session[:user_id])
      post = Post.find(params[:id])
      if current_user.isAdmin
        post.update(status:'graded',result:params[:result])
        render json: post
      else render json:{error:"You don't have the facilities for that big man."}
      end
    end

    def destroy
      post = Post.find(params[:id])
      post.destroy!
      head :no_content
      
    end

    private
    
    def post_params
      params.permit(:id,:pick,:odds,:status,:result,:start,:user_id,:caption,:league,files:[])
    end
    
    def render_unprocessable_entity invalid
      render json: {errors: invalid.record.errors.full_messages},status: :unprocessable_entity
    end
    
    def render_not_found
      render json: {error: "Post not found"}, status: 404
    end

  def not_destroyed 
    render json:{error: "You cannot delete a post whose game has already started"}, status: 403
  end
end
