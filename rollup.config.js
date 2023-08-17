import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
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
      // eslint-disable-next-line
      plugins: [terser()],
    },
  ],
  // eslint-disable-next-line
  plugins: [typescript(), nodeResolve()],
  sourcemap: true,
};

export default options;
