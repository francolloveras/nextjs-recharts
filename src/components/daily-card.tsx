import PieChart from '@/ui/pie-chard'
import { continentColors, salesData } from '@/lib/data'

const getRangeDaysData = (rangeInDays: number) => {
  // TODO FILTER DATA BASED IN THE RANGE OF DAYS
  console.log(rangeInDays)

  // const date = new Date()

  // const startDate = new Date(date.setDate(date.getDate() - rangeInDays))
  // const startOfRange = new Date(startDate.setHours(0, 0, 0, 0))

  // const endOfRange = new Date()
  // endOfRange.setHours(23, 59, 59, 999)

  const rawContinents: Record<string, number> = {}
  const rawCountries: Record<string, number> = {}

  salesData.forEach(({ continent, country }) => {
    rawContinents[continent] = (rawContinents[continent] ?? 0) + 1

    const countryKey = `${continent} - ${country}`
    rawCountries[countryKey] = (rawCountries[countryKey] ?? 0) + 1
  })

  const continents = Object.entries(rawContinents).map(([key, value]) => {
    return {
      name: key,
      value,
      color: continentColors[key]
    }
  })

  const countries = Object.entries(rawCountries).map(([key, value]) => {
    const [continent, country] = key.split(' - ')

    return {
      name: country,
      value,
      color: continentColors[continent]
    }
  })

  return {
    continents,
    countries,
    total: salesData.length
  }
}

interface Props {
  title: string
  range: number
}

export default function BasicCard({ title, range }: Props) {
  const { continents, countries, total } = getRangeDaysData(range)

  return (
    <article className="rounded-md border border-neutral-600 bg-neutral-900 px-6 py-4">
      <header className="mb-2 flex items-center justify-between">
        <h3 className="text-lg text-neutral-100">{title}</h3>
      </header>
      <main className="flex w-full flex-col gap-y-2">
        <div className="flex w-full items-start gap-x-4">
          <PieChart data={continents} total={total} />
          <table className="w-3/5">
            <thead className="border-b border-neutral-600">
              <tr>
                <th className="w-6" />
                <th className="w-24 py-1 text-left font-normal">Continent</th>
                <th className="py-1 pr-6 text-center font-normal">Sales</th>
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
                          className="block size-3.5 rounded-full"
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
        <div className="scrollbar h-[calc(7*32.5px)] overflow-x-hidden overflow-y-scroll">
          <table className="w-full">
            <thead className="sticky top-0 bg-neutral-900">
              <tr>
                <th className="w-6" />
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
                      <td>
                        <span
                          style={{ backgroundColor: color }}
                          className="block size-3.5 rounded-full"
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