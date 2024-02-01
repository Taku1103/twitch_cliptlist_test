'use client'
import PlaylistItem from '@/app/ui/playlists/playlistitem'
import styles from '@/app/ui/playlists/playlists.module.css'
import Favorite_list from '@/app/ui/sidevar/favorite_list'
import { useState } from 'react'

export default function Myplaylists({ userId, listsData }) {
  const [activeTab, setActiveTab] = useState('playlists') // 初期タブをプレイリストに設定
  const chunkedArray = []
  const chunkSize = 3
  const displayRowMax = 3

  for (let i = 0; i < listsData.user_playlists.length; i += chunkSize) {
    chunkedArray.push(listsData.user_playlists.slice(i, i + chunkSize))
  }

  return (
    <>
      <div className="playlists-tab">
        <button
          className="tab-button"
          onClick={() => setActiveTab('playlists')}
        >
          プレイリスト
        </button>
        <button
          className="tab-button"
          onClick={() => setActiveTab('favorites')}
        >
          お気に入り
        </button>
      </div>

      {activeTab === 'playlists' && (
        <div className={styles.playlists}>
          <div className={styles.spaceLeft}></div>
          <div className={styles.column}>
            {chunkedArray.map((column, index) => (
              <div key={index}>
                {column.map((listData) => (
                  <div className={styles.playlist} key={listData.id}>
                    <PlaylistItem listData={listData} />
                  </div>
                ))}
                <div className="clear-left"></div>
              </div>
            ))}
          </div>
          <div className={styles.spaceRight}></div>
        </div>
      )}
      {activeTab === 'favorites' && <Favorite_list />}
    </>
  )
}
