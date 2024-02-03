import {
  fetchFavoritelists,
  fetchFollowStreamers,
  fetchPlaylists,
} from '@/app/lib/data'
import SidebarClient from '@/app/ui/sidevar/sidebar-client'
import { cookies } from 'next/headers'

export default async function Sidebar() {
  let myUserId
  if (cookies().get('userId')) {
    myUserId = cookies().get('userId').value
  }
  const playlists = await fetchPlaylists({ userId: myUserId })
  const favoritelists = await fetchFavoritelists({ userId: myUserId })
  const followStreamers = await fetchFollowStreamers({ userId: myUserId })
  console.log(`テストします： ${followStreamers}`)

  return (
    <>
      <SidebarClient
        playlists={playlists}
        favoritelists={favoritelists}
        followStreamers={followStreamers}
      />
    </>
  )
}
