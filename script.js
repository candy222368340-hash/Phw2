// ==========================================
// 1. 第一單元：動態數據故事圖表控制
// ==========================================
const chartData = {
    all: { mainY: 50, mainH: 200, subY: 50, subH: 200, valMain: "31.7%", valSub: "54.3%", desc: "<strong>全台普查概況：</strong>全台僅有 31.7% 的民眾將台語作為主要使用語言，另有 54.3% 為次要使用。顯示多數人已將其視為附屬語言。" },
    young: { mainY: 200, mainH: 50, subY: 100, subH: 150, valMain: "7.4%", valSub: "約 40%", desc: "<strong>6-14 歲族群：</strong>主要使用台語的孩子骤降至 <strong>7.4%</strong>！這代表年輕一代在學齡期間，母語已幾乎被強勢的國語完全取代。" },
    elder: { mainY: 20, mainH: 230, subY: 180, subH: 70, valMain: "65.9%", valSub: "約 25%", desc: "<strong>65 歲以上長者：</strong>仍有高達 65.9% 的長者以此為核心主語。老少圖表的極端反差，正是專家所指出的『懸崖式世代斷層』。" }
};

function updateChart(mode) {
    // 切換按鈕主動樣式
    const buttons = document.querySelectorAll('.chart-controls .btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // 更新 SVG 柱狀圖高度與數值 (模擬 Y 軸自 250 基線向上延伸)
    const data = chartData[mode];
    
    const barMain = document.getElementById('bar-main');
    const barSub = document.getElementById('bar-sub');
    
    barMain.setAttribute('y', data.mainY);
    barMain.setAttribute('height', data.mainH);
    barSub.setAttribute('y', data.subY);
    barSub.setAttribute('height', data.subH);
    
    document.getElementById('val-main').textContent = data.valMain;
    document.getElementById('val-main').setAttribute('y', data.mainY - 10);
    
    document.getElementById('val-sub').textContent = data.valSub;
    document.getElementById('val-sub').setAttribute('y', data.subY - 10);
    
    // 更新文字說明
    document.getElementById('chart-desc').innerHTML = data.desc;
}

// ==========================================
// 2. 第二單元：沉浸式家教客群角色切換
// ==========================================
const personas = [
    {
        title: "客群一：語文競賽指導（佔比最高）",
        meta: "主要推手：升學導向的家長 ✕ 缺乏指導師資的學校",
        story: "「孩子在學校報名了台語朗讀比賽，但回到家根本連一句流暢的台語都不會說...」家長 Olivia 為了讓孩子在競賽中獲得頭銜亮点豐富學習歷程，轉而聘請校外家教。教師許君無奈指出，目前有超過<b>七成</b>的需求其實是『競賽導向』而非日常溝通。學生往往能背出華麗的演講稿，但在日常生活中依然無法用台語點一碗滷肉飯。",
        quote: "現場窘境：台語變成了舞台上的表演工具，而非生活文化。"
    },
    {
        title: "客群二：專業證照考照（職場剛需）",
        meta: "主要推手：學校常規教師 ✕ 本土語必修政策引力",
        story: "隨著 108 課綱將本土語列為國高中必修，校園對師資認證需求急遽攀升。中學數學老師『阿表龍』表示，面對少子化衝擊，多一張台語認證執照，就能在班級數減少時多教幾門課。這類成人學員目標極度明確——高效率通過台語認證檢定，將語言轉化為職場上的保險與競爭力。",
        quote: "市場誘因：政策強制性所帶動的結構性功利剛需。"
    },
    {
        title: "客群三：語言與文化傳承（情感歸屬）",
        meta: "主要推手：驚覺文化消失的年輕人 ✕ 穩定的學習個體",
        story: "一位 28 歲的學員在高帷宸老師的課堂上說：『阿嬤過世後，家裡的台語突然消失了，連帶祭拜禮俗我也聽不懂，我想找回跟阿嬤的溫存與連結。』雖然這類學員不是市場大宗，但高老師指出，他們是學習最穩定、最能在日常中看見語言能力漸進成長的一群人。",
        quote: "真實傳承：當情感自信被喚醒，語言才真正有了生命。"
    }
];

function switchPersona(index) {
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabs[index].classList.add('active');

    const display = document.getElementById('persona-display');
    const p = personas[index];
    
    display.innerHTML = `
        <span class="persona-meta">${p.meta}</span>
        <h3>${p.title}</h3>
        <p style="margin: 15px 0; color: #444;">${p.story}</p>
        <blockquote style="background: #f1f3f5; padding: 10px 15px; border-left: 4px solid #2d6a4f; font-style: italic;">
            ${p.quote}
        </blockquote>
    `;
}

// ==========================================
// 3. 第三單元：腔調實驗室控制
// ==========================================
const phrases = {
    spoon: { std: "thîng-sî (調羹/湯匙)", var: "thûi-á (部分地區如澎湖腔特殊講法)", note: "標準化有利於大眾檢定推廣，但民間常透過保留特殊腔口防止語言單一化。" },
    soap: { std: "sap-bûn (雪文/雪朋)", var: "te̍k-bûn / lî-bûn (地域性差異)", note: "南北腔調在生活詞彙上的歧異，體現了台語由生活中演變出的豐富樣貌。" },
    egg: { std: "ke-nn̂g / kue-nn̂g", var: "ke-înn (偏泉腔特殊發音偏好)", note: "老師通常抱持謙虛態度，在教導標準答案的同時，鼓勵孩子留下家庭的腔調特色。" }
};

let currentPhrase = "spoon";

function switchPhrase(key) {
    currentPhrase = key;
    const buttons = document.querySelectorAll('.phrase-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    document.getElementById('std-roman').textContent = phrases[key].std;
    document.getElementById('var-roman').textContent = phrases[key].var;
    document.querySelector('.highlight-card .note').textContent = phrases[key].note;
    document.getElementById('player-status').textContent = "變更詞彙，等待模擬播放。";
}

function simulateAudio() {
    const status = document.getElementById('player-status');
    status.textContent = "🎵 正在播放：中央標準腔... ➔ 接著對比切換至地方特殊腔口...";
    status.style.color = "#2d6a4f";
    
    setTimeout(() => {
        status.textContent = `✅ 模擬對比完成！當前詞彙：【${phrases[currentPhrase].std.split(' ')[0]}】。老師正在指導學生感受音調的微調。`;
    }, 2000);
}

// ==========================================
// 4. 第四單元：互動政策模型影響力預測
// ==========================================
const policyImpact = {
    system: { incentive: 85, life: 25, heritage: 20, text: "<b>分析反饋：</b>納入升學檢定能瞬間拉高功利市場的『學習動機』(85%)，但正如專家陳豐惠所言，若沒有回歸生活，台語依然只會在課堂和考卷裡，難以根植日常。" },
    benefit: { incentive: 70, life: 65, heritage: 40, text: "<b>分析反饋：</b>許慧如教授推薦。公務員加薪與社會實質利益掛鉤，能促使食衣住行文化重新建立，有效提升職場與生活日常實踐率(65%)。" },
    integration: { incentive: 45, life: 55, heritage: 90, text: "<b>分析反饋：</b>許宸豪創辦人提倡。整併老一輩的優秀口說與年輕人的系統讀寫，雖然短期內誘因擴散較慢，但對跨世代的『文化傳承度』(90%)具有最強的核心修補作用！" }
};

function togglePolicy(element, type) {
    const cards = document.querySelectorAll('.policy-card');
    cards.forEach(card => card.classList.remove('selected'));
    element.classList.add('selected');

    const impact = policyImpact[type];
    
    // 動態更新進度條長度
    document.getElementById('bar-incentive').style.width = impact.incentive + "%";
    document.getElementById('bar-life').style.width = impact.life + "%";
    document.getElementById('bar-heritage').style.width = impact.heritage + "%";
    
    // 更新說明文字
    document.getElementById('policy-desc').innerHTML = impact.text;
}

// 網頁初始加載完成後的預設觸發
window.addEventListener('DOMContentLoaded', () => {
    switchPersona(0); // 預設展示第一個角色
});