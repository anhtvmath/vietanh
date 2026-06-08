// =========================================================================
// KHU VỰC XỬ LÝ LOGIC ĐÃ ĐƯỢC FIX LỖI THIẾU CÂU / LỖI PARSE EXTEST
// =========================================================================

// XỬ LÝ ĐĂNG NHẬP
function handleLogin() {
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    let loginSuccess = false; let accountName = "";

    if (typeof USERS !== 'undefined') {
        const acc = USERS.find(x => x.user === u && x.pass === p);
        if (acc) { loginSuccess = true; accountName = acc.name; }
    } else if (u === 'admin' && p === 'admin') { 
        loginSuccess = true; accountName = "Admin Offline";
    }

    if (loginSuccess) {
        sessionStorage.setItem('active', 'true');
        sessionStorage.setItem('username_logged', accountName);
        showMainApp(accountName);
    } else {
        document.getElementById('login-msg').style.display = 'block';
    }
}

function showMainApp(name) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('app-container').style.display = 'flex';
    document.getElementById('user-name').innerText = "Chào " + name;
}

function handleLogout() { sessionStorage.clear(); window.location.reload(); }
if(sessionStorage.getItem('active') === 'true') {
    showMainApp(sessionStorage.getItem('username_logged') || "Thành viên");
}

// CHUYỂN ĐỔI QUA LẠI GIỮA TAB TRẮC NGHIỆM VÀ TAB XEM CODE
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// KHỞI TẠO MENU CÂY
function renderMenu() {
    let html = '';
    database.forEach((ch, cIdx) => {
        html += `<div class="ch-box"><span class="ch-title">${ch.title}</span>`;
        ch.topics.forEach((tp, tIdx) => {
            const tpId = `tp_${cIdx}_${tIdx}`;
            html += `<div class="tp-group">
                <div class="tp-header" onclick="toggle('${tpId}_s')">
                    <input type="checkbox" id="${tpId}" onclick="event.stopPropagation(); checkAll('${tpId}', 'data-tp')">
                    <span style="flex:1">${tp.title}</span><span>▼</span>
                </div>
                <div id="${tpId}_s" class="sub-box">`;
            tp.subtopics.forEach((st, sIdx) => {
                const stId = `${tpId}_st${sIdx}`;
                html += `<div class="sub-header" onclick="toggle('${stId}_v')">
                    <input type="checkbox" id="${stId}" onclick="event.stopPropagation(); checkAll('${stId}', 'data-st')" data-tp="${tpId}">
                    <span style="flex:1">${st.title}</span><span>▶</span>
                </div>
                <div id="${stId}_v" class="var-box">`;
                
                st.variants.forEach((v, vIdx) => {
                    const source = v.method || v.id;
                    const methodVal = Array.isArray(source) ? source.join('|') : source;
                    const paramsVal = v.params || '';
                    const uniqueId = `v_${cIdx}_${tIdx}_${sIdx}_${vIdx}`;

                    html += `<div class="var-item">
                        <input type="checkbox" class="v-cb" 
                            id="${uniqueId}" 
                            data-method="${methodVal}" 
                            data-params="${paramsVal}" 
                            data-st="${stId}" 
                            data-tp="${tpId}" 
                            onchange="updateAll()">
                        <label for="${uniqueId}">${v.name}</label>
                    </div>`;
                });
                html += `</div>`;
            });
            html += `</div></div>`;
        });
        html += `</div>`;
    });
    document.getElementById('menu-container').innerHTML = html;
}

function toggle(id) { 
    const el = document.getElementById(id);
    el.style.display = (el.style.display === "block") ? "none" : "block";
}

function checkAll(pId, attr) {
    const p = document.getElementById(pId);
    document.querySelectorAll(`[${attr}="${pId}"]`).forEach(c => {
        c.checked = p.checked;
        if(attr === 'data-tp') {
            document.querySelectorAll(`[data-st="${c.id}"]`).forEach(cc => cc.checked = p.checked);
        }
    });
    updateAll();
}

