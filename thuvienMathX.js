function thoigianlambai(thoigian) {
    return `let countdownTimer;

function startTimer(name, onTimeUp) {
    let totalSeconds = ${thoigian};
    const timerDisplay = document.getElementById("timer");

    countdownTimer = setInterval(() => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        timerDisplay.innerHTML =
            'Chào bạn ' + name + '<br/>' +
            'Thời gian: ' +
            String(hours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0');

        if (totalSeconds <= 0) {
            clearInterval(countdownTimer);
            if (onTimeUp) onTimeUp();
            return;
        }

        totalSeconds--;
    }, 1000);
}`;
}


function diencauhoi(id, data) {

    document.getElementById(`debaicau${id}`).innerHTML = data.debai;
    document.getElementById(`PAdung${id}`).innerHTML = data.dung;
    document.getElementById(`PA1Cau${id}`).innerHTML = data.sai1;
    document.getElementById(`PA2Cau${id}`).innerHTML = data.sai2;
    document.getElementById(`PA3Cau${id}`).innerHTML = data.sai3;
    document.getElementById(`loigiaicau${id}`).innerHTML = data.loigiai;
}


function bangsolieu2dong(tieude1, tieude2, arrKhoang, arrTanso) {
    let html = '<table>';
    
    // Dòng 1
    html += `<tr><td>${tieude1}</td>`;
    arrKhoang.forEach(k => html += `<td>$${k}$</td>`);
    html += '</tr>';

    // Dòng 2
    html += `<tr><td>${tieude2}</td>`;
    arrTanso.forEach(t => html += `<td>$${t}$</td>`);
    html += '</tr>';
    
    html += '</table>';
    return html;
}

function bangsolieu3dong(tieude1, tieude2, tieude3, arrKhoang, arrTanso, arrDuLieu3) {
    let html = '<table>';
    const taoDong = (label, data) => {
        let row = `<tr><td>${label}</td>`;
        data.forEach(item => row += `<td>$${item}$</td>`);
        return row + '</tr>';
    };

    // Tạo luôn 3 dòng
    html += taoDong(tieude1, arrKhoang);
    html += taoDong(tieude2, arrTanso);
    html += taoDong(tieude3, arrDuLieu3);
    
    return html + '</table>';
}

