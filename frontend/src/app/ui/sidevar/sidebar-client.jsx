'use client'
import Favorite_list from '@/app/ui/sidevar/favorite_list'
import Follow from '@/app/ui/sidevar/follow'
import List from '@/app/ui/sidevar/list'
import Image from 'next/image'
import { useState } from 'react'

export default function SiebarClient({
  playlists,
  favoritelists,
  followStreamers,
}) {
  const [activeTab, setActiveTab] = useState('list')

  // アイコンのクラス名を取得する関数
  const getIconClass = (tabName) => {
    return `fa-solid ${activeTab === tabName ? 'active' : ''}`
  }

  return (
    <>
      <div className="sidebar-wrapper">
        <div className="sidebar">
          {/* サイドバートップのアイコンとユーザー名を表示する */}
          <div className="side-element">
            <Image
              src="/dog_icon.jpg"
              width={50}
              height={50}
              className="rounded-image"
            />
            {/* <p>{followStreamers.user.display_name}</p> */}
          </div>
          {/* アイコン表示する */}
          <div className="nav">
            <ul>
              <li className="list" onClick={() => setActiveTab('list')}>
                <i className={getIconClass('list') + ' fa-list'}></i>
              </li>
              <li className="list" onClick={() => setActiveTab('favorites')}>
                <i className={getIconClass('favorites') + ' fa-heart'}></i>
              </li>
              <li className="list" onClick={() => setActiveTab('follow')}>
                <i className={getIconClass('follow') + ' fa-circle-user'}></i>
              </li>
            </ul>
          </div>
          {activeTab === 'list' && <List playlists={playlists} />}
          {activeTab === 'favorites' && (
            <Favorite_list favoritelists={favoritelists} />
          )}
          {activeTab === 'follow' && (
            <Follow followStreamers={followStreamers} />
          )}
        </div>
      </div>
    </>
  )
}
