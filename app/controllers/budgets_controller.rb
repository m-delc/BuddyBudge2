class BudgetsController < ApplicationController


    def index
        budget = Budget.all
        if budget
            return render json: budget, status: 200
        else 
            return render json: { errors: budget.errors.full_messages }, status: 422
        end
    end

    def create
        budget = Budget.create(budget_params)
        if budget.valid?
            return render json: budget, status: 201
        else
            return render json: { errors: budget.errors.full_messages }, status: 422
        end
    end

    private

    def budget_params
        params.permit(
            :user_id, 
            # :weekOneSavings, 
            # :weekTwoSavings, 
            # :weekThreeSavings, 
            # :weekFourSavings, 
            # :weekFiveSavings, 
            # :weekSixSavings, 
            :weekOneGoals, 
            :weekTwoGoals, 
            :weekThreeGoals, 
            :weekFourGoals, 
            :weekFiveGoals, 
            :weekSixGoals
        )
    end
end
