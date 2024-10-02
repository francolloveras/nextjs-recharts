import { getDataByMonths } from '@/lib/data'
import BarChart from '@/ui/bar-chart'

export default function MonthCard() {
  const data = getDataByMonths()

  return <BarChart data={data} />
}
