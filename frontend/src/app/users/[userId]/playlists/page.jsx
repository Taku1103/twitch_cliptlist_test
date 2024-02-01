import { fetchPlaylists } from '@/app/lib/data'
import Myplaylists from '@/app/ui/playlists/myplaylists'

export default async function Page({ params }) {
  const listsData = await fetchPlaylists({ userId: params.userId })

  return (
    <>
      <div className="playlists-name">
        <h1>Unameのプレイリスト一覧</h1>
      </div>

      {/* propsでpramsのuserIdを渡す */}
      <Myplaylists userId={params.userId} listsData={listsData} />
    </>
  )
}
