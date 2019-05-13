class Review < ApplicationRecord
  validates :user_id, :lookout_id, :rating, :description, presence: true
  validates :lookout_id, uniqueness: {scope: :user_id, message: "each user can only leave one rating on a lookout"}
  validates_numericality_of :rating, only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5

  belongs_to :author, class_name: :User, foreign_key: :user_id
  belongs_to :lookout, foreign_key: :lookout_id


end
