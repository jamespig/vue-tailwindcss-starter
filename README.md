# 🎨 Vue TailwindCSS Starter

快速建立 Vue 3 + TailwindCSS 專案的現代化腳手架工具

[![npm version](https://badge.fury.io/js/vue-tailwind-starter.svg)](https://badge.fury.io/js/vue-tailwind-starter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ 功能特色

- 🚀 **極速開發體驗** - 基於 Vite 的快速開發伺服器
- 🎨 **預配置 TailwindCSS** - 包含客製化設計系統和組件
- 📦 **多種模板選擇** - 從最簡到全功能，滿足不同需求
- 🔧 **開箱即用** - 預設最佳實踐配置，立即可用
- 💻 **TypeScript 支援** - 完整的型別安全開發體驗
- 🛠️ **現代工具鏈** - ESLint、Prettier、Vitest 等工具

## 🚀 快速開始

### 安裝

```bash
# 使用 npm (推薦)
npx vue-tailwind-starter create my-project

# 使用 yarn
yarn create vue-tailwind-starter my-project

# 使用 pnpm
pnpm create vue-tailwind-starter my-project
```

### 指定模板

```bash
# 完整版 (預設)
npx vue-tailwind-starter create my-project --template full

# SPA 版
npx vue-tailwind-starter create my-spa --template spa

# 含狀態管理版
npx vue-tailwind-starter create my-store --template store

# 最小版
npx vue-tailwind-starter create my-minimal --template minimal
```

## 📦 模板選項

| 模板        | 包含功能                               | 適用場景            |
| ----------- | -------------------------------------- | ------------------- |
| **minimal** | Vue 3 + TypeScript + TailwindCSS       | 簡單專案、學習練習  |
| **spa**     | + Vue Router                           | 單頁面應用          |
| **store**   | + Vue Router + Pinia                   | 需要狀態管理的應用  |
| **full**    | + Vue Router + Pinia + Vitest + ESLint | 生產環境專案 (推薦) |

## 🎯 預配置內容

### TailwindCSS 設定

- 客製化色彩系統
- 預設字型配置
- 常用 CSS 組件類別
- 響應式設計支援

### 開發工具

- VSCode 設定和擴展建議
- ESLint + Prettier 程式碼品質
- Vitest 單元測試框架
- Git hooks 和 pre-commit 檢查

### 範例組件

- Button、Card 等基礎 UI 組件
- 響應式佈局範例
- TailwindCSS 最佳實踐展示

## 📁 專案結構

```
my-project/
├── .vscode/              # VSCode 設定
├── public/               # 靜態資源
├── src/
│   ├── assets/css/       # TailwindCSS 檔案
│   ├── components/
│   │   └── ui/          # 基礎 UI 組件
│   ├── router/          # Vue Router 配置 (spa/store/full)
│   ├── stores/          # Pinia 狀態管理 (store/full)
│   ├── views/           # 頁面組件
│   ├── App.vue
│   └── main.ts
├── tests/               # 測試檔案 (full)
├── tailwind.config.js   # TailwindCSS 配置
├── vite.config.ts       # Vite 配置
└── package.json
```

## 🎨 TailwindCSS 客製化

### 預設色彩系統

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        900: '#1e3a8a',
      },
    }
  }
}
```

### 預設組件類別

```css
/* src/assets/css/main.css */
@layer components {
  .btn-primary {
    @apply bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors;
  }

  .card {
    @apply bg-white rounded-lg shadow-sm border border-gray-200 p-6;
  }
}
```

## 🛠️ 開發指令

```bash
# 開發伺服器
npm run dev

# 型別檢查
npm run type-check

# 程式碼檢查
npm run lint

# 單元測試 (full template)
npm run test

# 建置生產版本
npm run build
```

## 🤝 支援的包管理器

自動偵測並使用：

- 🥇 **pnpm** (推薦，最快)
- 🥈 **yarn**
- 🥉 **npm**

## 📄 授權

MIT License

## 🙋‍♂️ 支援

如有問題或建議，歡迎提交 [Issue](https://github.com/your-username/vue-tailwind-starter/issues)

---

**由 ❤️ 用 Vue 和 TailwindCSS 製作**
