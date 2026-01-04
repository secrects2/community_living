/**
 * 全齡共融賦能生態圈 - Community Living Loop
 * 主要 JavaScript 功能
 */

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化 Lucide 圖標
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // 初始化回到頂部按鈕
    initBackToTop();
    
    // 初始化平滑滾動
    initSmoothScroll();
    
    // 初始化購物車計數
    updateCartCount();
    
    console.log('Community Living Loop 已載入完成');
});

/**
 * 移動端菜單切換
 */
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    if (!menu || !icon) return;
    
    menu.classList.toggle('hidden');
    
    // 切換圖標
    if (menu.classList.contains('hidden')) {
        icon.setAttribute('data-lucide', 'menu');
    } else {
        icon.setAttribute('data-lucide', 'x');
    }
    
    // 重新初始化圖標
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

/**
 * 購物車切換
 */
function toggleCart() {
    const cartCount = getCartCount();
    
    if (cartCount === 0) {
        alert('購物車功能\n\n購物車是空的\n快去選購您喜歡的商品吧！');
    } else {
        alert(`購物車功能\n\n您的購物車中有 ${cartCount} 件商品`);
    }
}

/**
 * 獲取購物車商品數量
 */
function getCartCount() {
    // 從 localStorage 讀取購物車數據
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
}

/**
 * 更新購物車計數顯示
 */
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (!cartCountElement) return;
    
    const count = getCartCount();
    
    if (count > 0) {
        cartCountElement.textContent = count;
        cartCountElement.classList.remove('hidden');
    } else {
        cartCountElement.classList.add('hidden');
    }
}

/**
 * 添加商品到購物車
 */
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // 檢查商品是否已存在
    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingIndex > -1) {
        // 增加數量
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
        // 添加新商品
        cart.push({
            ...product,
            quantity: 1,
            addedAt: new Date().toISOString()
        });
    }
    
    // 保存到 localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // 更新顯示
    updateCartCount();
    
    // 顯示提示
    alert(`已添加「${product.name}」到購物車！`);
}

/**
 * 語言切換
 */
function toggleLanguage() {
    const languages = [
        { code: 'zh-TW', name: '中文 (繁體)' },
        { code: 'en', name: 'English' },
        { code: 'tw', name: '台語' }
    ];
    
    const currentLang = localStorage.getItem('language') || 'zh-TW';
    const currentIndex = languages.findIndex(lang => lang.code === currentLang);
    
    let message = '選擇語言 / Select Language:\n\n';
    languages.forEach((lang, index) => {
        const marker = lang.code === currentLang ? '✓' : ' ';
        message += `${marker} ${index + 1}. ${lang.name}\n`;
    });
    message += '\n請輸入 1-3:';
    
    const choice = prompt(message);
    
    if (choice && choice >= 1 && choice <= 3) {
        const selectedLang = languages[parseInt(choice) - 1];
        localStorage.setItem('language', selectedLang.code);
        alert(`語言已切換為：${selectedLang.name}\n\n完整的多語言功能需要後端支援。`);
        // 這裡可以添加實際的語言切換邏輯
    }
}

/**
 * 回到頂部
 */
function scrollToTop() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}

/**
 * 初始化回到頂部按鈕
 */
function initBackToTop() {
    const backToTopBtn = document.querySelector('#back-to-top, [onclick="scrollToTop()"]');
    
    if (!backToTopBtn) return;
    
    // 監聽滾動事件
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.classList.remove('show');
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
}

/**
 * 初始化平滑滾動
 */
function initSmoothScroll() {
    // 為所有錨點鏈接添加平滑滾動
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // 忽略 # 和 #login 等特殊鏈接
            if (href === '#' || href === '#login') {
                return;
            }
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // 減去導航欄高度
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // 關閉移動端菜單（如果開啟）
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

/**
 * 搜尋功能
 */
function openSearch() {
    const keyword = prompt('請輸入搜尋關鍵字：\n\n例如：運動課程、營養餐點、輔具租借');
    
    if (keyword && keyword.trim()) {
        alert(`搜尋功能\n\n正在搜尋：「${keyword}」\n\n完整的搜尋功能需要後端支援。`);
        // 這裡可以添加實際的搜尋邏輯
    }
}

/**
 * 活動報名
 */
function registerEvent(eventTitle) {
    const confirmed = confirm(`活動報名\n\n確定要報名「${eventTitle}」嗎？\n\n點擊確定後將開啟報名表單。`);
    
    if (confirmed) {
        alert('報名功能\n\n完整的報名系統需要後端支援。\n目前為展示版本。');
        // 這裡可以添加實際的報名邏輯
    }
}

/**
 * 課程詳情
 */
function showCourseDetail(courseId) {
    alert(`課程詳情\n\n課程 ID: ${courseId}\n\n完整的課程詳情頁面需要後端支援。`);
    // 這裡可以添加實際的課程詳情邏輯
}

/**
 * 輔具預約
 */
function bookDevice(deviceName) {
    const confirmed = confirm(`輔具預約\n\n確定要預約「${deviceName}」嗎？\n\n點擊確定後將開啟預約表單。`);
    
    if (confirmed) {
        alert('預約功能\n\n完整的預約系統需要後端支援。\n目前為展示版本。');
        // 這裡可以添加實際的預約邏輯
    }
}

/**
 * 工具函數：格式化日期
 */
function formatDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

/**
 * 工具函數：格式化貨幣
 */
function formatCurrency(amount) {
    return `NT$ ${amount.toLocaleString('zh-TW')}`;
}

/**
 * 工具函數：防抖
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 工具函數：節流
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 導出函數供全局使用
window.toggleMobileMenu = toggleMobileMenu;
window.toggleCart = toggleCart;
window.toggleLanguage = toggleLanguage;
window.scrollToTop = scrollToTop;
window.addToCart = addToCart;
window.openSearch = openSearch;
window.registerEvent = registerEvent;
window.showCourseDetail = showCourseDetail;
window.bookDevice = bookDevice;
