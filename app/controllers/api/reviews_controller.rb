class Api::ReviewsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @reviews = @user.reviews
  end

  def create
    @user = User.find(params[:user_id])
    @review = @user.reviews.new(review_params)
    if @review.save
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages
    end
  end

  # def destroy
  #   @review = Review.find(params[:id])
  #   if @review.destroy
  #     render json: ["Review destroyed"]
  #   else
  #     render json: @review.errors.full_messages
  #   end
  # end

  private

  def review_params
    params.require(:review).permit(:user_id, :lookout_id, :rating, :description)
  end

end
