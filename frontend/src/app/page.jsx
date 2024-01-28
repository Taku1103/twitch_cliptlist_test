import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Top</h1>
      <ul>
        <li>
          <Link href="/watch/?clip=ShinyUgliestFerretKreygasm-PdQRHzhylDkgxmRh">
            Example Clip
          </Link>
        </li>
        <li>
          <Link href="/watch/?clip=ShinyUgliestFerretKreygasm-PdQRHzhylDkgxmRh&list=MyPlaylist">
            Example Clip(listData付き)
          </Link>
        </li>
      </ul>
    </>
  )
}
