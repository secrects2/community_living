/**
 * Community Living Loop - Main JS
 * 包含：語言切換、App Modal 邏輯、儀表板資料切換
 */

document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') lucide.createIcons();
    initBackToTop();
    
    // 初始化語言
    const savedLang = localStorage.getItem('language') || 'zh-TW';
    applyLanguage(savedLang);
    
    // 預設載入 Dashboard 使用者視角
    switchRole('user');
});

// --- 語言切換功能 ---
const translations = {
    'zh-TW': {
        nav_title: '全齡共融賦能生態圈',
        nav_home: '首頁',
        nav_activities: '社區活動',
        nav_nutrition: '產品營養',
        nav_devices: '場域賦能', // 已更新
        nav_pro: '專業課程',
        nav_family: '家人守護',
        nav_workflow: '運作模式', // 已更新
        nav_partner: '合作夥伴',
        
        btn_ecosystem: '生態系整合功能',
        
        // Hero 區域更新 (對應 S2B2C 文案)
        hero_t1: '用一套好機制',
        hero_t2: '串聯社區資源',
        hero_t3: '讓每個人都能在熟悉的環境裡，<br>健康、安心、有價值地生活。', 
        hero_t4: '', // 新版設計中此行留空或依需求調整
        hero_desc: '我們以數位中台為核心，對上賦能據點夥伴 (2B)，對下服務長輩居民 (2C)，解決長照資源斷裂的痛點。',
        btn_explore: '開始探索服務',
        
        contents_desc: '針對 B 端與 C 端需求設計的六大核心引擎', // 已更新
        
        // 類別 (若首頁仍有用到這些 key)
        cat_market: '社區活動 & 課程', 
        cat_street: '產品營養組合', 
        cat_furniture: '場域賦能改造', // 已更新
        cat_journal: '社區資源入口',
        
        map_title: '服務據點與成果', 
        stat_loc: '服務據點', 
        stat_partner: '合作夥伴', 
        stat_success: '成功案例',
        
        footer_title: '全齡共融賦能生態圈',
        
        // SOP 區域更新
        sop_title: 'SOP 導入顧問服務', 
        sop_desc: '我們不只提供軟體，更提供落地的顧問輔導，確保服務品質標準化。',
        
        app_title: '全齡生態系整合平台'
    },
    'en': {
        nav_title: 'Community Living Loop',
        nav_home: 'Home',
        nav_activities: 'Activities',
        nav_nutrition: 'Nutrition',
        nav_devices: 'Space Empowerment', // Updated
        nav_pro: 'Pro Courses',
        nav_family: 'Family Care',
        nav_workflow: 'Business Model', // Updated
        nav_partner: 'Partners',
        
        btn_ecosystem: 'Ecosystem App',
        
        // Hero Section Updated
        hero_t1: 'A Robust Mechanism',
        hero_t2: 'Connecting Resources',
        hero_t3: 'Living a healthy, secure, and valuable life<br>in a familiar environment.',
        hero_t4: '',
        hero_desc: 'Core digital middleware empowering partners (2B) and serving seniors (2C) to bridge the care resource gap.',
        btn_explore: 'Start Exploring',
        
        contents_desc: 'Six Core Engines Designed for 2B and 2C Needs', // Updated
        
        cat_market: 'Activities & Classes', 
        cat_street: 'Nutrition Products', 
        cat_furniture: 'Space Transformation', // Updated
        cat_journal: 'Community Resources',
        
        map_title: 'Service Network', 
        stat_loc: 'Locations', 
        stat_partner: 'Partners', 
        stat_success: 'Success Cases',
        
        footer_title: 'Community Living Loop',
        
        // SOP Section Updated
        sop_title: 'SOP Consultancy', 
        sop_desc: 'Providing not just software, but on-site consultancy to ensure service standardization.',
        
        app_title: 'Ecosystem Platform'
    }
};

function toggleLanguage() {
    const currentLang = localStorage.getItem('language') || 'zh-TW';
    const newLang = currentLang === 'zh-TW' ? 'en' : 'zh-TW';
    applyLanguage(newLang);
    localStorage.setItem('language', newLang);
}

