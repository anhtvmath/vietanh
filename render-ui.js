const sidebarHTML = `
<div class="container-fluid">
    <div class="row">
        <div class="col-md-4">
            <div class="sidebar">

                <div class="d-grid mb-3">
                    <button class="btn btn-info text-white fw-bold" onclick="goHome()">🏠 TRANG CHÍNH</button>
                </div>

                <div class="mb-4">
                    <label>Số câu mỗi chủ đề:</label>
                    <input type="number" id="num_input" class="form-control" value="5">
                </div>
                <div class="chapter-section">
                    <div class="chapter-title">📖 Chương 1: Hàm số - Loga</div>
                    <div class="d-grid gap-1">
                        <button class="btn btn-outline-primary btn-topic" onclick="generateByTopic('txd_loga')">1.1. Tập xác định Logarit</button>
                        <button class="btn btn-outline-primary btn-topic" onclick="generateByTopic('pt_matcau')">1.2. Phương trình mặt cầu</button>
                        <button class="btn btn-outline-primary btn-topic" onclick="generateByTopic('bbt_hambacbactc')">1.3. Nghịch biến hàm số bậc ba - BBT</button>
                        <button class="btn btn-outline-primary btn-topic" onclick="generateByTopic('nb_hambacbatct')">1.4. Nghịch biến hàm số bậc ba - HS</button>
                        <button class="btn btn-outline-primary btn-topic" onclick="generateByTopic('db_hambacbactc')">1.5. Đồng biến hàm số bậc ba - HS</button>
                        <button class="btn btn-primary btn-summary" onclick="generateSummary(['txd_loga', 'pt_matcau', 'bbt_hambacbactc', 'nb_hambacbatct','db_hambacbactc'])">TỔNG HỢP CHƯƠNG 1</button>
                    </div>
                </div>
                <div class="chapter-section">
                    <div class="chapter-title">📖 Chương 2: Nguyên hàm - Tích phân</div>
                    <div class="d-grid gap-1">
                        <button class="btn btn-outline-success btn-topic" onclick="generateByTopic('c2_nh')">2.1. Nguyên hàm cơ bản</button>
                        <button class="btn btn-outline-success btn-topic" onclick="generateByTopic('c2_tp')">2.2. Tích phân xác định</button>
                        <button class="btn btn-success btn-summary" onclick="generateSummary(['c2_nh', 'c2_tp'])">TỔNG HỢP CHƯƠNG 2</button>
                    </div>
                </div>
                <div class="mt-4 pt-3 border-top">
                    <button class="btn btn-danger w-100" onclick="copyToClipboard()">Sao chép LaTeX</button>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card border-0 shadow">
                <div class="card-header bg-white fw-bold text-secondary px-4 py-3" style="font-size: 20px;">📝 MÃ NGUỒN LATEX</div>
                <textarea id="export_text" class="form-control" spellcheck="false" readonly></textarea>
            </div>
        </div>
    </div>
</div>`;

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById('app-container');
    if (app) app.innerHTML = sidebarHTML;
});

function callQuestion(type) {
    try {
        if(type === 'txd_loga') return TF_template();
        if(type === 'pt_matcau') return get_PT_Matcau();
        if(type === 'bbt_hambacbactc') return get_BBT_hambacbaCTC();
        if(type === 'nb_hambacbatct') return get_NB_hambacbaTCT();
        if(type === 'db_hambacbactc') return get_DB_hambacbaCTC();
        if(type === 'c2_nh') return TF_vidu1();
        if(type === 'c2_tp') return TF_vidu6();
    } catch (e) { return ""; }
    return "";
}

function generateByTopic(type) {
    let n = parseInt(document.getElementById('num_input').value) || 1;
    let out = "";
    for (let i = 0; i < n; i++) out += callQuestion(type);
    document.getElementById('export_text').value = out;
}

function generateSummary(topicList) {
    let out = "";
    topicList.forEach(topic => { out += callQuestion(topic); });
    document.getElementById('export_text').value = out;
}

function copyToClipboard() {
    const textarea = document.getElementById("export_text");
    if (!textarea.value) return;
    textarea.select();
    document.execCommand("copy");
}

function goHome() {
    window.location.href = 'home.html'; 
}