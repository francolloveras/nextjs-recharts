import { CONTINENTS_COLORS } from '@/lib/constants'
import { createRandomSales } from '@/lib/utils'

export const allSales = createRandomSales()

export const getDataByRangeDays = async (rangeInDays: number, timeout: number) => {
  await new Promise((resolve) => setTimeout(resolve, timeout))

  // Create a static date to get the range of days.
  const date = new Date(2024, 9, 1)

  const startDate = new Date(date.setDate(date.getDate() - rangeInDays))
  const startOfRange = new Date(startDate.setHours(0, 0, 0, 0))

  const endOfRange = new Date()
  endOfRange.setHours(23, 59, 59, 999)

  const data = allSales.filter(
    ({ date }) => date.getTime() >= startOfRange.getTime() && date.getTime() <= endOfRange.getTime()
  )

  const rawContinents: Record<string, number> = {}
  const rawCountries: Record<string, number> = {}

  data.forEach(({ continent, country }) => {
    rawContinents[continent] = (rawContinents[continent] ?? 0) + 1

    const countryKey = `${continent} - ${country}`
    rawCountries[countryKey] = (rawCountries[countryKey] ?? 0) + 1
  })

  const continents = Object.entries(rawContinents).map(([key, value]) => {
    return {
      name: key,
      value,
      color: CONTINENTS_COLORS[key]
    }
  })

  const countries = Object.entries(rawCountries).map(([key, value]) => {
    const [continent, country] = key.split(' - ')

    return {
      name: country,
      value,
      color: CONTINENTS_COLORS[continent]
    }
  })

  return {
    continents,
    countries,
    total: data.length
  }
}

export const getDataByMonths = () => {
  const year = new Date().getFullYear()
  const months = Array.from({ length: 12 }, (_, index) => index)

  const data = months.map((month) => {
    const startOfMonth = new Date(year, month, 1)
    const endOfMonth = new Date(year, month + 1, 1)

    const salesByMonth = allSales.filter(
      ({ date }) =>
        date.getTime() >= startOfMonth.getTime() && date.getTime() <= endOfMonth.getTime()
    )

    const sales = salesByMonth.reduce<Record<string, number>>((acc, sale) => {
      acc[sale.continent] = (acc[sale.continent] ?? 0) + 1
      return acc
    }, {})

    return {
      name: startOfMonth.toLocaleString('en-EU', { month: 'long' }),
      ...sales
    }
  })

  return data
}
