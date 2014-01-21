Drello::Application.routes.draw do
  root :to => "root#root"
  resources :boards
  resource :session
  resources :users
end
