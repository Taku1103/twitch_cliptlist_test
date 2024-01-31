import styles from '@/app/ui/top/top.module.css'

export default function SortType({
  setClipsData,
  dailyClipsData,
  weeklyClipsData,
  monthlyClipsData,
  sortType,
}) {
  function setDaily(clipsData) {
    setClipsData(clipsData)
    sortType.current = 'daily'
  }

  function setWeekly(clipsData) {
    setClipsData(clipsData)
    sortType.current = 'weekly'
  }

  function setMonthly(clipsData) {
    setClipsData(clipsData)
    sortType.current = 'monthly'
  }

  return (
    <div className={styles.sortTypeWrapper}>
      <div className={styles.sortType}>
        <div className={styles.sortTypeElement}>
          <button
            className={`${styles.type} ${sortType.current == 'daily' && styles.active}`}
            onClick={() => setDaily(dailyClipsData)}
          >
            Daily
          </button>
        </div>
        <div className={styles.sortTypeElement}>
          <button
            className={`${styles.type} ${sortType.current == 'weekly' && styles.active}`}
            onClick={() => setWeekly(weeklyClipsData)}
          >
            Weekly
          </button>
        </div>
        <div className={styles.sortTypeElement}>
          <button
            className={`${styles.type} ${sortType.current == 'monthly' && styles.active}`}
            onClick={() => setMonthly(monthlyClipsData)}
          >
            Monthly
          </button>
        </div>
        <div className="clear-left"></div>
      </div>
    </div>
  )
}
