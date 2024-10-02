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
  { id: 9, continent: 'Europe', country: 'Spain', date: new Date(2024, 6, 12) },
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
  { id: 20, continent: 'America', country: 'Canada', date: new Date(2024, 5, 5) },
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
  { id: 32, continent: 'America', country: 'Mexico', date: new Date(2024, 5, 14) },
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
  { id: 44, continent: 'Asia', country: 'India', date: new Date(2024, 4, 4) },
  { id: 45, continent: 'Europe', country: 'Germany', date: new Date(2024, 9, 19) },
  { id: 46, continent: 'Africa', country: 'South Africa', date: new Date(2024, 10, 8) },
  { id: 47, continent: 'America', country: 'United States', date: new Date(2024, 11, 14) },
  { id: 48, continent: 'America', country: 'Brazil', date: new Date(2024, 0, 27) },
  { id: 49, continent: 'Europe', country: 'Spain', date: new Date(2024, 1, 19) },
  { id: 50, continent: 'Asia', country: 'China', date: new Date(2024, 2, 8) },
  { id: 51, continent: 'America', country: 'United States', date: new Date(2024, 5, 1) },
  { id: 52, continent: 'America', country: 'Brazil', date: new Date(2024, 3, 2) },
  { id: 53, continent: 'Europe', country: 'Germany', date: new Date(2024, 2, 3) },
  { id: 54, continent: 'Asia', country: 'China', date: new Date(2024, 1, 4) },
  { id: 55, continent: 'Africa', country: 'South Africa', date: new Date(2024, 8, 5) },
  { id: 56, continent: 'Europe', country: 'France', date: new Date(2024, 0, 6) },
  { id: 57, continent: 'America', country: 'United States', date: new Date(2024, 8, 7) },
  { id: 58, continent: 'America', country: 'Canada', date: new Date(2024, 9, 8) },
  { id: 59, continent: 'Europe', country: 'Spain', date: new Date(2024, 3, 9) },
  { id: 60, continent: 'Asia', country: 'Japan', date: new Date(2024, 4, 10) },
  { id: 61, continent: 'America', country: 'Mexico', date: new Date(2024, 11, 11) },
  { id: 62, continent: 'Europe', country: 'Italy', date: new Date(2024, 10, 12) },
  { id: 63, continent: 'America', country: 'United States', date: new Date(2024, 8, 13) },
  { id: 64, continent: 'Africa', country: 'Kenya', date: new Date(2024, 5, 14) },
  { id: 65, continent: 'Europe', country: 'Germany', date: new Date(2024, 6, 15) },
  { id: 66, continent: 'Asia', country: 'India', date: new Date(2024, 8, 16) },
  { id: 67, continent: 'America', country: 'Brazil', date: new Date(2024, 3, 17) },
  { id: 68, continent: 'Africa', country: 'South Africa', date: new Date(2024, 8, 18) },
  { id: 69, continent: 'Europe', country: 'France', date: new Date(2024, 5, 19) },
  { id: 70, continent: 'America', country: 'Canada', date: new Date(2024, 3, 20) },
  { id: 71, continent: 'Asia', country: 'China', date: new Date(2024, 8, 21) },
  { id: 72, continent: 'Europe', country: 'Spain', date: new Date(2024, 1, 22) },
  { id: 73, continent: 'America', country: 'Mexico', date: new Date(2024, 3, 23) },
  { id: 74, continent: 'Asia', country: 'Japan', date: new Date(2024, 8, 24) },
  { id: 75, continent: 'America', country: 'United States', date: new Date(2024, 8, 25) },
  { id: 76, continent: 'Europe', country: 'Italy', date: new Date(2024, 0, 26) },
  { id: 77, continent: 'America', country: 'Brazil', date: new Date(2024, 0, 27) },
  { id: 78, continent: 'Africa', country: 'Kenya', date: new Date(2024, 3, 28) },
  { id: 79, continent: 'Europe', country: 'France', date: new Date(2024, 4, 29) },
  { id: 80, continent: 'America', country: 'Canada', date: new Date(2024, 5, 30) },
  { id: 81, continent: 'Asia', country: 'India', date: new Date(2024, 1, 31) },
  { id: 82, continent: 'America', country: 'Mexico', date: new Date(2024, 9, 1) },
  { id: 83, continent: 'Asia', country: 'China', date: new Date(2024, 2, 2) },
  { id: 84, continent: 'Europe', country: 'Germany', date: new Date(2024, 3, 3) },
  { id: 85, continent: 'Africa', country: 'South Africa', date: new Date(2024, 8, 4) },
  { id: 86, continent: 'America', country: 'United States', date: new Date(2024, 8, 5) },
  { id: 87, continent: 'America', country: 'Brazil', date: new Date(2024, 11, 6) },
  { id: 88, continent: 'Europe', country: 'Spain', date: new Date(2024, 11, 7) },
  { id: 89, continent: 'Asia', country: 'Japan', date: new Date(2024, 11, 8) },
  { id: 90, continent: 'Africa', country: 'Kenya', date: new Date(2024, 4, 9) },
  { id: 91, continent: 'America', country: 'Canada', date: new Date(2024, 5, 10) },
  { id: 92, continent: 'Europe', country: 'Italy', date: new Date(2024, 4, 11) },
  { id: 93, continent: 'America', country: 'Mexico', date: new Date(2024, 3, 12) },
  { id: 94, continent: 'Asia', country: 'India', date: new Date(2024, 4, 13) },
  { id: 95, continent: 'America', country: 'United States', date: new Date(2024, 8, 14) },
  { id: 96, continent: 'Europe', country: 'Germany', date: new Date(2024, 1, 15) },
  { id: 97, continent: 'Asia', country: 'China', date: new Date(2024, 8, 16) },
  { id: 98, continent: 'Africa', country: 'South Africa', date: new Date(2024, 8, 17) },
  { id: 99, continent: 'America', country: 'Brazil', date: new Date(2024, 0, 18) },
  { id: 100, continent: 'Europe', country: 'France', date: new Date(2024, 8, 19) },
  { id: 101, continent: 'America', country: 'United States', date: new Date(2024, 0, 15) },
  { id: 102, continent: 'Europe', country: 'Germany', date: new Date(2024, 1, 10) },
  { id: 103, continent: 'Asia', country: 'China', date: new Date(2024, 2, 22) },
  { id: 104, continent: 'America', country: 'Brazil', date: new Date(2024, 3, 5) },
  { id: 105, continent: 'Africa', country: 'Kenya', date: new Date(2024, 4, 14) },
  { id: 106, continent: 'Europe', country: 'France', date: new Date(2024, 5, 9) },
  { id: 107, continent: 'America', country: 'Mexico', date: new Date(2024, 6, 18) },
  { id: 108, continent: 'Europe', country: 'Italy', date: new Date(2024, 7, 25) },
  { id: 109, continent: 'Asia', country: 'Japan', date: new Date(2024, 8, 12) },
  { id: 110, continent: 'America', country: 'Canada', date: new Date(2024, 9, 3) },
  { id: 111, continent: 'Africa', country: 'South Africa', date: new Date(2024, 10, 19) },
  { id: 112, continent: 'America', country: 'Brazil', date: new Date(2024, 11, 24) },
  { id: 113, continent: 'Europe', country: 'Spain', date: new Date(2024, 1, 7) },
  { id: 114, continent: 'Asia', country: 'India', date: new Date(2024, 2, 20) },
  { id: 115, continent: 'America', country: 'United States', date: new Date(2024, 3, 27) },
  { id: 116, continent: 'Africa', country: 'Kenya', date: new Date(2024, 4, 6) },
  { id: 117, continent: 'Europe', country: 'Germany', date: new Date(2024, 5, 30) },
  { id: 118, continent: 'Asia', country: 'China', date: new Date(2024, 6, 11) },
  { id: 119, continent: 'America', country: 'Mexico', date: new Date(2024, 7, 1) },
  { id: 120, continent: 'Africa', country: 'South Africa', date: new Date(2024, 8, 5) },
  { id: 121, continent: 'Europe', country: 'France', date: new Date(2024, 9, 15) },
  { id: 122, continent: 'Asia', country: 'Japan', date: new Date(2024, 10, 2) },
  { id: 123, continent: 'America', country: 'Brazil', date: new Date(2024, 11, 21) },
  { id: 124, continent: 'Europe', country: 'Spain', date: new Date(2024, 0, 13) },
  { id: 125, continent: 'America', country: 'United States', date: new Date(2024, 1, 8) },
  { id: 126, continent: 'Africa', country: 'Kenya', date: new Date(2024, 2, 17) },
  { id: 127, continent: 'Europe', country: 'Italy', date: new Date(2024, 3, 10) },
  { id: 128, continent: 'Asia', country: 'India', date: new Date(2024, 4, 27) },
  { id: 129, continent: 'America', country: 'Canada', date: new Date(2024, 5, 9) },
  { id: 130, continent: 'Africa', country: 'South Africa', date: new Date(2024, 6, 5) },
  { id: 131, continent: 'Asia', country: 'China', date: new Date(2024, 7, 22) },
  { id: 132, continent: 'America', country: 'Mexico', date: new Date(2024, 8, 14) },
  { id: 133, continent: 'Europe', country: 'Germany', date: new Date(2024, 9, 2) },
  { id: 134, continent: 'Asia', country: 'Japan', date: new Date(2024, 10, 26) },
  { id: 135, continent: 'America', country: 'United States', date: new Date(2024, 11, 7) },
  { id: 136, continent: 'Africa', country: 'Kenya', date: new Date(2024, 0, 18) },
  { id: 137, continent: 'Europe', country: 'France', date: new Date(2024, 1, 9) },
  { id: 138, continent: 'America', country: 'Brazil', date: new Date(2024, 2, 6) },
  { id: 139, continent: 'Asia', country: 'India', date: new Date(2024, 3, 22) },
  { id: 140, continent: 'America', country: 'Canada', date: new Date(2024, 4, 3) },
  { id: 141, continent: 'Africa', country: 'South Africa', date: new Date(2024, 5, 10) },
  { id: 142, continent: 'Europe', country: 'Spain', date: new Date(2024, 6, 30) },
  { id: 143, continent: 'America', country: 'Mexico', date: new Date(2024, 7, 18) },
  { id: 144, continent: 'Asia', country: 'China', date: new Date(2024, 8, 4) },
  { id: 145, continent: 'Europe', country: 'Italy', date: new Date(2024, 9, 19) },
  { id: 146, continent: 'America', country: 'United States', date: new Date(2024, 10, 8) },
  { id: 147, continent: 'Africa', country: 'Kenya', date: new Date(2024, 11, 14) },
  { id: 148, continent: 'Europe', country: 'Germany', date: new Date(2024, 0, 27) },
  { id: 149, continent: 'Asia', country: 'Japan', date: new Date(2024, 1, 19) },
  { id: 150, continent: 'America', country: 'Brazil', date: new Date(2024, 2, 8) },
  { id: 151, continent: 'America', country: 'United States', date: new Date(2024, 0, 12) },
  { id: 152, continent: 'Asia', country: 'India', date: new Date(2024, 1, 18) },
  { id: 153, continent: 'Africa', country: 'South Africa', date: new Date(2024, 2, 28) },
  { id: 154, continent: 'Europe', country: 'France', date: new Date(2024, 3, 9) },
  { id: 155, continent: 'America', country: 'Canada', date: new Date(2024, 4, 14) },
  { id: 156, continent: 'Asia', country: 'China', date: new Date(2024, 5, 21) },
  { id: 157, continent: 'Europe', country: 'Germany', date: new Date(2024, 6, 7) },
  { id: 158, continent: 'America', country: 'Brazil', date: new Date(2024, 7, 1) },
  { id: 159, continent: 'Asia', country: 'Japan', date: new Date(2024, 8, 10) },
  { id: 160, continent: 'Africa', country: 'Kenya', date: new Date(2024, 9, 27) },
  { id: 161, continent: 'Europe', country: 'Spain', date: new Date(2024, 10, 5) },
  { id: 162, continent: 'America', country: 'Mexico', date: new Date(2024, 11, 19) },
  { id: 163, continent: 'Asia', country: 'India', date: new Date(2024, 1, 4) },
  { id: 164, continent: 'Africa', country: 'South Africa', date: new Date(2024, 2, 15) },
  { id: 165, continent: 'Europe', country: 'Italy', date: new Date(2024, 3, 25) },
  { id: 166, continent: 'America', country: 'United States', date: new Date(2024, 4, 6) },
  { id: 167, continent: 'Asia', country: 'China', date: new Date(2024, 5, 9) },
  { id: 168, continent: 'Africa', country: 'Kenya', date: new Date(2024, 6, 19) },
  { id: 169, continent: 'Europe', country: 'Germany', date: new Date(2024, 7, 14) },
  { id: 170, continent: 'America', country: 'Canada', date: new Date(2024, 8, 23) },
  { id: 171, continent: 'Asia', country: 'Japan', date: new Date(2024, 9, 2) },
  { id: 172, continent: 'America', country: 'Brazil', date: new Date(2024, 10, 11) },
  { id: 173, continent: 'Europe', country: 'France', date: new Date(2024, 11, 4) },
  { id: 174, continent: 'Africa', country: 'South Africa', date: new Date(2024, 1, 13) },
  { id: 175, continent: 'Asia', country: 'India', date: new Date(2024, 2, 7) },
  { id: 176, continent: 'America', country: 'Mexico', date: new Date(2024, 3, 19) },
  { id: 177, continent: 'Europe', country: 'Italy', date: new Date(2024, 4, 22) },
  { id: 178, continent: 'Asia', country: 'China', date: new Date(2024, 5, 3) },
  { id: 179, continent: 'America', country: 'United States', date: new Date(2024, 6, 16) },
  { id: 180, continent: 'Africa', country: 'Kenya', date: new Date(2024, 7, 12) },
  { id: 181, continent: 'Europe', country: 'Germany', date: new Date(2024, 8, 9) },
  { id: 182, continent: 'Asia', country: 'Japan', date: new Date(2024, 9, 24) },
  { id: 183, continent: 'Africa', country: 'South Africa', date: new Date(2024, 10, 1) },
  { id: 184, continent: 'Europe', country: 'Spain', date: new Date(2024, 11, 6) },
  { id: 185, continent: 'America', country: 'Canada', date: new Date(2024, 1, 17) },
  { id: 186, continent: 'Asia', country: 'India', date: new Date(2024, 2, 21) },
  { id: 187, continent: 'America', country: 'Brazil', date: new Date(2024, 3, 11) },
  { id: 188, continent: 'Europe', country: 'France', date: new Date(2024, 4, 5) },
  { id: 189, continent: 'Africa', country: 'Kenya', date: new Date(2024, 5, 29) },
  { id: 190, continent: 'Asia', country: 'China', date: new Date(2024, 6, 20) },
  { id: 191, continent: 'America', country: 'Mexico', date: new Date(2024, 7, 8) },
  { id: 192, continent: 'Europe', country: 'Italy', date: new Date(2024, 8, 18) },
  { id: 193, continent: 'Asia', country: 'Japan', date: new Date(2024, 9, 15) },
  { id: 194, continent: 'America', country: 'United States', date: new Date(2024, 10, 30) },
  { id: 195, continent: 'Africa', country: 'South Africa', date: new Date(2024, 11, 18) },
  { id: 196, continent: 'Europe', country: 'Germany', date: new Date(2024, 0, 2) },
  { id: 197, continent: 'Asia', country: 'India', date: new Date(2024, 1, 7) },
  { id: 198, continent: 'America', country: 'Brazil', date: new Date(2024, 2, 13) },
  { id: 199, continent: 'Europe', country: 'Spain', date: new Date(2024, 3, 20) },
  { id: 200, continent: 'Africa', country: 'Kenya', date: new Date(2024, 4, 28) },
  { id: 201, continent: 'Asia', country: 'Japan', date: new Date(2024, 0, 11) },
  { id: 202, continent: 'America', country: 'United States', date: new Date(2024, 1, 25) },
  { id: 203, continent: 'Europe', country: 'Germany', date: new Date(2024, 2, 6) },
  { id: 204, continent: 'Africa', country: 'South Africa', date: new Date(2024, 3, 17) },
  { id: 205, continent: 'Asia', country: 'India', date: new Date(2024, 4, 4) },
  { id: 206, continent: 'Europe', country: 'Italy', date: new Date(2024, 5, 19) },
  { id: 207, continent: 'America', country: 'Mexico', date: new Date(2024, 6, 9) },
  { id: 208, continent: 'Africa', country: 'Kenya', date: new Date(2024, 7, 20) },
  { id: 209, continent: 'Europe', country: 'France', date: new Date(2024, 8, 30) },
  { id: 210, continent: 'Asia', country: 'China', date: new Date(2024, 9, 8) },
  { id: 211, continent: 'America', country: 'Canada', date: new Date(2024, 10, 14) },
  { id: 212, continent: 'Asia', country: 'Japan', date: new Date(2024, 11, 3) },
  { id: 213, continent: 'Africa', country: 'Kenya', date: new Date(2024, 0, 7) },
  { id: 214, continent: 'Europe', country: 'Spain', date: new Date(2024, 1, 21) },
  { id: 215, continent: 'Asia', country: 'India', date: new Date(2024, 2, 12) },
  { id: 216, continent: 'America', country: 'Brazil', date: new Date(2024, 3, 1) },
  { id: 217, continent: 'Europe', country: 'Italy', date: new Date(2024, 4, 16) },
  { id: 218, continent: 'Africa', country: 'South Africa', date: new Date(2024, 5, 23) },
  { id: 219, continent: 'Asia', country: 'China', date: new Date(2024, 6, 5) },
  { id: 220, continent: 'America', country: 'United States', date: new Date(2024, 7, 11) },
  { id: 221, continent: 'Africa', country: 'Kenya', date: new Date(2024, 8, 24) },
  { id: 222, continent: 'Europe', country: 'France', date: new Date(2024, 9, 27) },
  { id: 223, continent: 'Asia', country: 'Japan', date: new Date(2024, 10, 13) },
  { id: 224, continent: 'America', country: 'Mexico', date: new Date(2024, 11, 25) },
  { id: 225, continent: 'Africa', country: 'South Africa', date: new Date(2024, 0, 2) },
  { id: 226, continent: 'Asia', country: 'India', date: new Date(2024, 1, 14) },
  { id: 227, continent: 'Europe', country: 'Germany', date: new Date(2024, 2, 18) },
  { id: 228, continent: 'America', country: 'Canada', date: new Date(2024, 3, 5) },
  { id: 229, continent: 'Africa', country: 'Kenya', date: new Date(2024, 4, 20) },
  { id: 230, continent: 'Asia', country: 'China', date: new Date(2024, 5, 29) },
  { id: 231, continent: 'Europe', country: 'Spain', date: new Date(2024, 6, 14) },
  { id: 232, continent: 'America', country: 'United States', date: new Date(2024, 7, 18) },
  { id: 233, continent: 'Asia', country: 'Japan', date: new Date(2024, 8, 7) },
  { id: 234, continent: 'Europe', country: 'France', date: new Date(2024, 9, 15) },
  { id: 235, continent: 'Africa', country: 'South Africa', date: new Date(2024, 10, 21) },
  { id: 236, continent: 'Asia', country: 'India', date: new Date(2024, 11, 5) },
  { id: 237, continent: 'America', country: 'Mexico', date: new Date(2024, 0, 29) },
  { id: 238, continent: 'Europe', country: 'Germany', date: new Date(2024, 1, 8) },
  { id: 239, continent: 'Asia', country: 'China', date: new Date(2024, 2, 22) },
  { id: 240, continent: 'Africa', country: 'Kenya', date: new Date(2024, 3, 13) },
  { id: 241, continent: 'America', country: 'Canada', date: new Date(2024, 4, 24) },
  { id: 242, continent: 'Asia', country: 'Japan', date: new Date(2024, 5, 10) },
  { id: 243, continent: 'Europe', country: 'Italy', date: new Date(2024, 6, 26) },
  { id: 244, continent: 'America', country: 'Brazil', date: new Date(2024, 7, 2) },
  { id: 245, continent: 'Africa', country: 'South Africa', date: new Date(2024, 8, 17) },
  { id: 246, continent: 'Asia', country: 'India', date: new Date(2024, 9, 4) },
  { id: 247, continent: 'Europe', country: 'Spain', date: new Date(2024, 10, 12) },
  { id: 248, continent: 'America', country: 'United States', date: new Date(2024, 11, 22) },
  { id: 249, continent: 'Africa', country: 'Kenya', date: new Date(2024, 0, 10) },
  { id: 250, continent: 'Asia', country: 'China', date: new Date(2024, 1, 19) }
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
