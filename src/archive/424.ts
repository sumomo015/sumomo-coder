import { getLinesAsIntsList } from '@utils/useInput'

async function main() {
  const lines = await getLinesAsIntsList()
  const nums = lines[1]

  const sum = nums.reduce((acc, cur) => acc + cur, 0)

  console.log(sum)
}

main().catch(console.error)