// LOGIC ĐỒNG BỘ NÂNG CAO: TỰ ĐỘNG PHÁT HIỆN HÀM THƯ VIỆN ĐỂ SINH ĐỀ TRẮC NGHIỆM
function updateAll() {
    let rawLatex = "";
    let checkedBoxes = document.querySelectorAll('.v-cb:checked');

    if(checkedBoxes.length === 0) {
        document.getElementById('code-out').value = "";
        document.getElementById('quiz-view-container').innerHTML = `<div style="text-align: center; color: #7f8c8d; margin-top: 50px;">Vui lòng tích chọn các dạng bài tập ở danh mục bên trái để bắt đầu tạo đề làm bài trắc nghiệm tương tác!</div>`;
        document.getElementById('quiz-actions-block').style.display = 'none';
        document.getElementById('ketqua').style.display = 'none';
        return;
    }

    checkedBoxes.forEach(cb => {
        const methodAttr = cb.getAttribute('data-method') || "";
        const params = cb.getAttribute('data-params') || "";
        const idList = methodAttr.split('|');
        const selectedMethod = idList[Math.floor(Math.random() * idList.length)];
        
        if (typeof window[selectedMethod] === 'function') {
            let resMathX = window[selectedMethod](params);
            if (resMathX) rawLatex += resMathX + "\n";
        } else {
            // Khung fallback giả định phòng trường hợp hàm chưa kịp load từ CDN
            rawLatex += `\\begin{ex}\n[Mẫu thử nghiệm] Đang kết nối hàm dữ liệu: $${selectedMethod}(${params})$. Hàm số nào sau đây đồng biến trên khoảng $(0; +\\infty)$?\n\\choice\n{\\True $y = x^2$}\n{$y = -x^2$}\n{$y = \\frac{1}{x}$}\n{$y = -x+1$}\n\\loigiai{Với $x > 0$, hàm số $y = x^2$ có đạo hàm $y' = 2x > 0$ nên đồng biến.}\n\\end{ex}\n`;
        }
    });

    document.getElementById('code-out').value = rawLatex.trim();
    buildQuizFromLatex(rawLatex);
}

function regenerateQuiz() {
    updateAll();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// SỬA LỖI REGEX CHUẨN HÓA LATEX SANG HTML
function cleanLatex(text) {
    if (!text) return "";
    text = text.replace(/\\immini(?:\[.*?\])?\s*{([\s\S]*?)}\s*{([\s\S]*?)}/g, (m, c, f) => c.trim() + "\n" + f.trim());
    text = text.replace(/\\begin{tikzpicture(?![}])/g, "\\begin{tikzpicture}").replace(/(\\end{tikzpicture})\s*}/g, "$1");
    let out = text.replace(/\$\$[\s\r\n]*(___TIKZ_PLACEHOLDER_\d+___)[\s\r\n]*\$\$/g, "$1");
    out = out.replace(/\\begin\{center\}[\s\r\n]*(___TIKZ_PLACEHOLDER_\d+___)[\s\r\n]*\\end\{center\}/g, "$1");
    out = out.replace(/\\heva\{([\s\S]*?)\}/g, (m, c) => "\\left\\{ \\begin{aligned} " + c + " \\end{aligned} \\right.");
    out = out.replace(/\\hoac\{([\s\S]*?)\}/g, (m, c) => "\\left[ \\begin{aligned} " + c + " \\end{aligned} \\right.");
    
    out = out.replace(/(?:(?:\$\$|\\begin\{center\})\s*)?\\begin\{tabular\}\{([\s\S]*?)\}([\s\S]*?)\\end\{tabular\}(?:\s*(?:\$\$|\\end\{center\}))?/g, (m, a, c) => {
        let rHtml = '<table border="1" cellpadding="6" style="border-collapse: collapse; text-align:center; margin: 15px auto; font-size: inherit; line-height: 1.3;">';
        c.split(/\\\\/).forEach(r => {
            let clR = r.replace(/\\hline/g, "").trim(); if (!clR) return; rHtml += '<tr>';
            clR.split('&').forEach(cell => rHtml += `<td>${cell.trim()}</td>`); rHtml += '</tr>';
        });
        return rHtml + '</table>';
    });

    out = out.replace(/([a-zA-Z0-9])<([a-zA-Z0-9])/g, "$1 < $2").replace(/([a-zA-Z0-9])>([a-zA-Z0-9])/g, "$1 > $2");
    let parts = out.split(/(\\begin\{align\*?\}[\s\S]*?\\end\{align\*?\}|\\begin\{eqnarray\*?\}[\s\S]*?\\end\{eqnarray\*?\}|\\begin\{array\}[\s\S]*?\\end\{array\}|\\begin\{cases\}[\s\S]*?\\end\{cases\}|\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] && !parts[i].includes('\\begin{') && !parts[i].startsWith('$$') && !parts[i].startsWith('$')) {
            parts[i] = parts[i].replace(/\\\\(\[[^\]]*\])?/g, "<br/>");
        }
    }
    return parts.join("");
}

