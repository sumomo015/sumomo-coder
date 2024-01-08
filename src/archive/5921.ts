import { getFirstLineAsInt } from "@utils/useInput";

async function main() {
  const N = await getFirstLineAsInt();

  const pow = N ** 2;
  // 小数点以下を四捨五入
  const sqrt = Math.round(Math.sqrt(N));

  console.log(`${pow} ${sqrt}`);
}

main().catch(console.error);
