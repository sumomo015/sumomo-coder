import { getLinesAsIntsList } from "@utils/useInput";

async function main() {
  const lines = await getLinesAsIntsList();
  const [, L, R] = lines[0];
  const nums = lines[1];

  const result = nums.filter((num) => num >= L && num <= R).length;

  console.log(result);
}

main().catch(console.error);
