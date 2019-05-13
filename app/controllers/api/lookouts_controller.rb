class Api::LookoutsController < ApplicationController
  def index
    lookouts = bounds ? Lookout.in_bounds(bounds) : Lookout.all
    lookouts = (lookout_type == 'All') ? lookouts : lookouts.where('lookout_type=?', lookout_type)
    @lookouts = lookouts
  end

  def create
    @lookout = Lookout.new(lookout_params)
    if @lookout.save!
      render 'api/lookouts/show'
    else
      render json: @lookout.errors.full_messages, status: 422
    end
  end

  def show
    @lookout = Lookout.find(params[:id])
  end

  private

  def lookout_params
    params.require(:lookout).permit(:description, :lat, :lng, :lookout_type)
  end

  def bounds
    params[:bounds]
  end

  def lookout_type
    params[:lookout_type]
  end


end
