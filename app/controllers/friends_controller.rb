class FriendsController < ApplicationController

    # def update
    #     friend = current_user
    #     friend.update(friend_params)
    #     if friend
    #         return render json: friend, status: 201
    #     else
    #         return render json: { errors: friend.errors.full_messages }, status: 422
    #     end
    # end

    # render json: friends, except: [:created_at, :updated_at], status: 200
#
    def index
        user = current_user
        friends = user.friends
        # friends = Friend.find_by(person_id: params[:person_id])
        if friends
            render json: friends, status: 200
        else
            return render json: { errors: friends.errors.full_messages }, status: 404
        end
    end

    # def index
    #     friends = Frien
    # end

    def show
        friend = Friend.find_by(id: params[:id])
        render json: friend, status: 200
    end

    def create
        friend = Friend.create(friend_params)
        if friend.valid?
            return render json: friend, status: 201
        else
            return render json: { error: friend.errors.full_messages }, status: 404
        end
    end

    # def destroy
    #     friend = Friend.find_by(id: params[:id])
    #     friend.destroy
    #     head :no_content
    # end

    def destroy
        friend = current_user.friends.find_by(id: params[:id])
        friend.destroy
        head :no_content
    end


    private

    def friend_params
        params.permit(:user_id, :person_id)        
    end

end
