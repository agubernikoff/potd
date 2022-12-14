Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/login", to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get "/me", to: 'users#show_me'
  resources :users
  get '/leadersW',to:'users#leadersW'
  get '/leadersB',to:'users#leadersB'
  get '/leadersA',to:'users#leadersA'
  resources :posts
  get '/longest_odds',to:'posts#longest_odds'
  patch '/grade',to:'posts#grade'
  resources :tails, only:[:index, :create, :destroy]
  resources :fades, only:[:index, :create, :destroy]
  resources :comments, only: [:index, :create, :destroy]
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
