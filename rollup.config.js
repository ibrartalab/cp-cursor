import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    exports: 'auto'
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({ 
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    })
  ],
  external: ['react', 'react-dom']
};