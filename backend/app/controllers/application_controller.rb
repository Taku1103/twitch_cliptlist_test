class ApplicationController < ActionController::API
  # playlistのfav数の計測
  def count_favorites(playlist)
    playlist.user_favorite_playlists.count
  end

  # playlistに含まれるclip数の計測
  def count_clips(playlist)
    playlist.clips.count
  end

  # user_id がDB内にあるuser_idかチェック
  def get_current_user_id
    user_id = request.headers["current_user_id"]
    @current_user = User.find_by(id: user_id) if user_id
    @current_user
    puts @current_user
  end

  # ユーザーがログインしていればtrue、その他ならfalseを返す
  def logged_in?
    !get_current_user_id.nil?
  end
end
