import DeletePlaylist from '@/app/ui/playlists/playlist/delete-playlist'
import styles from '@/app/ui/playlists/playlist/playlist.module.css'
import PlaylistName from '@/app/ui/playlists/playlist/playlistName'
import XShareButton from '@/app/ui/playlists/playlist/x-share-button'
import Link from 'next/link'

export default async function PlaylistHeader({ listData, userId, listId }) {
  function displayDate(date) {
    return (
      <>{`${date.slice(0, 4)}年${date.slice(5, 7)}月${date.slice(8, 10)}日`}</>
    )
  }

  return (
    <div className={`${styles.playlistHeaderWrapper} ${styles.radius}`}>
      <div className={styles.playlistHeaderContainer}>
        <Link
          href={`/watch?clip=${listData.playlist_clips[0].id}&list=${listData.playlist.id}`}
        >
          <div className={styles.playlistThumbnailContainer}>
            <img
              src={listData.playlist_clips[0].thumbnail_url}
              alt="Thumbnail"
              className={`${styles.playlistThumbnail} ${styles.radius}`}
            />
          </div>
        </Link>
        <PlaylistName listData={listData} userId={userId} listId={listId} />
        <div className={styles.playlistState}>
          <p
            className={`${styles.state_1} ${styles.stateText} ${styles.textColor}`}
          >
            {listData.playlist.playlist_creator_name}
          </p>
          <div
            className={`${styles.state_i1} ${styles.stateIcon} ${styles.textColor}`}
          >
            <i class="fa-regular fa-user"></i>
          </div>
          <p
            className={`${styles.state_2} ${styles.stateText} ${styles.textColor}`}
          >
            {displayDate(listData.playlist.created_at)}
          </p>
          <div
            className={`${styles.state_i2} ${styles.stateIcon} ${styles.textColor}`}
          >
            <i className="fa-regular fa-calendar-check"></i>
          </div>
          <p
            className={`${styles.state_3} ${styles.stateText} ${styles.textColor}`}
          >
            {listData.playlist.favorite_count}
          </p>
          <div
            className={`${styles.state_i3} ${styles.stateIcon} ${styles.textColor}`}
          >
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
        <div className={styles.playlistAction}>
          <div className={`${styles.action_1} ${styles.actionIcon}`}>
            <XShareButton
              userId={userId}
              listId={listId}
              listName={listData.playlist.name}
            />
          </div>
          <div className={`${styles.action_2} ${styles.actionIcon}`}>
            <DeletePlaylist userId={userId} listId={listId} />
          </div>
        </div>
      </div>
    </div>
  )
}
