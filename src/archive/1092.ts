import { getFirstLineAsStrings } from "@utils/useInput";

async function main() {
  const words = await getFirstLineAsStrings();

  // ワードの数が3以下の場合は、そのまま出力する
  if (words.length <= 3) {
    console.log(words.join(" "));
    return;
  }

  // ワードの数が4以上の場合は、3つずつ区切って出力する
  for (let i = 0; i < words.length - 2; i++) {
    console.log(words.slice(i, i + 3).join(" "));
  }
}

main().catch(console.error);
