import { getDataByMonths } from '@/lib/data'
import BarChart from '@/ui/bar-chard'

export default function MonthCard() {
  const data = getDataByMonths()

  return <BarChart data={data} />
}
