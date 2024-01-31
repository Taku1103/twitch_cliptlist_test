import { fetchTopClipsData, fetchTopPlaylistsData } from '@/app/lib/data'
import Clips from '@/app/ui/top/clips/clips'
import Playlists from '@/app/ui/top/playlists/playlists'
import Link from 'next/link'

export default async function Page() {
  const listsData = await fetchTopPlaylistsData()
  const clipsData = await fetchTopClipsData()

  return (
    <>
      <h2>Playlist一覧</h2>
      <Playlists listsData={listsData} />

      <h2>Clip一覧</h2>
      <Clips clipsData={clipsData} />

      <h2>確認用リンク(後で削除)</h2>
      <ul>
        <li>
          <Link href="/users/sakana/playlists/MyPlaylist">MyPlaylist</Link>
        </li>
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
