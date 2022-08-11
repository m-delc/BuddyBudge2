class CreatePeople < ActiveRecord::Migration[7.0]
  def change
    create_table :people do |t|
      t.string :first_name
      t.text :bio
      t.text :img
      t.integer :savings1
      t.integer :savings2
      t.integer :savings3
      t.integer :savings4
      t.integer :savings5
      t.integer :savings6
      t.integer :goal1
      t.integer :goal2
      t.integer :goal3
      t.integer :goal4
      t.integer :goal5
      t.integer :goal6

      t.timestamps
    end
  end
end
