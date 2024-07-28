import { getLines } from '@utils/useInput'

async function main() {
  const lines = await getLines()

  const [n, m] = lines[0].split(' ').map(s => parseInt(s))

  const words = lines.slice(1, n + 1)

  const lookUp = lines.slice(n + 1, n + m + 1)

  const result: string[] = []

  lookUp.forEach((look) => {
    words.some(word => word === look) ? result.push('T') : result.push('F')
  })

  console.log(result.join(' '))
}

main().catch(console.error)
