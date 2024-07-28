import { getLinesAsStringsList } from '@utils/useInput'

async function main() {
  const words = await getLinesAsStringsList()

  const hapyArray = [0, 0, 0, 0]

  enum HAPY {
    H = 0,
    A = 1,
    P = 2,
    Y = 3,
  }

  words[1].forEach((word) => {
    switch (word) {
      case 'H':
        hapyArray[HAPY.H] += 1
        break
      case 'A':
        hapyArray[HAPY.A] += 1
        break
      case 'P':
        hapyArray[HAPY.P] += 1
        break
      case 'Y':
        hapyArray[HAPY.Y] += 1
        break
    }
  })

  hapyArray[HAPY.P] = Math.floor(hapyArray[HAPY.P] / 2)

  // 最小値を求める
  const min = Math.min(...hapyArray)

  console.log(min)
}

main().catch(console.error)
