'use server'

// clipIdに応じたclipDataを取得するメソッド
export async function fetchClipData({ clipId }) {
  try {
    const response = await fetch(`http://api:3000/api/clips/${clipId}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(clipDataの取得に失敗しました)
  }
}

export async function fetchPlaylistData({ userId, listId }) {
  try {
    const response = await fetch(
      `http://api:3000/api/users/${userId}/playlists/${listId}`,
      {
        method: 'GET',
        cache: 'no-store',
      },
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(playlistDataの取得に失敗しました)
  }
}

export async function fetchTopPlaylistsData() {
  try {
    const response1 = await fetch(`http://api:3000/api/users/2/playlists/4`, {
      method: 'GET',
      cache: 'no-store',
    })
    const response2 = await fetch(`http://api:3000/api/users/2/playlists/5`, {
      method: 'GET',
      cache: 'no-store',
    })
    const response3 = await fetch(`http://api:3000/api/users/2/playlists/6`, {
      method: 'GET',
      cache: 'no-store',
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
  try {
    const response = await fetch(`http://api:3000/api/users/1/playlists/1`)
    const data = await response.json()
    return data
  } catch (error) {}
  console.log('TopDailyClipsDataの取得に失敗しました')
}

export async function fetchWeeklyClipsData() {
  try {
    const response = await fetch(`http://api:3000/api/users/1/playlists/2`)
    const data = await response.json()
    return data
  } catch (error) {}
  console.log('TopWeeklyClipsDataの取得に失敗しました')
}

export async function fetchMonthlyClipsData() {
  try {
    const response = await fetch(`http://api:3000/api/users/1/playlists/3`)
    const data = await response.json()
    return data
  } catch (error) {}
  console.log('TopMonthlyClipsDataの取得に失敗しました')
}

// ユーザーの持つプレイリストデータを取得するメソッド
// http://localhost:3001/api/users/1/playlists
export async function fetchPlaylists({ userId }) {
  try {
    const response = await fetch(
      `http://api:3000/api/users/${userId}/playlists`,
      {
        method: 'GET',
        cache: 'no-store',
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
