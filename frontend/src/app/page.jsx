import { fetchTopPlaylistsData } from '@/app/lib/data'
import Playlists from '@/app/ui/playlists/top/playlists'
import Link from 'next/link'

export default async function Page() {
  const listsData = await fetchTopPlaylistsData()

  return (
    <>
      <h2>Playlist一覧</h2>
      <Playlists listsData={listsData} />
      <ul>
        <li>
          <Link href="/users/sakana/playlists/MyPlaylist">MyPlaylist</Link>
        </li>
      </ul>

      <h2>Clip一覧</h2>
      <ul>
        <li>
          <Link href="/watch/?clip=ShinyUgliestFerretKreygasm-PdQRHzhylDkgxmRh">
            Example Clip
          </Link>
        </li>
        <li>
          <Link href="/watch/?clip=ShinyUgliestFerretKreygasm-PdQRHzhylDkgxmRh&list=MyPlaylist">
            Example Clip(listData付き)
          </Link>
        </li>
      </ul>
    </>
  )
}
