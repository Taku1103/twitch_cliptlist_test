'use client'

import MoveNextButton from '@/app/ui/watch/move-next-button'
import MovePreviousButton from '@/app/ui/watch/move-previous-button'
import Play from '@/app/ui/watch/play'
import PlaylistInClip from '@/app/ui/watch/playlist-in-clip'
import { useRef } from 'react'

export default function Clip({ clipId, clipData, listData, index }) {
  const autoplay = useRef('false')
  return (
    <>
      <div className="main-area">
        <div className="play">
          <Play clipId={clipId} autoplay={autoplay} />
        </div>
        <div className="operation">
          <MovePreviousButton
            listData={listData}
            index={index}
            autoplay={autoplay}
          />
          <MoveNextButton
            listData={listData}
            index={index}
            autoplay={autoplay}
          />
        </div>
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
