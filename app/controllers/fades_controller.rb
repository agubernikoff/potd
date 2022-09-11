class FadesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound,with: :render_not_found
  before_action :set_fade, only: [:show, :update, :destroy]
  # GET /fades
  def index
    @fades = Fade.all
    render json: @fades
  end

  # GET /fades/1
  # def show
  #   render json: @fade
  # end

  # POST /fades
  def create
    @fade = Fade.create!(fade_params)
    post=Post.find(params[:post_id])
    post.save
    render json: {fade:@fade,post:post}, status: :created, location: @fade
  end

  # PATCH/PUT /fades/1
  # def update
  #   @fade.update!(fade_params)
  #     render json: @fade
  # end

  # DELETE /fades/1
  def destroy
    @fade.destroy
    post=Post.find(@fade.post_id)
    post.save
    render json: post, status: 200
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fade
      @fade = Fade.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def fade_params
      params.permit(:post_id,:user_id)
    end

    def render_unprocessable_entity invalid
      render json: {errors: invalid.record.errors.full_messages},status: :unprocessable_entity
    end
    
    def render_not_found
      render json: {error: "fade not found"}, status: 404
    end
end
