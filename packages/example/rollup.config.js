import esbuild from 'rollup-plugin-esbuild'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import vue from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import styles from 'rollup-plugin-styles'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
  },
  external: [
    'gi://Gtk?version=4.0',
    'gi://GObject?version=2.0',
    'gi://Adw?version=1',
    'gi://Gio?version=2.0',
    'gi://Gdk?version=4.0',
  ],
  plugins: [
    vue(),
    styles({
      mode: ['inject', varname => `import { addStyle } from '@gnome-vue/core'; setTimeout(() => addStyle(${varname}))`],
    }),
    alias({
      entries: [{ find: 'vue', replacement: '@vue/runtime-core' }],
    }),
    nodeResolve(),
    esbuild(),
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],
}
