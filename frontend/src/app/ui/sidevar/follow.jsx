import Link from 'next/link'

export default function Follow() {
  // リストアイテムのデータ配列
  const followStreamers = [
    {
      broadcaster_id: '126482446',
      broadcaster_login: 'mogra',
      broadcaster_name: 'MOGRA',
      followed_at: '2024-01-30T08:35:00Z',
      profile_image_url:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/9e88f9cd-6d93-4e3c-bc4a-025a5e78dbcb-profile_image-300x300.png',
    },
    {
      broadcaster_id: '94618049',
      broadcaster_login: 'tototmix',
      broadcaster_name: 'ととみっくす',
      followed_at: '2024-01-30T08:34:55Z',
      profile_image_url:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/68bcd2f1-d493-4ed5-a8bd-70f34b3663eb-profile_image-300x300.jpeg',
    },
  ]

  return (
    <div className="side-list">
      <ul>
        {followStreamers.map((followStreamers, index) => (
          <Link
            href={`https://www.twitch.tv/${followStreamers.broadcaster_login}`}
          >
            <li key={index} className="list-item">
              <img
                className="follow-icon"
                src={`${followStreamers.profile_image_url}`}
              />

              {followStreamers.broadcaster_name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
