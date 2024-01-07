import { getFirstLineAsInts } from "@utils/useInput";

async function main() {
  const [R, G, B] = await getFirstLineAsInts();

  const max = Math.max(R, G, B);
  const min = Math.min(R, G, B);

  const R1 = max + min - R;
  const G1 = max + min - G;
  const B1 = max + min - B;

  console.log(`${R1} ${G1} ${B1}`);
}
main().catch(console.error);
