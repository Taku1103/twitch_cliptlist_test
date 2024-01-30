module Api
  class ClipsController < ApplicationController
    def show
      @clip = Clip.find(params[:id])
      render json: { status: :ok, message:  "show action sucess! data WIP", clip: @clips }
    end
  end
end
