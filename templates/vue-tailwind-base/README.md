# Vue TailwindCSS Base Template

這是一個基於 Vue 3 + Vite + TailwindCSS + TypeScript 的基礎專案模板，提供現代化前端開發的完整工具鏈。

## 🛠️ Technology Stack

- **Vue 3** - 漸進式 JavaScript 框架
- **Vite** - 下一代前端建置工具
- **TailwindCSS v4** - 實用優先的 CSS 框架
- **TypeScript** - JavaScript 的超集，提供型別安全
- **ESLint** - 程式碼品質檢查工具

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 開發伺服器

```bash
npm run dev
```

### 型別檢查

```bash
npm run type-check
```

### 程式碼檢查

```bash
npm run lint
```

### 建置生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 📁 專案結構

```
src/
├── assets/
│   └── main.css          # TailwindCSS 主檔案
├── components/           # Vue 組件
├── views/               # 頁面組件
│   └── index.vue        # 首頁
├── App.vue              # 根組件
└── main.ts              # 應用程式入口
```

## 🔧 開發工具

### 推薦 IDE 設定

- **VSCode** + **Volar** (Vue 語言支援)

### TypeScript 支援

- 完整的 `.vue` 檔案型別支援
- 使用 `vue-tsc` 進行型別檢查
- 路徑別名配置 (`@/*` 指向 `src/*`)

### ESLint 配置

- Vue 3 最佳實踐規則
- TypeScript 支援
- 程式碼品質檢查

## 📦 依賴說明

### 核心依賴

- `vue` - Vue 3 框架
- `tailwindcss` - CSS 框架
- `@tailwindcss/vite` - Vite 整合

### 開發依賴

- `vite` - 建置工具
- `@vitejs/plugin-vue` - Vue 支援
- `typescript` - 型別系統
- `vue-tsc` - Vue TypeScript 編譯器
- `eslint` - 程式碼檢查

## 💡 最佳實踐

1. **組件設計**: 使用組合式 API 和 `<script setup>`
2. **型別安全**: 充分利用 TypeScript 型別系統
3. **樣式管理**: 優先使用 TailwindCSS 類別
4. **程式碼品質**: 定期執行 ESLint 檢查

## 🔗 相關連結

- [Vue 3 官方文檔](https://vuejs.org/)
- [Vite 官方文檔](https://vitejs.dev/)
- [TailwindCSS 官方文檔](https://tailwindcss.com/)
- [TypeScript 官方文檔](https://www.typescriptlang.org/)

## 📄 授權

本模板採用 MIT License 授權。

---

**開始您的 Vue + TailwindCSS 開發之旅！** 🚀
