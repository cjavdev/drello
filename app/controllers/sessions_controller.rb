class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_email_and_password(params[:email], params[:password])
    if @user
      login!
      redirect_to root_url
    else
      flash[:errors] = ["Incorrect email or password"]
      render :new
    end
  end
end
