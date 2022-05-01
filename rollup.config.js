import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/animal-vegetable.js',
    output: [
      {
        file: 'dist/animal-vegetable.mjs',
        format: 'es',
        sourcemap: true,
      },
      {
        file: 'dist/animal-vegetable.min.mjs',
        format: 'es',
        sourcemap: true,
        plugins: [terser()]
      },
      {
        name: 'animal-vegetable',
        file: 'dist/animal-vegetable.js',
        format: 'umd',
        sourcemap: true,
      },
      {
        name: 'animal-vegetable',
        file: 'dist/animal-vegetable.min.js',
        format: 'umd',
        sourcemap: true,
        plugins: [terser()]
      },
      {
        file: 'dist/animal-vegetable.cjs',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/animal-vegetable.min.cjs',
        format: 'cjs',
        sourcemap: true,
        plugins: [terser()]
      }
    ]
  }
]
