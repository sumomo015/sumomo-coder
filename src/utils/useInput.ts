import * as readline from "readline";

/**
 * 標準入力から1行ずつ読み込む
 * @returns {Promise<string[]>} 標準入力の各行を要素とした配列
 */
export const getLines = async (): Promise<string[]> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const lines: string[] = [];

  return new Promise((resolve) => {
    rl.on("line", (line) => {
      lines.push(line);
    });

    rl.on("close", () => {
      resolve(lines);
    });
  });
};

/**
 * 標準入力から1行ずつ読み込み、各行を数値に変換する
 * @returns {Promise<number[]>} 標準入力の各行を数値に変換した配列
 */
export const getLinesAsInts = async (): Promise<number[]> => {
  const lines = await getLines();
  return lines.map((line) => parseInt(line));
};

export const getLinesAsStringsList = async (): Promise<string[][]> => {
  const lines = await getLines();
  return lines.map((line) => line.split(" "));
};

/**
 * 標準入力から1行ずつ読み込み、各行を数値配列に変換する
 * @returns {Promise<number[][]>} 標準入力の各行を数値配列に変換した配列
 */
export const getLinesAsIntsList = async (): Promise<number[][]> => {
  const lines = await getLines();
  return lines.map((line) => line.split(" ").map((s) => parseInt(s)));
};

/**
 * 標準入力から1行目を読み込む
 * @returns {Promise<string>} 標準入力の1行目
 */
export const getFirstLine = async (): Promise<string> => {
  const lines = await getLines();
  return lines[0];
};

/**
 * 標準入力から1行目を数値に変換して読み込む
 * @returns {Promise<number>} 標準入力の1行目を数値に変換したもの
 */
export const getFirstLineAsInt = async (): Promise<number> => {
  const line = await getFirstLine();
  return parseInt(line);
};

/**
 * 標準入力から1行目を文字列配列に変換して読み込む
 * @returns {Promise<string[]>} 標準入力の1行目を文字列配列に変換したもの
 */
export const getFirstLineAsStrings = async (): Promise<string[]> => {
  const line = await getFirstLine();
  return line.split(" ");
};

/**
 * 標準入力から1行目を数値配列に変換して読み込む
 * @returns {Promise<number[]>} 標準入力の1行目を数値配列に変換したもの
 */
export const getFirstLineAsInts = async (): Promise<number[]> => {
  const line = await getFirstLine();
  return line.split(" ").map((s) => parseInt(s));
};
