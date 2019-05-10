class Api::LookoutsController < ApplicationController
  def index
    byebug
    @lookouts = bounds ? Lookout.in_bounds(bounds) : Lookout.all
  end

  def create
    @lookout = Lookout.new(lookout_params)
    if @lookout.save
      render 'api/lookouts/index'
    else
      render json: @lookout.errors.full_messages, status: 422
    end
  end

  private

  def lookout_params
    params.require(:lookout).permit(:description, :lat, :lng)
  end

  def bounds
    params[:bounds]
  end

end
