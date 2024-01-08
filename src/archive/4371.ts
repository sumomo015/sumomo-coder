import { getFirstLine } from "@utils/useInput";

async function main() {
  const text = await getFirstLine();

  const result = text.replaceAll(",", " ");

  console.log(result);
}

main().catch(console.error);
