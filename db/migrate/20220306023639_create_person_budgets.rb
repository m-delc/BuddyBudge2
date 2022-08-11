class CreatePersonBudgets < ActiveRecord::Migration[7.0]
  def change
    create_table :person_budgets do |t|

      t.integer :person_id
      t.integer :weekOneGoals
      t.integer :weekTwoGoals
      t.integer :weekThreeGoals
      t.integer :weekFourGoals
      t.integer :weekFiveGoals
      t.integer :weekSixGoals

      t.timestamps
    end
  end
end
