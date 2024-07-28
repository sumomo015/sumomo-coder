import { getFirstLineAsInts } from '@utils/useInput'

async function main() {
  const [, M] = await getFirstLineAsInts()

  if (M > 0) {
    console.log('Yes')
  }
  else {
    console.log('No')
  }
}
main().catch(console.error)
