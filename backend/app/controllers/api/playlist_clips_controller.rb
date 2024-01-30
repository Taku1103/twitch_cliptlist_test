class Api::PlaylistClipsController < ApplicationController
  before_action :set_val_playlist_clip, only: [:create, :destroy]

  def create
    # order_index処理追加予定
    # PlaylistClip.all.length+1の数をorder_indexに加える
    @playlist_clips_relation = PlaylistClip.new(clip_id: @clip_id, playlist_id: @playlist_id)

    if @playlist_clips_relation.save
      render json: { status: :created, message: "Sucessed adding the clip(clip_id:#{@clip_id}) in this playlist(playlist_id:#{@playlist_id})" }
    else
      render json: { status: :unprocessable_entity, message: "Failed adding the clip(#{@clip_id}) in this playlist(#{@playlist_id})" }
    end
  end

  # 現状 req.bodyにclip_idとplaylist_idを作ってもらう
  def destroy
    @playlist_clips_relation = PlaylistClip.find_by(playlist_id: @playlist_id, clip_id: @clip_id)
    @playlist_clips_relation.destroy
  end

  # デバッグ用アクション(不要になったらコメントアウト)
  def index
    @playlist_clips_relations = PlaylistClip.all
    render json: { status: :ok, message: "Sucessed Getting Index" , playlist_clips_relation: @playlist_clips_relations}
  end

  private
    def set_val_playlist_clip
      @playlist_id = params[:playlist_id].to_i
      @clip_id = params[:clip_id].to_i
    end
end
