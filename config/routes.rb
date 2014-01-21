Drello::Application.routes.draw do
  get "cards/index"

  get "cards/show"

  get "lists/index"

  get "lists/show"

  root :to => "root#root"
  resource :session
  resources :users
  namespace :api, :defaults => { :format => :json } do
    resources :boards do
      resources :lists, :shallow => true do
        resources :cards, :shallow => true
      end
    end
  end
end
