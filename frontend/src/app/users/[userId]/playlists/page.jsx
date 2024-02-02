import { fetchFavoritelists, fetchPlaylists } from '@/app/lib/data'
import Myplaylists from '@/app/ui/playlists/myplaylists'

export default async function Page({ params }) {
  const listsData = await fetchPlaylists({ userId: params.userId })
  const favoriteListsData = await fetchFavoritelists({ userId: params.userId })

  return (
    <>
      <div className="playlists-name">
        <p>
          <span className="username">User_name</span>のプレイリスト一覧
        </p>
      </div>

      {/* propsでpramsのuserIdを渡す */}
      <Myplaylists
        userId={params.userId}
        listsData={listsData}
        favoriteListsData={favoriteListsData}
      />
    </>
  )
}
