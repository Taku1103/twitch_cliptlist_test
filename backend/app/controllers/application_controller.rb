class ApplicationController < ActionController::API
  # playlistのfav数の計測
  def count_favorites(playlist)
    playlist.user_favorite_playlists.count
  end

  # playlistに含まれるclip数の計測
  def count_clips(playlist)
    playlist.clips.count
  end

  def get_current_user_id
    @current_user_id = request.headers["current_user_id"]
  end
end
