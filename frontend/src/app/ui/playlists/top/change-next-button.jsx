import styles from '@/app/top.module.css'

export default function ChangeNextButton({
  chunkedArray,
  baseRowNum,
  displayRowMax,
  rowMax,
  setRows,
}) {
  function plusOne(displayRowMax, rowMax) {
    baseRowNum.current = (baseRowNum.current + 1) % rowMax
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
      className={styles.chevronRight}
      onClick={() => plusOne(displayRowMax, rowMax)}
    >
      <i className="fas fa-chevron-right"></i>
    </button>
  )
}
