'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function addClipToPlaylist({ clipId, listId }) {
  try {
    const response = await fetch(`http://api:3000/api/playlist_clips`, {
      method: 'POST',
      headers: {
        // Authorization: `Bearer ${cookies().get('session').value}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        playlist_id: listId,
        clip_id: clipId,
      }),
    })
    if (!response.ok) {
      throw new Error('playlistへのclipの追加に失敗しました')
    }
  } catch (error) {
    console.log('playlistへのclipの追加に失敗しました')
  }
}

export async function deleteClipFromPlaylist({ clipId, listId }) {
  try {
    const response = await fetch(`http://api:3000/api/playlist_clips/0`, {
      method: 'DELETE',
      headers: {
        // Authorization: `Bearer ${cookies().get('session').value}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        playlist_id: listId,
        clip_id: clipId,
      }),
    })
    if (!response.ok) {
      throw new Error('playlistからclipの削除に失敗しました')
    }
    revalidatePath(`/users/2/playlists/${listId}`)
    return true
  } catch (error) {
    console.log('playlistからclipの削除に失敗しました')
    return false
  }
}

export async function editPlaylistName({
  listData,
  userId,
  listId,
  newPlaylistName,
}) {
  try {
    const response = await fetch(
      `http://api:3000/api/users/${userId}/playlists/${listId}`,
      {
        method: 'PUT',
        headers: {
          // Authorization: `Bearer ${cookies().get('session').value}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          playlist: {
            user_id: userId,
            name: newPlaylistName,
            favorite_count: listData.playlist.favorite_count,
            published: listData.playlist.published,
          },
        }),
      },
    )
    if (!response.ok) {
      throw new Error('playlistNameのeditに失敗しました')
    }
    return true
  } catch (error) {
    console.log('playlistNameのeditに失敗しました')
    return false
  }
}

export async function deletePlaylist({ userId, listId }) {
  try {
    const response = await fetch(
      `http://api:3000/api/users/${userId}/playlists/${listId}`,
      {
        method: 'DELETE',
        headers: {
          // Authorization: `Bearer ${cookies().get('session').value}`,
          'Content-type': 'application/json',
        },
      },
    )
    if (!response.ok) {
      throw new Error('playlistのdeleteに失敗しました')
    }
    redirect(`/users/${userId}/playlists`)
  } catch (error) {
    console.log('playlistのdeleteに失敗しました')
  }
}
