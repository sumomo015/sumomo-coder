import { getFirstLineAsInt } from '@utils/useInput'

async function main() {
  const C = await getFirstLineAsInt()

  const H = (C - 2) * 4 + 24

  console.log(H)
}
main().catch(console.error)
