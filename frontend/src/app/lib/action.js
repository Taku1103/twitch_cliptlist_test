'use server'

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
