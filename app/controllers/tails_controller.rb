class TailsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound,with: :render_not_found
  before_action :set_tail, only: [:show, :update, :destroy]
  # GET /tails
  def index
    @tails = Tail.all
    render json: @tails
  end

  # GET /tails/1
  # def show
  #   render json: @tail
  # end

  # POST /tails
  def create
    @tail = Tail.create!(tail_params)
    post=Post.find(params[:post_id])
    post.save
    render json: {tail:@tail,post:post}, status: :created, location: @tail
  end

  # PATCH/PUT /tails/1
  # def update
  #   @tail.update!(tail_params)
  #     render json: @tail
  # end

  # DELETE /tails/1
  def destroy
    @tail.destroy
    post=Post.find(@tail.post_id)
    post.save
    render json: post, status: 200
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tail
      @tail = Tail.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tail_params
      params.permit(:post_id,:user_id)
    end

    def render_unprocessable_entity invalid
      render json: {errors: invalid.record.errors.full_messages},status: :unprocessable_entity
    end
    
    def render_not_found
      render json: {error: "tail not found"}, status: 404
    end
end
