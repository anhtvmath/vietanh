function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function clearInput() { document.getElementById("latexInput").value = ""; document.getElementById("latexInput").focus(); }

function cleanLatex(text) {
    if (!text) return "";
    let out = text;

    // 1. Chuyển \heva{...} thành cấu trúc gốc của LaTeX
    out = out.replace(/\\heva\{([\s\S]*?)\}/g, function(match, content) {
        return "\\left\\{ \\begin{aligned} " + content + " \\end{aligned} \\right.";
    });

    // 2. Chuyển \khoang{...} thành cấu trúc gốc
    out = out.replace(/\\hoac\{([\s\S]*?)\}/g, function(match, content) {
        return "\\left[ \\begin{aligned} " + content + " \\end{aligned} \\right.";
    });

    // 3. Xử lý tabular sang array như bạn đã làm
    out = out.replace(/\\begin\{tabular\}\{([\s\S]*?)\}([\s\S]*?)\\end\{tabular\}/g, function(m, align, content) {
        let inner = content.replace(/\$/g, ""); 
        return `\\begin{array}{${align}}${inner}\\end{array}`;
    });

    out = out.replace(/([a-zA-Z0-9])<([a-zA-Z0-9])/g, "$1 < $2");
    out = out.replace(/([a-zA-Z0-9])>([a-zA-Z0-9])/g, "$1 > $2");
    
    // CẬP NHẬT: Thêm \$[\s\S]*?\$ vào regex split để tách riêng khối toán nội dòng
    let parts = out.split(/(\\begin\{align\*?\}[\s\S]*?\\end\{align\*?\}|\\begin\{eqnarray\*?\}[\s\S]*?\\end\{eqnarray\*?\}|\\begin\{array\}[\s\S]*?\\end\{array\}|\\begin\{cases\}[\s\S]*?\\end\{cases\}|\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);
    
    for (let i = 0; i < parts.length; i++) {
        if (parts[i]) {
            // Kiểm tra xem phần tử này có phải là khối toán học hay không
            const isMathBlock = parts[i].includes('\\begin{') || 
                               parts[i].startsWith('$$') || 
                               parts[i].startsWith('$'); // Thêm kiểm tra dấu $
                               
            if (!isMathBlock) {
                // Chỉ thay thế \\ thành <br/> ở những phần KHÔNG phải là toán học
                parts[i] = parts[i].replace(/\\\\(\[[^\]]*\])?/g, "<br/>");
            }
        }
    }
    return parts.join("");
}

function smartTikZ(text) {
    let clean = text.replace(/\\begin\{center\}\s*(\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\})\s*\\end\{center\}/g, "$1");
    clean = clean.replace(/(\$\$?)\s*(\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\})\s*\$\$?/g, "$2");
    return clean.replace(/\\begin\{tikzpicture\}([\s\S]*?)\\end\{tikzpicture\}/g, function(match) {
        return `<img src="https://i.upmath.me/svg/${encodeURIComponent(match)}" class="tikz-img">`;
    });
}


function getBalanced(str, start) {
    let count = 0, content = "", found = false, i = start;
    for (; i < str.length; i++) {
        if (str[i] === '{') { if (!found) { found = true; continue; } count++; }
        else if (str[i] === '}') { if (count === 0 && found) return { content: content, next: i + 1 }; count--; }
        if (found) content += str[i];
    }
    return { content: content, next: i };
}

function parseAndShowTF() {
    const input = document.getElementById("latexInput").value;
    let exBlocks = input.match(/\\begin\{ex\}([\s\S]*?)\\end\{ex\}/g);
    if (!exBlocks) return;
    shuffleArray(exBlocks);
    const showTF = document.getElementById("showTF");
    showTF.innerHTML = "<b>Trắc nghiệm đúng sai</b><br/><br/>";
    
    exBlocks.forEach((block, index) => {
        let processedBlock = smartTikZ(block);
        const qIdx = index + 1;
        const choicePos = processedBlock.indexOf('\\choiceTF');
        if (choicePos === -1) return;
        
        // Cắt đề bài từ sau dấu đóng ngoặc nhọn đầu tiên (của \begin{ex}) đến \choiceTF
        let debaiRaw = processedBlock.substring(processedBlock.indexOf('}') + 1, choicePos).trim();
        let options = [];
        let searchIdx = choicePos + 9;
        
        for (let k = 0; k < 4; k++) {
            let res = getBalanced(processedBlock, searchIdx);
            let text = res.content.trim();
            options.push({ 
                text: cleanLatex(text.replace('\\True', '').trim()), 
                key: text.includes('\\True') ? "Đúng" : "Sai" 
            });
            searchIdx = res.next;
        }
        
        const lgPos = processedBlock.indexOf('\\loigiai');
        let lgContent = "";
        if (lgPos !== -1) {
            let rawLg = getBalanced(processedBlock, lgPos + 8).content;
            let items = rawLg.match(/\\itemch\s*([\s\S]*?)(?=\\itemch|\\end\{itemchoice\}|$)/g) || [];
            lgContent = items.length > 0 ? items.map((it, i) => `${String.fromCharCode(97 + i)}) ${cleanLatex(it.replace('\\itemch', '').trim())}`).join('<br/>') : cleanLatex(rawLg);
        }
        renderTF(qIdx, cleanLatex(debaiRaw), options, lgContent);
    });
    
    document.getElementById("editorCol").style.display = "none";
    document.getElementById("footerActions").style.display = "block";
    if (window.MathJax) MathJax.Hub.Queue(["Typeset", MathJax.Hub, "showTF"]);
}

