import { fetchPlaylists } from '@/app/lib/data'
import Myplaylists from '@/app/ui/playlists/myplaylists'

export default async function Page({ params }) {
  const listsData = await fetchPlaylists({ userId: params.userId })
  // responseが正しく取得されたかを確認し、user_playlistsを取得

  return (
    <>
      <div className="playlists-name">
        <h1>User_nameのプレイリスト一覧</h1>
      </div>
      <div className="playlists-tab">
        <p>プレイリスト</p>
        <p>お気に入り</p>
      </div>
      {/* propsでpramsのuserIdを渡す */}
      <Myplaylists userId={params.userId} listsData={listsData} />
    </>
  )
}
