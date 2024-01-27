export default function Page({ params }) {
  console.log(params)
  return (
    <>
      <p>Playlist: {params.id}</p>
    </>
  )
}
