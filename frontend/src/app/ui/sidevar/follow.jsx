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
    {
      broadcaster_id: '134899228',
      broadcaster_login: 'dizzymizlizy',
      broadcaster_name: 'DizzyMizLizy',
      followed_at: '2024-01-30T08:34:50Z',
      profile_image_url:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/40efb2cf-38ea-441f-a600-c65da7c1c92c-profile_image-300x300.png',
    },
    {
      broadcaster_id: '162271954',
      broadcaster_login: 'riri_lol',
      broadcaster_name: 'りーり',
      followed_at: '2024-01-30T08:34:44Z',
      profile_image_url:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/0d59b476-5d90-475c-940e-46dc1482fd35-profile_image-300x300.png',
    },
    {
      broadcaster_id: '190063430',
      broadcaster_login: 'tem__pura',
      broadcaster_name: 'てん_ぷら',
      followed_at: '2024-01-30T08:34:39Z',
      profile_image_url:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/376c3b92-d4bf-470f-9512-013d8f344290-profile_image-300x300.png',
    },
    {
      broadcaster_id: '854901379',
      broadcaster_login: 'kohanalam_game',
      broadcaster_name: 'こはならむ',
      followed_at: '2024-01-30T08:34:29Z',
      profile_image_url:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/b8c699c9-abe8-4f1a-90f2-3ecd53a3e96d-profile_image-300x300.png',
    },
    {
      broadcaster_login: 'sera_promisu',
      broadcaster_name: 'sera_promisu',
      followed_at: '2024-01-30T08:34:24Z',
      profile_image_url:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/34e49d6d-3682-4a45-8331-c96a1d94dc93-profile_image-300x300.png',
    },
    {
      broadcaster_id: '496970086',
      broadcaster_login: 'shibuya_kaho',
      broadcaster_name: 'Shibuya_Kaho',
      followed_at: '2024-01-30T08:33:52Z',
      profile_image_url:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/2d0ce7d8-c001-43fa-8ec7-b027715fd919-profile_image-300x300.png',
    },
    {
      broadcaster_id: '812255202',
      broadcaster_login: 'genzuki_tojiro',
      broadcaster_name: 'genzuki_tojiro',
      followed_at: '2024-01-30T08:33:45Z',
      profile_image_url:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/12b3f21e-74de-4c72-9d5c-3745fed60228-profile_image-300x300.png',
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
