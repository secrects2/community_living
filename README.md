# 全齡共融賦能生態圈 - Community Living Loop

## 版本資訊
- **版本**: fce7178a
- **類型**: 純 HTML + CSS + JavaScript（無 React 依賴）
- **構建日期**: 2025-01-04

## 文件結構

```
static_website_fce7178a/
├── index.html          # 主頁面（完整的 HTML 文件）
├── images/             # 圖片資源文件夾（需要您自行添加）
│   ├── hero-japanese-community.jpg
│   ├── product-calcium-combo.png
│   ├── product-nutrition-meal.png
│   └── ... (其他圖片)
├── css/                # 自定義 CSS（可選）
├── js/                 # 自定義 JavaScript（可選）
└── README.md           # 本說明文件
```

## 技術棧

- **HTML5** - 語義化標記
- **Tailwind CSS** - 通過 CDN 引入（無需安裝）
- **Lucide Icons** - 圖標庫（CDN）
- **Google Fonts** - Noto Serif JP + Noto Sans TC
- **原生 JavaScript** - 無框架依賴

## 功能特點

### 已實現功能
- ✅ 響應式導航欄（桌面 + 移動端）
- ✅ Hero 區塊（大標題 + 插圖）
- ✅ 使命願景區塊
- ✅ 五大服務內容卡片（MARKET、CULTURE、STREET、FURNITURE、JOURNAL）
- ✅ 不規則有機色塊背景裝飾
- ✅ 平滑滾動錨點導航
- ✅ 回到頂部按鈕
- ✅ 移動端菜單切換
- ✅ 頁尾資訊

### 互動功能
- 移動端菜單開關
- 購物車提示（alert）
- 語言切換提示（alert）
- 搜尋功能提示（alert）
- 平滑滾動到錨點
- 回到頂部

## 部署指南

### 方法 1：GitHub Pages

1. **創建 GitHub 倉庫**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **啟用 GitHub Pages**
   - 進入倉庫 Settings → Pages
   - Source 選擇 "Deploy from a branch"
   - Branch 選擇 "main" 和 "/ (root)"
   - 點擊 Save

3. **訪問網站**
   - 網址：`https://YOUR_USERNAME.github.io/YOUR_REPO/`

### 方法 2：本地測試

1. **直接在瀏覽器打開**
   ```bash
   # 使用瀏覽器打開 index.html
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

2. **使用本地伺服器（推薦）**
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Node.js (需安裝 http-server)
   npx http-server -p 8000
   ```
   然後訪問 `http://localhost:8000`

### 方法 3：其他靜態主機

- **Netlify**: 拖放文件夾到 Netlify Drop
- **Vercel**: 使用 Vercel CLI 部署
- **Cloudflare Pages**: 連接 Git 倉庫自動部署

## 圖片資源

**重要**: 本包不包含圖片文件，您需要自行添加以下圖片到 `images/` 文件夾：

### 必需圖片
- `hero-japanese-community.jpg` - Hero 區塊主圖
- `product-calcium-combo.png` - 高鈣營養組合包
- `product-nutrition-meal.png` - 健康營養餐盒

### 圖片規格建議
- Hero 圖片：1200x800px，JPG 格式
- 產品圖片：600x600px，PNG 格式（透明背景）
- 壓縮優化：使用 TinyPNG 或 ImageOptim 壓縮至 50-70%

## 自定義配置

### 修改顏色
在 `index.html` 的 `<script>` 標籤中修改 Tailwind 配置：

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#1E3A8A',      // 主色（深藍）
                secondary: '#4ECDC4',    // 輔助色（青綠）
                accent: '#F7DC6F',       // 強調色（黃色）
                coral: '#FFB6A3',        // 珊瑚色
                lavender: '#A78BFA'      // 薰衣草紫
            }
        }
    }
}
```

### 修改字體
在 `<link>` 標籤中更換 Google Fonts：

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

### 添加自定義 CSS
在 `<style>` 標籤中添加：

```css
/* 自定義樣式 */
.my-custom-class {
    /* ... */
}
```

## 瀏覽器支援

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ 移動端瀏覽器（iOS Safari, Chrome Mobile）

## 效能優化

### 已優化項目
- ✅ 使用 CDN 加速資源載入
- ✅ 最小化 HTML 結構
- ✅ 使用語義化標籤提升 SEO
- ✅ 響應式圖片（建議使用 `srcset`）

### 建議優化
- 壓縮圖片（TinyPNG）
- 使用 WebP 格式
- 啟用瀏覽器快取
- 使用 CDN 託管圖片

## SEO 優化

已包含基本 SEO 標籤：
- `<title>` - 頁面標題
- `<meta name="description">` - 頁面描述
- `<meta name="keywords">` - 關鍵字
- 語義化 HTML5 標籤

## 常見問題

### Q: 為什麼圖片無法顯示？
A: 請確保圖片文件放在 `images/` 文件夾中，並且文件名與 HTML 中的引用一致。

### Q: 如何添加更多頁面？
A: 創建新的 HTML 文件（如 `about.html`），並在導航欄中添加鏈接。

### Q: 可以使用自己的圖標嗎？
A: 可以，移除 Lucide Icons CDN，使用 Font Awesome 或自定義 SVG。

### Q: 如何添加 Google Analytics？
A: 在 `</head>` 前添加 Google Analytics 追蹤代碼。

## 授權

© 2025 Community Living Loop. All rights reserved.

## 聯絡資訊

如有問題或建議，請聯絡開發團隊。

---

**版本**: fce7178a  
**最後更新**: 2025-01-04
