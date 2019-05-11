class UpdateColumnLookouts < ActiveRecord::Migration[5.2]
  def change
    remove_column :lookouts, :type
    add_column :lookouts, :lookout_type, :string
  end
end
