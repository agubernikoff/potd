class AddPostResultToFades < ActiveRecord::Migration[6.1]
  def change
    add_column :fades, :post_result, :string
  end
end
