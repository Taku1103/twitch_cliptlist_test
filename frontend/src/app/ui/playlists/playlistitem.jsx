import Link from 'next/link'

export default function PlaylistItem({ playlist }) {
  return (
    <li>
      <p>プレイリストの名前：{playlist.name}</p>
      <Link href={`/users/${playlist.user_id}/playlists/${playlist.id}`}>
        {playlist.playlist_clips && playlist.playlist_clips.length > 0 && (
          <img
            src={playlist.playlist_clips[0].thumbnail_url}
            alt="クリップサムネイル"
          />
        )}
        クリック
      </Link>
    </li>
  )
}
