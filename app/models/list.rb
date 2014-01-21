class List < ActiveRecord::Base
  attr_accessible :board_id, :title
  validates :title, :presence => true
  belongs_to :board
  has_many :cards
end