function smartTikZ(text) {
    let clean = text.replace(/\\begin\{center\}\s*(\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\})\s*\\end\{center\}/g, "$1");
    clean = clean.replace(/(\$\$?)\s*(\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\})\s*\$\$?/g, "$2");
    return clean.replace(/\\begin\{tikzpicture\}([\s\S]*?)\\end\{tikzpicture\}/g, match => `<img src="https://i.upmath.me/svg/${encodeURIComponent(match)}" class="tikz-img">`);
}

// NÂNG CẤP HÀM BÓC TÁCH NGOẶC NHỌN ĐỂ TRÁNH NUỐT PHƯƠNG ÁN TRẮC NGHIỆM KHÔNG ĐỀU NHAU
function getBalancedContent(str, startIndex) {
    let count = 0, content = "", foundStart = false, i = startIndex;
    for (; i < str.length; i++) {
        if (str[i] === '{') { 
            if (!foundStart) { foundStart = true; continue; } 
            count++; 
        } else if (str[i] === '}') { 
            if (count === 0 && foundStart) return { content: content, nextIndex: i + 1 }; 
            count--; 
        }
        if (foundStart) content += str[i];
    }
    return { content: content, nextIndex: i };
}

// SỬA LỖI CHÍNH: KHÔNG PHÂN BIỆT CHỮ HOA CHỮ THƯỜNG CỦA CẶP THẺ EX ĐỂ HIỂN THỊ ĐỦ CÂU
function buildQuizFromLatex(latexCode) {
    // Sử dụng cờ 'gi' để tìm kiếm toàn bộ câu bất kể viết hoa \begin{EX} hay viết thường \begin{ex}
    let exBlocks = latexCode.match(/\\begin\{ex\}([\s\S]*?)\\end\{ex\}/gi);
    
    if (!exBlocks || exBlocks.length === 0) {
        document.getElementById("quiz-view-container").innerHTML = `<div style="text-align: center; color: #7f8c8d; margin-top: 50px;">Không tìm thấy câu hỏi trắc nghiệm hợp lệ ở định dạng ExTest!</div>`;
        document.getElementById('quiz-actions-block').style.display = 'none';
        return;
    }

    shuffleArray(exBlocks); // Trộn thứ tự câu hỏi ngẫu nhiên
    
    const viewContainer = document.getElementById("quiz-view-container");
    viewContainer.innerHTML = "";
    document.getElementById('ketqua').style.display = 'none';
    
    const submissionBtn = document.getElementById("btnNop");
    submissionBtn.disabled = false;
    submissionBtn.style.opacity = "1";

    exBlocks.forEach((block, index) => {
        let processedBlock = smartTikZ(block);
        let i = index + 1;
        
        let choicePos = processedBlock.indexOf('\\choice');
        if (choicePos === -1) return;

        // Cắt bỏ phần tiêu đề đóng/mở môi trường để lấy đề bài chuẩn
        let debaiRaw = processedBlock.substring(0, choicePos).replace(/\\begin\{ex\}/i, '').trim();
        let debaiText = cleanLatex(debaiRaw);

        let options = [];
        let searchIndex = choicePos + 7;
        
        // Bóc chuẩn xác 4 phương án trắc nghiệm liền kề
        for (let k = 0; k < 4; k++) {
            let result = getBalancedContent(processedBlock, searchIndex);
            if(result.content !== undefined) {
                options.push(result.content.trim());
                searchIndex = result.nextIndex;
            }
        }

        // Nếu không tách đủ 4 phương án thì bỏ qua câu lỗi này
        if(options.length < 4) return;

        let lgPos = processedBlock.indexOf('\\loigiai');
        let loigiaiRaw = lgPos !== -1 ? getBalancedContent(processedBlock, lgPos + 8).content.trim() : "Chưa có lời giải chi tiết.";
        let loigiaiText = cleanLatex(loigiaiRaw);

        let finalOptions = [];
        options.forEach(opt => {
            let cleanOpt = cleanLatex(opt);
            if (cleanOpt.includes("\\True")) {
                finalOptions.push({ text: cleanOpt.replace("\\True", "").trim(), isCorrect: true });
            } else {
                finalOptions.push({ text: cleanOpt.trim(), isCorrect: false });
            }
        });

        shuffleArray(finalOptions); // Trộn phương án ngẫu nhiên A, B, C, D
        renderQuizQuestion(i, debaiText, finalOptions, loigiaiText, viewContainer);
    });

    // Hiện các nút bấm chức năng nộp bài
    if(viewContainer.children.length > 0) {
        document.getElementById('quiz-actions-block').style.display = 'block';
    } else {
        viewContainer.innerHTML = `<div style="text-align: center; color: #7f8c8d; margin-top: 50px;">Lỗi cấu trúc phương án của bộ đề! Không thể kết xuất giao diện trắc nghiệm.</div>`;
    }

    // Yêu cầu MathJax thông dịch lại toàn bộ công thức
    if (window.MathJax) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "quiz-view-container"]);
    }
}

