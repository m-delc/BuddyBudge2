class PersonBudget < ApplicationRecord
    belongs_to :person
    # has_many :friends, through: :person
    
end
