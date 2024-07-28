import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let lineNumber = 0 // 行カウンター
let N = 0
const linesRaw = new Set<string>()

rl.on('line', (input) => {
  lineNumber++ // 行番号をインクリメント
  if (lineNumber === 1) { // 1行目のみ処理
    N = parseInt(input)
  }
  else if (lineNumber > 2) { // 3行目以降のみ処理
    linesRaw.add(input)
  }
})

async function main() {
  await new Promise(resolve => rl.on('close', resolve))

  const lines = Array.from(linesRaw).map((line) => {
    const [i, s] = line.split(' ')
    return [parseInt(i), s] as [number, string]
  })

  const flags = Array.from({ length: N }, () => new Set<string>())

  lines.forEach(([i, s]) => {
    const count = Math.floor(N / i)
    const indexs = Array.from({ length: count }, (_, c) => i * (c + 1) - 1)

    indexs.forEach((i) => {
      flags[i].add(s)
    })
  })

  const MOD = BigInt(10 ** 9 + 7)
  let result = BigInt(1)

  for (const flag of flags) {
    const resultPart = 26 - flag.size
    result = (result * BigInt(resultPart)) % MOD
  }

  console.log(result.toString())
}

main().catch(console.error)
