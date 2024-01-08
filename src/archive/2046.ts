import { getFirstLine } from "@utils/useInput";

async function main() {
  const name = await getFirstLine();

  if (name.startsWith("k")) {
    console.log(name.substring(1));
  } else {
    console.log(name);
  }
}

main().catch(console.error);
