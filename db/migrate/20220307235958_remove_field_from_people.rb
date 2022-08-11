class RemoveFieldFromPeople < ActiveRecord::Migration[7.0]
  def change
    remove_column :people, :savings1, :integer
  end
end
