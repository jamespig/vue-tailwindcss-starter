# 🎨 Vue TailwindCSS Starter

快速建立 Vue 3 + TailwindCSS 專案的現代化 Scaffold 工具

[![npm version](https://badge.fury.io/js/vue-tailwind-starter.svg)](https://badge.fury.io/js/vue-tailwind-starter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🎯 專案初衷

這個模板的誕生源於我對開發效率的追求。我很喜歡使用 Tailwind CSS，但每次建立新專案時都要重複安裝和設定實在是太麻煩了。同時，我也不喜歡在每次開啟 Vite 或 Vue 新專案時還要手動刪除不需要的預設內容。

因此，我製作了這個 scaffold 工具，讓開發者能夠快速建立一個乾淨、預配置好的 Vue 3 + TailwindCSS 專案，專注於真正的開發工作而不是重複的設定工作。

**歡迎有需要的開發者使用這個模板！** 如果您在使用過程中遇到任何問題或有改進建議，歡迎告訴我。

## ✨ 功能特色

- 🚀 **站在巨人的肩膀上** - 基於 Vite + Vue
- 🎨 **預配置 TailwindCSS** - 開箱安裝好 TailwindCSS v4
- 📦 **多種模板選擇** - 各種 Vue 生態系工具搭配（開發中）
- 💻 **TypeScript 支援** - 完整的型別安全開發體驗

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
# 基礎版 (預設)
npx vue-tailwind-starter create my-project --template base

# 含路由版（開發中）
npx vue-tailwind-starter create my-project --template router
```

## 📦 模板選項

| 模板       | 包含功能                         | 適用場景        |
| ---------- | -------------------------------- | --------------- |
| **base**   | Vue 3 + TypeScript + TailwindCSS | 最基礎專案      |
| **router** | + Vue Router                     | 包含 Vue Router |

## 📁 專案結構

```
my-project/
├── public/               # 靜態資源
├── src/
│   ├── assets/css/       # TailwindCSS 檔案
│   ├── components/       # Vue 組件
│   ├── views/           # 頁面組件
│   ├── App.vue
│   └── main.ts
├── vite.config.ts       # Vite 配置
└── package.json
```

## 🛠️ 開發指令

```bash
# 開發伺服器
npm run dev

# 型別檢查
npm run type-check

# 程式碼檢查
npm run lint

# 建置生產版本
npm run build
```

## 🤝 支援的包管理器

自動偵測並使用：

- 🥇 **pnpm** (推薦，最快)
- 🥈 **yarn**
- 🥉 **npm**

## 📄 授權

本專案採用 [MIT License](LICENSE) 授權。

### 開源宣告

- **授權條款**: MIT License
- **版權所有**: © 2024 Jamespig
- **開源狀態**: 完全開源，歡迎貢獻

MIT License 允許您：

- ✅ 自由使用、修改和分發
- ✅ 商業用途
- ✅ 專利使用
- ✅ 私人使用
- ✅ 修改和分發

唯一要求是保留原始版權聲明和授權條款。

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

### 如何貢獻

1. Fork 本專案
2. 建立您的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 🙋‍♂️ 支援

如有問題或建議，歡迎：

- 📧 發送郵件至：james7766646@gmail.com
- 🐛 提交 [Issue](https://github.com/jamespig/vue3-project-template/issues)
- 💬 討論功能需求

## 📞 聯絡資訊

- **作者**: Jamespig
- **郵箱**: james7766646@gmail.com
- **個人網站**: [https://jamespig.vercel.app/](https://jamespig.vercel.app/)

---

**由 ❤️ 用 Vue 和 TailwindCSS 製作**
