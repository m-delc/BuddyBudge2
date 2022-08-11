class RemoveOtherFieldFromPeople < ActiveRecord::Migration[7.0]
  def change
    remove_column :people, :savings2, :integer
    remove_column :people, :savings3, :integer
    remove_column :people, :savings4, :integer
    remove_column :people, :savings5, :integer
    remove_column :people, :savings6, :integer
    remove_column :people, :goal1, :integer
    remove_column :people, :goal2, :integer
    remove_column :people, :goal3, :integer
    remove_column :people, :goal4, :integer
    remove_column :people, :goal5, :integer
    remove_column :people, :goal6, :integer
  end
end
