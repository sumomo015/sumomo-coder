import { getLines } from '@utils/useInput'

type Exercise =
  | 'push-ups'
  | 'sit-ups'
  | 'squats'
  | 'walking'
  | 'radio-calisthenics'

const METsMap: Record<Exercise, number> = {
  'push-ups': 8,
  'sit-ups': 8,
  'squats': 5,
  'walking': 3.3,
  'radio-calisthenics': 4,
}

function getcalorie(exercise: Exercise, time: number, weight: number): number {
  const METs = METsMap[exercise]
  const kcal = time * METs * weight * 1.05

  // 小数部分を切り捨てて整数で出力
  return Math.floor(kcal)
}

async function main() {
  const lines = await getLines()

  const exercise = lines[0] as Exercise
  const time = Number(lines[1])
  const weight = Number(lines[2])

  const calorie = getcalorie(exercise, time, weight)
  console.log(calorie)
}
main().catch(console.error)
