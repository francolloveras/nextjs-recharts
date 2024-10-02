export const CONTINENTS = {
  AFRICA: 'Africa',
  AMERICA: 'America',
  ASIA: 'Asia',
  EUROPE: 'Europe'
} as const

export const CONTINENTS_COLORS: Record<string, string> = {
  [CONTINENTS.AFRICA]: '#fca5a5',
  [CONTINENTS.AMERICA]: '#86efac',
  [CONTINENTS.ASIA]: '#fdba74',
  [CONTINENTS.EUROPE]: '#93c5fd'
} as const
