class Board < ActiveRecord::Base
  attr_accessible :title, :user_id
  validates :title, :presence => true, :uniqueness => true
  belongs_to :user
  has_many :lists
end
