class PersonBudgetSerializer < ActiveModel::Serializer
  attributes :id, :person_id, :weekOneGoals, :weekTwoGoals, :weekThreeGoals, :weekFourGoals, :weekFiveGoals, :weekSixGoals

  belongs_to :person
  # has_many :friends, through: :person
  
end
