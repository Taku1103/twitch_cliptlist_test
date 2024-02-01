module Api
  class ClipsController < ApplicationController
    def show
      @clip = Clip.includes(:game).includes(:broadcaster).find(params[:id])
      render json: { status: :ok, message: "show action success!",  clip: @clip.attributes.merge(game_title: @clip.game&.game_title, broadcaster_profile_image_url: @clip.broadcaster&.profile_image_url) }
    end
  end
end
