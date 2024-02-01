module Api
  class ClipsController < ApplicationController
    def show
      @clip = Clip.includes(:game).find(params[:id])
      render json: { status: :ok, message: "show action sucess!",  clip: @clip.attributes.merge(game_title: @clip.game&.game_title) }
    end
  end
end
