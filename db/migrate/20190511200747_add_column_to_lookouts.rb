class AddColumnToLookouts < ActiveRecord::Migration[5.2]
  def change
    add_column :lookouts, :type, :string
  end
end
