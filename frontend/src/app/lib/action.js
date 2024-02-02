'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function addClipToPlaylist({ clipId, listId }) {
  let currentUserId
  if (cookies().get('userId')) {
    currentUserId = cookies().get('userId').value
  }
  try {
    const response = await fetch(`http://api:3000/api/playlist_clips`, {
      method: 'POST',
      headers: {
        current_user_id: currentUserId,
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
  let currentUserId
  if (cookies().get('userId')) {
    currentUserId = cookies().get('userId').value
  }
  try {
    const response = await fetch(`http://api:3000/api/playlist_clips/0`, {
      method: 'DELETE',
      headers: {
        current_user_id: currentUserId,
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
  let currentUserId
  if (cookies().get('userId')) {
    currentUserId = cookies().get('userId').value
  }
  try {
    const response = await fetch(
      `http://api:3000/api/users/${userId}/playlists/${listId}`,
      {
        method: 'PUT',
        headers: {
          current_user_id: currentUserId,
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
  let currentUserId
  if (cookies().get('userId')) {
    currentUserId = cookies().get('userId').value
  }
  try {
    const response = await fetch(
      `http://api:3000/api/users/${userId}/playlists/${listId}`,
      {
        method: 'DELETE',
        headers: {
          current_user_id: currentUserId,
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

export async function favorite({ userId, listId }) {
  let currentUserId
  if (cookies().get('userId')) {
    currentUserId = cookies().get('userId').value
  }
  try {
    const response = await fetch(
      `http://api:3000/api/users/${userId}/user_favorite_playlists`,
      {
        method: 'POST',
        headers: {
          current_user_id: currentUserId,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          playlist_id: listId,
        }),
      },
    )
    if (!response.ok) {
      throw new Error('favoriteに失敗しました')
    }
    console.log('favoriteに成功しました')
    return true
  } catch (error) {
    console.log('favoriteに失敗しました')
    return false
  }
}

export async function unfavorite({ userId, listId }) {
  let currentUserId
  if (cookies().get('userId')) {
    currentUserId = cookies().get('userId').value
  }
  try {
    const response = await fetch(
      `http://api:3000/api/users/${userId}/user_favorite_playlists/0`,
      {
        method: 'DELETE',
        headers: {
          current_user_id: currentUserId,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          playlist_id: listId,
        }),
      },
    )
    if (!response.ok) {
      throw new Error('unfavoriteに失敗しました')
    }
    console.log('unfavoriteに成功しました')
    return true
  } catch (error) {
    console.log('unfavoriteに失敗しました')
    return false
  }
}
