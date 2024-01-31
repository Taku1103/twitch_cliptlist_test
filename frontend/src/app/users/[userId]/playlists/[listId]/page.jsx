import { fetchPlaylistData } from '@/app/lib/data'
import Playlist from '@/app/ui/playlists/playlist/playlist'

export default async function Page({ params }) {
  const listData = await fetchPlaylistData({
    userId: params.userId,
    listId: params.listId,
  })

  return (
    <>
      <div className="playlist-header">
        <p>公開プレイリスト</p>
        <h1>{listData.playlist.name}</h1>
        <p>作成者：{params.userId}</p>
        <p>作成日：{listData.playlist.created_at}</p>
        <p>お気に入り数：{listData.playlist.favorite_count}</p>
        <p>削除</p>
        <p>Xで共有</p>
      </div>
      <Playlist listData={listData} />
    </>
  )
}
