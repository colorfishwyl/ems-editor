# ems-editor

A lightweight Vue 3 workflow editor component powered by `@antv/x6`, packaged as a plugin that can be registered via `app.use`.

## Install

```bash
npm install @colorfishwyl/ems-editor
# or
yarn add @colorfishwyl/ems-editor
```

## Quick Start

```js
import { createApp } from 'vue'
import App from './App.vue'
import EmsEditor from '@colorfishwyl/ems-editor'
import '@colorfishwyl/ems-editor/dist/style.css'

const app = createApp(App)
app.use(EmsEditor)
app.mount('#app')
```

Use the component anywhere after installation:

```vue
<template>
  <ems-editor class="demo-editor" @ready="handleReady" />
</template>

<script setup>
const handleReady = (graph) => {
  graph.addNode({
    x: 40,
    y: 40,
    width: 120,
    height: 40,
    label: 'Hello EMS'
  })
}
</script>
```

### On-demand import

```vue
<script setup>
import { EmsEditor } from '@colorfishwyl/ems-editor'
import '@colorfishwyl/ems-editor/dist/style.css'
</script>
```

## Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `width` | `number \| string` | `'100%'` | Canvas width, percentage supported |
| `height` | `number \| string` | `600` | Canvas height |
| `grid` | `boolean \| object` | `{ size: 10, visible: true }` | Pass-through config for the X6 grid |
| `background` | `boolean \| object` | `{ color: '#f5f6fa' }` | Default background config |
| `autoCenter` | `boolean` | `true` | Whether to auto center content after init/reset |

## Events

| Event | Payload | Description |
| ----- | ------- | ----------- |
| `ready` | `graph` | Emits the underlying `Graph` instance once ready |

## Development

```bash
npm install
npm run dev  # start the playground for local testing
npm run build
```

Bundled files are emitted to `dist/` and are ready to publish to npm.

### Local debugging flow

1. Run `npm run dev` and open the browser tab (or visit `http://localhost:5175`); the playground consumes the source plugin directly.
2. Modify anything under `src/` and Vite hot-reloads the playground instantly.
3. Once satisfied, execute `npm run build` so the freshly generated `dist/` output can be published.

> 如果 `npm run dev` 启动后浏览器显示 404，确认命令在仓库根目录执行；Playground 使用独立的 `playground/vite.config.js`，只有从根目录启动才能正确找到入口文件。

