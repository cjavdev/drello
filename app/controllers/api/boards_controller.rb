class Api::BoardsController < ApplicationController
  before_filter :require_user!

  def index
    @boards = current_user.boards
  end

  def show
    @board = Board.find(params[:id])
  end

  def create
    @board = Board.new(params[:board])
    if @board.save
      render :show
    else
      render :json => @board.errors.full_messages, :status => 422
    end
  end

  def update
    @board = Board.find(params[:id])
    if @board.update_attributes(params[:card])
      render :show
    else
      render :json => @board.errors.full_messages, :status => 422
    end
  end
end
