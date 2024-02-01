import { fetchPlaylistData } from '@/app/lib/data'
import Playlist from '@/app/ui/playlists/playlist/playlist'
import PlaylistName from '@/app/ui/playlists/playlist/playlistName'
import XShareButton from '@/app/ui/playlists/playlist/x-share-button'

export default async function Page({ params }) {
  const userId = params.userId
  const listId = params.listId

  const listData = await fetchPlaylistData({
    userId,
    listId,
  })

  function displayDate(date) {
    return (
      <>{`${date.slice(0, 4)}年${date.slice(5, 7)}月${date.slice(8, 10)}日`}</>
    )
  }

  return (
    <>
      <div className="playlist-header">
        <p>公開プレイリスト</p>
        <PlaylistName listData={listData} userId={userId} listId={listId} />
        <p>作成者：{userId}</p>
        <p>作成日：{displayDate(listData.playlist.created_at)}</p>
        <p>お気に入り数：{listData.playlist.favorite_count}</p>
        <p>削除</p>
        <XShareButton
          userId={userId}
          listId={listId}
          listName={listData.playlist.name}
        />
      </div>
      <Playlist listData={listData} />
    </>
  )
}
