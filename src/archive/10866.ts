import { getLinesAsIntsList } from "@utils/useInput";

function findMostFrequentElement(list: number[]): number | undefined {
  const countMap = new Map<number, number>();
  let maxCount = 0;
  let mostFrequentElement: number | undefined;

  for (const element of list) {
    const count = (countMap.get(element) ?? 0) + 1;
    countMap.set(element, count);

    if (count > maxCount) {
      maxCount = count;
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

async function main() {
  const lines = await getLinesAsIntsList();
  const M = lines[0][1];

  const listA = lines[1];
  const listB = listA.map((a) => a % M);

  const mostFrequentElement = findMostFrequentElement(listB);

  console.log(mostFrequentElement);
}

main().catch(console.error);
