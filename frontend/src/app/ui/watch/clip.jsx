'use client'

import Play from '@/app/ui/watch/play'

export default function Clip({ clipId, clipData }) {
  return (
    <>
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
    </>
  )
}
