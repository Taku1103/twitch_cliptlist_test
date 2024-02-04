'use client'
import PlaylistItem from '@/app/ui/playlists/playlistitem'
import styles from '@/app/ui/playlists/playlists.module.css'
import { useState } from 'react'

export default function Myplaylists({ userId, listsData, favoriteListsData }) {
  const [activeTab, setActiveTab] = useState('playlists') // 初期タブをプレイリストに設定
  const chunkedArray = []
  const favoritesChunked = []
  const chunkSize = 3
  const displayRowMax = 3

  // const name = favoriteListsData.user_favorite_playlists[0].name

  for (let i = 0; i < listsData.user_playlists.length; i += chunkSize) {
    chunkedArray.push(listsData.user_playlists.slice(i, i + chunkSize))
  }

  const getTabClass = (tabName) => {
    return `tab-button ${activeTab === tabName ? 'active' : ''}`
  }

  return (
    <>
      <div className="playlists-tab">
        <button
          className={getTabClass('playlists')}
          onClick={() => setActiveTab('playlists')}
        >
          作成プレイリスト
        </button>
        <button
          className={getTabClass('favorites')}
          onClick={() => setActiveTab('favorites')}
        >
          お気に入り
        </button>
      </div>

      <div className="playlists-main">
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
        {activeTab === 'favorites' && (
          <div className={styles.playlists}>
            <div className={styles.spaceLeft}></div>
            <div className={styles.column}>
              {favoriteListsData.user_favorite_playlists.map((listData) => (
                <div className={styles.playlist} key={listData.id}>
                  <PlaylistItem listData={listData} />
                </div>
              ))}
              <div className="clear-left"></div>
            </div>
            <div className={styles.spaceRight}></div>
          </div>
        )}
      </div>
    </>
  )
}
