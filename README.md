# Hatenablog-BlackList

はてなブログのTOPページにブラックリストに登録したブログを表示させない．

## Hou to use

1. clone this repository and build
2. load extension 
3. set url which you block from popup(Ex. `https://example.com/*`)
4. press `set` button and reload
## Features

- ⚡️ **Instant HMR** - use **Vite** on dev (no more refresh!)
- 🥝 Vue 3 - Composition API, [`<script setup>` syntax](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md) and more!
- 💬 Effortless communications - powered by [`webext-bridge`](https://github.com/antfu/webext-bridge) and [VueUse](https://github.com/antfu/vueuse) storage
- 🍃 [Windi CSS](https://windicss.org/) - on-demand CSS utilities
- 🦾 [TypeScript](https://www.typescriptlang.org/) - type safe
- 📦 [Components auto importing](./src/components)
- 🌟 [Icons](./src/components) - Access to icons from any iconset directly
- 🖥 Content Script - Use Vue even in content script
- 🌍 WebExtension - isomorphic extension for Chrome, Firefox, and others
- 📃 Dynamic `manifest.json` with full type support

## Usage

### Folders

- `views` - frontend for the extension (popup and options).
- `src` - background scripts and content scripts.
  - `manifest.ts` - manifest for the extension.
- `extension` - extension package root, also holds assets.
- `scripts` - development helper scripts.

### Development

```bash
pnpm dev
```

Then **load extension in browser with the `extension/` folder**,

### Build

To build the extension, run

```bash
pnpm build
```

And then pack files under `extension`.

## Credits

![](https://user-images.githubusercontent.com/11247099/127029137-6b5ad5db-76c4-4061-86ff-489911a8adfb.png)

This template is originally made for the [volta.net](https://volta.net) browser extension.

## Variations

This is a variant of [Vitesse](https://github.com/antfu/vitesse), check out the [full variations list](https://github.com/antfu/vitesse#variations).
