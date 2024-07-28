import { getLinesAsIntsList } from '@utils/useInput'

async function main() {
  const InputIntsList = await getLinesAsIntsList()

  const N = String(InputIntsList[0][0])
  const Cost1 = InputIntsList[1]
  const Cost2 = InputIntsList[2]
  Cost2.push(0)

  let costList = Array<number>(9).fill(0)

  costList = costList.map((cost, i) => {
    cost += Cost2[i]
    // Nを各進数に変換する
    let N2 = parseInt(N, i + 2)
    const N3 = N2.toString(i + 2)
    if (isNaN(N2) || N3 !== N) return Infinity
    // 各桁のコストを加算する
    while (N2 > 0) {
      if (N2 % 10 === 0) {
        return Infinity
      }
      cost += Cost1[(N2 % 10) - 1]
      N2 = Math.floor(N2 / 10)
    }
    return cost
  })

  console.log(Math.min(...costList))
}

main().catch(console.error)
