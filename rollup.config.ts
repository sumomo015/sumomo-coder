import typescript from "@rollup/plugin-typescript";
import { RollupOptions } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

/**
 * @type {import('rollup').RollupOptions}
 */
const options: RollupOptions = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.min.cjs",
      format: "cjs",
      plugins: [terser()],
    },
  ],
  plugins: [typescript(), nodeResolve()],
};

export default options;
