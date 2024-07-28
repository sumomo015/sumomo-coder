import { getLinesAsIntsList } from '@utils/useInput'

function isOrderedSublist(mainList: number[], subList: number[]): boolean {
  return mainList.some((_, i) =>
    subList.every((val, j) => mainList[i + j] === val),
  )
}

async function main() {
  const lines = await getLinesAsIntsList()

  const currentNumberList = lines[1]

  const inputNumberList = lines[3]

  if (isOrderedSublist(inputNumberList, currentNumberList)) {
    console.log('unlock')
  }
  else {
    console.log('lock')
  }
}
main().catch(console.error)
