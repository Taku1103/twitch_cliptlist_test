Rails.application.routes.draw do
  namespace :api do
    root 'home#index'
    resources :clips
    resources :playlist_clips # ,only: [:create, :destroy]
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
