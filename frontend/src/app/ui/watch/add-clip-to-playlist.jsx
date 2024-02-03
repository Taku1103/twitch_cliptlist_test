'use client'

import { addClipToPlaylist, createPlaylistAndAddClip } from '@/app/lib/action'
import styles from '@/app/ui/watch/watch.module.css'
// import { Button } from '@mui/material'
import { useState } from 'react'
import ReactModal from 'react-modal'

export default function AddClipToPlaylist({ clipId, myListsData, myUserId }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  // modalを閉じる設定
  function openModal(event) {
    setModalIsOpen(true)
    document.addEventListener('click', closeModal)
    event.stopPropagation()
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  async function add({ clipId, myListId, myUserId }) {
    const data = await addClipToPlaylist({
      clipId,
      listId: myListId,
      userId: myUserId,
    })
  }

  async function create({ clipId, myUserId }) {
    const listName = prompt('プレイリスト名を入力してください', '')
    const data = await createPlaylistAndAddClip({
      clipId,
      userId: myUserId,
      listName,
    })
  }

  const customStyles = {
    overlay: {
      zIndex: 200,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '300px',
      borderRadius: '6px',
      padding: '12px 20px 12px 20px',
    },
  }

  return (
    <>
      <button
        className={styles.addClipButton}
        onClick={() => setModalIsOpen(true)}
      >
        <span className={styles.icon}>
          <i className="far fa-plus-square"></i>
        </span>
        <span className={styles.char}>リストに追加</span>
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className={styles.modalTitle}>クリップの保存先を選択</div>
        {myListsData.user_playlists.map((playlist, index) => (
          <div className={styles.addPlaylistCandidate} key={index}>
            <i className={`${styles.modalIconMini} fas fa-circle`}></i>
            <span
              onClick={() =>
                add({ clipId: clipId, myListId: playlist.id, myUserId })
              }
            >
              {playlist.name}
            </span>
          </div>
        ))}

        <div
          onClick={() => create({ clipId, myUserId })}
          className={styles.createPlaylist}
        >
          <span>
            <i className={`${styles.modalIcon} fa-solid fa-plus`}></i>
          </span>
          <span>新しいプレイリストを作成</span>
        </div>
      </ReactModal>
    </>
  )
}
