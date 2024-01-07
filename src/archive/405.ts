import { getLinesAsInts } from "@utils/useInput";

async function main() {
  const G = 9.8;

  const [H, S] = await getLinesAsInts();

  const t = Math.sqrt((2 * H) / G);

  let dist = S * t;

  dist = Math.round(dist * 100) / 100;

  console.log(dist);
}
main().catch(console.error);
