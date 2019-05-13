class Lookout < ApplicationRecord
  TYPES = [
    'View',
    'Hike',
    'Easy',
    'Ocean',
    'Mountain'
  ].sort.freeze

  validates :description, :lat, :lng, presence: true
  validates :lookout_type, inclusion: { in: TYPES }, allow_nil: true

  has_many :reviews, foreign_key: :lookout_id, dependent: :destroy
  has_many :reviewed_users, through: :reviews, source: :author

  has_one_attached :photo

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng < ?", bounds[:northEast][:lng])
      .where("lng > ?", bounds[:southWest][:lng])
  end

  def average_rating
    reviews.average(:rating)
  end

end
