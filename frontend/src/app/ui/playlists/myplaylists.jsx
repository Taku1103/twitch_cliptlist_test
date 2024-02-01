'use client'
import { fetchPlaylistData, fetchPlaylists } from '@/app/lib/data'
import PlaylistItem from '@/app/ui/playlists/playlistitem'

import { useEffect, useState } from 'react'

export default function Myplaylists({ userId }) {
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPlaylists({ userId })
        if (response && response.user_playlists) {
          // 各プレイリストの詳細データを取得
          const playlistsData = await Promise.all(
            response.user_playlists.map(async (playlist) => {
              const listData = await fetchPlaylistData({
                userId,
                listId: playlist.id,
              })
              return { ...playlist, playlist_clips: listData.playlist_clips }
            }),
          )
          setPlaylists(playlistsData)
        }
      } catch (error) {
        console.error('プレイリストデータの取得に失敗しました', error)
      }
    }

    fetchData()
  }, [userId])

  return (
    <ul>
      {playlists.map((playlist) => (
        <PlaylistItem key={playlist.id} playlist={playlist} />
      ))}
    </ul>
  )
}
