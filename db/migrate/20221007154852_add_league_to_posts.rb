class AddLeagueToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :league, :string
  end
end