function renderQuizQuestion(i, debai, options, loigiai, container) {
    let questionBox = document.createElement("div");
    questionBox.className = "box";
    let labels = ["A", "B", "C", "D"];
    let correctLabel = "";
    let optionsHtml = "";

    options.forEach((opt, idx) => {
        if (opt.isCorrect) correctLabel = labels[idx];
        optionsHtml += `
            <div class="choice-row">
                <input id="c${i}${labels[idx]}" name="n${i}" type="radio" value="${labels[idx]}">
                <label class="custom-radio" for="c${i}${labels[idx]}" data-label="${labels[idx]}"></label>
                <span id="txt-${i}-${labels[idx]}"> ${opt.text}</span>
                <span id="st-${i}-${labels[idx]}"></span>
            </div>
        `;
    });

    questionBox.innerHTML = `
        <span style="color: maroon;"><b>Câu số ${i}. </b></span> 
        <span>${debai}</span>
        <input id="key${i}" type="hidden" value="${correctLabel}">
        <div style="margin-top: 10px;">${optionsHtml}</div>
        <div id="lg-${i}" class="loigiai-box">
            <b style="color:blue">Lời giải:</b> <br/> ${loigiai}
            <br/><b>Chọn đáp án <label class="custom-radio" data-label="${correctLabel}"></label></b>
        </div>
    `;
    container.appendChild(questionBox);
}

function showResults() {
    let score = 0;
    let boxes = document.querySelectorAll("#quiz-view-container .box");
    
    boxes.forEach((box, index) => {
        let i = index + 1;
        let key = document.getElementById("key" + i).value;
        let selected = document.querySelector(`input[name="n${i}"]:checked`);
        document.querySelectorAll(`input[name="n${i}"]`).forEach(r => r.disabled = true);
        
        if (selected) {
            if (selected.value === key) {
                score++;
                document.getElementById("st-" + i + "-" + selected.value).innerHTML = "<span class='tick'>✔</span>";
            } else {
                document.getElementById("st-" + i + "-" + selected.value).innerHTML = "<span class='cross'>✘</span>";
                document.getElementById("txt-" + i + "-" + selected.value).classList.add("wrong-selection");
                document.getElementById("st-" + i + "-" + key).innerHTML = "<span class='tick'>✔</span>";
            }
        } else {
            document.getElementById("st-" + i + "-" + key).innerHTML = "<span class='tick'>✔</span>";
        }
        document.getElementById("lg-" + i).style.display = "block";
    });

    let kqDiv = document.getElementById("ketqua");
    kqDiv.style.display = "block";
    kqDiv.innerHTML = `Kết quả: Bạn làm chính xác ${score} câu trên tổng số ${boxes.length} câu!`;
    
    let submissionBtn = document.getElementById("btnNop");
    submissionBtn.disabled = true;
    submissionBtn.style.opacity = "0.5";
    kqDiv.scrollIntoView({ behavior: 'smooth' });
}

function resetAll() {
    document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
    document.querySelectorAll('.sub-box, .var-box').forEach(e => e.style.display = "none");
    updateAll();
}

function copyCode() {
    const t = document.getElementById('code-out');
    const toast = document.getElementById('toast');
    if(!t.value) return;
    t.select();
    navigator.clipboard.writeText(t.value).then(() => {
        toast.style.display = 'block';
        setTimeout(() => { toast.style.display = 'none'; }, 1500);
    });
}

window.onload = renderMenu;