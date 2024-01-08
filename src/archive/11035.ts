import { getLinesAsStringsList } from "@utils/useInput";

function solutionStr(strs: string[]): string {
  const num = strs[0];
  const str = strs[1];
  // 1だったら逆順にして返す
  if (num === "1") return str.split("").reverse().join("");

  return str;
}

async function main() {
  const line = (await getLinesAsStringsList()).splice(1);

  const result = line.map((str) => solutionStr(str)).join("");

  console.log(result);
}

main().catch(console.error);
