'use client'

import Draggable from '@/app/ui/playlists/playlist/draggable'
import styles from '@/app/ui/playlists/playlist/playlist.module.css'
import { DndContext } from '@dnd-kit/core'
import { SortableContext } from '@dnd-kit/sortable'
import { useState } from 'react'

export default function Playlist({ listData }) {
  const playlist = []
  listData.playlist.map((clip) => {
    playlist.push(clip.clip.tw_id)
  })

  const [items, setItems] = useState(playlist)

  function reorderArray(array, active, over) {
    const activeIndex = array.findIndex((item) => item === active)
    const overIndex = array.findIndex((item) => item === over)

    if (activeIndex === -1 || overIndex === -1) {
      throw new Error('要素が配列内に存在しません。')
    }

    const newArray = [...array]

    newArray.splice(activeIndex, 1) // activeを削除, arrayが1つ前にずれる
    newArray.splice(
      overIndex,
      0,
      array.find((item) => item === active),
    ) // 元々のoverの位置にactiveを入れると丁度入れ変わる

    // ここで、現在の配列の並びをpostして、並び順を保存する

    return newArray
  }

  function handleDragOver(event) {
    const { over, active } = event

    if (over && active && over.id !== active.id) {
      setItems((prevItems) => reorderArray(prevItems, active.id, over.id))
    }
  }

  return (
    <DndContext onDragOver={handleDragOver}>
      <div className={styles.playlistMain}>
        <SortableContext items={items}>
          {items.map((item) => (
            <Draggable
              key={item}
              id={item}
              clip={
                listData.playlist.find((clip) => clip.clip.tw_id == item).clip
              }
              listId={listData.id}
            />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  )
}
