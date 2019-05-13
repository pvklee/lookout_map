class FixReviewsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :review
    add_column :reviews, :description, :text, null: false 
  end
end
