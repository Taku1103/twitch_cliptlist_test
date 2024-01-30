module Api
  class HomeController < ApplicationController
    def index
      render status: :ok
    end
  end
end
