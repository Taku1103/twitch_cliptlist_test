'use client'

import Play from '@/app/ui/watch/play'
import PlaylistInClip from '@/app/ui/watch/playlist-in-clip'

export default function Clip({ clipId, clipData, listId, listData }) {
  return (
    <>
      <div className="main-area">
        <div className="play">
          <Play clipId={clipId} />
        </div>
        <div className="operation"></div>
        <div className="explanation">
          <div className="title">{clipData.title}</div>
          <div className="info">視聴回数{clipData.view_count}回</div>
        </div>
        <div className="broadcaster">
          <div className="name">{clipData.broadcaster_name}</div>
        </div>
      </div>
      <div className="playlist-area">
        {listData && <PlaylistInClip listData={listData} />}
      </div>
    </>
  )
}
