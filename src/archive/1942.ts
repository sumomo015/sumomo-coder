import { getLines } from "@utils/useInput";

async function main() {
  const lines = await getLines();

  const coinStr = lines[1];
  const index = coinStr.indexOf("B");

  if (index !== -1) {
    console.log(index);
  }
}

main().catch(console.error);
