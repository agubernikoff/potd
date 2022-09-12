Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/login", to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get "/me", to: 'users#show_me'
  resources :users
  resources :posts
  patch '/grade',to:'posts#grade'
  resources :tails, only:[:index, :create, :destroy]
  resources :fades, only:[:index, :create, :destroy]
  resources :comments, only: [:index, :create, :destroy]
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
