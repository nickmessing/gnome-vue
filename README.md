# Gnome vue

## Requirements

- Node.js - tested on v16.15.1
- PNPM - tested on 7.1.7
- GJS - tested on 1.72.0

To generate GIR Typings:

- ts-for-gir - tested on 2.0.0 ([install from github](https://github.com/sammydre/ts-for-gir))
- GTK4 development package - `gtk4-devel` on fedora & `libgtk-4-dev` on ubuntu

## Running example

```
pnpm install
cd packages/core && pnpm run build
cd ../example && pnpm run build && pnpm run run
```
