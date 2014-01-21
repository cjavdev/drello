class Board < ActiveRecord::Base
  attr_accessible :title, :user_id

  validates :title, :presence => true, :uniquness => true
  belongs_to :user
end
