import {
  fetchDailyClipsData,
  fetchMonthlyClipsData,
  fetchTopPlaylistsData,
  fetchWeeklyClipsData,
} from '@/app/lib/data'
import Top from '@/app/ui/top/top'

export default async function Page() {
  const listsData = await fetchTopPlaylistsData()
  const dailyClipsData = await fetchDailyClipsData()
  const weeklyClipsData = await fetchWeeklyClipsData()
  const monthlyClipsData = await fetchMonthlyClipsData()

  return (
    <Top
      listsData={listsData}
      dailyClipsData={dailyClipsData}
      weeklyClipsData={weeklyClipsData}
      monthlyClipsData={monthlyClipsData}
    />
  )
}
