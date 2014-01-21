class Api::CardsController < ApplicationController
  before_filter :require_user!

  def index
    @cards = current_list.cards
  end

  def show
    @card = Card.find(params[:id])
  end

  def create
    @card = current_list.cards.new(params[:card])
    if @card.save
      render :show
    else
      render :json => @card.errors.full_messages, :status => 422
    end
  end

  def update
    @card = Card.find(params[:id])
    if @card.update_attributes(params[:card])
      render :show
    else
      render :json => @card.errors.full_messages, :status => 422
    end
  end

  private
  def current_list
    @list ||= List.find(params[:list_id])
  end
end
