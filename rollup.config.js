import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: 'src/main.js',
  output: {
    file: 'jmespath.js',
    format: 'umd',
    name: "jmespath"
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};
