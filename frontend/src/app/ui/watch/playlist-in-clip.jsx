'use client'

import { useRouter } from 'next/navigation'

export default function PlaylistInClip({ listData, autoplay }) {
  const router = useRouter()

  function moveClip(clipId, listId) {
    // console.log(clipId, listId)
    router.push(`?clip=${clipId}&list=${listId}`)
    autoplay.current = true
  }

  return (
    <>
      <h2>{listData.id}</h2>
      {listData.playlist.map((clip) => (
        <div
          onClick={() => moveClip(clip.clip.tw_id, listData.id)}
          key={clip.clip.clip_id}
        >
          <img src={clip.clip.thumbnail_url} />
          <p>{clip.clip.title}</p>
          <p>{clip.clip.broadcaster_name}</p>
        </div>
      ))}
    </>
  )
}
