class PeopleController < ApplicationController

    def index
        person = Person.all
        render json: person
    end

    def show
        person = Person.find_by(id: params[:id])
        render json: person
    end

end
