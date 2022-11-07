class AddPToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :p, :string
  end
end
