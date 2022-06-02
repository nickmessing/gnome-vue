import esbuild from 'rollup-plugin-esbuild'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import vue from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    vue(),
    alias({
      entries: [{ find: 'vue', replacement: '@vue/runtime-core' }],
    }),
    nodeResolve(),
    esbuild(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
}
