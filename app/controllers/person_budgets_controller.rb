class PersonBudgetsController < ApplicationController

    def index
        person_budget = PersonBudget.all
        render json: person_budget
    end
end
