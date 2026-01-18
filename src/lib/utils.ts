import { CONTINENTS, COUNTRIES, STATIC_YEAR } from '@/lib/constants'

export function getRandomNumberByRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function createRandomSales() {
  const sales = []

  const continents = Object.values(CONTINENTS)
  const countries = Object.values(COUNTRIES)

  for (let index = 0; index < 200; index++) {
    sales.push({
      id: index + 1,
      continent: continents[getRandomNumberByRange(0, continents.length - 1)],
      country: countries[getRandomNumberByRange(0, countries.length - 1)],
      date: new Date(STATIC_YEAR, getRandomNumberByRange(0, 11), getRandomNumberByRange(1, 31))
    })
  }

  return sales
}
