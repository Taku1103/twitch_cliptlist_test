'use client'
import { fetchPlaylistData, fetchPlaylists } from '@/app/lib/data'
import Link from 'next/link'
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
      {playlists.map((playlist, index) => (
        <li key={index}>
          <p>プレイリストの名前：{playlist.name}</p>
          <Link href={`/users/${playlist.user_id}/playlists/${playlist.id}`}>
            {playlist.playlist_clips && playlist.playlist_clips.length > 0 && (
              <img
                src={playlist.playlist_clips[0].thumbnail_url}
                alt="クリップサムネイル"
              />
            )}
            クリック
          </Link>
        </li>
      ))}
    </ul>
  )
}
