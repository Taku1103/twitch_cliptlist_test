module Api
  class UsersController < ApplicationController
    def show
      render status: :ok
    end

    def create
      render status: :created
    end
  end
end
