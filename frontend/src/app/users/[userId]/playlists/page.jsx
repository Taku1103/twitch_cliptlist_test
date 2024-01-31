import { fetchPlaylists } from '@/app/lib/data'

export default async function Page({ params }) {
  const response = await fetchPlaylists({ userId: params.userId })

  // responseが正しく取得されたかを確認し、user_playlistsを取得
  const playlists = response ? response.user_playlists : []

  return (
    <>
      <div className="playlists-name">
        <h1>User_nameのプレイリスト一覧</h1>
      </div>
      <div className="playlists-tab">
        <p>プレイリスト</p>
        <p>お気に入り</p>
      </div>
      <ul>
        {playlists.map((playlist, index) => (
          <li key={index}>プレイリストの名前：{playlist.name}</li>
        ))}
      </ul>
    </>
  )
}
