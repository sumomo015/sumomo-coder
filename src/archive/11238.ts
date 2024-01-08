import { getLines } from "@utils/useInput";

type Command = "add" | "double" | "both";

function solutionCommand(input: number, command: Command): number {
  switch (command) {
    case "add":
      return input + 1;
    case "double":
      return input * 2;
    case "both":
      return input * 2 + 1;
  }
}

async function main() {
  const lines = await getLines();

  const A = Number(lines[0]);

  const commands = lines.slice(2) as Command[];

  let result = A;

  for (const command of commands) {
    result = solutionCommand(result, command);
  }

  console.log(result);
}

main().catch(console.error);
