import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const userId = cookies().get('userId')

  return (
    <div className="header-wrapper">
      <header>
        <div className="header-left">
          <div className="header-element">
            <Link href="/">
              <Image src="/logo3.png" alt="" width="225" height="49" />
            </Link>
          </div>
        </div>
        <div className="search-box">
          <input type="text" placeholder="検索ワード" />
          <button type="submit">
            <i className="fas fa-search fa-fw"></i>
          </button>
        </div>
        <div className="header-right">
          <div className="header-element">
            <Link href={`/users/${userId.value}/playlists`}>
              マイプレイリスト
            </Link>
          </div>
          <div className="header-element">
            {userId && <Link href="#">ログアウト</Link>}
            {!userId && (
              <a
                href={`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${process.env.CLIENT_ID}&redirect_uri=http://localhost:3000/login&scope=user:read:follows`}
              >
                ログイン　
              </a>
            )}
          </div>
        </div>
      </header>
    </div>
  )
}
