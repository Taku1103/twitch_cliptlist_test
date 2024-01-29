import { fetchPlaylistData } from '@/app/lib/data'
import Link from 'next/link'

export default async function Page({ params }) {
  const listData = await fetchPlaylistData({ listId: params.listId })

  return (
    <>
      <div className="playlist-header">
        <p>公開プレイリスト</p>
        <h1>{params.listId}</h1>
        <p>作成者：{listData.creatorName}</p>
        <p>作成日：{listData.createdAt}</p>
        <p>お気に入り数：{listData.favoritesCount}</p>
        <p>削除</p>
        <p>Xで共有</p>
      </div>
      <div className="playlist-main">
        {listData.playlist.map((clip) => (
          <>
            <div className="clip">
              <Link href={`/watch?clip=${clip.clip.tw_id}&list=${listData.id}`}>
                <img src={clip.clip.thumbnail_url} />
                <p>{clip.clip.title}</p>
                <p>{clip.clip.broadcaster_name}</p>
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
