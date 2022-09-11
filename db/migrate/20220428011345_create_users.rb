class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.integer :w
      t.integer :l
      t.float :winP
      t.float :backP
      t.float :agg_success
      t.boolean :isAdmin,default:false

      t.timestamps
    end
  end
end
