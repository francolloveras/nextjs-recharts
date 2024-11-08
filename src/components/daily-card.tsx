import { getDataByRangeDays } from '@/lib/data'
import PieChart from '@/ui/pie-chart'

interface Props {
  title: string
  range: number
  timeout?: number
}

export default async function DailyCard({ title, range, timeout = 0 }: Props) {
  const { continents, countries, total } = await getDataByRangeDays(range, timeout)

  return (
    <article className="w-1/3 rounded-md border border-neutral-600 bg-neutral-900 px-6 py-4">
      <header className="mb-2">
        <h3 className="text-lg text-neutral-100">{title}</h3>
      </header>
      <main className="flex w-full flex-col gap-y-2">
        <div className="flex w-full items-start gap-x-4">
          <PieChart data={continents} total={total} />
          <table className="w-3/5">
            <thead className="border-b border-neutral-600">
              <tr>
                <th className="w-5" />
                <th className="py-1 text-left font-normal">Continent</th>
                <th className="py-1 text-center font-normal">Sales</th>
                <th className="py-1 text-right font-normal">%</th>
              </tr>
            </thead>
            <tbody>
              {continents.length > 0 ? (
                continents
                  .sort((a, b) => b.value - a.value)
                  .map(({ name, value, color }, index) => (
                    <tr key={`cell-${name}-${value}-${index}`} className="[&>*]:py-1">
                      <td>
                        <span
                          style={{ backgroundColor: color }}
                          className="mr-1 block size-3 rounded-full"
                        />
                      </td>
                      <td>{name}</td>
                      <td className="text-center">{value}</td>
                      <td className="text-right">{((value / total) * 100).toFixed(1)}%</td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center text-neutral-400">
                    There is no data to display
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="h-[calc(7*32.5px)] overflow-x-hidden overflow-y-scroll">
          <table className="w-full">
            <thead className="sticky top-0 bg-neutral-900">
              <tr>
                <th className="w-5" />
                <th className="py-1 text-left font-normal">Country</th>
                <th className="py-1 pr-6 text-center font-normal">Sales</th>
                <th className="py-1 text-right font-normal">%</th>
              </tr>
              <tr>
                <td colSpan={4} className="bg-neutral-600 py-[0.5px]" />
              </tr>
            </thead>
            <tbody>
              {countries.length > 0 ? (
                countries
                  .sort((a, b) => b.value - a.value)
                  .map(({ name, value, color }, index) => (
                    <tr key={`cell-${name}-${value}-${index}`} className="[&>*]:py-1">
                      <td className="w-5">
                        <span
                          style={{ backgroundColor: color }}
                          className="mr-1 block size-3 rounded-full"
                        />
                      </td>
                      <td>{name}</td>
                      <td className="text-center">{value}</td>
                      <td className="text-right">{((value / total) * 100).toFixed(1)}%</td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center text-neutral-400">
                    There is no data to display
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </article>
  )
}
