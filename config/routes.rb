Rails.application.routes.draw do
  
  # namespace :api do
  
    resources :users
    resources :people, only: [:index, :update, :show]
    resources :friends, only: [:create, :index, :destroy, :show]
    resources :budgets, only: [:create, :index]
    resources :person_budgets, only: [:index]
      
    get '/authorize_user', to: "users#show"
    post '/login', to: "sessions#login"
    delete '/logout', to: "sessions#logout"

  # end
  # test
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end