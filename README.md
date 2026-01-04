# 社區生活循環 - 純前端版本

這是「社區生活循環」網站的純前端靜態版本，已移除所有後端依賴，可直接部署到 GitHub Pages、Vercel、Netlify 等靜態網站託管服務。

## 📦 包含內容

- ✅ 所有頁面的 HTML、CSS、JavaScript（已編譯和壓縮）
- ✅ 所有圖片資源（/images 目錄）
- ✅ 所有字體文件（/fonts 目錄）
- ✅ SEO 文件（sitemap.xml、robots.txt）
- ✅ 模擬數據（已內建在 JavaScript 中）

## 🚀 部署方式

### 方法 1：GitHub Pages

1. 在 GitHub 創建新倉庫
2. 將此目錄的所有文件推送到倉庫
3. 進入倉庫 Settings → Pages
4. Source 選擇 "Deploy from a branch"
5. Branch 選擇 "main" 和 "/ (root)"
6. 點擊 Save，等待部署完成

### 方法 2：Vercel

1. 訪問 [vercel.com](https://vercel.com)
2. 點擊 "New Project"
3. 導入您的 GitHub 倉庫
4. Framework Preset 選擇 "Other"
5. Build Command 留空
6. Output Directory 輸入 `.`
7. 點擊 Deploy

### 方法 3：Netlify

1. 訪問 [netlify.com](https://netlify.com)
2. 拖放此目錄到 Netlify Drop
3. 或連接 GitHub 倉庫自動部署

## 📁 文件結構

```
frontend_build/
├── index.html              # 主頁面（包含所有路由）
├── robots.txt              # 搜索引擎爬蟲規則
├── sitemap.xml             # 網站地圖
├── assets/                 # 編譯後的 CSS 和 JavaScript
│   ├── index-*.css         # 所有樣式（已壓縮）
│   └── index-*.js          # 所有腳本（已壓縮）
├── images/                 # 所有圖片資源
└── fonts/                  # 字體文件
```

## ⚠️ 功能限制

由於這是純前端版本，以下功能使用模擬數據：

- **用戶登入/註冊**：使用 localStorage 模擬
- **課程報名**：數據保存在瀏覽器本地
- **產品購買**：購物車數據保存在本地
- **輔具租借**：租借記錄保存在本地
- **評論系統**：評論保存在本地
- **客服聊天**：模擬聊天功能

## 🔧 本地測試

如果您想在本地測試網站：

```bash
# 使用 Python 啟動簡單的 HTTP 服務器
python3 -m http.server 8000

# 或使用 Node.js 的 http-server
npx http-server -p 8000
```

然後訪問 http://localhost:8000

## 📝 自定義配置

### 修改網站標題和描述

編輯 `index.html` 文件中的 `<title>` 和 `<meta>` 標籤。

### 修改圖片

替換 `images/` 目錄中的圖片文件，保持文件名不變。

### 修改內容

由於是編譯後的版本，如需修改內容，建議：
1. 回到原始專案修改源代碼
2. 重新構建（`pnpm build`）
3. 複製新的構建文件

## 🌐 推薦的託管服務

| 服務 | 免費額度 | 自定義域名 | SSL | 推薦度 |
|------|---------|-----------|-----|--------|
| **Vercel** | 無限 | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| **Netlify** | 100GB/月 | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| **GitHub Pages** | 1GB | ✅ | ✅ | ⭐⭐⭐⭐ |
| **Cloudflare Pages** | 無限 | ✅ | ✅ | ⭐⭐⭐⭐ |

## 📞 支援

如有問題，請參考：
- [Vercel 文檔](https://vercel.com/docs)
- [Netlify 文檔](https://docs.netlify.com)
- [GitHub Pages 文檔](https://docs.github.com/pages)

---

**版本**：1.0.0  
**構建日期**：2025-01-04  
**原始專案**：community_living_loop
