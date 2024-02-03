import Header from '@/app/ui/header'
import Sidebar from '@/app/ui/sidebar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'List it bro! for twitch',
  description:
    'Apprenticeのサービスの一環で作成されたチーム開発の成果物。Twitchのクリップのプレイリストを作成するサービス',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <div className="body-wrapper">
          <Header />
          <div className="clear-right"></div>
          <div className="main-wrapper">
            <Sidebar />
            <div className="content-wrapper">{children}</div>
          </div>
        </div>
        <script
          src="https://kit.fontawesome.com/8de743f310.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  )
}
