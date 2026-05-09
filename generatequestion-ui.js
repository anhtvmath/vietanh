const QuestionBank = {
    ch1: { 
        t1: [
            SBT_DB_hambacbaCTC,
            SBT_NB_hambacbaTCT,
            SBT_BBT_hambacbaCTC,
            CT_hambacbaTCT,
            CT_hambacbaCTC,
            tenham1,
            tenham2,
            tenham3,
            tenham4,
            tenham_CT1,
            tenham_CT2,
            tenham_CT3,
            SBT_DB_hamtrungphuongTCTC,
            SBT_NB_hamtrungphuongTCTC
        ], 
        t2: [
            c1_d2_v1, 
            c1_d2_v2, 
            c1_d2_v3
        ], 
        t3: [c1_d3_v1, 
            c1_d3_v2, 
            c1_d3_v3
        ] 
    },
    ch2: { 
        t1: [c2_d1_v1, 
            c2_d1_v2, 
            c2_d1_v3
        ], 
        t2: [c2_d2_v1, 
            c2_d2_v2, 
            c2_d2_v3
        ], 
        t3: [c2_d3_v1, 
            c2_d3_v2, 
            c2_d3_v3
        ] 
    },
    ch3: { 
        t1: [TF_vidu1, 
            TF_vidu2, 
            TF_vidu3,
            TF_vidu4,
            TF_vidu5
        ]
    }

};

const dataStore = [
    { 
        key: 'ch1', 
        name: "CHƯƠNG 1: HÀM SỐ", 
        topics: [
            "Sự biến thiên của hàm số", 
            "Phép cộng cơ bản", 
            "Tìm số trong ô trống"
        ] 
    },
    { 
        key: 'ch2', 
        name: "CHƯƠNG 2: HÌNH HỌC - THỜI GIAN", 
        topics: [
            "So sánh & Thứ tự", 
            "Số liền trước - sau", 
            "Hình học & Thời gian"
        ] 
    },
        { 
        key: 'ch3', 
        name: "CHƯƠNG 3: TRẮC NGHIỆM ĐÚNG SAI", 
        topics: [
            "Xác suất"
        ] 
    }
];


function shuffleArray(array) {
    let newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

function renderUI() {
    let html = "";
    dataStore.forEach(chapter => {
        let topicHTML = "";
        chapter.topics.forEach((name, idx) => {
            let id = idx + 1;
            let maxAvailable = QuestionBank[chapter.key][`t${id}`].length;
            topicHTML += `
            <div class="topic-row">
                <div class="topic-info">
                    <span class="topic-label">
                        <i class="fa-solid fa-book-open-reader me-2" style="font-size: 11px; color: #94a3b8;"></i>Dạng ${id}: ${name}
                    </span>
                </div>
                <input type="number" id="input_${chapter.key}_t${id}" 
                       class="all-inputs topic-input" 
                       value="0" min="0" max="${maxAvailable}"
                       oninput="validateInput(this, '${chapter.key}')">
            </div>`;
        });
        html += `
        <div id="card_${chapter.key}" class="chapter-card">
            <div class="mb-3 text-primary text-uppercase">
                <strong><i class="fa-solid fa-book me-2"></i>${chapter.name}</strong>
            </div>
            ${topicHTML}
            <div class="d-flex gap-2">
                <button class="btn btn-gen flex-grow-1" onclick="genSpecific('${chapter.key}')">
                    <i class="fa-solid fa-pen-nib me-1"></i> XUẤT CÂU HỎI
                </button>
                <button class="btn btn-sum flex-grow-1" onclick="genSummary('${chapter.key}')">
                    <i class="fa-solid fa-layer-group me-1"></i> TỔNG HỢP
                </button>
            </div>
        </div>`;
    });
    document.getElementById('ui-container').innerHTML = html;
}

function validateInput(el, chKey) {
    let max = parseInt(el.getAttribute('max'));
    if (parseInt(el.value) > max) el.value = max;
    document.querySelectorAll('.all-inputs').forEach(input => { if (input !== el) input.value = 0; });
    document.querySelectorAll('.chapter-card').forEach(c => c.classList.remove('active'));
    document.getElementById(`card_${chKey}`).classList.add('active');
}

function genSpecific(chKey) {
    let output = "";
    const chapter = dataStore.find(c => c.key === chKey);
    let selected = false;
    
    chapter.topics.forEach((_, idx) => {
        const id = idx + 1;
        const inputEl = document.getElementById(`input_${chKey}_t${id}`);
        const count = parseInt(inputEl.value) || 0;
        if (count > 0) {
            selected = true;
            let shuffled = shuffleArray(QuestionBank[chKey][`t${id}`]);
            for(let i = 0; i < count; i++) { output += shuffled[i](); }
        }
    });

    if(!selected) {
        // Thay vì alert, ta tạo hiệu ứng rung cho card để báo lỗi
        const card = document.getElementById(`card_${chKey}`);
        card.style.animation = "shake 0.5s";
        setTimeout(() => card.style.animation = "", 500);
        return;
    }
    document.getElementById('export_text').value = output;
}

function genSummary(chKey) {
    document.querySelectorAll('.all-inputs').forEach(i => i.value = 0);
    let output = "";
    const chapter = dataStore.find(c => c.key === chKey);
    chapter.topics.forEach((_, idx) => {
        const id = idx + 1;
        const variants = QuestionBank[chKey][`t${id}`];
        output += variants[randomchoice(0, variants.length - 1)]();
    });
    document.getElementById('export_text').value = output;
    document.querySelectorAll('.chapter-card').forEach(c => c.classList.remove('active'));
    document.getElementById(`card_${chKey}`).classList.add('active');
}

function copyToClipboard() {
    const area = document.getElementById('export_text');
    if(!area.value) return;

    // Bôi đen văn bản bên phải như cũ
    area.select();
    area.setSelectionRange(0, 99999); // Cho thiết bị di động

    // Thực hiện copy
    document.execCommand("copy");

    // Phản hồi trên nút thay cho alert
    const btn = document.querySelector('.btn-copy');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check me-2"></i> ĐÃ COPY';
    btn.classList.replace('btn-dark', 'btn-success'); // Đổi màu sang xanh lá
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.replace('btn-success', 'btn-dark');
    }, 1200);
}
document.addEventListener("DOMContentLoaded", renderUI);
