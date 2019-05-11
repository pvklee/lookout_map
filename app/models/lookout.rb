class Lookout < ApplicationRecord
  LOOKOUT_TYPES = [
    'view',
    'hike',
    'easy',
    'ocean',
    'mountain'
  ].sort.freeze

  validates :description, :lat, :lng, presence: true
  validates :lookout_type, inclusion: { in: LOOKOUT_TYPES }, allow_nil: true

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng < ?", bounds[:northEast][:lng])
      .where("lng > ?", bounds[:southWest][:lng])
  end

end
