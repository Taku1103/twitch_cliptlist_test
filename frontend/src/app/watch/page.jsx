import { fetchClipData } from '@/app/lib/data'
import Clip from '@/app/ui/watch/clip'

export default async function Page({ searchParams }) {
  const clipId = searchParams['clip']
  const clipData = await fetchClipData({
    clipId,
  }) /* listIdがないときは、これでfetchして、あるときはfetchPlaylistしてその中からclipDataを取り出す感じになると思う */
  return (
    <>
      <div className="clip">
        <Clip clipId={clipId} clipData={clipData.clip} />
      </div>
    </>
  )
}
