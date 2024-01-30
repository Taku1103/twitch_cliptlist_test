class Api::PlaylistClipsController < ApplicationController
  before_action :set_val_playlist_clip, only: [:create, :destroy]

  def create
    @playlist_clips_relation = PlaylistClip.new(clip_id: @clip_id, playlist_id: @playlist_id)
    if @playlist_clips_relation.save
      render json: { status: :created, message: "Sucessed adding the clip(#{clip_id}) in this playlist(#{playlist_id})" }
    else
      render json: { status: :unprocessable_entity, message: "Failed adding the clip(#{clip_id}) in this playlist(#{playlist_id})" }
    end
  end

  def destroy
    @playlist_clips_relation = PlaylistClip.find_by(playlist_id: @playlist_id, clip_id: @clip_id)
    @playlist_clips_relation.destroy
  end

  private
    def set_val_playlist_clip
      @playlist_id = params[:playlist_id].to_i
      @clip_id = params[:clip_id].to_i
    end
end
