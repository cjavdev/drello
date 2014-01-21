class BoardsController < ApplicationController
  before_filter :require_user!

  def index
    @boards = current_user.boards
  end

  def show
    @board = current_user.boards.find(params[:id])
  end

  def new
  end

  def create
    @board = Board.new(params[:board])
    if @board.save
      render :show
    else
      render :json => @board.errors.full_messages
    end
  end
end