function applyLanguage(lang) {
    const texts = translations[lang];
    if (!texts) return;
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (texts[key]) el.textContent = texts[key];
    });
}

// --- 生態系 App Modal 邏輯 ---
const appModal = document.getElementById('ecosystemApp');

function openEcosystemApp() {
    appModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeEcosystemApp() {
    appModal.classList.add('hidden');
    document.body.style.overflow = '';
}

function switchTab(tabName) {
    document.querySelectorAll('[id^="nav-"]').forEach(btn => btn.classList.remove('nav-item-active', 'bg-gray-50'));
    document.getElementById(`nav-${tabName}`).classList.add('nav-item-active', 'bg-gray-50');
    ['dashboard', 'matching', 'sop'].forEach(view => {
        const el = document.getElementById(`view-${view}`);
        el.classList.toggle('hidden', view !== tabName);
    });
}

// --- 儀表板資料切換 ---
const dashboardContent = {
    'user': `<div class="grid md:grid-cols-3 gap-6 mb-8"><div class="bg-white p-6 rounded-xl shadow-sm border border-blue-100"><p class="text-sm text-gray-500 mb-1">ICOPE 健康分數</p><h3 class="text-4xl font-bold text-primary">82 <span class="text-sm font-normal text-green-500">▲ 持穩</span></h3></div><div class="bg-white p-6 rounded-xl shadow-sm border border-blue-100"><p class="text-sm text-gray-500 mb-1">累積健康點數</p><h3 class="text-4xl font-bold text-accent">1,250</h3></div><div class="bg-white p-6 rounded-xl shadow-sm border border-blue-100"><p class="text-sm text-gray-500 mb-1">下一次課程</p><h3 class="text-xl font-bold text-gray-800">口腔機能訓練</h3></div></div>`,
    'community': `<div class="grid md:grid-cols-4 gap-6 mb-8"><div class="bg-white p-5 rounded-xl shadow-sm border border-green-100"><p class="text-sm text-gray-500">今日訪客</p><h3 class="text-3xl font-bold text-gray-800">45</h3></div><div class="bg-white p-5 rounded-xl shadow-sm border border-green-100"><p class="text-sm text-gray-500">本月分潤</p><h3 class="text-3xl font-bold text-gray-800">$12K</h3></div></div>`,
    'expert': `<div class="grid md:grid-cols-3 gap-6 mb-8"><div class="bg-white p-6 rounded-xl shadow-sm border border-purple-100"><p class="text-sm text-gray-500">本月接單</p><h3 class="text-4xl font-bold text-purple-600">24</h3></div><div class="bg-white p-6 rounded-xl shadow-sm border border-purple-100"><p class="text-sm text-gray-500">預估收入</p><h3 class="text-4xl font-bold text-gray-800">$28,500</h3></div></div>`
};

function switchRole(role) {
    ['user', 'community', 'expert'].forEach(r => {
        const btn = document.getElementById(`btn-${r}`);
        if (!btn) return;
        if (r === role) {
            btn.classList.remove('text-gray-500', 'bg-white');
            btn.classList.add('bg-primary', 'text-white', 'shadow-sm');
        } else {
            btn.classList.add('text-gray-500');
            btn.classList.remove('bg-primary', 'text-white', 'shadow-sm');
        }
    });
    const content = document.getElementById('dashboard-dynamic-content');
    if (content) content.innerHTML = dashboardContent[role];
}

// --- 媒合模擬 ---
function selectOption(btn) {
    const btns = btn.parentElement.querySelectorAll('button');
    btns.forEach(b => b.classList.remove('bg-primary', 'text-white'));
    btn.classList.add('bg-primary', 'text-white');
}

function runAnalysis() {
    document.getElementById('icope-form').classList.add('hidden');
    document.getElementById('icope-result').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('icope-result').classList.add('hidden');
        document.getElementById('icope-success').classList.remove('hidden');
    }, 1500);
}

// --- 通用 ---
function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}
function openSearch() { alert('搜尋功能開發中'); }
function toggleCart() { alert('購物車功能開發中'); }
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if(btn) window.addEventListener('scroll', () => { btn.style.opacity = window.pageYOffset > 300 ? '1' : '0'; });
}
