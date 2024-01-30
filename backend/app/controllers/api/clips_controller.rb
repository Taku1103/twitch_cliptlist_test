module Api
  class ClipsController < ApplicationController
    def show
      render json: { status: :ok, message:  "show action sucess! data WIP" }
    end
  end
end
