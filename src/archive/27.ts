import { getFirstLineAsInt } from "@utils/useInput";

async function main() {
  const NUM = await getFirstLineAsInt();

  if (NUM % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
main().catch(console.error);
