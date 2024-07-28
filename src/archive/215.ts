import { getLinesAsIntsList } from '@utils/useInput'

async function main() {
  const InputIntsList = await getLinesAsIntsList()

  const [, K] = InputIntsList[0]
  const scoreList = InputIntsList[1]

  const sortedScoreList = scoreList.sort((a, b) => b - a)

  const KScoreList = sortedScoreList.slice(0, K - 1)

  const answer = KScoreList.reduce((acc, cur) => acc + cur, 0) + scoreList[K]

  console.log(answer)
}

main().catch(console.error)