// Hàm phụ trợ tính giai thừa n!
function factorial(n) {
    if (n < 0) return 0;
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Hàm tính Chỉnh hợp A(n, k) = n! / (n - k)!
function A(n, k) {
    if (k < 0 || k > n) return 0;
    return factorial(n) / factorial(n - k);
}

// Hàm tính Tổ hợp C(n, k) = n! / (k! * (n - k)!)
function C(n, k) {
    if (k < 0 || k > n) return 0;
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function kiemtrabonxau(s1, s2, s3, s4) {
    var uniqueElements = new Set([s1, s2, s3, s4]);
    if (uniqueElements.size === 4) {
        return true;
    } else {
        return false;
    }
}

function kiemtranamxau(s1, s2, s3, s4, s5) {
    var uniqueElements = new Set([s1, s2, s3, s4, s5]);
    if (uniqueElements.size === 5) {
        return true;
    } else {
        return false;
    }
}

function format_canduoi(num) {
	if (num < 0 || num >= 10) return "_{" + num + "}"; 
	return "_" + num;                                 
}

function format_cantren(num) {
	if (num < 0 || num >= 10) return "^{" + num + "}"; 
	return "^" + num;                                
}

// 1. Xác định vị trí nhóm chứa Q1 (Đã tối ưu: tính cf() 1 lần duy nhất)
function posvalueq1(values, n) {
    let k = 1;
    const cfArray = cf(values); // Gọi hàm cf một lần duy nhất bên ngoài vòng lặp
    while (k <= cfArray.length && cfArray[k - 1] < n / 4) {
        k = k + 1;
    }
    return k;
}

// 2. Xác định vị trí nhóm chứa Q2 - Trung vị (Đã tối ưu)
function posvalueq2(values, n) {
    let k = 1;
    const cfArray = cf(values); // Gọi hàm cf một lần duy nhất bên ngoài vòng lặp
    while (k <= cfArray.length && cfArray[k - 1] < n / 2) {
        k = k + 1;
    }
    return k;
}

// 3. Xác định vị trí nhóm chứa Q3 (Đã tối ưu)
function posvalueq3(values, n) {
    let k = 1;
    const cfArray = cf(values); // Gọi hàm cf một lần duy nhất bên ngoài vòng lặp
    while (k <= cfArray.length && cfArray[k - 1] < (3 * n) / 4) {
        k = k + 1;
    }
    return k;
}

// 4. Sinh mảng tần số ngẫu nhiên không lặp quá max_repeats (HÀM GỐC)
function generateValues(size, valueRange, maxRepeats) {
    // Chặn lỗi vòng lặp vô hạn nếu kho số cung cấp nhỏ hơn kích thước yêu cầu nhân với hạn mức lặp
    if (size > valueRange.length * maxRepeats) {
        throw new Error("Kho số valueRange không đủ phần tử để sinh ra mảng với kích thước (size) yêu cầu.");
    }

    const values = [];
    const counts = {}; 

    while (values.length < size) {
        const randomIndex = Math.floor(Math.random() * valueRange.length);
        const value = valueRange[randomIndex];

        const currentCount = counts[value] || 0;

        if (currentCount < maxRepeats) {
            values.push(value);
            counts[value] = currentCount + 1; 
        }
    }

    return values;
}

function generateValuesFlexible(size) {
    const values = [];
    for (let i = 0; i < size; i++) {
        if (i === 0) {
            values.push(Math.floor(Math.random() * 4) + 1); // Nhóm 1 nhỏ (1-4)
        } else {
            values.push(Math.floor(Math.random() * 8) + 5); // Các nhóm sau lớn (5-12)
        }
    }
    return values;
}

function generateValuesFlexibleQ2(size) {
    const values = [];
    for (let i = 0; i < size; i++) {
        values.push(Math.floor(Math.random() * 8) + 3); 
    }
    return values;
}

// Hàm sinh tần số thiết kế riêng cho Q3 (Hài hòa phân phối ở các nhóm phía sau)
function generateValuesFlexibleQ3(size) {
    const values = [];
    for (let i = 0; i < size; i++) {
        if (i === size - 1) {
            // Nhóm cuối cùng: Ép số nhỏ (1 đến 4) để mốc 75% không bị nuốt chửng ở nhóm cuối
            values.push(Math.floor(Math.random() * 4) + 1); 
        } else {
            // Các nhóm trước đó: Sinh đều số lớn (5 đến 12) để đẩy Q3 về các nhóm kế cuối
            values.push(Math.floor(Math.random() * 8) + 5); 
        }
    }
    return values;
}


// 5. Tìm khoảng chứa dựa trên độ chính xác precision
function timkhoangchua(number, precision = 0.01) {
    let lower_bound = Math.floor(number / precision) * precision;
    let upper_bound = lower_bound + precision;
    
    lower_bound = Math.round(lower_bound * 100) / 100;
    upper_bound = Math.round(upper_bound * 100) / 100;
    return [lower_bound, upper_bound];
}

// 6. Tính tổng n_i * (x_i)^2 phục vụ tính phương sai
function ketquatichphuongsai(list1, list2) {
    if (list1.length !== list2.length) {
        throw new Error("The length of both lists must be the same.");
    }
    let a = 0;
    for (let i = 0; i < list1.length; i++) {
        a = a + list1[i] * Math.pow(list2[i], 2);
    }
    return a;
}

// 7. Tính tổng tích hai list (ví dụ tổng n_i * x_i)
function ketquatichhailist(list1, list2) {
    if (list1.length !== list2.length) {
        throw new Error("The length of both lists must be the same.");
    }
    let a = 0;
    for (let i = 0; i < list1.length; i++) {
        a = a + list1[i] * list2[i];
    }
    return a;
}

// 8. Tạo chuỗi biểu thức LaTeX tích hai list: n_1\cdot x_1 + n_2\cdot x_2 + ...
function tichhailist(list1, list2) {
    if (list1.length !== list2.length) {
        throw new Error("The length of both lists must be the same.");
    }
    const terms = [];
    for (let i = 0; i < list1.length; i++) {
        terms.push(list1[i] + "\\cdot " + list2[i]);
    }
    return terms.join("+");
}

// 9. Tạo chuỗi biểu thức LaTeX phục vụ công thức phương sai: n_1\cdot x_1^2 + n_2\cdot x_2^2 + ...
function tichphuongsai(list1, list2) {
    if (list1.length !== list2.length) {
        throw new Error("The length of both lists must be the same.");
    }
    const terms = [];
    for (let i = 0; i < list1.length; i++) {
        terms.push(list1[i] + "\\cdot " + list2[i] + "^2");
    }
    return terms.join("+");
}

// 10. Tính tổng các phần tử trong mảng (trả về kiểu Số)
function tongcacphantu(list) {
    let tong = 0;
    for (let i = 0; i < list.length; i++) {
        tong = tong + list[i];
    }
    return tong;
}

// 11. Tạo chuỗi hiển thị phép tính tổng: "n_1+n_2+n_3..." để đưa vào LaTeX
function tonglist(list) {
    return list.join("+");
}

// 12. Tạo bảng thống kê số liệu ghép nhóm bằng LaTeX
function taobanglatex(text1, intervals, text2, values) {
    const num_intervals = intervals.length - 1;
    const num_values = values.length;

    if (num_intervals !== num_values) {
        throw new Error("Số khoảng thời gian phải khớp với số giá trị.");
    }

    const interval_strings_arr = [];
    for (let i = 0; i < num_intervals; i++) {
        interval_strings_arr.push(`$[${intervals[i]}; ${intervals[i+1]})$`);
    }

    const interval_strings = interval_strings_arr.join(" & ");
    const values_str = values.map(value => `$${value}$`).join(" & ");
    const column_format = Array(num_intervals).fill("c").join("|");

    const latex_table = `\\begin{center}
\\begin{tabular}{|c|${column_format}|}
\\hline
${text1} & ${interval_strings} \\\\
\\hline
${text2} & ${values_str} \\\\
\\hline
\\end{tabular}
\\end{center}`;

    return latex_table;
}

// 13. Tạo bảng thống kê có kèm Tần số tích lũy bằng LaTeX
function taobanglatexcf(text1, intervals, text2, values1, text3, values2) {
    const num_intervals = intervals.length - 1;

    const interval_strings_arr = [];
    for (let i = 0; i < num_intervals; i++) {
        interval_strings_arr.push(`$[${intervals[i]}; ${intervals[i + 1]})$`);
    }
    const interval_strings = interval_strings_arr.join(" & ");

    const values_str1 = values1.join(" & ");
    const values_str2 = values2.join(" & ");
    const column_format = Array(num_intervals).fill("c").join("|");

    const latex_table = "\\begin{center}\n" +
        `\\begin{tabular}{|c|${column_format}|}\n` +
        "\\hline\n" +
        `${text1} & ${interval_strings} \\\\\n` +
        "\\hline\n" +
        `${text2} & ${values_str1} \\\\\n` +
        "\\hline\n" +
        `${text3} & ${values_str2} \\\\\n` +
        "\\hline\n" +
        "\\end{tabular}\n" +
        "\\end{center}\n";

    return latex_table;
}

// 14. Tạo mảng hiển thị công thức tần số tích lũy đầy đủ (Đã tối ưu)
function cf_full(list) {
    const cflist = [];
    const n = list.length;
    let tong = 0;
    
    for (let k = 0; k < n; k++) {
        tong += list[k];
        cflist.push(`$cf_${k + 1}=${tong}$`);
    }
    return cflist;
}

// 15. Tạo mảng hiển thị ký hiệu tần số đầy đủ
function f_full(list) {
    const flist = [];
    const n = list.length;
    
    for (let k = 0; k < n; k++) {
        flist.push(`$n_${k + 1}=${list[k]}$`);
    }
    return flist;
}

// 16. Tính mảng tần số tích lũy dạng số (Đã tối ưu)
function cf(list) {
    const cflist = [];
    const n = list.length;
    let tong = 0;
    
    for (let k = 0; k < n; k++) {
        tong += list[k];
        cflist.push(tong);
    }
    return cflist;
}

// 17. Tạo bảng rút gọn (Chỉ hiển thị giá trị đơn lẻ, không ghép nhóm)
function taobangrutgon(text1, intervals, text2, values) {
    const num_intervals = intervals.length;
    const num_values = values.length;

    if (num_intervals !== num_values) {
        throw new Error("Số khoảng thời gian phải khớp với số giá trị.");
    }

    // Biến đổi mảng đầu mút thành dạng $x_i$
    const interval_strings = intervals.map(item => `$${item}$`).join(" & ");
    
    // Biến đổi mảng giá trị thành dạng $n_i$
    const values_str = values.map(value => `$${value}$`).join(" & ");
    
    const column_format = Array(num_intervals).fill("c").join("|");

    const latex_table = "\\begin{center}\n" +
        `\\begin{tabular}{|c|${column_format}|}\n` +
        "\\hline\n" +
        `${text1} & ${interval_strings} \\\\\n` +
        "\\hline\n" +
        `${text2} & ${values_str} \\\\\n` +
        "\\hline\n" +
        "\\end{tabular}\n" +
        "\\end{center}\n";

    return latex_table;
}





function ngaunhien(mang) {
    return mang[Math.floor(Math.random() * mang.length)];
}


function dothihamtrungphuong_a_duong(a, b, c) {
    var result = "";
    // BỘ 1: y = x^4 - 2x^2 + c (Cực trị tại x = 0, x = -1, x = 1)
    if (a === 1 && b === -2) {
        var conf1 = {
            "-3": { yMin: -4.7, yMax: 1.4, scale: 0.8, nO: "below right = -1.5px", nC: "above left = -1.5px", nMin: "below left = -1.5px", cNode: "\\draw (0,-3) node[above left = -1.5px]{$-3$} circle (1pt);", minNode: "\\draw (0,-4) node[below left = -1.5px]{$-4$} circle (1pt);", dash: "\\draw[dashed] (1,0) -- (1,-4) -- (0,-4);\n\\draw[dashed] (-1,0) -- (-1,-4) -- (0,-4);", dom: "-1.8:1.8", xMin: "-2.1", xMax: "2.1", posRight: "0.97", circleO: "1.2pt", circleX: "1pt" },
            "-2": { yMin: -3.7, yMax: 1.1, scale: 0.8, nO: "below right = -1.5px", nC: "above left = -1.5px", nMin: "below left = -1.5px", cNode: "\\draw (0,-2) node[above left = -1.5px]{$-2$} circle (1pt);", minNode: "\\draw (0,-3) node[below left = -1.5px]{$-3$} circle (1pt);", dash: "\\draw[dashed] (1,0) -- (1,-3) -- (0,-3);\n\\draw[dashed] (-1,0) -- (-1,-3) -- (0,-3);", dom: "-1.71:1.71", xMin: "-2.1", xMax: "2.1", posRight: "0.96", circleO: "1.2pt", circleX: "1pt" },
            "-1": { yMin: -2.5, yMax: 0.9, scale: 1.1, nO: "below right = -1.5px", nC: "above left = -1.5px", nMin: "below left = -1.5px", cNode: "\\draw (0,-1) node[above left = -1.5px]{$-1$} circle (0.8pt);", minNode: "\\draw (0,-2) node[below left = -1.5px]{$-2$} circle (0.8pt);", dash: "\\draw[dashed] (1,0) -- (1,-2) -- (0,-2);\n\\draw[dashed] (-1,0) -- (-1,-2) -- (0,-2);", dom: "-1.62:1.62", xMin: "-1.9", xMax: "1.9", posRight: "0.96", circleO: "1pt", circleX: "0.8pt" },
            "0":  { yMin: -1.5, yMax: 1.1, scale: 1.1, nO: "above right = -1px",    nC: "below left = -1.5px",  nMin: "",                    cNode: "\\draw (0,-1) node[below left = -1.5px]{$-1$} circle (0.7pt);", minNode: "",                                               dash: "\\draw[dashed] (1,0) -- (1,-1) -- (0,-1);\n\\draw[dashed] (-1,0) -- (-1,-1) -- (0,-1);", dom: "-1.53:1.53", xMin: "-1.8", xMax: "1.8", posRight: "0.96", circleO: "1pt", circleX: "0.7pt" },
            "1":  { yMin: -0.6, yMax: 2.2, scale: 1.1, nO: "below right = -1.5px", nC: "above left = -2px",    nMin: "",                    cNode: "\\draw (0,1) node[above left = -2px]{$1$} circle (0.6pt);",     minNode: "",                                               dash: "",                                                                                                    dom: "-1.53:1.53", xMin: "-1.8", xMax: "1.8", posRight: "0.96", circleO: "0.9pt", circleX: "0.6pt" },
            "2":  { yMin: -0.7, yMax: 3,   scale: 1.1, nO: "below right = -1.5px", nC: "above left = -1.5px",  nMin: "below left = -1.5px", cNode: "\\draw (0,2) node[above left = -1.5px]{$2$} circle (0.7pt);",     minNode: "\\draw (0,1) node[below left = -1.5px]{$1$} circle (0.7pt);", dash: "\\draw[dashed] (1,0) -- (1,1) -- (0,1);\n\\draw[dashed] (-1,0) -- (-1,1) -- (0,1);",   dom: "-1.5:1.5",   xMin: "-1.9", xMax: "1.9", posRight: "0.97", circleO: "0.9pt", circleX: "0.7pt" }
        };
        var c1 = conf1[c];
        if (c1) {
            result = "\\begin{tikzpicture}[>=stealth,thick,scale=" + c1.scale + "]\n" +
                "\\draw[->,line width = 1pt] (" + c1.xMin + ",0) -- (" + c1.xMax + ",0) node[below, pos = 0.98]{$x$};\n" +
                "\\draw[->,line width = 1pt] (0," + c1.yMin + ") -- (0," + c1.yMax + ") node[right, pos = " + c1.posRight + "]{$y$};\n" +
                "\\draw (0,0) node[" + c1.nO + "]{\\footnotesize $O$} circle (" + c1.circleO + ");\n" +
                "\\draw (-1,0) node[" + (c === 1 || c === 2 ? "below" : "above") + "]{$-1$} circle (" + c1.circleX + ");\n" +
                "\\draw (1,0) node[" + (c === 1 || c === 2 ? "below" : "above") + "]{$1$} circle (" + c1.circleX + ");\n" +
                c1.cNode + "\n" +
                (c1.minNode !== "" ? c1.minNode + "\n" : "") +
                (c1.dash !== "" ? c1.dash + "\n" : "") +
                "\\draw[thick,samples=200,domain=" + c1.dom + "] plot(\\x,{(\\x)^4-2*(\\x)^2" + (c >= 0 ? (c === 0 ? "" : "+" + c) : c) + "});\n" +
                "\\end{tikzpicture}";
        }
    }
    // BỘ 2: y = 0.25*x^4 - 2x^2 + c (Cực trị tại x = 0, x = -2, x = 2)
    else if (a === 0.25 && b === -2) {
        var conf2 = {
            "-3": { yMin: -7.9, yMax: 2,   scale: 0.5, nO: "below right = -1.5px", nC: "above left = -1.5px", nMin: "below left = -1.5px", cNode: "\\draw (0,-3) node[above left = -1.5px]{$-3$} circle (1.6pt);", minNode: "\\draw (0,-7) node[below left = -1.5px]{$-7$} circle (1.6pt);", dash: "\\draw[dashed] (2,0) -- (2,-7) -- (0,-7);\n\\draw[dashed] (-2,0) -- (-2,-7) -- (0,-7);", dom: "-3.12:3.12", xMin: "-3.8", xMax: "3.8", posRight: "0.97", circleO: "2pt", circleX: "1.6pt" },
            "-2": { yMin: -7,   yMax: 2,   scale: 0.5, nO: "below right = -1.5px", nC: "above left = -1.5px", nMin: "below left = -1.5px", cNode: "\\draw (0,-2) node[above left = -1.5px]{$-2$} circle (1.6pt);", minNode: "\\draw (0,-6) node[below left = -1.5px]{$-6$} circle (1.6pt);", dash: "\\draw[dashed] (2,0) -- (2,-6) -- (0,-6);\n\\draw[dashed] (-2,0) -- (-2,-6) -- (0,-6);", dom: "-3.06:3.06", xMin: "-3.8", xMax: "3.8", posRight: "0.97", circleO: "2pt", circleX: "1.6pt" },
            "-1": { yMin: -6,   yMax: 2.2, scale: 0.5, nO: "above right = -1.5px", nC: "above left = -2px",    nMin: "below left = -2px",    cNode: "\\draw (0,-1) node[above left = -2px]{$-1$} circle (1.6pt);",   minNode: "\\draw (0,-5) node[below left = -2px]{$-5$} circle (1.6pt);",   dash: "\\draw[dashed] (2,0) -- (2,-5) -- (0,-5);\n\\draw[dashed] (-2,0) -- (-2,-5) -- (0,-5);", dom: "-3.02:3.02", xMin: "-3.7", xMax: "3.7", posRight: "0.97", circleO: "2pt", circleX: "1.6pt" },
            "0":  { yMin: -5,   yMax: 2.2, scale: 0.5, nO: "above right = -1.5px", nC: "below left = -1.5px",  nMin: "",                    cNode: "\\draw (0,-4) node[below left = -1.5px]{$-4$} circle (1.6pt);", minNode: "",                                               dash: "\\draw[dashed] (2,0) -- (2,-4) -- (0,-4);\n\\draw[dashed] (-2,0) -- (-2,-4) -- (0,-4);", dom: "-2.94:2.94", xMin: "-3.7", xMax: "3.7", posRight: "0.96", circleO: "2pt", circleX: "1.6pt" },
            "1":  { yMin: -3.8, yMax: 2.4, scale: 0.6, nO: "below right = -1.5px", nC: "above left = -2px",    nMin: "below left = -2px",    cNode: "\\draw (0,1) node[above left = -2px]{$1$} circle (1.3pt);",     minNode: "\\draw (0,-3) node[below left = -2px]{$-3$} circle (1.3pt);",   dash: "\\draw[dashed] (2,0) -- (2,-3) -- (0,-3);\n\\draw[dashed] (-2,0) -- (-2,-3) -- (0,-3);", dom: "-2.9:2.9",   xMin: "-3.5", xMax: "3.5", posRight: "0.96", circleO: "1.8pt", circleX: "1.3pt" },
            "2":  { yMin: -2.8, yMax: 3.5, scale: 0.6, nO: "below right = -1.5px", nC: "above left = -1.5px",  nMin: "below left = -1.5px", cNode: "\\draw (0,2) node[above left = -1.5px]{$2$} circle (1.3pt);",     minNode: "\\draw (0,-2) node[below left = -1.5px]{$-2$} circle (1.3pt);", dash: "\\draw[dashed] (2,0) -- (2,-2) -- (0,-2);\n\\draw[dashed] (-2,0) -- (-2,-2) -- (0,-2);", dom: "-2.9:2.9",   xMin: "-3.5", xMax: "3.5", posRight: "0.96", circleO: "1.8pt", circleX: "1.3pt" }
        };
        var c2 = conf2[c];
        if (c2) {
            result = "\\begin{tikzpicture}[>=stealth,thick,scale=" + c2.scale + "]\n" +
                "\\draw[->,line width = 1pt] (" + c2.xMin + ",0) -- (" + c2.xMax + ",0) node[below, pos = 0.98]{$x$};\n" +
                "\\draw[->,line width = 1pt] (0," + c2.yMin + ") -- (0," + c2.yMax + ") node[right, pos = " + c2.posRight + "]{$y$};\n" +
                "\\draw (0,0) node[" + c2.nO + "]{\\footnotesize $O$} circle (" + c2.circleO + ");\n" +
                "\\draw (-2,0) node[above]{$-2$} circle (" + c2.circleX + ");\n" +
                "\\draw (2,0) node[above]{$2$} circle (" + c2.circleX + ");\n" +
                c2.cNode + "\n" +
                (c2.minNode !== "" ? c2.minNode + "\n" : "") +
                (c2.dash !== "" ? c2.dash + "\n" : "") +
                "\\draw[thick,samples=200,domain=" + c2.dom + "] plot(\\x,{(1/4)*(\\x)^4-2*(\\x)^2" + (c >= 0 ? (c === 0 ? "" : "+" + c) : c) + "});\n" +
                "\\end{tikzpicture}";
        }
    }
    return result;
}

function dothihamtrungphuong_a_am(a, b, c) {
    var result = "";
    var cStr = String(c); // Đảm bảo c luôn ở dạng chuỗi để so khớp key
    
    // BỘ 1: y = -x^4 + 2x^2 + c (Cực trị tại x = 0, x = -1, x = 1)
    if (a === -1 && b === 2) {
        var conf1 = {
            "-2": {
                scale: "0.9", xMin: "-2", xMax: "2", yMin: "-2.7", yMax: "1", posRight: "0.96",
                nO: "below right = -1.5px",
                extraNodes: "\\draw (-1,0) node[above]{$-1$} circle (0.9pt);\n" +
                            "\\draw (1,0) node[above]{$1$} circle (0.9pt);\n" +
                            "\\draw (0,-2) node[below left = -1.5px]{$-2$} circle (0.9pt);\n" +
                            "\\draw (0,-1) node[above left = -1.5px]{$-1$} circle (0.9pt);\n" +
                            "\\draw[dashed] (1,0) -- (1,-1) -- (0,-1);\n" +
                            "\\draw[dashed] (-1,0) -- (-1,-1) -- (0,-1);"
            },
            "-1": {
                scale: "0.9", xMin: "-2", xMax: "2", yMin: "-1.7", yMax: "1.1", posRight: "0.95",
                nO: "below right = -1.5px",
                extraNodes: "\\draw (-1,0) node[above]{$-1$} circle (0.9pt);\n" +
                            "\\draw (1,0) node[above]{$1$} circle (0.9pt);\n" +
                            "\\draw (0,-1) node[below left = -1.5px]{$-1$} circle (0.9pt);"
            },
            "0": {
                scale: "0.9", xMin: "-2", xMax: "2", yMin: "-0.7", yMax: "1.8", posRight: "0.95",
                nO: "below right = -1.5px",
                extraNodes: "\\draw (-1,0) node[below]{$-1$} circle (0.9pt);\n" +
                            "\\draw (1,0) node[below]{$1$} circle (0.9pt);\n" +
                            "\\draw (0,1) node[above left = -1.5px]{$1$} circle (0.9pt);\n" +
                            "\\draw[dashed] (1,0) -- (1,1) -- (0,1);\n" +
                            "\\draw[dashed] (-1,0) -- (-1,1) -- (0,1);"
            },
            "1": {
                scale: "0.9", xMin: "-2", xMax: "2", yMin: "-0.7", yMax: "2.8", posRight: "0.96",
                nO: "below right = -1.5px",
                extraNodes: "\\draw (-1,0) node[below]{$-1$} circle (0.9pt);\n" +
                            "\\draw (1,0) node[below]{$1$} circle (0.9pt);\n" +
                            "\\draw (0,1) node[below left = -1.5px]{$1$} circle (0.9pt);\n" +
                            "\\draw (0,2) node[above left = -1.5px]{$2$} circle (0.9pt);\n" +
                            "\\draw[dashed] (1,0) -- (1,2) -- (0,2);\n" +
                            "\\draw[dashed] (-1,0) -- (-1,2) -- (0,2);"
            },
            "2": {
                scale: "0.9", xMin: "-2.1", xMax: "2.1", yMin: "-0.9", yMax: "3.8", posRight: "0.97",
                nO: "below right = -1.5px",
                extraNodes: "\\draw (-1,0) node[below]{$-1$} circle (0.9pt);\n" +
                            "\\draw (1,0) node[below]{$1$} circle (0.9pt);\n" +
                            "\\draw (0,2) node[below left = -1.5px]{$2$} circle (0.9pt);\n" +
                            "\\draw (0,3) node[above left = -1.5px]{$3$} circle (0.9pt);\n" +
                            "\\draw[dashed] (1,0) -- (1,3) -- (0,3);\n" +
                            "\\draw[dashed] (-1,0) -- (-1,3) -- (0,3);"
            },
            "3": {
                scale: "0.8", xMin: "-2.2", xMax: "2.2", yMin: "-0.9", yMax: "4.9", posRight: "0.97",
                nO: "below right = -1.5px",
                extraNodes: "\\draw (-1,0) node[below]{$-1$} circle (0.9pt);\n" +
                            "\\draw (1,0) node[below]{$1$} circle (0.9pt);\n" +
                            "\\draw (0,3) node[below left = -1.5px]{$3$} circle (0.9pt);\n" +
                            "\\draw (0,4) node[above left = -1.5px]{$4$} circle (0.9pt);\n" +
                            "\\draw[dashed] (1,0) -- (1,4) -- (0,4);\n" +
                            "\\draw[dashed] (-1,0) -- (-1,4) -- (0,4);"
            }
        };

        var cfg = conf1[cStr];
        if (cfg) {
            // Xử lý chuẩn dấu cho biểu thức plot
            var expr_str = "";
            if (cStr === "1") expr_str = "+1";
            else if (cStr === "2") expr_str = "+2";
            else if (cStr === "3") expr_str = "+3";
            else if (cStr === "-1") expr_str = "-1";
            else if (cStr === "-2") expr_str = "-2";

            var dom_str = " -1.5:1.5 ";
            if (cStr === "1") dom_str = "-1.61:1.61";
            else if (cStr === "2") dom_str = "-1.71:1.71";
            else if (cStr === "3") dom_str = "-1.78:1.78";

            result = "\\begin{tikzpicture}[>=stealth,thick,scale=" + cfg.scale + "]\n" +
                "\\draw[->,line width = 1pt] (" + cfg.xMin + ",0) -- (" + cfg.xMax + ",0) node[below, pos = 0.98]{$x$};\n" +
                "\\draw[->,line width = 1pt] (0," + cfg.yMin + ") -- (0," + cfg.yMax + ") node[right, pos = " + cfg.posRight + "]{$y$};\n" +
                "\\draw (0,0) node[" + cfg.nO + "]{\\footnotesize $O$} circle (1.2pt);\n" +
                cfg.extraNodes + "\n" +
                "\\draw[thick,samples=200,domain=" + dom_str + "] plot(\\x,{-(\\x)^4+2*(\\x)^2" + expr_str + "});\n" +
                "\\end{tikzpicture}";
        }
    }
    // BỘ 2: y = -0.25*x^4 + 2x^2 + c (Cực trị tại x = 0, x = -2, x = 2)
    else if (a === -0.25 && b === 2) {
        var conf2 = {
            "-3": {
                scale: "0.6", xMin: "-3.5", xMax: "3.5", yMin: "-4", yMax: "2", posRight: "0.96", cO: "1.7pt",
                nO: "below right = -1.5px",
                extraNodes: "\\draw (-2,0) node[below]{$-2$} circle (1.2pt);\n" +
                            "\\draw (2,0) node[below]{$2$} circle (1.2pt);\n" +
                            "\\draw (0,-3) node[below left = -1.5px]{$-3$} circle (1.2pt);\n" +
                            "\\draw (0,1) node[below left = -1.5px]{$1$} circle (1.2pt);\n" +
                            "\\draw[dashed] (2,0) -- (2,1) -- (0,1);\n" +
                            "\\draw[dashed] (-2,0) -- (-2,1) -- (0,1);"
            },
            "-2": {
                scale: "0.6", xMin: "-3.5", xMax: "3.5", yMin: "-3", yMax: "3", posRight: "0.96", cO: "1.7pt",
                nO: "below right = -1.5px",
                extraNodes: "\\draw (-2,0) node[below]{$-2$} circle (1.2pt);\n" +
                            "\\draw (2,0) node[below = -1.5px]{$2$} circle (1.2pt);\n" +
                            "\\draw (0,-2) node[below left = -1.5px]{$-2$} circle (1.2pt);\n" +
                            "\\draw (0,2) node[below left]{$2$} circle (1.2pt);\n" +
                            "\\draw[dashed] (2,0) -- (2,2) -- (0,2);\n" +
                            "\\draw[dashed] (-2,0) -- (-2,2) -- (0,2);"
            },
            "-1": {
                scale: "0.6", xMin: "-3.5", xMax: "3.5", yMin: "-2.2", yMax: "4", posRight: "0.96", cO: "1.7pt",
                nO: "above right = -1.5px",
                extraNodes: "\\draw (-2,0) node[below]{$-2$} circle (1.2pt);\n" +
                            "\\draw (2,0) node[below]{$2$} circle (1.2pt);\n" +
                            "\\draw (0,-1) node[below left = -1.5px]{$-1$} circle (1.2pt);\n" +
                            "\\draw (0,3) node[below left = -1.5px]{$3$} circle (1.2pt);\n" +
                            "\\draw[dashed] (2,0) -- (2,3) -- (0,3);\n" +
                            "\\draw[dashed] (-2,0) -- (-2,3) -- (0,3);"
            },
            "0": {
                scale: "0.6", xMin: "-3.5", xMax: "3.5", yMin: "-1.3", yMax: "4.9", posRight: "0.96", cO: "1.7pt",
                nO: "below right = -1.5px",
                extraNodes: "\\draw (-2,0) node[below]{$-2$} circle (1.2pt);\n" +
                            "\\draw (2,0) node[below]{$2$} circle (1.2pt);\n" +
                            "\\draw (0,4) node[below left = -1.5px]{$4$} circle (1.2pt);\n" +
                            "\\draw[dashed] (2,0) -- (2,4) -- (0,4);\n" +
                            "\\draw[dashed] (-2,0) -- (-2,4) -- (0,4);"
            },
            "1": {
                scale: "0.5", xMin: "-3.8", xMax: "3.8", yMin: "-1.3", yMax: "5.9", posRight: "0.96", cO: "1.8pt",
                nO: "below right = -1.5px",
                extraNodes: "\\draw (-2,0) node[below]{$-2$} circle (1.5pt);\n" +
                            "\\draw (2,0) node[below]{$2$} circle (1.5pt);\n" +
                            "\\draw (0,1) node[below left = -1.5px]{$1$} circle (1.5pt);\n" +
                            "\\draw (0,5) node[below left = -1.5px]{$5$} circle (1.5pt);\n" +
                            "\\draw[dashed] (2,0) -- (2,5) -- (0,5);\n" +
                            "\\draw[dashed] (-2,0) -- (-2,5) -- (0,5);"
            },
            "2": {
                scale: "0.5", xMin: "-3.8", xMax: "3.8", yMin: "-1.3", yMax: "6.9", posRight: "0.96", cO: "1.8pt",
                nO: "below right = -1.5px",
                extraNodes: "\\draw (-2,0) node[below]{$-2$} circle (1.5pt);\n" +
                            "\\draw (2,0) node[below]{$2$} circle (1.5pt);\n" +
                            "\\draw (0,2) node[below left = -1.5px]{$2$} circle (1.5pt);\n" +
                            "\\draw (0,6) node[below left = -1.5px]{$6$} circle (1.5pt);\n" +
                            "\\draw[dashed] (2,0) -- (2,6) -- (0,6);\n" +
                            "\\draw[dashed] (-2,0) -- (-2,6) -- (0,6);"
            }
        };

        var cfg = conf2[cStr];
        if (cfg) {
            var expr_str = "";
            if (cStr === "1") expr_str = "+1";
            else if (cStr === "2") expr_str = "+2";
            else if (cStr === "-1") expr_str = "-1";
            else if (cStr === "-2") expr_str = "-2";
            else if (cStr === "-3") expr_str = "-3";

            var dom_str = " -2.9:2.9 ";
            if (cStr === "-3" || cStr === "-2") dom_str = "-2.89:2.89";
            else if (cStr === "1") dom_str = "-2.98:2.98";
            else if (cStr === "2") dom_str = "-3.05:3.05";

            result = "\\begin{tikzpicture}[>=stealth,thick,scale=" + cfg.scale + "]\n" +
                "\\draw[->,line width = 1pt] (" + cfg.xMin + ",0) -- (" + cfg.xMax + ",0) node[below, pos = 0.98]{$x$};\n" +
                "\\draw[->,line width = 1pt] (0," + cfg.yMin + ") -- (0," + cfg.yMax + ") node[right, pos = " + cfg.posRight + "]{$y$};\n" +
                "\\draw (0,0) node[" + cfg.nO + "]{\\footnotesize $O$} circle (" + cfg.cO + ");\n" +
                cfg.extraNodes + "\n" +
                "\\draw[thick,samples=200,domain=" + dom_str + "] plot(\\x,{-(1/4)*(\\x)^4+2*(\\x)^2" + expr_str + "});\n" +
                "\\end{tikzpicture}";
        }
    }
    return result;
}

function dothibacba_a_duong(a, b, c, d) {
    var result = "";

	// BỘ 1: y = x^3 - 3x + d (Cực trị tại x = -1, x = 1)
    if (a === 1 && b === 0 && c === -3) {
        var conf1 = {
            "-2": { yMin: -4.4, yMax: 0.8, nO: "below right = -1px", n1: "above", n2: "above", yNodes: "\\draw (0,-4) node[left]{$-4$} circle (1pt);", d1: "(-1,0) -- (0,0)", d2: "(1,-4) -- (0,-4)", dom: "-2.02:2.05" },
            "-1": { yMin: -3.3, yMax: 1.7, nO: "below right = -1px", n1: "below", n2: "above", yNodes: "\\draw (0,-3) node[left]{$-3$} circle (1pt);\n\\draw (0,1) node[right]{$1$} circle (1pt);", d1: "(-1,1) -- (0,1)", d2: "(1,-3) -- (0,-3)", dom: "-2.02:2.05" },
            "0":  { yMin: -2.3, yMax: 2.6, nO: "above right = -2px", n1: "below", n2: "above", yNodes: "\\draw (0,-2) node[left]{$-2$} circle (1pt);\n\\draw (0,2) node[right]{$2$} circle (1pt);", d1: "(-1,2) -- (0,2)", d2: "(1,-2) -- (0,-2)", dom: "-2.02:2.04" },
            "1":  { yMin: -1.3, yMax: 3.6, nO: "below left = -2px",  n1: "below", n2: "above", yNodes: "\\draw (0,-1) node[left]{$-1$} circle (1pt);\n\\draw (0,3) node[right]{$3$} circle (1pt);", d1: "(-1,3) -- (0,3)", d2: "(1,-1) -- (0,-1)", dom: "-2.02:2.04" },
            "2":  { yMin: -0.7, yMax: 4.6, nO: "below right = -1px", n1: "below", n2: "below", yNodes: "\\draw (0,4) node[right]{$4$} circle (1pt);", d1: "(-1,4) -- (0,4)", d2: "(1,0) -- (0,0)", dom: "-2.04:2.04" }
        };
        var c1 = conf1[d];
        if (c1) {
            result = "\\begin{tikzpicture}[>=stealth,thick,scale=0.9]\n" +
                "\\draw[->,line width = 1pt] (-2.3,0) -- (2.5,0) node[below, pos = 0.98]{$x$};\n" +
                "\\draw[->,line width = 1pt] (0," + c1.yMin + ") -- (0," + c1.yMax + ") node[right, pos = 0.97]{$y$};\n" +
                "\\draw (0,0) node[" + c1.nO + "]{\\footnotesize $O$} circle (1.2pt);\n" +
                "\\draw (-1,0) node[" + c1.n1 + "]{$-1$} circle (1pt);\n" +
                "\\draw (1,0) node[" + c1.n2 + "]{$1$} circle (1pt);\n" +
                c1.yNodes + "\n" +
                "\\draw[dashed] (-1,0) -- " + c1.d1 + ";\n" +
                "\\draw[dashed] (1,0) -- " + c1.d2 + ";\n" +
                "\\draw[thick,samples=200,domain=" + c1.dom + "] plot(\\x,{(\\x)^3-3*(\\x)" + (d >= 0 ? (d === 0 ? "" : "+" + d) : d) + "});\n" +
                "\\end{tikzpicture}";
        }
    }

    // BỘ 2: y = x^3 - 3x^2 + d (Cực trị tại x = 0, 2)
    else if (a === 1 && b === -3 && c === 0) {
        var conf2 = {
            "-2": { yMin: -6.4, yMax: 0.8, xMin: "-1.3", xMax: "3.6", ysc: 0.7, nO: "below left = -1px", n2: "above", yNodes: "\\draw (0,-2) node[above left]{$-2$} circle (1pt);\n\\draw (0,-6) node[left]{$-6$} circle (1pt);", dash: "(2,-6) -- (0,-6)", dom: "-1.03:3.24" },
            "-1": { yMin: -5.6, yMax: 1.2, xMin: "-1.4", xMax: "3.5", ysc: 0.7, nO: "above left = -1px", n2: "above", yNodes: "\\draw (0,-1) node[above left = -2px]{$-1$} circle (1pt);\n\\draw (0,-5) node[left]{$-5$} circle (1pt);", dash: "(2,-5) -- (0,-5)", dom: "-1.04:3.18" },
            "0":  { yMin: -4.6, yMax: 1.1, xMin: "-1.4", xMax: "3.6", ysc: 0.7, nO: "above left = -2px", n2: "above", yNodes: "\\draw (0,-4) node[left]{$-4$} circle (1pt);", dash: "(2,-4) -- (0,-4)", dom: "-1.05:3.08" },
            "1":  { yMin: -3.7, yMax: 1.9, xMin: "-1.5", xMax: "3.5", ysc: 0.8, nO: "below right = -2px",n2: "above", yNodes: "\\draw (0,1) node[above left = -2px]{$1$} circle (1pt);\n\\draw (0,-3) node[left]{$-3$} circle (1pt);", dash: "(2,-3) -- (0,-3)", dom: "-1.06:3.03" },
            "2":  { yMin: -2.5, yMax: 2.86,xMin: "-1.3", xMax: "3.4", ysc: 0.8, nO: "below left = -2px", n2: "above", yNodes: "\\draw (0,2) node[above left = -1px]{$2$} circle (1pt);\n\\draw (0,-2) node[left]{$-2$} circle (1pt);", dash: "(2,-2) -- (0,-2)", dom: "-1.04:3.02" },
            "3":  { yMin: -1.5, yMax: 3.8, xMin: "-1.3", xMax: "3.4", ysc: 0.8, nO: "below left = -2px", n2: "above", yNodes: "\\draw (0,3) node[above left = -1px]{$3$} circle (1pt);\n\\draw (0,-1) node[left]{$-1$} circle (1pt);", dash: "(2,-1) -- (0,-1)", dom: "-1.04:3.02" },
            "4":  { yMin: -0.8, yMax: 4.9, xMin: "-1.3", xMax: "3.4", ysc: 0.8, nO: "below left = -2px", n2: "below", yNodes: "\\draw (0,4) node[above left = -1px]{$4$} circle (1pt);", dash: "(2,0) -- (0,0)", dom: "-1.07:3.04" },
            "5":  { yMin: -0.7, yMax: 5.9, xMin: "-1.4", xMax: "3.3", ysc: 0.7, nO: "below left = -2px", n2: "below", yNodes: "\\draw (0,5) node[above left = -1px]{$5$} circle (1pt);\n\\draw (0,1) node[left]{$1$} circle (1pt);", dash: "(2,1) -- (0,1)", dom: "-1.15:3.04" }
        };
        var c2 = conf2[d];
        if (c2) {
            result = "\\begin{tikzpicture}[>=stealth,thick,yscale=" + c2.ysc + "]\n" +
                "\\draw[->,line width = 1pt] (" + c2.xMin + ",0) -- (" + c2.xMax + ",0) node[below, pos = 0.98]{$x$};\n" +
                "\\draw[->,line width = 1pt] (0," + c2.yMin + ") -- (0," + c2.yMax + ") node[right, pos = 0.97]{$y$};\n" +
                "\\draw (0,0) node[" + c2.nO + "]{\\footnotesize $O$} circle (1.2pt);\n" +
                "\\draw (2,0) node[" + c2.n2 + "]{$2$} circle (1pt);\n" +
                c2.yNodes + "\n" +
                "\\draw[dashed] (2,0) -- " + c2.dash + ";\n" +
                "\\draw[thick,samples=200,domain=" + c2.dom + "] plot(\\x,{(\\x)^3-3*(\\x)^2" + (d >= 0 ? (d === 0 ? "" : "+" + d) : d) + "});\n" +
                "\\end{tikzpicture}";
        }
    }

    // BỘ 3: y = x^3 + 3x^2 + d (Cực trị tại x = -2, 0)
    else if (a === 1 && b === 3 && c === 0) {
        var conf3 = {
            "-4": { yMin: -4.7, yMax: 1,   xMin: "-3.3", xMax: "1.4", ysc: 0.8, nO: "below left = -2px", n2: "above", yNodes: "\\draw (0,-4) node[below left = -1px]{$-4$} circle (1pt);", dash: "(-2,0) -- (0,0)", dom: "-3.04:1.07" },
            "-3": { yMin: -3.7, yMax: 1.8, xMin: "-3.3", xMax: "1.4", ysc: 0.8, nO: "above right = -1px", n2: "below", yNodes: "\\draw (0,-3) node[below left = -1px]{$-3$} circle (1pt);\n\\draw (0,1) node[right]{$1$} circle (1pt);", dash: "(-2,1) -- (0,1)", dom: "-3.05:1.05" },
            "-2": { yMin: -2.7, yMax: 2.8, xMin: "-3.3", xMax: "1.3", ysc: 0.8, nO: "above right",         n2: "below", yNodes: "\\draw (0,-2) node[below left]{$-2$} circle (1pt);\n\\draw (0,2) node[right]{$2$} circle (1pt);", dash: "(-2,2) -- (0,2)", dom: "-3.05:1.04" },
            "-1": { yMin: -1.8, yMax: 3.7, xMin: "-3.3", xMax: "1.3", ysc: 0.8, nO: "above left = -1px",  n2: "below", yNodes: "\\draw (0,-1) node[below left = -1px]{$-1$} circle (1pt);\n\\draw (0,3) node[right]{$3$} circle (1pt);", dash: "(-2,3) -- (0,3)", dom: "-3.06:1.04" },
            "0":  { yMin: -0.8, yMax: 4.8, xMin: "-3.3", xMax: "1.4", ysc: 0.8, nO: "below left = -1px",  n2: "below", yNodes: "\\draw (0,4) node[right]{$4$} circle (1pt);", dash: "(-2,4) -- (0,4)", dom: "-3.07:1.05" },
            "1":  { yMin: -0.9, yMax: 5.8, xMin: "-3.4", xMax: "1.4", ysc: 0.7, nO: "below left",         n2: "below", yNodes: "\\draw (0,1) node[below left]{$1$} circle (1pt);\n\\draw (0,5) node[right]{$5$} circle (1pt);", dash: "(-2,5) -- (0,5)", dom: "-3.17:1.06" },
            "2":  { yMin: -0.9, yMax: 6.8, xMin: "-3.6", xMax: "1.5", ysc: 0.7, nO: "below left = -1px",  n2: "below", yNodes: "\\draw (0,2) node[below left = -1px]{$2$} circle (1pt);\n\\draw (0,6) node[right]{$6$} circle (1pt);", dash: "(-2,6) -- (0,6)", dom: "-3.25:1.05" }
        };
        var c3 = conf3[d];
        if (c3) {
            result = "\\begin{tikzpicture}[>=stealth,thick,yscale=" + c3.ysc + "]\n" +
                "\\draw[->,line width = 1pt] (" + c3.xMin + ",0) -- (" + c3.xMax + ",0) node[below, pos = 0.98]{$x$};\n" +
                "\\draw[->,line width = 1pt] (0," + c3.yMin + ") -- (0," + c3.yMax + ") node[right, pos = 0.97]{$y$};\n" +
                "\\draw (0,0) node[" + c3.nO + "]{\\footnotesize $O$} circle (1.2pt);\n" +
                "\\draw (-2,0) node[" + c3.n2 + "]{$-2$} circle (1pt);\n" +
                c3.yNodes + "\n" +
                "\\draw[dashed] (-2,0) -- " + c3.dash + ";\n" +
                "\\draw[thick,samples=200,domain=" + c3.dom + "] plot(\\x,{(\\x)^3+3*(\\x)^2" + (d >= 0 ? (d === 0 ? "" : "+" + d) : d) + "});\n" +
                "\\end{tikzpicture}";
        }
    }
    return result;
}

function dothibacba_a_am(a, b, c, d) {
    var result = "";
    // BỘ 1: y = -x^3 + 3x + d
    if (a === -1 && b === 0 && c === 3) {
        var conf1 = {
            "-2": { yMin: -4.4, yMax: 0.8, nO: "below left",  n1: "above", n2: "above", yNodes: "\\draw (0,-4) node[right]{$-4$} circle (1pt);", d1: "(-1,-4) -- (0,-4)", d2: "(1,0) -- (0,0)" },
            "-1": { yMin: -3.4, yMax: 1.8, nO: "below left",  n1: "above", n2: "below", yNodes: "\\draw (0,-3) node[right]{$-3$} circle (1pt);\n\\draw (0,1) node[left]{$1$} circle (1pt);", d1: "(-1,-3) -- (0,-3)", d2: "(1,1) -- (0,1)" },
            "0":  { yMin: -2.4, yMax: 2.8, nO: "below left",  n1: "above", n2: "below", yNodes: "\\draw (0,-2) node[right]{$-2$} circle (1pt);\n\\draw (0,2) node[left]{$2$} circle (1pt);", d1: "(-1,-2) -- (0,-2)", d2: "(1,2) -- (0,2)" },
            "1":  { yMin: -1.4, yMax: 3.8, nO: "below right", n1: "above", n2: "below", yNodes: "\\draw (0,-1) node[right]{$-1$} circle (1pt);\n\\draw (0,3) node[left]{$3$} circle (1pt);", d1: "(-1,-1) -- (0,-1)", d2: "(1,3) -- (0,3)" },
            "2":  { yMin: -0.5, yMax: 4.8, nO: "below left",  n1: "below", n2: "below", yNodes: "\\draw (0,4) node[left]{$4$} circle (1pt);", d1: "(-1,0) -- (0,0)", d2: "(1,4) -- (0,4)" }
        };
        var c1 = conf1[d];
        if (c1) {
            result = "\\begin{tikzpicture}[>=stealth,thick,scale=0.9]\n" +
                "\\draw[->,>=stealth, line width = 1pt] (-2.5,0)--node[below, pos = 0.98]{$x$}(2.5,0);\n" +
                "\\draw[->,>=stealth, line width = 1pt] (0," + c1.yMin + ")--node[right, pos = 0.97]{$y$}(0," + c1.yMax + ");\n" +
                "\\draw (0,0) node[" + c1.nO + "]{\\footnotesize $O$} circle (1.2pt);\n" +
                "\\draw (-1,0) node[" + c1.n1 + "]{$-1$} circle (1pt);\n" +
                "\\draw (1,0) node[" + c1.n2 + "]{$1$} circle (1pt);\n" +
                c1.yNodes + "\n" +
                "\\draw[dashed] (-1,0) -- " + c1.d1 + ";\n" +
                "\\draw[dashed] (1,0) -- " + c1.d2 + ";\n" +
                "\\draw[thick,samples=200,domain=-2.06:2.03] plot(\\x,{-(\\x)^3+3*(\\x)" + (d >= 0 ? (d === 0 ? "" : "+" + d) : d) + "});\n" +
                "\\end{tikzpicture}";
        }
    }

    // BỘ 2: y = -x^3 + 3x^2 + d
    else if (a === -1 && b === 3 && c === 0) {
        var conf2 = {
            "-4": { yMin: -4.6, yMax: 0.6, dom: 3.03, nO: "below left", yNodes: "\\draw (0,-4) node[below left]{$-4$} circle (1pt);", dash: "(2,0) -- (0,0)" },
            "-3": { yMin: -3.5, yMax: 1.6, dom: 3.03, nO: "below left", yNodes: "\\draw (0,-3) node[below left]{$-3$} circle (1pt);\n\\draw (0,1) node[left]{$1$} circle (1pt);", dash: "(2,1) -- (0,1)" },
            "-2": { yMin: -2.5, yMax: 2.6, dom: 3.02, nO: "below left", yNodes: "\\draw (0,-2) node[below left]{$-2$} circle (1pt);\n\\draw (0,2) node[left]{$2$} circle (1pt);", dash: "(2,2) -- (0,2)" },
            "-1": { yMin: -1.5,  yMax: 3.6, dom: 3.03, nO: "above right", yNodes: "\\draw (0,-1) node[below left]{$-1$} circle (1pt);\n\\draw (0,3) node[left]{$3$} circle (1pt);", dash: "(2,3) -- (0,3)" },
            "0":  { yMin: -0.8,  yMax: 4.6, dom: 3.07, nO: "below left",  yNodes: "\\draw (0,4) node[left]{$4$} circle (1pt);", dash: "(2,4) -- (0,4)" },
            "1":  { yMin: -0.8,  yMax: 5.6, dom: 3.17, nO: "below left",  yNodes: "\\draw (0,1) node[below left]{$1$} circle (1pt);\n\\draw (0,5) node[left]{$5$} circle (1pt);", dash: "(2,5) -- (0,5)" },
            "2":  { yMin: -0.8,  yMax: 6.6, dom: 3.25, nO: "below left",  yNodes: "\\draw (0,2) node[below left]{$2$} circle (1pt);\n\\draw (0,6) node[left]{$6$} circle (1pt);", dash: "(2,6) -- (0,6)" }
        };
        var c2 = conf2[d];
        if (c2) {
            result = "\\begin{tikzpicture}[>=stealth,thick,scale=0.9]\n" +
                "\\draw[->,>=stealth, line width = 1pt] (-1.6,0)--node[below, pos = 0.98]{$x$}(3.7,0);\n" +
                "\\draw[->,>=stealth, line width = 1pt] (0," + c2.yMin + ")--node[right, pos = 0.97]{$y$}(0," + c2.yMax + ");\n" +
                "\\draw (0,0) node[" + c2.nO + "]{\\footnotesize $O$} circle (1.2pt);\n" +
                "\\draw (2,0) node[below]{$2$} circle (1pt);\n" +
                c2.yNodes + "\n" +
                "\\draw[dashed] (2,0) -- " + c2.dash + ";\n" +
                "\\draw[thick,samples=200,domain=-1.04:" + c2.dom + "] plot(\\x,{-(\\x)^3+3*(\\x)^2" + (d >= 0 ? (d === 0 ? "" : "+" + d) : d) + "});\n" +
                "\\end{tikzpicture}";
        }
    }

    // BỘ 3: y = -x^3 - 3x^2 + d
    else if (a === -1 && b === -3 && c === 0) {
        var conf3 = {
            "-2": { yMin: -6.4, yMax: 0.9, nO: "above right", n2B: "above", yNodes: "\\draw (0,-2) node[above right]{$-2$} circle (1pt);\n\\draw (0,-6) node[right]{$-6$} circle (1pt);", d1: "(-2,-6) -- (0,-6)", dom: "-3.25:1.03" },
            "-1": { yMin: -5.5, yMax: 0.9, nO: "above right", n2B: "above", yNodes: "\\draw (0,-1) node[above right]{$-1$} circle (1pt);\n\\draw (0,-5) node[right]{$-5$} circle (1pt);", d1: "(-2,-5) -- (0,-5)", dom: "-3.16:1.04" },
            "0":  { yMin: -4.4, yMax: 0.9, nO: "above right", n2B: "above", yNodes: "\\draw (0,-4) node[right]{$-4$} circle (1pt);", d1: "(-2,-4) -- (0,-4)", dom: "-3.06:1.03" },
            "1":  { yMin: -3.4, yMax: 1.9,   nO: "below left",  n2B: "above", yNodes: "\\draw (0,1) node[above right]{$1$} circle (1pt);\n\\draw (0,-3) node[right]{$-3$} circle (1pt);", d1: "(-2,-3) -- (0,-3)", dom: "-3.05:1.03" },
            "2":  { yMin: -2.4, yMax: 2.9,   nO: "above right", n2B: "above", yNodes: "\\draw (0,2) node[above right]{$2$} circle (1pt);\n\\draw (0,-2) node[right]{$-2$} circle (1pt);", d1: "(-2,-2) -- (0,-2)", dom: "-3.06:1.03" },
            "3":  { yMin: -1.4, yMax: 3.9,   nO: "above right", n2B: "above", yNodes: "\\draw (0,3) node[above right]{$3$} circle (1pt);\n\\draw (0,-1) node[right]{$-1$} circle (1pt);", d1: "(-2,-1) -- (0,-1)", dom: "-3.06:1.03" },
            "4":  { yMin: -0.6, yMax: 4.9,   nO: "above right", n2B: "below", yNodes: "\\draw (0,4) node[above right]{$4$} circle (1pt);", d1: "(-2,0) -- (0,0)", dom: "-3.06:1.04" }
        };
        var c3 = conf3[d];
        if (c3) {
            result = "\\begin{tikzpicture}[>=stealth,thick,scale=0.9]\n" +
                "\\draw[->,>=stealth, line width = 1pt] (-3.5,0)--node[below, pos = 0.98]{$x$}(1.6,0);\n" +
                "\\draw[->,>=stealth, line width = 1pt] (0," + c3.yMin + ")--node[right, pos = 0.97]{$y$}(0," + c3.yMax + ");\n" +
                "\\draw (0,0) node[" + c3.nO + "]{\\footnotesize $O$} circle (1.2pt);\n" +
                "\\draw (-2,0) node[" + c3.n2B + "]{$-2$} circle (1pt);\n" +
                c3.yNodes + "\n" +
                "\\draw[dashed] (-2,0) -- " + c3.d1 + ";\n" +
                "\\draw[thick,samples=200,domain=" + c3.dom + "] plot(\\x,{-(\\x)^3-3*(\\x)^2" + (d >= 0 ? (d === 0 ? "" : "+" + d) : d) + "});\n" +
                "\\end{tikzpicture}";
        }
    }

    return result;
}

function hamtrungphuongCTCT(a, b, c) {
    return "\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.6]\n" +
    "\\def\\a{10}\n" +
    "\\def\\b{7}\n" +
	"\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);\n" + 
    "\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);\n" +
    "\\draw (-0.5,-1.5)--(\\a-0.5,-1.5);\n" +
    "\\draw (0.5,0.5)--(0.5,-\\b+0.5);\n" +
    "\\path\n" +
    "(0,0) node{$x$}\n" +
    "(0,-1) node{$f'(x)$}\n" +
    "(0,-4) node{$f(x)$}\n" +
    "(1,0) node{$-\\infty$}\n" +
    "(1,-6) node(A){$-\\infty$}\n" +
    "(3,0) node{$" + (-a) + "$}\n" +
    "(3,-1) node{$0$}\n" +
    "(3,-2) node(B){$" + b + "$}\n" +
    "(5,0) node{$0$}\n" +
    "(5,-1) node{$0$}\n" +
    "(5,-5) node(C){$" + c + "$}\n" +
    "(7,0) node{$" + a + "$}\n" +
    "(7,-1) node{$0$}\n" +
    "(7,-2) node(D){$" + b + "$}\n" +
    "(9,0) node{$+\\infty$}\n" +
    "(9,-6) node(E){$-\\infty$}\n" +
    "(2,-1) node{$+$}\n" +
    "(4,-1) node{$-$}\n" +
    "(6,-1) node{$+$}\n" +
    "(8,-1) node{$-$};\n" +
    "\\draw[->,>=stealth] (A)--(B);\n" +
    "\\draw[->,>=stealth] (B)--(C);\n" +
    "\\draw[->,>=stealth] (C)--(D);\n" +
    "\\draw[->,>=stealth] (D)--(E);\n" +
    "\\end{tikzpicture}\n";
}

function hamtrungphuongTCTC(a, b, c) {
    return "\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.6]\n" +
    "\\def\\a{10}\n" +
    "\\def\\b{7}\n" +
	"\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);\n" + 
    "\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);\n" +
    "\\draw (-0.5,-1.5)--(\\a-0.5,-1.5);\n" +
    "\\draw (0.5,0.5)--(0.5,-\\b+0.5);\n" +
    "\\path\n" +
    "(0,0) node{$x$}\n" +
    "(0,-1) node{$f'(x)$}\n" +
    "(0,-4) node{$f(x)$}\n" +
    "(1,0) node{$-\\infty$}\n" +
    "(1,-2) node(A){$+\\infty$}\n" +
    "(3,0) node{$" + (-a) + "$}\n" +
    "(3,-1) node{$0$}\n" +
    "(3,-6) node(B){$" + b + "$}\n" +
    "(5,0) node{$0$}\n" +
    "(5,-1) node{$0$}\n" +
    "(5,-3) node(C){$" + c + "$}\n" +
    "(7,0) node{$" + a + "$}\n" +
    "(7,-1) node{$0$}\n" +
    "(7,-6) node(D){$" + b + "$}\n" +
    "(9,0) node{$+\\infty$}\n" +
    "(9,-2) node(E){$+\\infty$}\n" +
    "(2,-1) node{$-$}\n" +
    "(4,-1) node{$+$}\n" +
    "(6,-1) node{$-$}\n" +
    "(8,-1) node{$+$};\n" +
    "\\draw[->,>=stealth] (A)--(B);\n" +
    "\\draw[->,>=stealth] (B)--(C);\n" +
    "\\draw[->,>=stealth] (C)--(D);\n" +
    "\\draw[->,>=stealth] (D)--(E);\n" +
    "\\end{tikzpicture}\n";
}

function bangxetdauCTC(x, f, x1, x2) {
    return "\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.7]\n" +
    "\\def\\a{8}\n" +
    "\\def\\b{2}\n" +
    "\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);\n" +
    "\\draw (0.5,0.5)--(0.5,-\\b+0.5);\n" +
    "\\path\n" +
    "(0,0) node{$" + x + "$}\n" +
    "(1,0) node{$-\\infty$}\n" +
    "(3,0) node{$" + x1 + "$}\n" +
    "(5,0) node{$" + x2 + "$}\n" +
    "(7,0) node{$+\\infty$}\n" +
    "(0,-1) node{$" + f + "'(" + x + ")$}\n" +
    "(2,-1) node{$+$}\n" +
    "(3,-1) node{$0$}\n" +
    "(4,-1) node{$-$}\n" +
    "(5,-1) node{$0$}\n" +
    "(6,-1) node{$+$};\n" +
    "\\end{tikzpicture}\n";
}

function bangxetdauTCT(x, f, x1, x2) {
    return "\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.7]\n" +
    "\\def\\a{8}\n" +
    "\\def\\b{2}\n" +
    "\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);\n" +
    "\\draw (0.5,0.5)--(0.5,-\\b+0.5);\n" +
    "\\path\n" +
    "(0,0) node{$" + x + "$}\n" +
    "(1,0) node{$-\\infty$}\n" +
    "(3,0) node{$" + x1 + "$}\n" +
    "(5,0) node{$" + x2 + "$}\n" +
    "(7,0) node{$+\\infty$}\n" +
    "(0,-1) node{$" + f + "'(" + x + ")$}\n" +
    "(2,-1) node{$-$}\n" +
    "(3,-1) node{$0$}\n" +
    "(4,-1) node{$+$}\n" +
    "(5,-1) node{$0$}\n" +
    "(6,-1) node{$-$};\n" +
    "\\end{tikzpicture}\n";
}

function bangxetdauCTCT(x, f, x1, x2, x3) {
    return "\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.7]\n" +
    "\\def\\a{10}\n" +
    "\\def\\b{2}\n" +
    "\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);\n" +
    "\\draw (0.5,0.5)--(0.5,-\\b+0.5);\n" +
    "\\path\n" +
    "(0,0) node{$" + x + "$}\n" +
    "(1,0) node{$-\\infty$}\n" +
    "(3,0) node{$" + x1 + "$}\n" +
    "(5,0) node{$" + x2 + "$}\n" +
    "(7,0) node{$" + x3 + "$}\n" +
    "(9,0) node{$+\\infty$}\n" +
    "(0,-1) node{$" + f + "'(" + x + ")$}\n" +
    "(2,-1) node{$+$}\n" +
    "(3,-1) node{$0$}\n" +
    "(4,-1) node{$-$}\n" +
    "(5,-1) node{$0$}\n" +
    "(6,-1) node{$+$}\n" +
    "(7,-1) node{$0$}\n" +
    "(8,-1) node{$-$};\n" +
    "\\end{tikzpicture}\n";
}

function bangxetdauCTTC(x, f, x1, x2, x3) {
    return "\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.7]\n" +
    "\\def\\a{10}\n" +
    "\\def\\b{2}\n" +
    "\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);\n" +
    "\\draw (0.5,0.5)--(0.5,-\\b+0.5);\n" +
    "\\path\n" +
    "(0,0) node{$" + x + "$}\n" +
    "(1,0) node{$-\\infty$}\n" +
    "(3,0) node{$" + x1 + "$}\n" +
    "(5,0) node{$" + x2 + "$}\n" +
    "(7,0) node{$" + x3 + "$}\n" +
    "(9,0) node{$+\\infty$}\n" +
    "(0,-1) node{$" + f + "'(" + x + ")$}\n" +
    "(2,-1) node{$+$}\n" +
    "(3,-1) node{$0$}\n" +
    "(4,-1) node{$-$}\n" +
    "(5,-1) node{$0$}\n" +
    "(6,-1) node{$-$}\n" +
    "(7,-1) node{$0$}\n" +
    "(8,-1) node{$+$};\n" +
    "\\end{tikzpicture}\n";
}

function bangxetdauTCTCT(x, f, x1, x2, x3, x4) {
    return "\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.7]\n" +
    "\\begin{tikzpicture}[line width=1.2pt,xscale=1.1,yscale=0.7]\n" +
    "\\def\\a{12}\n" +
    "\\def\\b{2}\n" +
    "\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);\n" +
    "\\draw (0.5,0.5)--(0.5,-\\b+0.5);\n" +
    "\\path\n" +
    "(0,0) node{$" + x + "$}\n" +
    "(1,0) node{$-\\infty$}\n" +
    "(3,0) node{$" + x1 + "$}\n" +
    "(5,0) node{$" + x2 + "$}\n" +
    "(7,0) node{$" + x3 + "$}\n" +
    "(9,0) node{$" + x4 + "$}\n" +
    "(11,0) node{$+\\infty$}\n" +
    "(0,-1) node{$" + f + "'(" + x + ")$}\n" +
    "(2,-1) node{$-$}\n" +
    "(3,-1) node{$0$}\n" +
    "(4,-1) node{$+$}\n" +
    "(5,-1) node{$0$}\n" +
    "(6,-1) node{$-$}\n" +
    "(7,-1) node{$0$}\n" +
    "(8,-1) node{$+$}\n" +
    "(9,-1) node{$0$}\n" +
    "(10,-1) node{$-$};\n" +
    "\\end{tikzpicture}\n";
}

function ngoacnew(a) {
    if (a === 0) {
        return "x";
    }
    if (a > 0) {
        return "(x+" + a + ")";
    }
    if (a < 0) {
        return "(x" + a + ")";
    }
}

function kiemtrakhacnhau(a, b, c, d) {
    if (a !== b && a !== c && a !== d && b !== c && b !== d && c !== d) {
        return true;
    } else {
        return false;
    }
}

function hesoxaudau(a, x) {
    if (a === "1") return x;
    if (a === "-1") return "-" + x;
    if (a === "0") return "";
    return a + x;
}

function hesoxausau(a, x) {
    if (a === "1") return "+" + x;
    if (a === "-1") return "-" + x;
    if (a === "0") return "";
    if (a[0] === "-") return a + x;
    return "+" + a + x;
}


function C(n,k) {
    if (k === 0 || k === n) {
        return 1;
    }
    else {
        return C(n-1,k-1)+C(n-1,k);
    }
}

function phansobuoclam(a, b) {
    if (ucln(a, b) === 1) {
        return phanso(a, b);
    } else {
        return '\\dfrac{' + a + '}{' + b + '}=' + phanso(a, b);
    }
}

function kiemtrabaxau(s1, s2, s3) {
    if (new Set([s1, s2, s3]).size === 3) {
        return true;
    } else {
        return false;
    }
}

function ucln(m,n) {
    while (m !== n) {
            if (m > n) {
                m = m - n;
            } else {
                n = n - m;
            }
    }
    return m;
}

function phansoduong(m, n) {
    let common = ucln(m, n);
    let a = m / common;
    let b = n / common;
    if (b === 1) {
        return a.toString();
    } else {
        return "\\dfrac{" + a + "}{" + b + "}";
    }
}

function phanso(m,n) {
    if (m*n > 0) {
        return phansoduong(Math.abs(m), Math.abs(n));
    } else if (m * n < 0) {
        return "-"+phansoduong(Math.abs(m), Math.abs(n));
    } else {
        return "0";
    }
}

function phansoxauduong(m,n,x) {
	var a = m/ucln(m,n);
	var b = n/ucln(m,n);
    if (b === 1) {
        if (a == 1) {
            return x;
        } else {
            return a+x;
        }
    } else {
        if (a == 1) {
            return "\\dfrac{"+x+"}{"+b+"}";
        } else {
            return "\\dfrac{"+a+x+"}{"+b+"}";
        }
	}
}
function phansoxau(m,n,x) {
	if (m*n > 0) {
		return phansoxauduong(Math.abs(m),Math.abs(n),x);
	} else if (m*n < 0) {
		return "-"+phansoxauduong(Math.abs(m),Math.abs(n),x);
	} else {
		return "0";
	}
}
function phansoxausecond(m,n,x) {
	if (m*n > 0) {
		return "+"+phansoxauduong(Math.abs(m),Math.abs(n),x);
	} else if (m*n < 0) {
		return "-"+phansoxauduong(Math.abs(m),Math.abs(n),x);
	} else {
		return "";
	}
}

/* Hàm tính phân số \dfrac{m\sqrt{n}}{p} với m, p dương */
function phansocanduong(m, n, p) {
    var cp = uoccpmax(n);
    var a = Math.sqrt(cp);
    var b = n / cp;

    if (b === 1) {
        return phanso(m * a, p);
    } else {
        var q = m * a;
        var g = ucln(q, p);
        var c = q / g;
        var d = p / g;

        if (d === 1) {
            if (c === 1) {
                return "\\sqrt{" + b + "}";
            } else {
                return c + "\\sqrt{" + b + "}";
            }
        } else {
            if (c === 1) {
                return "\\dfrac{\\sqrt{" + b + "}}{" + d + "}";
            } else {
                return "\\dfrac{" + c + "\\sqrt{" + b + "}}{" + d + "}";
            }
        }
    }
}

/* Hàm tính phân số \dfrac{m\sqrt{n}}{p} với m, p bất kỳ */
function phansocan(m, n, p) {
    if (m * p > 0) {
        return phansocanduong(Math.abs(m), n, Math.abs(p));
    }
    if (m * p < 0) {
        return "-" + phansocanduong(Math.abs(m), n, Math.abs(p));
    }
    if (m === 0) {
        return "0";
    }
}

function vectohaiba(x1,x2,y1,y2,y3,p11,p12,p13,p21,p22,p23) {
    return "$$\\begin{tikzpicture}[thick]\n" + 
    "\\begin{scope}[xscale=1.2,yscale=0.85]\n" + 
    "\\path\n" + 
    "(0,0) foreach \\i[count=\\k] in {$"+y1+"$,$"+y2+"$,$"+y3+"$} {++(1,0) node(1\\k){\\i}}\n" + 			
    "(0,-1) node{$"+x1+"$} foreach \\i[count=\\k] in {{$"+p11+"$},{$"+p12+"$},{$"+p13+"$}} {++(1,0) node(2\\k){\\i}}\n" + 
    "(0,-2) node{$"+x2+"$} foreach \\i[count=\\k] in {{$"+p21+"$},{$"+p22+"$},{$"+p23+"$}} {++(1,0) node(3\\k){\\i}};\n" + 
    "\\draw[shift={(-0.5,0.5)}] (0,0) grid (4,-3)\n" + 
    "(0,0)--(1,-1)\n" + 
    "(0,-1) node[above right]{$X$}\n" + 
    "(1,0) node[below left]{$Y$};\n" + 
    "\\end{scope}\n" + 
    "\\end{tikzpicture}$$\n";
}

function hambacbaCTC(x,f,x1,x2,y1,y2) {
    return "\\begin{tikzpicture}[thick,xscale=0.95,yscale=0.5]\n" + 
    "\\def\\a{8}\n" + 
    "\\def\\b{7}\n" + 
    "\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);\n" + 
    "\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);\n" + 
    "\\draw (-0.5,-1.5)--(\\a-0.5,-1.5);\n" + 
    "\\draw (0.5,0.5)--(0.5,-\\b+0.5);\n" + 
    "\\path\n" + 
    "(0,0) node{$"+x+"$}\n" + 
    "(0,-1) node{$"+f+"'("+x+")$}\n" + 
    "(0,-4) node{$"+f+"("+x+")$}\n" + 
    "(1,0) node{$-\\infty$}\n" + 
    "(1,-6) node(A){$-\\infty$}\n" + 
    "(3,0) node{$"+x1+"$}\n" + 
    "(3,-1) node{$0$}\n" + 
    "(3,-3) node(B){$"+y1+"$}\n" + 
    "(5,0) node{$"+x2+"$}\n" + 
    "(5,-1) node{$0$}\n" + 
    "(5,-5) node(C){$"+y2+"$}\n" + 
    "(7,0) node{$+\\infty$}\n" + 
    "(7,-2) node(D){$+\\infty$}\n" + 
    "(2,-1) node{$+$}\n" + 
    "(4,-1) node{$-$}\n" + 
    "(6,-1) node{$+$};\n" + 
    "\\draw[->,>=stealth] (A)--(B);\n" + 
    "\\draw[->,>=stealth] (B)--(C);\n" + 
    "\\draw[->,>=stealth] (C)--(D);\n" + 
    "\\end{tikzpicture}\n";
}

function hambacbaTCT(x, f, x1, x2, y1, y2) {
    return "\\begin{tikzpicture}[thick,xscale=0.95,yscale=0.5]\n" +
    "\\def\\a{8}\n" +
    "\\def\\b{7}\n" +
    "\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);\n" +
    "\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);\n" +
    "\\draw (-0.5,-1.5)--(\\a-0.5,-1.5);\n" +
    "\\draw (0.5,0.5)--(0.5,-\\b+0.5);\n" +
    "\\path\n" +
    "(0,0) node{$" + x + "$}\n" +
    "(0,-1) node{$" + f + "'(" + x + ")$}\n" +
    "(0,-4) node{$" + f + "(" + x + ")$}\n" +
    "(1,0) node{$-\\infty$}\n" +
    "(1,-2) node(A){$+\\infty$}\n" +
    "(3,0) node{$" + x1 + "$}\n" +
    "(3,-1) node{$0$}\n" +
    "(3,-5) node(B){$" + y1 + "$}\n" +
    "(5,0) node{$" + x2 + "$}\n" +
    "(5,-1) node{$0$}\n" +
    "(5,-3) node(C){$" + y2 + "$}\n" +
    "(7,0) node{$+\\infty$}\n" +
    "(7,-6) node(D){$-\\infty$}\n" +
    "(2,-1) node{$-$}\n" +
    "(4,-1) node{$+$}\n" +
    "(6,-1) node{$-$};\n" +
    "\\draw[->,>=stealth] (A)--(B);\n" +
    "\\draw[->,>=stealth] (B)--(C);\n" +
    "\\draw[->,>=stealth] (C)--(D);\n" +
    "\\end{tikzpicture}\n";
}



function convert(number) {
    return number.toString().replace('.', ',');
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // Trong khi vẫn còn phần tử chưa được xáo trộn
    while (0 !== currentIndex) {
        // Chọn một phần tử còn lại
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Và tráo đổi nó với phần tử hiện tại
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function randomchoice(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
    }

function hesodau(a,x) {
    if (a > 1 || a < -1) {
        return a + x;
    }
    if (a === 1) {
        return x;
    }
    if (a === -1) {
        return "-" + x;
    }
    if (a === 0) {
        return "";
    }
}

function hesosau(a, x) {
    // TRƯỜNG HỢP 1: Hệ số bằng 0 -> Luôn triệt tiêu bất kể x là gì
    if (a === 0) {
        return "";
    }
    
    // TRƯỜNG HỢP 2: Nếu x là chuỗi rỗng (Xử lý hằng số tự do đứng sau)
    if (x === "") {
        if (a > 0) {
            return "+" + a; // Ví dụ: +1, +5
        }
        if (a < 0) {
            return a;       // Ví dụ: -1, -5 (bản thân số a đã có sẵn dấu trừ)
        }
    }
    
    // TRƯỜNG HỢP 3: Nếu x có chứa biến (Giữ nguyên logic chuẩn cũ của bạn)
    if (a === 1) {
        return "+" + x; // Ví dụ: +\sin x
    }
    if (a === -1) {
        return "-" + x; // Ví dụ: -\sin x
    }
    if (a > 0) {
        return "+" + a + x; // Ví dụ: +5\sin x
    }
    if (a < 0) {
        return a + x;       // Ví dụ: -5\sin x
    }
}

function sodungsau(a) {
    if (a > 0) {
        return "+"+a;
    }
    if (a === 0) {
        return "";
    }
    if (a < 0) {
        return a;
    }
}

function sodungsaunew(a) {
    if (a >= 0) {
        return "+"+a;
    }
    if (a < 0) {
        return a;
    }
}

function format(a) {
    if (a >= 10) {
        return "{"+a+"}"; 
    } 
    else {
        return a; 
    }
}

function kiemtracp(n) {
let i = 0;
while (i*i < n) {
    i++;
}
if (i*i === n) {
    return true;
} else {
    return false;
}
}

function uoccpmax(n) {
    let danhsachuoc = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && kiemtracp(i) === true) {
            danhsachuoc.push(i);
        }
    }
    return Math.max(...danhsachuoc);
}

function canbachai(n) {
    let a = Math.sqrt(uoccpmax(n));
    let b = n / uoccpmax(n);
    if (a === 1) {
        if (b === 1) {
            return "1";
        } else {
            return "\\sqrt{"+b+"}";
        }
    } else {
        if (b === 1) {
            return a;
        } else {
            return a+"\\sqrt{"+b+"}";
        }
    }
}

function bachai(t, a) {
if (a === 0) {
    return t+"^2";
}
if (a > 0) {
    return "("+t+"-"+a+")^2";
}
if (a < 0) {
    return "("+t+"+"+(-a)+")^2";
}
}
