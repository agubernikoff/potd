class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound,with: :render_not_found
    skip_before_action :is_logged_in?,only: [:index,:create,:show,:leadersW,:leadersB,:leadersA]
    
    
    def index
      users = User.all
      # User.find_each(&:save)
      render json: users
    end

    def leadersW
      users_by_winP = User.all.order(winP: :desc).first(10)
      render json: users_by_winP
    end

    def leadersB
      users_by_backP = User.all.order(backP: :desc).first(10)
      render json: users_by_backP
    end

    def leadersA
      users_by_aggS = User.all.order(agg_success: :desc).first(10)
      render json: users_by_aggS
    end
    
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end
    

    def show
      user= User.find(params[:id])
      render json: user
    end
    
    def show_me
      user = User.find(session[:user_id])
      render json: user
    end
    
    def update
      user = User.find(session[:user_id])
      user.update!(user_params)
      render json: user
    end
    
    def destroy
      user = User.find(session[:user_id])
      user.destroy
      session.delete :user_id
      head :no_content
    end
    
    private
    
    def user_params
      params.permit(:username,:password,:profile_picture)
    end
    
    def render_unprocessable_entity invalid
      render json: {errors: invalid.record.errors.full_messages},status: :unprocessable_entity
    end
    
    def render_not_found
      render json: {error: "User not found"}, status: 404
    end
  end
