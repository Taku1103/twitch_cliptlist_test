class ApplicationController < ActionController::API
  # playlistのfav数の計測
  def count_favorites(playlist)
    playlist.user_favorite_playlists.count
  end

  # playlistに含まれるclip数の計測
  def count_clips(playlist)
    playlist.clips.count
  end

  # user_id を抽出
  def get_current_user_id
    @current_user_id = request.headers["HTTP_CURRENT_USER_ID"] # TODO要確認

    # @current_user = User.find_by(id: user_id) if user_id
    # @current_user
    # puts @current_user
  end

  # ユーザーがログインしていればtrue、その他ならfalseを返す
  def logged_in?
    !get_current_user_id.nil?
  end
end
