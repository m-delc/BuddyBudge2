class Friend < ApplicationRecord
    
    belongs_to :user
    belongs_to :person

    # this is neeeded for the chart on dashboard
    # this is neeeded for the chart on dashboard
    # this is neeeded for the chart on dashboard
    has_one :person_budget, through: :person

    validates :id, uniqueness: true
    
end
