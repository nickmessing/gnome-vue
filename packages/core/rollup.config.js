import path from 'path'

import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import replace from '@rollup/plugin-replace'
import alias from '@rollup/plugin-alias'

const projectRootDir = path.resolve(__dirname)

const bundle = config => ({
  ...config,
  input: 'src/index.ts',
  external: ['@vue/runtime-core', 'gi://Gtk?version=4.0'],
  plugins: [
    alias({
      entries: [{ find: '@', replacement: path.resolve(projectRootDir, 'src') }],
    }),
    ...config.plugins,
  ],
})

export default [
  bundle({
    plugins: [
      esbuild(),
      replace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify('production'),
        },
      }),
    ],
    output: {
      file: 'dist/index.js',
      format: 'es',
    },
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `dist/index.d.ts`,
      format: 'es',
    },
  }),
]
