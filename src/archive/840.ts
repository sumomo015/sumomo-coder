import { getFirstLineAsInt } from "@utils/useInput";

async function main() {
  const N = await getFirstLineAsInt();

  let result = "1";

  for (let i = 1; i <= N * 2; i++) {
    result = result + "0";
  }

  console.log(result);
}

main().catch(console.error);
