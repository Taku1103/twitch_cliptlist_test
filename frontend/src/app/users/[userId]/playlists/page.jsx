import { fetchPlaylists } from '@/app/lib/data'

export default async function Page({ params }) {
  const response = await fetchPlaylists({ userId: params.userId })
  const playlists = response.user_playlists

  return (
    <>
      <ul>
        {playlists.map((playlist, index) => (
          <li key={index}>プレイリストの名前：{playlist.name}</li>
        ))}
      </ul>
    </>
  )
}
