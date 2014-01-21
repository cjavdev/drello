class Api::ListsController < ApplicationController
  before_filter :require_user!

  def index
    @lists = current_board.lists
  end

  def show
    @list = List.find(params[:id])
  end

  def create
    @list = current_board.lists.new(params[:list])
    if @list.save
      render :show
    else
      render :json => @list.errors.full_messages, :status => 422
    end
  end

  def update
    @list = List.find(params[:id])
    if @list.update_attributes(params[:list])
      render :show
    else
      render :json => @list.errors.full_messages, :status => 422
    end
  end

  private
  def current_board
    @board ||= Board.find(params[:board_id])
  end
end
