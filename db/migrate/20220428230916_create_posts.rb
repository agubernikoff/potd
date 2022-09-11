class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :pick
      t.string :odds
      t.string :caption
      t.belongs_to :user, null: false, foreign_key: true
      t.string :status, default:'pending'
      t.string :result
      t.datetime :start
      t.float :confidence

      t.timestamps
    end
  end
end
