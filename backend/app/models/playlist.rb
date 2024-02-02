class Playlist < ApplicationRecord
  validates :name, presence: true

  belongs_to :user

  has_many :daily_highlight_playlists
  has_many :weekly_highlight_playlists
  has_many :monthly_highlight_playlists

  # 中間テーブル
  has_many :user_favorite_playlists, dependent: :destroy
  has_many :users, through: :user_favorite_playlists

  has_many :playlist_clips, dependent: :destroy
  has_many :clips, through: :playlist_clips

  # このplaylistが引数のuser_idにfavoriteされているか
  def favorited_by?(user_id)
    user_favorite_playlists.exists?(user_id: user_id)
  end


  # メモ用残骸
  # def favorited_by_user?(user_id)
  #   user_favorite_playlists.where(user_id: user_id).exists?
  # end
  # user.favorite_playlists.include?(playlists)
end
