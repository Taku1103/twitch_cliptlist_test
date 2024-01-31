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

  # twitch_api (使用しない)
  get "/twitch_api/create_app_token", to: "twitch_api#create_app_token"
  get "/twitch_api/create_user_token", to: "twitch_api#create_user_token"
  get "/twitch_api/get_user_id", to: "twitch_api#get_user_id"
  get "/twitch_api/get_user_channels", to: "twitch_api#get_user_channels"
  get "/twitch_api/get_broadcaster_clips", to: "twitch_api#get_broadcaster_clips"
  get "/ranking_playlists/get_ranking_clip_ids", to: "ranking_playlists#get_ranking_clip_ids"
end
