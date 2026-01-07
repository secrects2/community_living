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
        nav_devices: '輔具申請',
        nav_pro: '專業課程',
        nav_family: '家人守護',
        btn_ecosystem: '生態系整合功能',
        hero_t1: '您的', hero_t2: '全方位', hero_t3: '樂齡生活', hero_t4: '最佳夥伴',
        hero_desc: '連結社區、健康與專業照護。探索附近活動、訂購營養餐點、申請專業輔具租借服務，您的所有需求都在這裡。',
        btn_explore: '開始探索服務',
        contents_desc: '探索我們的服務內容',
        cat_market: '社區活動 & 課程', cat_street: '產品營養組合', cat_furniture: '輔具申請租借', cat_journal: '社區資源入口',
        map_title: '服務網絡地圖', stat_loc: '服務據點', stat_partner: '合作夥伴', stat_success: '成功案例',
        footer_title: '全齡共融賦能生態圈',
        sop_title: '專業照護 SOP', sop_desc: '標準化場域與服務，確保品質',
        nav_partner: '合作夥伴招募', // 新增
        app_title: '全齡生態系整合平台'
    },
    'en': {
        nav_title: 'Community Living Loop',
        nav_home: 'Home',
        nav_activities: 'Activities',
        nav_nutrition: 'Nutrition',
        nav_devices: 'Devices',
        nav_pro: 'Pro Courses',
        nav_family: 'Family Care',
        btn_ecosystem: 'Ecosystem App',
        hero_t1: 'Your', hero_t2: 'Comprehensive', hero_t3: 'Cool-Aging Life', hero_t4: 'Partner',
        hero_desc: 'Connecting Community, Health, and Professional Care. All your needs in one place.',
        btn_explore: 'Start Exploring',
        contents_desc: 'Explore Our Services',
        cat_market: 'Activities & Classes', cat_street: 'Nutrition Products', cat_furniture: 'Assistive Devices', cat_journal: 'Community Resources',
        map_title: 'Service Network', stat_loc: 'Locations', stat_partner: 'Partners', stat_success: 'Success Stories',
        footer_title: 'Community Living Loop',
        sop_title: 'Professional Care SOP', sop_desc: 'Standardized services ensuring quality',
        nav_partner: 'Become a Partner', // 新增
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
