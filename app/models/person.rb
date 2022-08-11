class Person < ApplicationRecord
    
    has_one :person_budget
    has_many :friends
    # has_many :users, through: :friends
    validates :id, uniqueness: true
    
end
