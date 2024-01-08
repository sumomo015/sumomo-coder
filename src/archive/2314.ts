import { getLinesAsIntsList } from "@utils/useInput";

class Monster {
  private level = 1;
  private exp: number;

  constructor(neededExp: number) {
    this.exp = neededExp;
  }

  public getNeededExp() {
    return this.exp * this.level;
  }

  public levelUp() {
    this.level++;
  }
}

async function main() {
  const lines = await getLinesAsIntsList();

  let expSum = lines[0][1];

  const baseExpList = lines[1];

  const monsters = baseExpList.map((neededExp) => new Monster(neededExp));

  monsters.sort((a, b) => a.getNeededExp() - b.getNeededExp());

  let count = 0;

  while (monsters.length > 0) {
    const minNeededExp = monsters[0].getNeededExp();
    if (expSum < minNeededExp) {
      break;
    }

    expSum -= minNeededExp;
    monsters[0].levelUp();
    count++;

    monsters.sort((a, b) => a.getNeededExp() - b.getNeededExp());
  }

  console.log(count);
}
main().catch(console.error);
