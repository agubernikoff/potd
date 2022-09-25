class AddPostResultToTails < ActiveRecord::Migration[6.1]
  def change
    add_column :tails, :post_result, :string
  end
end
