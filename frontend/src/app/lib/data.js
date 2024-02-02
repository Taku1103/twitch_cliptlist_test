'use server'

import { cookies } from 'next/headers'

// clipIdに応じたclipDataを取得するメソッド
export async function fetchClipData({ clipId }) {
  let currentUserId
  if (cookies().get('userId')) {
    currentUserId = cookies().get('userId').value
  }
  try {
    const response = await fetch(`http://api:3000/api/clips/${clipId}`, {
      method: 'GET',
      headers: {
        current_user_id: currentUserId,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(clipDataの取得に失敗しました)
  }
}

export async function fetchPlaylistData({ userId, listId }) {
  let currentUserId
  if (cookies().get('userId')) {
    currentUserId = cookies().get('userId').value
  }
  try {
    const response = await fetch(
      `http://api:3000/api/users/${userId}/playlists/${listId}`,
      {
        method: 'GET',
        cache: 'no-store',
        headers: {
          current_user_id: currentUserId,
        },
      },
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(playlistDataの取得に失敗しました)
  }
}

export async function fetchTopPlaylistsData() {
  let currentUserId
  if (cookies().get('userId')) {
    currentUserId = cookies().get('userId').value
  }
  try {
    const response1 = await fetch(`http://api:3000/api/users/2/playlists/4`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        current_user_id: currentUserId,
      },
    })
    const response2 = await fetch(`http://api:3000/api/users/2/playlists/5`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        current_user_id: currentUserId,
      },
    })
    const response3 = await fetch(`http://api:3000/api/users/2/playlists/6`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        current_user_id: currentUserId,
      },
    })
    const data1 = await response1.json()
    const data2 = await response2.json()
    const data3 = await response3.json()
    const data = [
      data1,
      data2,
      data3,
      data2,
      data3,
      data1,
      data3,
      data1,
      data2,
      data1,
      data2,
      data3,
    ]
    return data
  } catch (error) {
    console.log('TopPlaylistsDataの取得に失敗しました')
  }
}

export async function fetchDailyClipsData() {
  let currentUserId
  if (cookies().get('userId')) {
    currentUserId = cookies().get('userId').value
  }
  try {
    const response = await fetch(`http://api:3000/api/users/1/playlists/1`, {
      method: 'GET',
      headers: {
        current_user_id: currentUserId,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {}
  console.log('TopDailyClipsDataの取得に失敗しました')
}

export async function fetchWeeklyClipsData() {
  let currentUserId
  if (cookies().get('userId')) {
    currentUserId = cookies().get('userId').value
  }
  try {
    const response = await fetch(`http://api:3000/api/users/1/playlists/2`, {
      method: 'GET',
      headers: {
        current_user_id: currentUserId,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {}
  console.log('TopWeeklyClipsDataの取得に失敗しました')
}

export async function fetchMonthlyClipsData() {
  let currentUserId
  if (cookies().get('userId')) {
    currentUserId = cookies().get('userId').value
  }
  try {
    const response = await fetch(`http://api:3000/api/users/1/playlists/3`, {
      method: 'GET',
      headers: {
        current_user_id: currentUserId,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {}
  console.log('TopMonthlyClipsDataの取得に失敗しました')
}

// ユーザーの持つプレイリストデータを取得するメソッド
// http://localhost:3001/api/users/1/playlists
export async function fetchPlaylists({ userId }) {
  let currentUserId
  if (cookies().get('userId')) {
    currentUserId = cookies().get('userId').value
  }
  try {
    const response = await fetch(
      `http://api:3000/api/users/${userId}/playlists`,
      {
        method: 'GET',
        cache: 'no-store',
        headers: {
          current_user_id: currentUserId,
        },
      },
    )
    if (!response.ok) {
      throw new Error('プレイリストデータの取得に失敗しました')
    }
    const playlistsdata = await response.json()
    return playlistsdata
  } catch (error) {
    console.error('プレイリストデータの取得に失敗しました', error)
  }
}

// ユーザーの持つお気に入りのプレイリストデータを取得するメソッド
export async function fetchFavoritelists({ userId }) {
  let currentUserId
  if (cookies().get('userId')) {
    currentUserId = cookies().get('userId').value
  }
  try {
    const response = await fetch(
      `http://api:3000/api/users/${userId}/user_favorite_playlists`,
      {
        method: 'GET',
        cache: 'no-store',
        headers: {
          current_user_id: currentUserId,
        },
      },
    )
    if (!response.ok) {
      throw new Error('プレイリストデータの取得に失敗しました')
    }
    const playlistsdata = await response.json()
    return playlistsdata
  } catch (error) {
    console.error('プレイリストデータの取得に失敗しました', error)
  }
}