function renderTF(qIdx, debai, options, loigiai) {
    const labels = ['a', 'b', 'c', 'd'];
    let rows = options.map((opt, i) => `
        <tr>
            <td>${labels[i]}) <span id="txt_${qIdx}_${i}">${opt.text}</span> <span id="res_${qIdx}_${i}"></span></td>
            <td><input type="radio" id="r_${qIdx}_${i}_T" name="n${qIdx}_${i}" value="Đúng"><label class="custom-radio" for="r_${qIdx}_${i}_T"></label></td>
            <td><input type="radio" id="r_${qIdx}_${i}_F" name="n${qIdx}_${i}" value="Sai"><label class="custom-radio" for="r_${qIdx}_${i}_F"></label></td>
            <input type="hidden" id="key_${qIdx}_${i}" value="${opt.key}">
        </tr>`).join('');
    
    document.getElementById("showTF").innerHTML += `
        <div class="box">
            <span style="color:maroon"><b>Câu ${qIdx}. </b></span> ${debai}
            <table>
                <thead><tr><th>Lựa chọn</th><th>Đúng</th><th>Sai</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
            <div id="lg_${qIdx}" class="loigiai-box"><span style="color:blue"><b>Lời giải:</b></span><br/>${loigiai}</div>
        </div>`;
}

function showResults() {
    let totalScore = 0;
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box, bIdx) => {
        const qIdx = bIdx + 1;
        let correctCount = 0;
        for (let i = 0; i < 4; i++) {
            let key = document.getElementById(`key_${qIdx}_${i}`).value; 
            let resSpan = document.getElementById(`res_${qIdx}_${i}`);
            let textSpan = document.getElementById(`txt_${qIdx}_${i}`);
            let selected = document.querySelector(`input[name="n${qIdx}_${i}"]:checked`);
            
            document.querySelectorAll(`input[name="n${qIdx}_${i}"]`).forEach(input => input.disabled = true);
            
            if (selected) {
                if (selected.value === key) { 
                    correctCount++; 
                    resSpan.innerHTML = "<span class='tick'>✓</span>"; 
                } else { 
                    resSpan.innerHTML = "<span class='cross'>✗</span>"; 
                }
            }
            if (key === "Đúng") textSpan.style.color = "green"; else textSpan.style.color = "red";
        }
        
        // Tính điểm theo quy tắc 0.1, 0.25, 0.5, 1.0
        if (correctCount === 1) totalScore += 0.1;
        else if (correctCount === 2) totalScore += 0.25;
        else if (correctCount === 3) totalScore += 0.5;
        else if (correctCount === 4) totalScore += 1.0;
        
        document.getElementById(`lg_${qIdx}`).style.display = "block";
    });
    let maxScore = boxes.length * 1.0;
    
    // Hàm format thông minh: Tự động xóa số 0 thừa, đổi dấu chấm thành dấu phẩy
    const formatSmart = (num) => {
        // Làm tròn đến 2 chữ số thập phân trước, sau đó chuyển về số để mất số 0 thừa
        let formatted = Number(num.toFixed(2)).toString().replace('.', ',');
        return formatted;
    };
    let kqDiv = document.getElementById("ketqua");
    kqDiv.style.display = "block";
    kqDiv.innerHTML = `Bạn được ${formatSmart(totalScore)} điểm trên ${formatSmart(maxScore)} điểm tối đa!`;    
    document.getElementById("btnNop").disabled = true;
    kqDiv.scrollIntoView({ behavior: 'smooth' });
}
