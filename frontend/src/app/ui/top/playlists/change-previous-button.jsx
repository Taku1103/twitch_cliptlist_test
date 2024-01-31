import styles from '@/app/ui/top/playlists/topPlaylists.module.css'

export default function ChangePreviousButton({
  chunkedArray,
  baseRowNum,
  displayRowMax,
  rowMax,
  setRows,
}) {
  function minusOne(displayRowMax, rowMax) {
    baseRowNum.current = (baseRowNum.current + rowMax - 1) % rowMax
    console.log(baseRowNum.current)
    const diff = baseRowNum.current + displayRowMax - rowMax
    if (diff <= 0) {
      setRows(
        chunkedArray.slice(
          baseRowNum.current,
          baseRowNum.current + displayRowMax,
        ),
      )
    } else {
      setRows(
        chunkedArray
          .slice(baseRowNum.current, baseRowNum.current + displayRowMax)
          .concat(chunkedArray.slice(0, diff)),
      )
    }
  }

  return (
    <button
      className={styles.chevronLeft}
      onClick={() => minusOne(displayRowMax, rowMax)}
    >
      <i className="fas fa-chevron-left"></i>
    </button>
  )
}
