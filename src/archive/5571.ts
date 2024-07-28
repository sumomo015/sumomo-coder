import { getLinesAsInts } from '@utils/useInput'

async function main() {
  const nums = (await getLinesAsInts()).slice(1)

  const counts = new Map<number, number>()
  nums.forEach((n) => {
    const count = counts.get(n) ?? 0
    counts.set(n, count + 1)
  })

  const sorted = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(a => a[0])

  console.log(sorted[0])
}

main().catch(console.error)
