import { CONTINENTS_COLORS } from '@/lib/constants'

export const allSales = [
  { id: 1, continent: 'America', country: 'United States', date: new Date(2024, 0, 15) },
  { id: 2, continent: 'America', country: 'Brazil', date: new Date(2024, 1, 10) },
  { id: 3, continent: 'Europe', country: 'Germany', date: new Date(2024, 2, 22) },
  { id: 4, continent: 'Asia', country: 'China', date: new Date(2024, 3, 5) },
  { id: 5, continent: 'Africa', country: 'South Africa', date: new Date(2024, 4, 14) },
  { id: 6, continent: 'Europe', country: 'France', date: new Date(2024, 5, 9) },
  { id: 7, continent: 'America', country: 'United States', date: new Date(2024, 6, 18) },
  { id: 8, continent: 'America', country: 'Canada', date: new Date(2024, 7, 25) },
  { id: 9, continent: 'Europe', country: 'Spain', date: new Date(2024, 8, 12) },
  { id: 10, continent: 'Asia', country: 'Japan', date: new Date(2024, 9, 3) },
  { id: 11, continent: 'America', country: 'Mexico', date: new Date(2024, 10, 19) },
  { id: 12, continent: 'Europe', country: 'Italy', date: new Date(2024, 11, 24) },
  { id: 13, continent: 'America', country: 'United States', date: new Date(2024, 1, 7) },
  { id: 14, continent: 'Africa', country: 'Kenya', date: new Date(2024, 2, 20) },
  { id: 15, continent: 'Europe', country: 'Germany', date: new Date(2024, 3, 27) },
  { id: 16, continent: 'Asia', country: 'India', date: new Date(2024, 4, 6) },
  { id: 17, continent: 'America', country: 'Brazil', date: new Date(2024, 5, 30) },
  { id: 18, continent: 'Africa', country: 'South Africa', date: new Date(2024, 6, 11) },
  { id: 19, continent: 'Europe', country: 'France', date: new Date(2024, 7, 1) },
  { id: 20, continent: 'America', country: 'Canada', date: new Date(2024, 8, 5) },
  { id: 21, continent: 'Asia', country: 'China', date: new Date(2024, 9, 15) },
  { id: 22, continent: 'Europe', country: 'Spain', date: new Date(2024, 10, 2) },
  { id: 23, continent: 'America', country: 'Mexico', date: new Date(2024, 11, 21) },
  { id: 24, continent: 'Asia', country: 'Japan', date: new Date(2024, 0, 13) },
  { id: 25, continent: 'America', country: 'United States', date: new Date(2024, 1, 8) },
  { id: 26, continent: 'Europe', country: 'Italy', date: new Date(2024, 2, 17) },
  { id: 27, continent: 'America', country: 'Brazil', date: new Date(2024, 3, 10) },
  { id: 28, continent: 'Africa', country: 'Kenya', date: new Date(2024, 4, 27) },
  { id: 29, continent: 'Europe', country: 'France', date: new Date(2024, 5, 9) },
  { id: 30, continent: 'America', country: 'Canada', date: new Date(2024, 6, 5) },
  { id: 31, continent: 'Asia', country: 'India', date: new Date(2024, 7, 22) },
  { id: 32, continent: 'America', country: 'Mexico', date: new Date(2024, 8, 14) },
  { id: 33, continent: 'Asia', country: 'China', date: new Date(2024, 9, 2) },
  { id: 34, continent: 'Europe', country: 'Germany', date: new Date(2024, 10, 26) },
  { id: 35, continent: 'Africa', country: 'South Africa', date: new Date(2024, 11, 7) },
  { id: 36, continent: 'America', country: 'United States', date: new Date(2024, 0, 18) },
  { id: 37, continent: 'America', country: 'Brazil', date: new Date(2024, 1, 9) },
  { id: 38, continent: 'Europe', country: 'Spain', date: new Date(2024, 2, 6) },
  { id: 39, continent: 'Asia', country: 'Japan', date: new Date(2024, 3, 22) },
  { id: 40, continent: 'Africa', country: 'Kenya', date: new Date(2024, 4, 3) },
  { id: 41, continent: 'America', country: 'Canada', date: new Date(2024, 5, 10) },
  { id: 42, continent: 'Europe', country: 'Italy', date: new Date(2024, 6, 30) },
  { id: 43, continent: 'America', country: 'Mexico', date: new Date(2024, 7, 18) },
  { id: 44, continent: 'Asia', country: 'India', date: new Date(2024, 8, 4) },
  { id: 45, continent: 'Europe', country: 'Germany', date: new Date(2024, 9, 19) },
  { id: 46, continent: 'Africa', country: 'South Africa', date: new Date(2024, 10, 8) },
  { id: 47, continent: 'America', country: 'United States', date: new Date(2024, 11, 14) },
  { id: 48, continent: 'America', country: 'Brazil', date: new Date(2024, 0, 27) },
  { id: 49, continent: 'Europe', country: 'Spain', date: new Date(2024, 1, 19) },
  { id: 50, continent: 'Asia', country: 'China', date: new Date(2024, 2, 8) },
  { id: 51, continent: 'America', country: 'United States', date: new Date(2024, 8, 1) },
  { id: 52, continent: 'America', country: 'Brazil', date: new Date(2024, 8, 2) },
  { id: 53, continent: 'Europe', country: 'Germany', date: new Date(2024, 8, 3) },
  { id: 54, continent: 'Asia', country: 'China', date: new Date(2024, 8, 4) },
  { id: 55, continent: 'Africa', country: 'South Africa', date: new Date(2024, 8, 5) },
  { id: 56, continent: 'Europe', country: 'France', date: new Date(2024, 8, 6) },
  { id: 57, continent: 'America', country: 'United States', date: new Date(2024, 8, 7) },
  { id: 58, continent: 'America', country: 'Canada', date: new Date(2024, 8, 8) },
  { id: 59, continent: 'Europe', country: 'Spain', date: new Date(2024, 8, 9) },
  { id: 60, continent: 'Asia', country: 'Japan', date: new Date(2024, 8, 10) },
  { id: 61, continent: 'America', country: 'Mexico', date: new Date(2024, 8, 11) },
  { id: 62, continent: 'Europe', country: 'Italy', date: new Date(2024, 8, 12) },
  { id: 63, continent: 'America', country: 'United States', date: new Date(2024, 8, 13) },
  { id: 64, continent: 'Africa', country: 'Kenya', date: new Date(2024, 8, 14) },
  { id: 65, continent: 'Europe', country: 'Germany', date: new Date(2024, 8, 15) },
  { id: 66, continent: 'Asia', country: 'India', date: new Date(2024, 8, 16) },
  { id: 67, continent: 'America', country: 'Brazil', date: new Date(2024, 8, 17) },
  { id: 68, continent: 'Africa', country: 'South Africa', date: new Date(2024, 8, 18) },
  { id: 69, continent: 'Europe', country: 'France', date: new Date(2024, 8, 19) },
  { id: 70, continent: 'America', country: 'Canada', date: new Date(2024, 8, 20) },
  { id: 71, continent: 'Asia', country: 'China', date: new Date(2024, 8, 21) },
  { id: 72, continent: 'Europe', country: 'Spain', date: new Date(2024, 8, 22) },
  { id: 73, continent: 'America', country: 'Mexico', date: new Date(2024, 8, 23) },
  { id: 74, continent: 'Asia', country: 'Japan', date: new Date(2024, 8, 24) },
  { id: 75, continent: 'America', country: 'United States', date: new Date(2024, 8, 25) },
  { id: 76, continent: 'Europe', country: 'Italy', date: new Date(2024, 8, 26) },
  { id: 77, continent: 'America', country: 'Brazil', date: new Date(2024, 8, 27) },
  { id: 78, continent: 'Africa', country: 'Kenya', date: new Date(2024, 8, 28) },
  { id: 79, continent: 'Europe', country: 'France', date: new Date(2024, 8, 29) },
  { id: 80, continent: 'America', country: 'Canada', date: new Date(2024, 8, 30) },
  { id: 81, continent: 'Asia', country: 'India', date: new Date(2024, 8, 31) },
  { id: 82, continent: 'America', country: 'Mexico', date: new Date(2024, 9, 1) },
  { id: 83, continent: 'Asia', country: 'China', date: new Date(2024, 8, 2) },
  { id: 84, continent: 'Europe', country: 'Germany', date: new Date(2024, 8, 3) },
  { id: 85, continent: 'Africa', country: 'South Africa', date: new Date(2024, 8, 4) },
  { id: 86, continent: 'America', country: 'United States', date: new Date(2024, 8, 5) },
  { id: 87, continent: 'America', country: 'Brazil', date: new Date(2024, 8, 6) },
  { id: 88, continent: 'Europe', country: 'Spain', date: new Date(2024, 8, 7) },
  { id: 89, continent: 'Asia', country: 'Japan', date: new Date(2024, 8, 8) },
  { id: 90, continent: 'Africa', country: 'Kenya', date: new Date(2024, 8, 9) },
  { id: 91, continent: 'America', country: 'Canada', date: new Date(2024, 8, 10) },
  { id: 92, continent: 'Europe', country: 'Italy', date: new Date(2024, 8, 11) },
  { id: 93, continent: 'America', country: 'Mexico', date: new Date(2024, 8, 12) },
  { id: 94, continent: 'Asia', country: 'India', date: new Date(2024, 8, 13) },
  { id: 95, continent: 'America', country: 'United States', date: new Date(2024, 8, 14) },
  { id: 96, continent: 'Europe', country: 'Germany', date: new Date(2024, 8, 15) },
  { id: 97, continent: 'Asia', country: 'China', date: new Date(2024, 8, 16) },
  { id: 98, continent: 'Africa', country: 'South Africa', date: new Date(2024, 8, 17) },
  { id: 99, continent: 'America', country: 'Brazil', date: new Date(2024, 8, 18) },
  { id: 100, continent: 'Europe', country: 'France', date: new Date(2024, 8, 19) }
]

export const getDataByRangeDays = (rangeInDays: number) => {
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
