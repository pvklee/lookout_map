class Api::LookoutsController < ApplicationController
  def index
    @lookouts = Lookout.all
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

end
