export default function XShareButton({ clipData }) {
  return (
    <a
      href={`https://twitter.com/share?url=http://localhost:3000/watch?clip=${clipData.tw_id}&ref_src=twsrc%5Etfw&text=${clipData.title}を共有`}
      class="twitter-share-button"
      data-text="プレイリストを共有する"
      data-lang="ja"
      data-show-count="false"
    >
      Xで共有
    </a>
  )
}
