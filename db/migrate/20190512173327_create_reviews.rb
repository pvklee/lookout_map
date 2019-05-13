class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :lookout_id, null: false
      t.integer :rating, null: false
      t.text :review, null: false

      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :rating
    add_index :reviews, :lookout_id
    add_index :reviews, [:lookout_id, :user_id], unique: true
  end
end
