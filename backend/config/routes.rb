Rails.application.routes.draw do
  namespace :api do
    root 'home#index'
    resources :clips
    resources :users do
      scope module: :users do
        member do
          resources :playlists
          resources :user_favorite_playlists
        end
      end
    end
  end
end
