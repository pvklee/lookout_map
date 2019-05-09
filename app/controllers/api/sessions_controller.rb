class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: {error: "User not found"}, status: 404
    else
      log_in!(@user)
      redirect_to api_user_url(@user)
    end

  end

  def destroy
    if current_user.nil?
      render json: {error: "Already logged out"}, status: 404
    else
      log_out!
      render json: {}
    end
  end

end
