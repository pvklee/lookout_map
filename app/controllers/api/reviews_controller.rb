class Api::ReviewsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @reviews = @user.reviews
  end

  def create
    @review = current_user.reviews.new(review_params)
    @lookout = Lookout.find(@review.lookout_id)
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
