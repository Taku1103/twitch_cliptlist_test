import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="header-wrapper">
      <header>
        <div className="header-left">
          <div className="header-element">
            <Link href="/">
              <Image src="/logo2.png" alt="" width="50" height="50" />
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
            <Link href="/users/2/playlists">マイプレイリスト</Link>
          </div>
          <div className="header-element">
            <a
              href={`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${process.env.CLIENT_ID}&redirect_uri=http://localhost:3000/login`}
            >
              認証
            </a>
            <Link href="#">/ログアウト</Link>
          </div>
        </div>
      </header>
    </div>
  )
}
