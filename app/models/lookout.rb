class Lookout < ApplicationRecord
  validates :description, :lat, :lng, presence: true
  
end
