import { getLines } from "@utils/useInput";

async function main() {
  const lines = await getLines();

  const words = lines[0].split(" ");

  let C = words[1];

  let N = Number(words[2]);

  lines.splice(1).forEach((line) => {
    if (Number.isInteger(Number(line))) {
      N += Number(line);
    } else {
      C += line;
    }
  });

  console.log(C);
  console.log(N);
}

main().catch(console.error);
