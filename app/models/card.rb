class Card < ActiveRecord::Base
  attr_accessible :body, :list_id
  validate :body, :presence => true
  belongs_to :list
end
