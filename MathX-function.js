function hammoi() {
    var dsHam = [
        SBT_BBT_NB_hamtrungphuongCTCT('hello'),  
        SBT_BBT_hambacbaCTC('xinchao'),
        CT_BBT_hamtrungphuongCTCT('hilu')
    ];
    shuffle(dsHam);
    var baHamNgauNhien = dsHam[0] + dsHam[1];
    return `\\section{XÁC SUẤT CÓ ĐIỀU KIỆN}
\\subsection{KIẾN THỨC CẦN NHỚ}
\\subsubsection{Xác suất có điều kiện}
\\begin{dn}
Cho hai biến cố $A$ và $B$. Xác suất của biến cố $A$ khi biến cố $B$ đã xảy ra được gọi là {\\it xác suất của $A$ với điều kiện $B$}. Kí hiệu là $P(A|B)$. Khi $P(B)>0$ thì
$$P(A|B)=\\dfrac{P(AB)}{P(B)}.$$
\\end{dn}
$\\bullet$ Từ công thức xác suất có điều kiện, với $P(B)>0$, ta có {\\it công thức nhân xác suất} cho hai biến cố $P(AB)=P(B)P(A|B)$.\\\\
$\\bullet$ Theo công thức nhân xác suất $P(BA)=P(A)P(B|A)$. Vì $AB=BA$ nên $P(AB)=P(BA)=P(A)P(B|A)$. Kết hợp với $P(AB)=P(B)P(A|B)$, ta suy ra với $P(A)>0, P(B)>0$
$$\\boxed{P(AB)=P(A)P(B|A)=P(B)P(A|B)\\Rightarrow P(B|A)=\\dfrac{P(B)P(A|B)}{P(A)}}$$
\\subsubsection{Công thức xác suất toàn phần, công thức Bayes}
\\begin{dn}
Cho hai biến cố $A$ và $B$ ${ngaunhien([" với ", " thỏa mãn "])} $0<P(B)<1$. Khi đó ta có {\\it công thức xác suất toàn phần}
$$P(A)=P(B)P(A|B)+P(\\overline{B})P(A|\\overline{B}).$$
\\end{dn}
\\begin{dn}
Cho hai biến cố $A$ và $B$ ${ngaunhien([" với ", " thỏa mãn "])} $P(A)>0$ và $0<P(B)<1$. Khi đó ta có {\\it công thức Bayes}
$$P(B|A)=\\dfrac{P(B)P(A|B)}{P(B)P(A|B)+P(\\overline{B})P(A|\\overline{B})}.$$
\\end{dn}
\\begin{nx}
Vì $P(A)=P(B)P(A|B)+P(\\overline{B})P(A|\\overline{B})$ nên ta có thể viết công thức Bayes ở dưới dạng
$$P(B|A)=\\dfrac{P(B)P(A|B)}{P(A)}.$$
\\end{nx}
\\subsection{MỘT SỐ VÍ DỤ}
Đề bài toán hoặc câu dẫn Latex có công thức $\sqrt{a}$ là\\\\
Vậy ta ${ngaunhien(["có", "được", "đạt", "have", "get"])} công thức sau đây\\\\
\\noindent Do đó ta có ngẫu nhiên công thức toán ${ngaunhien(["$\\sin x$", "$\\cos x$", "$\\dfrac{a}{b}$"])} sau đây:
${baHamNgauNhien}Tiếp theo ta có đồ thị của hàm số bậc ba TCT
${CT_DT_giatriCT_hambacbaTCT('no')}Và đồ thị khác
${CT_DT_giatriCT_hambacbaCTC('nono')}Và đồ thị ngẫu nhiên 
${ngaunhien([CT_DT_giatriCT_hambacbaCTC('ex'), CT_DT_giatriCT_hambacbaTCT('em')])}
`;
}

function SBT_DT_hambacbaCTC(loai) {
    // Với a > 0: Nghịch biến nằm giữa (x1, x2), Đồng biến nằm 2 bên vô cực
    var dang = randomchoice(0, 1) === 0 ? "ĐB" : "NB";
    
    // BỘ MẪU CHO a = 1
    var boMau = [
        [1, 0, -3, -2], [1, 0, -3, -1], [1, 0, -3, 0], [1, 0, -3, 1], [1, 0, -3, 2], // Cực trị -1, 1
        [1, -3, 0, -2], [1, -3, 0, -1], [1, -3, 0, 0], [1, -3, 0, 1], [1, -3, 0, 2], [1, -3, 0, 3], [1, -3, 0, 4], [1, -3, 0, 5], // Cực trị 0, 2
        [1, 3, 0, -4], [1, 3, 0, -3], [1, 3, 0, -2], [1, 3, 0, -1], [1, 3, 0, 0], [1, 3, 0, 1], [1, 3, 0, 2] // Cực trị -2, 0
    ];
    
    var index = randomchoice(0, boMau.length - 1);
    var boChon = boMau[index];
    var a = boChon[0], b = boChon[1], c = boChon[2], d = boChon[3];
    
    var x1, x2, y1, y2;
    // Xác định hoành độ và tung độ cực trị (x1 luôn bé hơn x2)
    // Với a = 1: y1 là Cực đại, y2 là Cực tiểu. Do đó y1 > y2.
    if (b === 0 && c === -3) { 
        x1 = -1; x2 = 1; y1 = d + 2; y2 = d - 2; 
    } else if (b === -3 && c === 0) { 
        x1 = 0;  x2 = 2; y1 = d;     y2 = d - 4; 
    } else { 
        x1 = -2; x2 = 0; y1 = d + 4; y2 = d; 
    }
    
    var PA1, PA2, PA3, PA4, cauHoiTxt, loigiaiTxt;

    if (dang === "NB") {
        // HÀM NGHỊCH BIẾN (Khoảng giữa)
        cauHoiTxt = "Hàm số đã cho nghịch biến trên khoảng nào dưới đây?";
        var khoangDung = "(" + x1 + ";" + x2 + ")";
        PA1 = "{\\True $" + khoangDung + "$}";
        // Nhiễu bằng tung độ cực trị: vì a > 0 nên y2 < y1, viết (y2; y1) cho đúng quy tắc khoảng
        PA2 = "{$(" + y2 + ";" + y1 + ")$}"; 
        PA3 = "{$(-\\infty;" + x1 + ")$}";
        PA4 = "{$(" + x2 + ";+\\infty)$}";
        
        loigiaiTxt = "Dựa vào đồ thị, ta thấy trên khoảng $" + khoangDung + "$ đồ thị hàm số đi xuống từ trái sang phải. Vậy hàm số nghịch biến trên khoảng $" + khoangDung + ".$";   

    } else {
        // HÀM ĐỒNG BIẾN (Hai nhánh vô cực)
        cauHoiTxt = "Hàm số đã cho đồng biến trên khoảng nào dưới đây?";
        
        var khoangDung;
        if (randomchoice(0, 1) === 0) {
            khoangDung = "(-\\infty;" + x1 + ")";
        } else {
            khoangDung = "(" + x2 + ";+\\infty)";
        }
        
        PA1 = "{\\True $" + khoangDung + "$}";
        PA2 = "{$(" + x1 + ";" + x2 + ")$}"; // Nhiễu bằng khoảng nghịch biến

        var nhieuQuocDan = [
            "{$(-\\infty;" + x2 + ")$}",
            "{$(" + x1 + ";+\\infty)$}",
            "{$(-\\infty;+\\infty)$}"
        ];
        
        shuffle(nhieuQuocDan);
        PA3 = nhieuQuocDan[0];
        PA4 = nhieuQuocDan[1];

        loigiaiTxt = "Dựa vào đồ thị, ta thấy đồ thị hàm số đi lên từ trái sang phải trên các khoảng $(-\\infty;" + x1 + ")$ và $(" + x2 + ";+\\infty)$. " + 
                     "Trong các phương án đã cho, có khoảng $" + khoangDung + "$ là thỏa mãn.";
    }

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    // Vẽ đồ thị a dương
    var codehinhve = dothibacba_a_duong(a, b, c, d);
    
    return "\\begin{"+loai+"}\n" +
           "Cho hàm số $y=f(x)$ có đồ thị là đường cong trong hình bên.\n" +
           codehinhve + "\n" +
           cauHoiTxt + "\n" +
           "\\choice\n" +
           options[0] + "\n" +
           options[1] + "\n" +
           options[2] + "\n" +
           options[3] + "\n" +
           "\\loigiai{\n" +
           loigiaiTxt + "\n" +
           "}\n" +
           "\\end{"+loai+"}\n";
}

function SBT_DT_hambacbaTCT(loai) {
    var dang = randomchoice(0, 1) === 0 ? "ĐB" : "NB";
    var boMau = [
        [-1, 0, 3, -2], [-1, 0, 3, -1], [-1, 0, 3, 0], [-1, 0, 3, 1], [-1, 0, 3, 2],
        [-1, 3, 0, -4], [-1, 3, 0, -3], [-1, 3, 0, -2], [-1, 3, 0, -1], [-1, 3, 0, 0],
        [-1, -3, 0, 0], [-1, -3, 0, 1], [-1, -3, 0, 2], [-1, -3, 0, 3], [-1, -3, 0, 4]
    ];
    var index = randomchoice(0, boMau.length - 1);
    var boChon = boMau[index];
    var a = boChon[0], b = boChon[1], c = boChon[2], d = boChon[3];
    
    var x1, x2, y1, y2;
    // Xác định x1, x2 (hoành độ) và y1, y2 (tung độ cực trị) để làm nhiễu
    if (b === 0 && c === 3) { 
        x1 = -1; x2 = 1; y1 = d - 2; y2 = d + 2; 
    } else if (b === 3 && c === 0) { 
        x1 = 0;  x2 = 2; y1 = d;     y2 = d + 4; 
    } else { 
        x1 = -2; x2 = 0; y1 = d - 4; y2 = d; 
    }
    
    var PA1, PA2, PA3, PA4, cauHoiTxt, loigiaiTxt;

    if (dang === "ĐB") {
        cauHoiTxt = "Hàm số đã cho đồng biến trên khoảng nào dưới đây?";
        var khoangDung = "(" + x1 + ";" + x2 + ")";
        PA1 = "{\\True $" + khoangDung + "$}";
        PA2 = "{$(" + y1 + ";" + y2 + ")$}"; 
        PA3 = "{$(-\\infty;" + x1 + ")$}";
        PA4 = "{$(" + x2 + ";+\\infty)$}";
        loigiaiTxt = "Dựa vào đồ thị, ta thấy trên khoảng $" + khoangDung + "$ đồ thị hàm số đi lên từ trái sang phải. Vậy hàm số đồng biến trên khoảng $" + khoangDung + ".$";   
    } else {
        cauHoiTxt = "Hàm số đã cho nghịch biến trên khoảng nào dưới đây?";
        var khoangDung;
        if (randomchoice(0, 1) === 0) {
            khoangDung = "(-\\infty;" + x1 + ")";
        } else {
            khoangDung = "(" + x2 + ";+\\infty)";
        }
        PA1 = "{\\True $" + khoangDung + "$}";
        PA2 = "{$(" + x1 + ";" + x2 + ")$}"; 
        var nhieuQuocDan = [
            "{$(-\\infty;" + x2 + ")$}",
            "{$(" + x1 + ";+\\infty)$}",
            "{$(-\\infty;+\\infty)$}"
        ];
        shuffle(nhieuQuocDan);
        PA3 = nhieuQuocDan[0];
        PA4 = nhieuQuocDan[1];

        loigiaiTxt = "Dựa vào đồ thị, ta thấy đồ thị hàm số đi xuống từ trái sang phải trên các khoảng $(-\\infty;" + x1 + ")$ và $(" + x2 + ";+\\infty)$. " + 
                     "Trong các phương án đã cho, chỉ có khoảng $" + khoangDung + "$ là thỏa mãn.";
    }

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);
    var codehinhve = dothibacba_a_am(a, b, c, d);
    return "\\begin{"+loai+"}\n" +
           "Cho hàm số $y=f(x)$ có đồ thị là đường cong trong hình bên.\n" +
           codehinhve + "\n" +
           cauHoiTxt + "\n" +
           "\\choice\n" +
           options[0] + "\n" +
           options[1] + "\n" +
           options[2] + "\n" +
           options[3] + "\n" +
           "\\loigiai{\n" +
           loigiaiTxt + "\n" +
           "}\n" +
           "\\end{"+loai+"}\n";
}

function CT_DT_giatriCT_hambacbaCTC(loai) {
    var cacDang = ["yCD", "yCT", "xCD", "xCT"];
    var loaiCauHoi = cacDang[randomchoice(0, cacDang.length - 1)];

    // BỘ MẪU CHO a = 1 (a dương)
    var boMau = [
        [1, 0, -3, -2], [1, 0, -3, -1], [1, 0, -3, 0], [1, 0, -3, 1], [1, 0, -3, 2], // Cực trị -1, 1
        [1, -3, 0, -2], [1, -3, 0, -1], [1, -3, 0, 0], [1, -3, 0, 1], [1, -3, 0, 2], [1, -3, 0, 3], [1, -3, 0, 4], [1, -3, 0, 5], // Cực trị 0, 2
        [1, 3, 0, -4], [1, 3, 0, -3], [1, 3, 0, -2], [1, 3, 0, -1], [1, 3, 0, 0], [1, 3, 0, 1], [1, 3, 0, 2] // Cực trị -2, 0
    ];
    
    var index = randomchoice(0, boMau.length - 1);
    var boChon = boMau[index];
    var a = boChon[0], b = boChon[1], c = boChon[2], d = boChon[3];
    
    var x_CD, y_CD, x_CT, y_CT;
    // Với a > 0: Điểm bên trái là Cực đại, điểm bên phải là Cực tiểu
    if (b === 0 && c === -3) { // Bộ x = -1 và x = 1
        x_CD = -1; y_CD = d + 2;
        x_CT = 1;  y_CT = d - 2;
    } else if (b === -3 && c === 0) { // Bộ x = 0 và x = 2
        x_CD = 0;  y_CD = d;
        x_CT = 2;  y_CT = d - 4;
    } else { // Bộ x = -2 và x = 0
        x_CD = -2; y_CD = d + 4;
        x_CT = 0;  y_CT = d;
    }

    var cauHoiConfig = {
        "yCD": { txt: "Giá trị cực đại", ans: y_CD, sym: "y_{\\mathrm{CĐ}}", note: "tung độ điểm cực đại" },
        "yCT": { txt: "Giá trị cực tiểu", ans: y_CT, sym: "y_{\\mathrm{CT}}", note: "tung độ điểm cực tiểu" },
        "xCD": { txt: "Điểm cực đại", ans: x_CD, sym: "x_{\\mathrm{CĐ}}", note: "hoành độ điểm cực đại" },
        "xCT": { txt: "Điểm cực tiểu", ans: x_CT, sym: "x_{\\mathrm{CT}}", note: "hoành độ điểm cực tiểu" }
    };

    var selected = cauHoiConfig[loaiCauHoi];
    
    // XỬ LÝ LỌC TRÙNG PHƯƠNG ÁN (Sử dụng xCD, xCT, yCD, yCT làm nhiễu)
    var rawValues = [y_CD, y_CT, x_CD, x_CT];
    var uniqueDistractors = [...new Set(rawValues)].filter(v => v !== selected.ans);

    var offset = 1;
    while (uniqueDistractors.length < 3) {
        var nPlus = selected.ans + offset;
        var nMinus = selected.ans - offset;
        if (!uniqueDistractors.includes(nPlus) && nPlus !== selected.ans) uniqueDistractors.push(nPlus);
        if (uniqueDistractors.length < 3 && !uniqueDistractors.includes(nMinus) && nMinus !== selected.ans) uniqueDistractors.push(nMinus);
        offset++;
    }
    var finalDist = uniqueDistractors.slice(0, 3);

    var PA1 = "{\\True $" + selected.ans + "$}";
    var PA2 = "{$" + finalDist[0] + "$}";
    var PA3 = "{$" + finalDist[1] + "$}";
    var PA4 = "{$" + finalDist[2] + "$}";
    
    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    // Gọi hàm vẽ đồ thị a dương
    var codehinhve = dothibacba_a_duong(a, b, c, d);
    
    var debai1 = "Cho hàm số bậc ba $y=f(x)$ có đồ thị là đường cong trong hình bên.";
    var debai2 = selected.txt + " của hàm số đã cho bằng";
    var loigiai = "Dựa vào đồ thị, ta thấy " + selected.note + " của đồ thị hàm số là $" + selected.ans + "$. " +
                  "Vậy " + selected.txt.toLowerCase() + " của hàm số là $" + selected.sym + "=" + selected.ans + ".$";

    return "\\begin{"+loai+"}\n" +
           debai1 + "\n" +
           codehinhve + "\n" +
           debai2 + "\n" +
           "\\choice\n" +
           options[0] + "\n" +
           options[1] + "\n" +
           options[2] + "\n" +
           options[3] + "\n" +
           "\\loigiai{\n" +
           loigiai + "\n" +
           "}\n" +
           "\\end{"+loai+"}\n";
}

function CT_DT_giatriCT_hambacbaTCT(loai) {
    var cacDang = ["yCD", "yCT", "xCD", "xCT"];
    var loaiCauHoi = cacDang[randomchoice(0, cacDang.length - 1)];

    var boMau = [
        [-1, 0, 3, -2], [-1, 0, 3, -1], [-1, 0, 3, 0], [-1, 0, 3, 1], [-1, 0, 3, 2],
        [-1, 3, 0, -4], [-1, 3, 0, -3], [-1, 3, 0, -2], [-1, 3, 0, -1], [-1, 3, 0, 0],
        [-1, -3, 0, 0], [-1, -3, 0, 1], [-1, -3, 0, 2], [-1, -3, 0, 3], [-1, -3, 0, 4]
    ];
    
    var index = randomchoice(0, boMau.length - 1);
    var boChon = boMau[index];
    var a = boChon[0], b = boChon[1], c = boChon[2], d = boChon[3];
    
    var x_CD, y_CD, x_CT, y_CT;
    if (b === 0 && c === 3) { // Bộ 1
        x_CT = -1; y_CT = d - 2;
        x_CD = 1;  y_CD = d + 2;
    } else if (b === 3 && c === 0) { // Bộ 2
        x_CT = 0;  y_CT = d;
        x_CD = 2;  y_CD = d + 4;
    } else { // Bộ 3
        x_CT = -2; y_CT = d - 4;
        x_CD = 0;  y_CD = d;
    }

    var cauHoiConfig = {
        "yCD": { txt: "Giá trị cực đại", ans: y_CD, sym: "y_{\\mathrm{CĐ}}", note: "tung độ điểm cực đại" },
        "yCT": { txt: "Giá trị cực tiểu", ans: y_CT, sym: "y_{\\mathrm{CT}}", note: "tung độ điểm cực tiểu" },
        "xCD": { txt: "Điểm cực đại", ans: x_CD, sym: "x_{\\mathrm{CĐ}}", note: "hoành độ điểm cực đại" },
        "xCT": { txt: "Điểm cực tiểu", ans: x_CT, sym: "x_{\\mathrm{CT}}", note: "hoành độ điểm cực tiểu" }
    };

    var selected = cauHoiConfig[loaiCauHoi];
    
    // XỬ LÝ LỌC TRÙNG PHƯƠNG ÁN (Dùng các giá trị thực trên đồ thị làm nhiễu)
    var rawValues = [y_CD, y_CT, x_CD, x_CT];
    var uniqueDistractors = [...new Set(rawValues)].filter(v => v !== selected.ans);

    var offset = 1;
    while (uniqueDistractors.length < 3) {
        var nPlus = selected.ans + offset;
        var nMinus = selected.ans - offset;
        if (!uniqueDistractors.includes(nPlus) && nPlus !== selected.ans) uniqueDistractors.push(nPlus);
        if (uniqueDistractors.length < 3 && !uniqueDistractors.includes(nMinus) && nMinus !== selected.ans) uniqueDistractors.push(nMinus);
        offset++;
    }
    var finalDist = uniqueDistractors.slice(0, 3);

    var PA1 = "{\\True $" + selected.ans + "$}";
    var PA2 = "{$" + finalDist[0] + "$}";
    var PA3 = "{$" + finalDist[1] + "$}";
    var PA4 = "{$" + finalDist[2] + "$}";
    
    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    var codehinhve = dothibacba_a_am(a, b, c, d);
    var debai1 = "Cho hàm số bậc ba $y=f(x)$ có đồ thị là đường cong trong hình bên.";
    var debai2 = selected.txt + " của hàm số đã cho bằng";
    var loigiai = "Dựa vào đồ thị, ta thấy " + selected.note + " của đồ thị hàm số là $" + selected.ans + "$. " +
                  "Vậy " + selected.txt.toLowerCase() + " của hàm số là $" + selected.sym + "=" + selected.ans + ".$";

    return "\\begin{"+loai+"}\n" +
           debai1 + "\n" +
           codehinhve + "\n" +
           debai2 + "\n" +
           "\\choice\n" +
           options[0] + "\n" +
           options[1] + "\n" +
           options[2] + "\n" +
           options[3] + "\n" +
           "\\loigiai{\n" +
           loigiai + "\n" +
           "}\n" +
           "\\end{"+loai+"}\n";
}

function SBT_BBT_NB_hamtrungphuongCTCT(loai) {
    var a, b, c;
    while (true) {
        a = randomchoice(1, 6);
        b = randomchoice(-6, 7);
        c = randomchoice(-6, 7);
        if (b > c) break;
    }

    var debai = "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:\n" +
        hamtrungphuongCTCT(a, b, c) +
        "Hàm số đã cho nghịch biến trên khoảng nào dưới đây?";

    var PAtrue_options = ["(" + (-a) + ";0)", "(" + a + ";+\\infty)"];
    var PAtrue = PAtrue_options[randomchoice(0, 1)];

    var PA1 = "{\\True $" + PAtrue + "$}";
    var PA2 = "{$(" + 0 + ";" + a + ")$}";
    var PA3 = "{$(-\\infty;" + (-a) + ")$}";

    var PA4_options = ["(" + (-a) + ";" + a + ")", "(-\\infty;" + a + ")", "(" + (-a) + ";+\\infty)"];
    var PA4 = "{$" + PA4_options[randomchoice(0, 2)] + "$}";

    var cumtuArr = ["Dựa vào ", "Từ "];
    var ketluanArr = [" Do đó ", " Vậy "];
    var cumtu = cumtuArr[randomchoice(0, 1)];
    var ketluan = ketluanArr[randomchoice(0, 1)];

    var loigiai = cumtu + "bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in " + PAtrue + "$." + ketluan + "hàm số đã cho nghịch biến trên khoảng $" + PAtrue + ".$";

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function SBT_BBT_DB_hamtrungphuongCTCT(loai) {
    var a, b, c;
    while (true) {
        a = randomchoice(1, 6);
        b = randomchoice(-6, 7);
        c = randomchoice(-6, 7);
        if (b > c) break;
    }

    var debai = "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:\n" +
        hamtrungphuongCTCT(a, b, c) + "\n" +
        "Hàm số đã cho đồng biến trên khoảng nào dưới đây?";

    var PAtrue_options = ["(0;" + a + ")", "(-\\infty;" + (-a) + ")"];
    var PAtrue = PAtrue_options[randomchoice(0, 1)];

    var PA1 = "{\\True $" + PAtrue + "$}";
    var PA2 = "{$(" + (-a) + ";0)$}";
    var PA3 = "{$(" + a + ";+\\infty)$}";

    var PA4_options = ["(" + (-a) + ";" + a + ")", "(-\\infty;" + a + ")", "(" + (-a) + ";+\\infty)"];
    var PA4 = "{$" + PA4_options[randomchoice(0, 2)] + "$}";

    var cumtuArr = ["Dựa vào ", "Từ "];
    var ketluanArr = [" Do đó ", " Vậy "];
    var cumtu = cumtuArr[randomchoice(0, 1)];
    var ketluan = ketluanArr[randomchoice(0, 1)];

    var loigiai = cumtu + "bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in " + PAtrue + "$." + ketluan + "hàm số đã cho đồng biến trên khoảng $" + PAtrue + ".$";

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function CT_BBT_hamtrungphuongCTCT(loai) {
    var a, b, c;
    while (true) {
        a = randomchoice(1, 6);
        b = randomchoice(-6, 7);
        c = randomchoice(-6, 7);
        // Kiểm tra điều kiện b > c và các giá trị c, 0, b, -a đôi một khác nhau
        if (b > c && kiemtrakhacnhau(c, 0, b, -a)) break;
    }

    var debai = "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:\n" +
        hamtrungphuongCTCT(a, b, c) + 
        "Giá trị cực tiểu của hàm số đã cho bằng";

    var PA1 = "{\\True $" + c + "$}";
    var PA2 = "{$0$}";
    var PA3 = "{$" + b + "$}";
    var PA4 = "{$" + (-a) + "$}";

    var cumtuArr = ["Dựa vào ", "Từ "];
    var cumtu = cumtuArr[randomchoice(0, 1)];

    var loigiai = cumtu + "bảng biến thiên, ta thấy giá trị cực tiểu của hàm số đã cho bằng $" + c + ".$";

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function CT_HS_hamtrungphuongCTCT(loai) {
    var a, b, c;
    while (true) {
        a = randomchoice(1, 4);
        b = randomchoice(-6, 7);
        c = randomchoice(-6, 7);
        // Kiểm tra điều kiện b > c và các giá trị c, 0, b, -a đôi một khác nhau
        if (b > c && kiemtrakhacnhau(c, 0, b, -a)) break;
    }

    var debai = "Cho hàm số $f(x)=" + hesoxaudau(phanso(c - b, Math.pow(a, 4)), "x^4") + hesoxausau(phanso(2 * (b - c), Math.pow(a, 2)), "x^2") + sodungsau(c) + "$ với mọi $x\\in\\Bbb R$. Giá trị cực tiểu của hàm số đã cho bằng";

    var PA1 = "{\\True $" + c + "$}";
    var PA2 = "{$0$}";
    var PA3 = "{$" + b + "$}";
    var PA4 = "{$" + (-a) + "$}";

    var cumtuArr = ["Dựa vào ", "Từ "];
    var cumtu = cumtuArr[randomchoice(0, 1)];

    var loigiai = "Ta có $f'(x)=" + hesoxaudau(phanso(4 * (c - b), Math.pow(a, 4)), "x^3") + hesoxausau(phanso(4 * (b - c), Math.pow(a, 2)), "x") + "$.\\\\\n" +
        "Do đó\n" +
        "$$f'(x)=0\\Leftrightarrow\\left[\\begin{array}{l} x=" + (-a) + "\\\\ x=" + a + "\\\\ x=0\\end{array}\\right.$$\n" +
        "Bảng biến thiên\n" +
        hamtrungphuongCTCT(a, b, c) + 
        cumtu + "bảng biến thiên, ta thấy giá trị cực tiểu của hàm số đã cho bằng $" + c + ".$";

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function SBT_NB_hamtrungphuongCTCT(loai) {
    var a, b, c;
    while (true) {
        a = randomchoice(1, 5);
        b = randomchoice(-6, 7);
        c = randomchoice(-6, 7);
        if (b > c) break;
    }

    var debai = "Cho hàm số $f(x)=" + hesoxaudau(phanso(c - b, Math.pow(a, 4)), "x^4") + hesoxausau(phanso(2 * (b - c), Math.pow(a, 2)), "x^2") + sodungsau(c) + "$ với mọi $x\\in\\Bbb R$. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?";

    var PAtrue_options = ["(" + (-a) + ";0)", "(" + a + ";+\\infty)"];
    var PAtrue = PAtrue_options[randomchoice(0, 1)];

    var PA1 = "{\\True $" + PAtrue + "$}";
    var PA2 = "{$(" + 0 + ";" + a + ")$}";
    var PA3 = "{$(-\\infty;" + (-a) + ")$}";
    
    var PA4_options = ["(" + (-a) + ";" + a + ")", "(-\\infty;" + a + ")", "(" + (-a) + ";+\\infty)"];
    var PA4 = "{$" + PA4_options[randomchoice(0, 2)] + "$}";

    var cumtuArr = ["Dựa vào ", "Từ "];
    var ketluanArr = [" Do đó ", " Vậy "];
    var cumtu = cumtuArr[randomchoice(0, 1)];
    var ketluan = ketluanArr[randomchoice(0, 1)];

    var loigiai = "Ta có $f'(x)=" + hesoxaudau(phanso(4 * (c - b), Math.pow(a, 4)), "x^3") + hesoxausau(phanso(4 * (b - c), Math.pow(a, 2)), "x") + "$.\\\\\n" +
        "Do đó\n" +
        "$$f'(x)=0\\Leftrightarrow\\left[\\begin{array}{l} x=" + (-a) + "\\\\ x=" + a + "\\\\ x=0\\end{array}\\right.$$\n" +
        "Bảng biến thiên\n" +
        hamtrungphuongCTCT(a, b, c) + 
        cumtu + "bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in " + PAtrue + "$." + ketluan + "hàm số đã cho nghịch biến trên khoảng $" + PAtrue + ".$";

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function SBT_DB_hamtrungphuongCTCT(loai) {
    var a, b, c;
    while (true) {
        a = randomchoice(1, 5);
        b = randomchoice(-6, 7);
        c = randomchoice(-6, 7);
        if (b > c) break;
    }

    var debai = "Cho hàm số $f(x)=" + hesoxaudau(phanso(c - b, Math.pow(a, 4)), "x^4") + hesoxausau(phanso(2 * (b - c), Math.pow(a, 2)), "x^2") + sodungsau(c) + "$ với mọi $x\\in\\Bbb R$. Hàm số đã cho đồng biến trên khoảng nào dưới đây?";

    var PAtrue_options = ["(0;" + a + ")", "(-\\infty;" + (-a) + ")"];
    var PAtrue = PAtrue_options[randomchoice(0, 1)];

    var PA1 = "{\\True $" + PAtrue + "$}";
    var PA2 = "{$(" + (-a) + ";0)$}";
    var PA3 = "{$(" + a + ";+\\infty)$}";

    var PA4_options = ["(" + (-a) + ";" + a + ")", "(-\\infty;" + a + ")", "(" + (-a) + ";+\\infty)"];
    var PA4 = "{$" + PA4_options[randomchoice(0, 2)] + "$}";

    var cumtuArr = ["Dựa vào ", "Từ "];
    var ketluanArr = [" Do đó ", " Vậy "];
    var cumtu = cumtuArr[randomchoice(0, 1)];
    var ketluan = ketluanArr[randomchoice(0, 1)];

    var loigiai = "Ta có $f'(x)=" + hesoxaudau(phanso(4 * (c - b), Math.pow(a, 4)), "x^3") + hesoxausau(phanso(4 * (b - c), Math.pow(a, 2)), "x") + "$.\\\\\n" +
        "Do đó\n" +
        "$$f'(x)=0\\Leftrightarrow\\left[\\begin{array}{l} x=" + (-a) + "\\\\ x=" + a + "\\\\ x=0\\end{array}\\right.$$\n" +
        "Bảng biến thiên\n" +
        hamtrungphuongCTCT(a, b, c) + 
        cumtu + "bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in " + PAtrue + "$." + ketluan + "hàm số đã cho đồng biến trên khoảng $" + PAtrue + ".$";

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function SBT_NB_hamtrungphuongTCTC(loai) {
    var a, b, c;
    while (true) {
        a = randomchoice(1, 4);
        b = randomchoice(-6, 7);
        c = randomchoice(-6, 7);
        if (c > b) break;
    }

    var debai = "Cho hàm số $f(x)=" + hesoxaudau(phanso(c - b, Math.pow(a, 4)), "x^4") + hesoxausau(phanso(2 * (b - c), Math.pow(a, 2)), "x^2") + sodungsau(c) + "$ với mọi $x\\in\\Bbb R$. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?";

    var PAtrue_options = ["(0;" + a + ")", "(-\\infty;" + (-a) + ")"];
    var PAtrue = PAtrue_options[randomchoice(0, 1)];

    var PA1 = "{\\True $" + PAtrue + "$}";
    var PA2 = "{$(" + (-a) + ";0)$}";
    var PA3 = "{$(" + a + ";+\\infty)$}";

    var PA4_options = ["(" + (-a) + ";" + a + ")", "(-\\infty;" + a + ")", "(" + (-a) + ";+\\infty)"];
    var PA4 = "{$" + PA4_options[randomchoice(0, 2)] + "$}";

    var cumtuArr = ["Dựa vào ", "Từ "];
    var ketluanArr = [" Do đó ", " Vậy "];
    var cumtu = cumtuArr[randomchoice(0, 1)];
    var ketluan = ketluanArr[randomchoice(0, 1)];

    var loigiai = "Ta có $f'(x)=" + hesoxaudau(phanso(4 * (c - b), Math.pow(a, 4)), "x^3") + hesoxausau(phanso(4 * (b - c), Math.pow(a, 2)), "x") + "$.\\\\\n" +
        "Do đó\n" +
        "$$f'(x)=0\\Leftrightarrow\\left[\\begin{array}{l} x=" + (-a) + "\\\\ x=" + a + "\\\\ x=0\\end{array}\\right.$$\n" +
        "Bảng biến thiên\n" +
        hamtrungphuongTCTC(a, b, c) + 
        cumtu + "bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in " + PAtrue + "$." + ketluan + "hàm số đã cho nghịch biến trên khoảng $" + PAtrue + ".$";

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function SBT_DB_hamtrungphuongTCTC(loai) {
    var a, b, c;
    while (true) {
        a = randomchoice(1, 6);
        b = randomchoice(-6, 7);
        c = randomchoice(-6, 7);
        if (c > b) break;
    }

    var debai = "Cho hàm số $f(x)=" + hesoxaudau(phanso(c - b, Math.pow(a, 4)), "x^4") + hesoxausau(phanso(2 * (b - c), Math.pow(a, 2)), "x^2") + sodungsau(c) + "$ với mọi $x\\in\\Bbb R$. Hàm số đã cho đồng biến trên khoảng nào dưới đây?";

    var PAtrue_options = ["(" + (-a) + ";0)", "(" + a + ";+\\infty)"];
    var PAtrue = PAtrue_options[randomchoice(0, 1)];

    var PA1 = "{\\True $" + PAtrue + "$}";
    var PA2 = "{$(" + 0 + ";" + a + ")$}";
    var PA3 = "{$(-\\infty;" + (-a) + ")$}";
    
    var PA4_options = ["(" + (-a) + ";" + a + ")", "(-\\infty;" + a + ")", "(" + (-a) + ";+\\infty)"];
    var PA4 = "{$" + PA4_options[randomchoice(0, 2)] + "$}";

    var cumtuArr = ["Dựa vào ", "Từ "];
    var ketluanArr = [" Do đó ", " Vậy "];
    var cumtu = cumtuArr[randomchoice(0, 1)];
    var ketluan = ketluanArr[randomchoice(0, 1)];

    var loigiai = "Ta có $f'(x)=" + hesoxaudau(phanso(4 * (c - b), Math.pow(a, 4)), "x^3") + hesoxausau(phanso(4 * (b - c), Math.pow(a, 2)), "x") + "$.\\\\\n" +
        "Do đó\n" +
        "$$f'(x)=0\\Leftrightarrow\\left[\\begin{array}{l} x=" + (-a) + "\\\\ x=" + a + "\\\\ x=0\\end{array}\\right.$$\n" +
        "Bảng biến thiên\n" +
        hamtrungphuongTCTC(a, b, c) + 
        cumtu + "bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in " + PAtrue + "$." + ketluan + "hàm số đã cho đồng biến trên khoảng $" + PAtrue + ".$";

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function tenham_CT3(loai) {
    var a, b;
    while (true) {
        a = randomchoice(-6, 7);
        b = randomchoice(-6, 7);
        if (b > a) break;
    }

    var debai = "Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=x^2" + hesosau(a + b, "x") + sodungsau(a * b) + "$ với mọi $x\\in\\Bbb R$. Số điểm cực trị của hàm số đã bằng";
    
    var PA1 = "{\\True $2$}";
    var PA2 = "{$4$}";
    var PA3 = "{$1$}";
    var PA4 = "{$3$}";

    var cumtuArr = ["Vậy ", "Từ đó "];
    var cumtu = cumtuArr[randomchoice(0, 1)];

    var loigiai = "Ta có\n" +
        "$$f'(x)=0\\Leftrightarrow x^2" + hesosau(a + b, "x") + sodungsau(a * b) + "=0\\Leftrightarrow\\left[\\begin{array}{l} x=" + (-a) + "\\\\ x=" + (-b) + "\\end{array}\\right.$$\n" +
        "Bảng xét dấu của đạo hàm\n" +
        bangxetdauCTC("x", "f", -b, -a) + 
        cumtu + "số điểm cực trị của hàm số đã bằng $2.$";

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function tenham_CT2(loai) {
    var a, b;
    while (true) {
        a = randomchoice(-6, 7);
        b = randomchoice(-6, 7);
        if (b > a && b !== 0) break;
    }

    var debai = "Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=" + ngoacnew(a) + ngoacnew(b) + "$ với mọi $x\\in\\Bbb R$. Số điểm cực trị của hàm số đã bằng";
    
    var PA1 = "{\\True $2$}";
    var PA2 = "{$4$}";
    var PA3 = "{$1$}";
    var PA4 = "{$3$}";

    var cumtuArr = ["Vậy ", "Từ đó "];
    var cumtu = cumtuArr[randomchoice(0, 1)];

    var loigiai = "Ta có\n" +
        "$$f'(x)=0\\Leftrightarrow " + ngoacnew(a) + ngoacnew(b) + "=0\\Leftrightarrow\\left[\\begin{array}{l} x=" + (-a) + "\\\\ x=" + (-b) + "\\end{array}\\right.$$\n" +
        "Bảng xét dấu của đạo hàm\n" +
        bangxetdauCTC("x", "f", -b, -a) + 
        cumtu + "số điểm cực trị của hàm số đã bằng $2.$";

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function tenham_CT1(loai) {
    var a, b;
    while (true) {
        a = randomchoice(-6, 7);
        b = randomchoice(-6, 7);
        if (b > a) break;
    }

    var debai = "Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=-x^2" + hesosau(-a - b, "x") + sodungsau(-a * b) + "$ với mọi $x\\in\\Bbb R$. Số điểm cực trị của hàm số đã bằng";
    var PA1 = "{\\True $2$}";
    var PA2 = "{$4$}";
    var PA3 = "{$1$}";
    var PA4 = "{$3$}";

    var cumtuArr = ["Vậy ", "Từ đó "];
    var cumtu = cumtuArr[randomchoice(0, 1)];

    var loigiai = "Ta có\n" +
        "$$f'(x)=0\\Leftrightarrow -x^2" + hesosau(-a - b, "x") + sodungsau(-a * b) + "=0\\Leftrightarrow\\left[\\begin{array}{l} x=" + (-a) + "\\\\ x=" + (-b) + "\\end{array}\\right.$$\n" +
        "Bảng xét dấu của đạo hàm\n" +
        bangxetdauTCT("x", "f", -b, -a)  +
        cumtu + "số điểm cực trị của hàm số đã bằng $2.$";

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function tenham4(loai) {
    var a, b;
    while (true) {
        a = randomchoice(-6, 7);
        b = randomchoice(-6, 7);
        if (b > a && b !== 0) break;
    }

    var debai = "Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=" + ngoacnew(a) + ngoacnew(b) + "$ với mọi $x\\in\\Bbb R$. Hàm số đã cho đồng biến trên khoảng nào dưới đây?";

    var PAtrue_options = ["(" + (-a) + ";+\\infty)", "(-\\infty;" + (-b) + ")"];
    var PAtrue = PAtrue_options[randomchoice(0, 1)];

    var PA1 = "{\\True $" + PAtrue + "$}";
    var PA2 = "{$(" + (-b) + ";" + (-a) + ")$}";
    var PA3 = "{$(" + (-b) + ";+\\infty)$}";
    var PA4 = "{$(-\\infty;" + (-a) + ")$}";

    var loigiai = "Ta có\n" +
        "$$f'(x)>0\\Leftrightarrow " + ngoacnew(a) + ngoacnew(b) + ">0\\Leftrightarrow\\left[\\begin{array}{l} x>" + (-a) + "\\\\ x<" + (-b) + "\\end{array}\\right.$$\n" +
        "Do đó hàm số đã cho đồng biến trên khoảng $" + PAtrue + ".$";

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function tenham3(loai) {
    var a, b;
    while (true) {
        a = randomchoice(-6, 7);
        b = randomchoice(-6, 7);
        if (b > a) break;
    }

    var debai = "Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=x^2" + hesosau(a + b, "x") + sodungsau(a * b) + "$ với mọi $x\\in\\Bbb R$. Hàm số đã cho đồng biến trên khoảng nào dưới đây?";

    var PAtrue_options = ["(" + (-a) + ";+\\infty)", "(-\\infty;" + (-b) + ")"];
    var PAtrue = PAtrue_options[randomchoice(0, 1)];

    var PA1 = "{\\True $" + PAtrue + "$}";
    var PA2 = "{$(" + (-b) + ";" + (-a) + ")$}";
    var PA3 = "{$(" + (-b) + ";+\\infty)$}";
    var PA4 = "{$(-\\infty;" + (-a) + ")$}";

    var loigiai = "Ta có\n" +
        "$$f'(x)>0\\Leftrightarrow x^2" + hesosau(a + b, "x") + sodungsau(a * b) + ">0\\Leftrightarrow\\left[\\begin{array}{l} x>" + (-a) + "\\\\ x<" + (-b) + "\\end{array}\\right.$$\n" +
        "Do đó hàm số đã cho đồng biến trên khoảng $" + PAtrue + ".$";

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function tenham2(loai) {
    var a, b;
    while (true) {
        a = randomchoice(-6, 7);
        b = randomchoice(-6, 7);
        if (b > a) break;
    }
    
    var debai = "Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=-x^2" + hesosau(-a - b, "x") + sodungsau(-a * b) + "$ với mọi $x\\in\\Bbb R$. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?";
    
    var PAtrue_options = ["(" + (-a) + ";+\\infty)", "(-\\infty;" + (-b) + ")"];
    var PAtrue = PAtrue_options[randomchoice(0, 1)];
    
    var PA1 = "{\\True $" + PAtrue + "$}";
    var PA2 = "{$(" + (-b) + ";" + (-a) + ")$}";
    var PA3 = "{$(" + (-b) + ";+\\infty)$}";
    var PA4 = "{$(-\\infty;" + (-a) + ")$}";
    
    var loigiai = "Ta có\n" +
        "$$f'(x)<0\\Leftrightarrow -x^2" + hesosau(-a - b, "x") + sodungsau(-a * b) + "<0\\Leftrightarrow\\left[\\begin{array}{l} x>" + (-a) + "\\\\ x<" + (-b) + "\\end{array}\\right.$$\n" +
        "Do đó hàm số đã cho nghịch biến trên khoảng $" + PAtrue + ".$";
        
    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);
    
    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function tenham1(loai) {
    var a, b;
    while (true) {
        a = randomchoice(-6, 7);
        b = randomchoice(-6, 7);
        if (b > a) break;
    }

    var debai = "Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=-x^2" + hesosau(-a - b, "x") + sodungsau(-a * b) + "$ với mọi $x\\in\\Bbb R$. Hàm số đã cho đồng biến trên khoảng nào dưới đây?";
    
    var PAtrue = "(" + (-b) + ";" + (-a) + ")";
    var PA1 = "{\\True $" + PAtrue + "$}";
    
    // Sử dụng randomchoice theo chỉ số để chọn PA2
    var PA2_options = ["(" + (-a) + ";+\\infty)", "(-\\infty;" + (-b) + ")"];
    var PA2 = "{$" + PA2_options[randomchoice(0, 1)] + "$}";
    
    var PA3 = "{$(" + (-b) + ";+\\infty)$}";
    var PA4 = "{$(-\\infty;" + (-a) + ")$}";

    var loigiai = "Ta có\n" +
        "$$f'(x)>0\\Leftrightarrow -x^2" + hesosau(-a - b, "x") + sodungsau(-a * b) + ">0\\Leftrightarrow" + (-b) + "<x<" + (-a) + " .$$\n" +
        "Do đó hàm số đã cho đồng biến trên khoảng $" + PAtrue + ".$";

    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}
function CT_hambacbaCTC(loai) {
    var x1, x2, S, P, a, b, Tu_y1, Tu_y2;
    while (true) {
        x1 = randomchoice(-6, 7);
        x2 = randomchoice(-6, 7);
        S = x1 + x2;
        P = x1 * x2;
        a = randomchoice(1, 7);
        b = randomchoice(-6, 7);
        Tu_y1 = 2 * a * Math.pow(x1, 3) - 3 * a * S * Math.pow(x1, 2) + 6 * a * P * x1 + 6 * b;
        Tu_y2 = 2 * a * Math.pow(x2, 3) - 3 * a * S * Math.pow(x2, 2) + 6 * a * P * x2 + 6 * b;
        if (x1 < x2 && Tu_y1 > Tu_y2 && kiemtrakhacnhau(6 * x1, 6 * x2, Tu_y1, Tu_y2) !== false) {
            break; 
        }
    }
    var y1 = phanso(Tu_y1, 6);
    var y2 = phanso(Tu_y2, 6);
    var loigiaibegin = "Ta có $f'(x)=" + hesodau(a, "x^2") + hesosau(-a * S, "x") + sodungsau(a * P) + "$.\\\\\n" +
        "Do đó\n" +
        "$$f'(x) = 0\\Leftrightarrow\\left[\\begin{array}{l} x = "+x1+" \\\\ x = "+x2+"\\end{array}\\right.$$\n" + 
        "Bảng biến thiên\n" +
        hambacbaCTC("x", "f", x1, x2, y1, y2);
    var loaiCauHoi = randomchoice(1, 4);
    var decauhoi, PA1, PA2, PA3, PA4, loigiai;
    var cumtuArr = ["Dựa vào ", "Từ "];
    var cumtu = cumtuArr[randomchoice(0, 1)]; 
    if (loaiCauHoi === 1) {
        decauhoi = "Giá trị cực tiểu của hàm số đã cho bằng";
        PA1 = "{\\True $" + y2 + "$}";
        PA2 = "{$" + y1 + "$}";
        PA3 = "{$" + x1 + "$}";
        PA4 = "{$" + x2 + "$}";
        loigiai = loigiaibegin + cumtu + "bảng biến thiên, ta thấy giá trị cực tiểu của hàm số đã cho bằng $" + y2 + ".$";
    } 
    else if (loaiCauHoi === 2) {
        decauhoi = "Giá trị cực đại của hàm số đã cho bằng";
        PA1 = "{\\True $" + y1 + "$}";
        PA2 = "{$" + y2 + "$}";
        PA3 = "{$" + x1 + "$}";
        PA4 = "{$" + x2 + "$}";
        loigiai = loigiaibegin + cumtu + "bảng biến thiên, ta thấy giá trị cực đại của hàm số đã cho bằng $" + y1 + ".$";
    } 
    else if (loaiCauHoi === 3) {
        decauhoi = "Hàm số đã cho đạt cực tiểu tại";
        PA1 = "{\\True $" + x2 + "$}";
        PA2 = "{$" + y2 + "$}";
        PA3 = "{$" + x1 + "$}";
        PA4 = "{$" + y1 + "$}";
        loigiai = loigiaibegin + cumtu + "bảng biến thiên, ta thấy hàm số đã cho đạt cực tiểu tại $x=" + x2 + ".$";
    } 
    else {
        decauhoi = "Hàm số đã cho đạt cực đại tại";
        PA1 = "{\\True $" + x1 + "$}";
        PA2 = "{$" + y2 + "$}";
        PA3 = "{$" + x2 + "$}";
        PA4 = "{$" + y1 + "$}";
        loigiai = loigiaibegin + cumtu + "bảng biến thiên, ta thấy hàm số đã cho đạt cực đại tại $x=" + x1 + ".$";
    }
    var debai = "Cho hàm số $f(x)=" + hesoxaudau(phanso(a, 3), "x^3") + hesoxausau(phanso(-a * S, 2), "x^2") + hesosau(a * P, "x") + sodungsau(b) + "$ với mọi $x\\in\\Bbb R$. " + decauhoi;
    var options = [PA1, PA2, PA3, PA4];
    shuffle(options); 
    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{" + loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function CT_hambacbaTCT(loai) {
    var x1, x2, S, P, a, b, Tu_y1, Tu_y2;
    while (true) {
        x1 = randomchoice(-6, 7);
        x2 = randomchoice(-6, 7);
        S = x1 + x2;
        P = x1 * x2;
        a = randomchoice(1, 7);
        b = randomchoice(-6, 7);
        Tu_y1 = -2 * a * Math.pow(x1, 3) + 3 * a * S * Math.pow(x1, 2) - 6 * a * P * x1 + 6 * b;
        Tu_y2 = -2 * a * Math.pow(x2, 3) + 3 * a * S * Math.pow(x2, 2) - 6 * a * P * x2 + 6 * b;

        if (x1 < x2 && Tu_y1 < Tu_y2 && kiemtrakhacnhau(6 * x1, 6 * x2, Tu_y1, Tu_y2) !== false) {
            break; 
        }
    }
    var y1 = phanso(Tu_y1, 6);
    var y2 = phanso(Tu_y2, 6);
    var loigiaibegin = "Ta có $f'(x)=" + hesodau(-a, "x^2") + hesosau(a * S, "x") + sodungsau(-a * P) + "$.\\\\\n" +
        "Do đó\n" +
        "$$f'(x) = 0\\Leftrightarrow\\left[\\begin{array}{l} x = "+x1+" \\\\ x = "+x2+"\\end{array}\\right.$$\n" + 
        "Bảng biến thiên\n" +
        hambacbaTCT("x", "f", x1, x2, y1, y2);
    var loaiCauHoi = randomchoice(1, 4);
    var decauhoi, PA1, PA2, PA3, PA4, loigiai;
    var cumtuArr = ["Dựa vào ", "Từ "];
    var cumtu = cumtuArr[randomchoice(0, 1)]; 
    if (loaiCauHoi === 1) {
        decauhoi = "Giá trị cực tiểu của hàm số đã cho bằng";
        PA1 = "{\\True $" + y1 + "$}";
        PA2 = "{$" + y2 + "$}";
        PA3 = "{$" + x1 + "$}";
        PA4 = "{$" + x2 + "$}";
        loigiai = loigiaibegin + cumtu + "bảng biến thiên, ta thấy giá trị cực tiểu của hàm số đã cho bằng $" + y1 + ".$";
    } 
    else if (loaiCauHoi === 2) {
        decauhoi = "Giá trị cực đại của hàm số đã cho bằng";
        PA1 = "{\\True $" + y2 + "$}";
        PA2 = "{$" + y1 + "$}";
        PA3 = "{$" + x1 + "$}";
        PA4 = "{$" + x2 + "$}";
        loigiai = loigiaibegin + cumtu + "bảng biến thiên, ta thấy giá trị cực đại của hàm số đã cho bằng $" + y2 + ".$";
    } 
    else if (loaiCauHoi === 3) {
        decauhoi = "Hàm số đã cho đạt cực tiểu tại";
        PA1 = "{\\True $" + x1 + "$}";
        PA2 = "{$" + y2 + "$}";
        PA3 = "{$" + x2 + "$}";
        PA4 = "{$" + y1 + "$}";
        loigiai = loigiaibegin + cumtu + "bảng biến thiên, ta thấy hàm số đã cho đạt cực tiểu tại $x=" + x1 + ".$";
    } 
    else {
        decauhoi = "Hàm số đã cho đạt cực đại tại";
        PA1 = "{\\True $" + x2 + "$}";
        PA2 = "{$" + y2 + "$}";
        PA3 = "{$" + x1 + "$}";
        PA4 = "{$" + y1 + "$}";
        loigiai = loigiaibegin + cumtu + "bảng biến thiên, ta thấy hàm số đã cho đạt cực đại tại $x=" + x2 + ".$";
    }
    var debai = "Cho hàm số $f(x)=" + hesoxaudau(phanso(-a, 3), "x^3") + hesoxausau(phanso(a * S, 2), "x^2") + hesosau(-a * P, "x") + sodungsau(b) + "$ với mọi $x\\in\\Bbb R$. " + decauhoi;
    var options = [PA1, PA2, PA3, PA4];
    shuffle(options); 
    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{" + loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function SBT_DB_hambacbaCTC(loai) {
        var x1 = randomchoice(-6,6);
        var x2 = randomchoice(-6,6);
        while (x1 >= x2) {
            x1 = randomchoice(-6,6);
            x2 = randomchoice(-6,6);
        }
        var S = x1 + x2;
        var P = x1 * x2;
        var a = randomchoice(1,6);
        var b = randomchoice(-6,6);
        var phuongAntrue;
        if (randomchoice(0,1) === 0) {
            phuongAntrue = "{\\True $(-\\infty;"+x1+")$}"; 
        } else {
            phuongAntrue = "{\\True $("+x2+";+\\infty)$}"; 
        }
        var options = [
        "{$("+x1+";"+x2+")$}",
        "{$("+x1+";+\\infty)$}",
        "{$(-\\infty;"+x2+")$}",
        phuongAntrue
        ];
        shuffle(options);
        return "\\begin{"+loai+"}\n" +
            "Cho hàm số $f(x)="+hesoxaudau(phanso(a,3),"x^3")+hesoxausau(phanso(-a*S,2),"x^2")+hesosau(P*a,"x")+sodungsau(b)+"$ " + 
            "với mọi $x\\in\\Bbb R$. Hàm số đã cho đồng biến trên khoảng nào dưới đây?\n" + 
            "\\choice\n" +
            options[0] + "\n" +
            options[1] + "\n" +
            options[2] + "\n" +
            options[3] + "\n" +
            "\\loigiai{\n" +
               "Ta có \n" + 
               "$$f'(x)="+hesodau(a,"x^2")+hesosau(-a*S,"x")+sodungsau(P*a)+".$$\n" + 
               "Do đó \n" + 
               "$$f'(x) > 0\\Leftrightarrow\\left[\\begin{array}{l} x > "+x2+" \\\\ x < "+x1+"\\end{array}\\right.$$\n" + 
               "Vậy hàm số đồng biến trên các khoảng $(-\\infty;"+x1+")$ và $("+x2+";+\\infty).$\n" + 
               "}\n" +
            "\\end{"+loai+"}\n";
    }


function SBT_NB_hambacbaTCT(loai) {
        var x1 = randomchoice(-6,6);
        var x2 = randomchoice(-6,6);
        while (x1 >= x2) {
            x1 = randomchoice(-6,6);
            x2 = randomchoice(-6,6);
        }
        var S = x1 + x2;
        var P = x1 * x2;
        var a = randomchoice(-6,-2);
        var b = randomchoice(-6,6);
        var phuongAntrue;
        if (randomchoice(0,1) === 0) {
            phuongAntrue = "{\\True $(-\\infty;"+x1+")$}"; 
        } else {
            phuongAntrue = "{\\True $("+x2+";+\\infty)$}"; 
        }
        var options = [
        "{$("+x1+";"+x2+")$}",
        "{$("+x1+";+\\infty)$}",
        "{$(-\\infty;"+x2+")$}",
        phuongAntrue
        ];
        shuffle(options);
        return "\\begin{"+loai+"}\n" +
            "Cho hàm số $f(x)="+hesoxaudau(phanso(a,3),"x^3")+hesoxausau(phanso(-a*S,2),"x^2")+hesosau(P*a,"x")+sodungsau(b)+"$ " + 
            "với mọi $x\\in\\Bbb R$. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?\n" + 
            "\\choice\n" +
            options[0] + "\n" +
            options[1] + "\n" +
            options[2] + "\n" +
            options[3] + "\n" +
            "\\loigiai{\n" +
               "Ta có \n" + 
               "$$f'(x)="+hesodau(a,"x^2")+hesosau(-a*S,"x")+sodungsau(P*a)+".$$\n" + 
               "Do đó \n" + 
               "$$f'(x) < 0\\Leftrightarrow\\left[\\begin{array}{l} x > "+x2+" \\\\ x < "+x1+"\\end{array}\\right.$$\n" + 
               "Vậy hàm số nghịch biến trên các khoảng $(-\\infty;"+x1+")$ và $("+x2+";+\\infty).$\n" + 
               "}\n" +
            "\\end{"+loai+"}\n";
    }

function SBT_BBT_hambacbaCTC(loai) {
        var x1 = randomchoice(-6,-1);
        var x2 = randomchoice(1,6);
        var y1 = randomchoice(1,6);
        var y2 = randomchoice(-6,-1);
        while (x1 === y2 || x2 === y1) {
            x1 = randomchoice(-6,-1);
            x2 = randomchoice(1,6);
            y1 = randomchoice(1,6);
            y2 = randomchoice(-6,-1);
        }
        var phuongAn4;
        if (randomchoice(0,1) === 0) {
            phuongAn4 = "{$(-\\infty;"+x1+")$}"; 
        } else {
            phuongAn4 = "{$("+x2+";+\\infty)$}"; 
        }
        var options = [
        "{\\True $("+x1+";"+x2+")$}",
        "{$("+x1+";+\\infty)$}",
        "{$(-\\infty;"+x2+")$}",
        phuongAn4
        ];
        shuffle(options);
        return "\\begin{"+loai+"}\n" +
            "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:\n" +  
            hambacbaCTC("x","f",x1,x2,y1,y2) + "Hàm số đã cho nghịch biến trên khoảng nào dưới đây?\n" + 
            "\\choice\n" +
            options[0] + "\n" +
            options[1] + "\n" +
            options[2] + "\n" +
            options[3] + "\n" +
            "\\loigiai{Dựa vào bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in ("+x1+";"+x2+")$. Do đó hàm số đã cho nghịch biến trên khoảng $("+x1+";"+x2+").$\n" + 
            "}\n" +
            "\\end{"+loai+"}\n";
    }



function get_TXD_Loga(loai) {
        var a = randomchoice(2,15); 
        var b = randomchoice(-10,10);
        while (b == 0) {
            b = randomchoice(-10,10);
        }
        var options = [
        "{\\True $("+(-b)+";+\\infty)$}",
        "{$(-\\infty;"+(-b)+")$}",
        "{$\\mathbb{R}$}",
        "{$["+(-b)+";+\\infty)$}"
        ];
        shuffle(options);
        return "\\begin{"+loai+"}\n" +
            "Tập xác định của hàm số $y=\\log_"+format(a)+"(x"+sodungsau(b)+")$ là\n" +
            "\\choice\n" +
            options[0] + "\n" +
            options[1] + "\n" +
            options[2] + "\n" +
            options[3] + "\n" +
            "\\loigiai{Điều kiện: $x"+sodungsau(b)+">0\\Leftrightarrow x>"+ (-b)+".$\n" + 
            "}\n" +
            "\\end{"+loai+"}\n";
    }








    

function get_PT_Matcau(loai) {
        var a = randomchoice(-6,6);
        var b = randomchoice(-6,6);
        var c = randomchoice(-6,6);
        var d = randomchoice(-10,10);
        while ((a === 0 && b === 0 && c === 0) || a*a+b*b+c*c-d <= 1) {
            a = randomchoice(-6,6);
            b = randomchoice(-6,6);
            c = randomchoice(-6,6);
            d = randomchoice(-10,10);
        }
        var options = [
        "{\\True $I("+a+";"+b+";"+c+"), R="+canbachai(a*a+b*b+c*c-d)+"$}",
        "{$I("+(-a)+";"+(-b)+";"+(-c)+"), R="+canbachai(a*a+b*b+c*c-d)+"$}",
        "{$I("+a+";"+b+";"+c+"), R="+(a*a+b*b+c*c-d)+"$}",
        "{$I("+(-a)+";"+(-b)+";"+(-c)+"), R="+(a*a+b*b+c*c-d)+"$}"
        ];
        shuffle(options);
        var content = "\\begin{"+loai+"}\n" +
            "Trong không gian với hệ trục tọa độ $Oxyz$, tìm tọa độ tâm $I$ và bán kính $R$ của mặt cầu $(S): x^2+y^2+z^2"+hesosau(-2*a,"x")+hesosau(-2*b,"y")+hesosau(-2*c,"z")+sodungsau(d)+"=0$.\n" +
            "\\choice\n" +
            options[0] + "\n" +
            options[1] + "\n" +
            options[2] + "\n" +
            options[3] + "\n";
        if (uoccpmax(a*a+b*b+c*c-d) > 1) {
            content += "\\loigiai{\n" +
                "Ta có\n" +  
                "$$x^2+y^2+z^2"+hesosau(-2*a,"x")+hesosau(-2*b,"y")+hesosau(-2*c,"z")+sodungsau(d)+"=0\\Leftrightarrow "+bachai("x",a)+"+"+bachai("y",b)+"+"+bachai("z",c)+"="+(a*a+b*b+c*c-d)+".$$\n"+
                "Do đó mặt cầu có tâm $I("+(a)+";"+(b)+";"+(c)+")$ và bán kính $R=\\sqrt{"+(a*a+b*b+c*c-d)+"}="+canbachai(a*a+b*b+c*c-d)+"$.\n" +
                "}\n" +
                "\\end{ex}\n\n"; 
        } else {
            content += "\\loigiai{\n" + 
                "Ta có\n" +  
                "$$x^2+y^2+z^2"+hesosau(-2*a,"x")+hesosau(-2*b,"y")+hesosau(-2*c,"z")+sodungsau(d)+"=0\\Leftrightarrow "+bachai("x",a)+"+"+bachai("y",b)+"+"+bachai("z",c)+"="+(a*a+b*b+c*c-d)+".$$\n"+
                "Do đó mặt cầu có tâm $I("+(a)+";"+(b)+";"+(c)+")$ và bán kính $R="+canbachai(a*a+b*b+c*c-d)+".$\n" +
                "}\n" +
                "\\end{"+loai+"}\n"; 
        }
        return content;
    }


function c1_d1_v1() {
    let a = randomchoice(1, 6), b = randomchoice(1, 4);
    return `\\begin{ex}\nKết quả của $${a} + ${b}$ là\n\\choice{\\True ${a+b}}{${a+b+1}}{${a+b-1}}{0}\n\\loigiai{Ta có $${a} + ${b} = ${a+b}$.}\n\\end{ex}\n\n`;
}
function c1_d1_v2() {
    let a = randomchoice(1, 9);
    return `\\begin{ex}\nSố nào cộng với $0$ để bằng $${a}$?\n\\choice{0}{1}{\\True ${a}}{${a+1}}\n\\loigiai{Mọi số cộng với $0$ đều bằng chính nó.}\n\\end{ex}\n\n`;
}
function c1_d1_v3() {
    let a = randomchoice(2, 5);
    return `\\begin{ex}\nTính nhẩm: $${a} + ${a} = ?$\n\\choice{${a}}{\\True ${a*2}}{0}{1}\n\\loigiai{$${a}$ cộng với chính nó bằng $${a*2}$.}\n\\end{ex}\n\n`;
}
function c1_d2_v1() {
    let x = randomchoice(1, 5), a = randomchoice(1, 4);
    return `\\begin{ex}\nĐiền số: $\\Box + ${a} = ${x+a}$\n\\choice{\\True ${x}}{${x+1}}{0}{${x+a}}\n\\loigiai{Ta có $${x+a} - ${a} = ${x}$.}\n\\end{ex}\n\n`;
}
function c1_d2_v2() {
    let x = randomchoice(1, 5), a = randomchoice(1, 4);
    return `\\begin{ex}\nTìm số thích hợp: $${a} + \\Box = ${a+x}$\n\\choice{0}{\\True ${x}}{${a}}{${a+x}}\n\\loigiai{Số cần tìm là $${x}$.}\n\\end{ex}\n\n`;
}
function c1_d2_v3() {
    let x = randomchoice(2, 5);
    return `\\begin{ex}\nBiết $\\Box + \\Box = ${x*2}$. Hai số trong ô trống giống nhau. Đó là số nào?\n\\choice{1}{0}{\\True ${x}}{${x*2}}\n\\loigiai{Vì $${x} + ${x} = ${x*2}$.}\n\\end{ex}\n\n`;
}
function c1_d3_v1() {
    let a = randomchoice(2, 6), b = randomchoice(1, 3);
    return `\\begin{ex}\nLan có ${a} bông hoa, Mai có ${b} bông hoa. Cả hai bạn có:\n\\choice{\\True ${a+b}}{${a-b}}{${a}}{${b}}\n\\loigiai{Tổng số hoa là: ${a} + ${b} = ${a+b}.}\n\\end{ex}\n\n`;
}
function c1_d3_v2() {
    let a = randomchoice(5, 9), b = randomchoice(1, 4);
    return `\\begin{ex}\nTrên cây có ${a} quả cam, mẹ hái ${b} quả. Hỏi trên cây còn:\n\\choice{${a+b}}{\\True ${a-b}}{${a}}{${b}}\n\\loigiai{Số cam còn lại: ${a} - ${b} = ${a-b}.}\n\\end{ex}\n\n`;
}
function c1_d3_v3() {
    let a = randomchoice(1, 5);
    return `\\begin{ex}\nTrong sân có ${a} bạn đang chơi, thêm 2 bạn chạy đến. Tất cả có:\n\\choice{\\True ${a+2}}{${a}}{2}{0}\n\\loigiai{Tổng số bạn là: ${a} + 2 = ${a+2}.}\n\\end{ex}\n\n`;
}

// --- CHƯƠNG 2 ---
function c2_d1_v1() {
    let a = randomchoice(0, 10), b = randomchoice(0, 10);
    let d = a > b ? ">" : (a < b ? "<" : "=");
    return `\\begin{ex}\nSo sánh: $${a} \\dots ${b}$\n\\choice{\\True $${d}$}{$>$}{$<$}{$=$}\n\\loigiai{Vì $${a}$ ${a>b?'lớn hơn':(a<b?'bé hơn':'bằng')} $${b}$.}\n\\end{ex}\n\n`;
}
function c2_d1_v2() {
    let n = shuffleArray([randomchoice(1,3), randomchoice(4,6), randomchoice(7,10)]);
    let max = Math.max(...n);
    return `\\begin{ex}\nSố lớn nhất trong các số $${n.join(', ')}$ là:\n\\choice{${n[0]}}{${n[1]}}{\\True ${max}}{0}\n\\loigiai{Trong các số đã cho, số ${max} có giá trị lớn nhất.}\n\\end{ex}\n\n`;
}
function c2_d1_v3() {
    let n = shuffleArray([randomchoice(1,3), randomchoice(4,6), randomchoice(7,10)]);
    let min = Math.min(...n);
    return `\\begin{ex}\nSắp xếp dãy số $${n.join(', ')}$ theo thứ tự tăng dần là:\n\\choice{\\True $${[...n].sort((a,b)=>a-b).join(', ')}$}{$${[...n].sort((a,b)=>b-a).join(', ')}$}{0}{1}\n\\loigiai{Thứ tự tăng dần là từ số bé đến số lớn.}\n\\end{ex}\n\n`;
}
function c2_d2_v1() {
    let n = randomchoice(1, 9);
    return `\\begin{ex}\nSố liền trước của $${n}$ là:\n\\choice{\\True ${n-1}}{${n+1}}{${n}}{0}\n\\loigiai{Số liền trước của một số thì bé hơn số đó 1 đơn vị.}\n\\end{ex}\n\n`;
}
function c2_d2_v2() {
    let n = randomchoice(1, 9);
    return `\\begin{ex}\nSố liền sau của $${n}$ là:\n\\choice{${n-1}}{\\True ${n+1}}{${n}}{10}\n\\loigiai{Số liền sau của một số thì lớn hơn số đó 1 đơn vị.}\n\\end{ex}\n\n`;
}
function c2_d2_v3() {
    let n = randomchoice(2, 8);
    return `\\begin{ex}\nSố nằm ở giữa $${n-1}$ và $${n+1}$ là:\n\\choice{${n-1}}{${n+1}}{\\True ${n}}{0}\n\\loigiai{Dãy số liên tiếp là $${n-1}, ${n}, ${n+1}$.}\n\\end{ex}\n\n`;
}
function c2_d3_v1() {
    let n = randomchoice(2, 4);
    let loai = randomchoice(1, 2) === 1 ? ["tam giác", 3] : ["hình vuông", 4];
    return `\\begin{ex}\nAn có $${n}$ ${loai[0]}. Hỏi $${n}$ hình đó có tất cả bao nhiêu cạnh?\n\\choice{\\True ${n*loai[1]}}{${n}}{${loai[1]}}{0}\n\\loigiai{Mỗi ${loai[0]} có ${loai[1]} cạnh. Vậy $${n} \\times ${loai[1]} = ${n*loai[1]}$ cạnh.}\n\\end{ex}\n\n`;
}
function c2_d3_v2() {
    let tuan = randomchoice(1, 2);
    let ngay = randomchoice(1, 3);
    return `\\begin{ex}\nBé được nghỉ hè $${tuan}$ tuần và $${ngay}$ ngày. Tổng số ngày bé được nghỉ là:\n\\choice{\\True ${tuan*7+ngay}}{${tuan*7}}{${ngay}}{10}\n\\loigiai{1 tuần có 7 ngày. Tổng là: $${tuan} \\times 7 + ${ngay} = ${tuan*7+ngay}$ ngày.}\n\\end{ex}\n\n`;
}
function c2_d3_v3() {
    let canh = randomchoice(2, 6);
    return `\\begin{ex}\nMột hình vuông có cạnh dài $${canh}$ cm. Tổng độ dài 4 cạnh của hình vuông đó là:\n\\choice{${canh}}{\\True ${canh*4}}{${canh*2}}{0}\n\\loigiai{Hình vuông có 4 cạnh bằng nhau. Tổng là: $${canh} \\times 4 = ${canh*4}$ cm.}\n\\end{ex}\n\n`;
}

function dienkhuyet1(loai) {
    var a = randomchoice(-5, 5);
    var b = randomchoice(-10, 10);
    while (a === 0) {
        a = randomchoice(-5, 5);
    }
    var ketqua = a + b; 
    var debai = "Tính tổng $" + a + "$ và $" + b + "$.";
    var loigiai = "Ta có: $" + a + " + " + b + " = " + ketqua + "$.";
    return "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\shortans[oly]{" + ketqua + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
}

function dienkhuyet2(loai) {
    var a = randomchoice(-5, 5);
    var b = randomchoice(-10, 10);
    while (a === 0) {
        a = randomchoice(-5, 5);
    }
    var ketqua = a - b; 
    var debai = "Tính hiệu $" + a + "$ và $" + b + "$.";
    var loigiai = "Ta có: $" + a + " + " + b + " = " + ketqua + "$.";
    return "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\shortans[oly]{" + ketqua + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
}


function TF_template(loai) {
    var x1 = randomchoice(-6, 6);
    var x2 = randomchoice(-6, 6);
    var a = randomchoice(-4, 4);
    var d = randomchoice(-6, 6);
    while (x1*x2*a === 0) {
        x1 = randomchoice(-6, 6);
        x2 = randomchoice(-6, 6);
        a = randomchoice(-4, 4);
        d = randomchoice(-6, 6);
    }
    var S = x1 + x2;
    var P = x1*x2; 
    var debai = "Cho hàm số $f(x)="+phansoxau(a,3,"x^3")
                    + phansoxausecond(-a*S,2,"x^2")
                    + hesosau(P*a,"x")
                    + sodungsau(d)+"$.";
    var PAtrue1 = "\\True Hàm số đã cho có đạo hàm là $f'(x)="
            + hesodau(a,"x^2")
            + hesosau(-a*S,"x")
            + sodungsau(a*P)+"$";
    var LGPAtrue1 = "Lời giải cho câu a) ghi ở đây";
    var PAfalse1;
    if (a*S !== 0) {
        PAfalse1 = "Hàm số đã cho có đạo hàm là $f'(x)=" 
            + hesodau(a,"x^2") 
            + hesosau(a*S,"x") 
            + sodungsau(a*P) + "$";
    } else {
        PAfalse1 = "Hàm số đã cho có đạo hàm là $f'(x)=" 
            + hesodau(a,"x^2") 
            + hesosau(a*S,"x") 
            + sodungsau(-a*P) + "$";
    }

    var LGPAfalse1 = "Lời giải cho câu a) (nếu khác) ghi ở đây";

    // --- Ý B ---
    var PAtrue2 = "\\True Nội dung câu b) đúng ghi ở đây";
    var LGPAtrue2 = "Lời giải cho câu b) ghi ở đây";
    var PAfalse2 = "Nội dung câu b) sai ghi ở đây";
    var LGPAfalse2 = "Lời giải cho câu b) (nếu khác) ghi ở đây";

    function select_answers_ab() {
        var valid_pairs = [
            [[PAtrue1, PAfalse2], [LGPAtrue1, LGPAfalse2]],
            [[PAfalse1, PAtrue2], [LGPAfalse1, LGPAtrue2]],
            [[PAtrue1, PAtrue2], [LGPAtrue1, LGPAtrue2]],
            [[PAfalse1, PAfalse2], [LGPAfalse1, LGPAfalse2]]
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    }
    var resAB = select_answers_ab();
    var PAcauAB = resAB[0];
    var LGcauAB = resAB[1];

    // --- Ý C ---
    var PAtrue3 = "\\True Nội dung câu c) đúng ghi ở đây";
    var LGPAtrue3 = "Lời giải cho câu c) ghi ở đây";
    var PAfalse3 = "Nội dung câu c) sai ghi ở đây";
    var LGPAfalse3 = "Lời giải cho câu c) (nếu khác) ghi ở đây";

    // --- Ý D ---
    var PAtrue4 = "\\True Nội dung câu d) đúng ghi ở đây";
    var LGPAtrue4 = "Lời giải cho câu d) ghi ở đây";
    var PAfalse4 = "Nội dung câu d) sai ghi ở đây";
    var LGPAfalse4 = "Lời giải cho câu d) (nếu khác) ghi ở đây";

    function select_answers_cd() {
        var valid_pairs = [
            [[PAtrue3, PAfalse4], [LGPAtrue3, LGPAfalse4]],
            [[PAfalse3, PAtrue4], [LGPAfalse3, LGPAtrue4]],
            [[PAtrue3, PAtrue4], [LGPAtrue3, LGPAtrue4]],
            [[PAfalse3, PAfalse4], [LGPAfalse3, LGPAfalse4]]
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    }
    var resCD = select_answers_cd();
    var PAcauCD = resCD[0];
    var LGcauCD = resCD[1];

    var loigiai = "\\begin{itemchoice}\n" +
        "\\itemch " + LGcauAB[0] + "\n" +
        "\\itemch " + LGcauAB[1] + "\n" +
        "\\itemch " + LGcauCD[0] + "\n" +
        "\\itemch " + LGcauCD[1] + "\n" +
        "\\end{itemchoice}";

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choiceTFt\n" +
        "{" + PAcauAB[0] + "}\n" +
        "{" + PAcauAB[1] + "}\n" +
        "{" + PAcauCD[0] + "}\n" +
        "{" + PAcauCD[1] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function TF_vidu1(loai) {
    var a = randomchoice(1, 9);
    var b = randomchoice(1, 9);
    var c = randomchoice(1, 9);
    while (b >= a || a == c || b == 5) {
        a = randomchoice(1, 9);
        b = randomchoice(1, 9);
        c = randomchoice(1, 9);
    }

    var debai = "Cho hai biến cố $A$ và $B$ có $P(B)=" + convert(b / 10) + "$ và $P(A|B)=P(A|\\overline{B})=" + convert(a / 10) + "$.";

    var PAtrue1 = "\\True Xác suất của biến cố $AB$ bằng $" + convert((a * b) / 100) + "$";
    var LGPAtrue1 = "Ta có $P(AB)=P(B)P(A|B)=" + convert(b / 10) + "\\cdot " + convert(a / 10) + "=" + convert((a * b) / 100) + "$.";
    var PAfalse1 = "Xác suất của biến cố $AB$ bằng $" + phanso(b, a) + "$";
    var LGPAfalse1 = "Ta có $P(AB)=P(B)P(A|B)=" + convert(b / 10) + "\\cdot " + convert(a / 10) + "=" + phanso(a * b, 100) + "$.";

    var PAtrue2 = "\\True Xác suất của biến cố $A\\overline{B}$ bằng $" + convert((a * (10 - b)) / 100) + "$";
    var LGPAtrue2 = "Ta có $P(\\overline{B})=1-P(B)=1-" + convert(b / 10) + "=" + convert((10 - b) / 10) + "$.\\\\\nDo đó\n$$P(A\\overline{B})=P(\\overline{B})P(A|\\overline{B})=" + convert((10 - b) / 10) + "\\cdot " + convert(a / 10) + "=" + convert((a * (10 - b)) / 100) + ".$$";
    var PAfalse2 = "Xác suất của biến cố $A\\overline{B}$ bằng $" + convert((c * (10 - b)) / 100) + "$";
    var LGPAfalse2 = "Ta có $P(\\overline{B})=0,7$. Do đó $P(A\\overline{B})=P(\\overline{B})P(A|\\overline{B})=" + convert((a * (10 - b)) / 100) + "$ (không phải $" + convert((c * (10 - b)) / 100) + "$).";

    var select_answers_ab = function() {
        var valid_pairs = [
            [[PAtrue1, PAfalse2], [LGPAtrue1, LGPAfalse2]],
            [[PAfalse2, PAtrue1], [LGPAfalse2, LGPAtrue1]],
            [[PAfalse1, PAtrue2], [LGPAfalse1, LGPAtrue2]],
            [[PAtrue2, PAfalse1], [LGPAtrue2, LGPAfalse1]],
            [[PAtrue1, PAtrue2], [LGPAtrue1, LGPAtrue2]],
            [[PAtrue2, PAtrue1], [LGPAtrue2, LGPAtrue1]],
            [[PAfalse1, PAfalse2], [LGPAfalse1, LGPAfalse2]],
            [[PAfalse2, PAfalse1], [LGPAfalse2, LGPAfalse1]]
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    };

    var resAB = select_answers_ab();
    var PAcauAB = resAB[0];
    var LGcauAB = resAB[1];

    var PAtrue3 = "\\True Xác suất của biến cố $A$ bằng $" + convert(a / 10) + "$";
    var LGPAtrue3 = "Ta có $P(A)=P(AB)+P(A\\overline{B})=" + convert((a * b) / 100) + "+" + convert((a * (10 - b)) / 100) + "=" + convert(a / 10) + "$.";
    var PAfalse3 = "Xác suất của biến cố $A$ bằng $" + convert(c / 10) + "$";
    var LGPAfalse3 = "Ta có $P(A)=P(AB)+P(A\\overline{B})=" + convert(a / 10) + "$.";

    var ba_list = [convert(b / 10), phanso(b, 10)];
    var ba = ba_list[randomchoice(0, 1)];

    var PAtrue4 = "\\True Xác suất của biến cố $B$ với điều kiện $A$ bằng $" + ba + "$";
    var LGPAtrue4 = "Ta có\n"+
    "$$P(B|A)=\\dfrac{P(AB)}{P(A)}=\\dfrac{" + convert((a * b) / 100) + "}{" + convert(a / 10) + "}=" + ba + ".$$";
    var PAfalse4 = "Xác suất của biến cố $B$ với điều kiện $A$ bằng $" + phanso(b, a) + "$";
    var LGPAfalse4 = "Ta có $P(B|A)=" + convert(b / 10) + "$.";

    var select_answers_cd = function() {
        var valid_pairs = [
            [[PAtrue3, PAfalse4], [LGPAtrue3, LGPAfalse4]],
            [[PAfalse3, PAtrue4], [LGPAfalse3, LGPAtrue4]],
            [[PAtrue3, PAtrue4], [LGPAtrue3, LGPAtrue4]],
            [[PAfalse3, PAfalse4], [LGPAfalse3, LGPAfalse4]]
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    };

    var resCD = select_answers_cd();
    var PAcauCD = resCD[0];
    var LGcauCD = resCD[1];

    var loigiai = "\\begin{itemchoice}\n" +
        "\\itemch " + LGcauAB[0] + "\n" +
        "\\itemch " + LGcauAB[1] + "\n" +
        "\\itemch " + LGcauCD[0] + "\n" +
        "\\itemch " + LGcauCD[1] + "\n" +
        "\\end{itemchoice}";

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choiceTF\n" +
        "{" + PAcauAB[0] + "}\n" +
        "{" + PAcauAB[1] + "}\n" +
        "{" + PAcauCD[0] + "}\n" +
        "{" + PAcauCD[1] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
}

function TF_vidu2(loai) {
    var m = randomchoice(5, 10);
    var n = randomchoice(5, 10);

    // Sử dụng hàm C(n, k) và format(a) có sẵn trong hệ thống của bạn
    while (m == n || C(m, 3) == 3 || C(m + n, 3) - C(n, 3) == C(m, 3) + C(n, 3)) {
        m = randomchoice(5, 10);
        n = randomchoice(5, 10);
    }

    var debai = "Một đội văn nghệ gồm $" + m + "$ bạn nam và $" + n + "$ bạn nữ. Chọn ra ngẫu nhiên $3$ bạn để biểu diễn một tiết mục. Gọi $A$ là biến cố: \"Có ít nhất một bạn nam trong $3$ bạn được chọn\", $B$ là biến cố: \"Ba bạn được chọn có cùng giới tính\".";

    // --- Thiết lập phương án A, B ---
    var PAtrue1 = "\\True Xác suất của biến cố $B$ bằng $" + phanso(C(m, 3) + C(n, 3), C(m + n, 3)) + "$";
    var LGPAtrue1 = "Xác suất của biến cố $B$ là $P(B)=\\dfrac{C_" + format(m) + "^3+C_" + format(n) + "^3}{C_" + format(m + n) + "^3}=" + phanso(C(m, 3) + C(n, 3), C(m + n, 3)) + "$.";
    
    var valFalse1 = randomchoice(0, 1) == 0 ? "$" + phanso(C(m, 3), C(m + n, 3)) + "$" : "$" + phanso(C(n, 3), C(m + n, 3)) + "$";
    var PAfalse1 = "Xác suất của biến cố $B$ bằng " + valFalse1;
    var LGPAfalse1 = "Xác suất của biến cố $B$ là $P(B)=\\dfrac{C_" + format(m) + "^3+C_" + format(n) + "^3}{C_" + format(m + n) + "^3}=" + phanso(C(m, 3) + C(n, 3), C(m + n, 3)) + "$.";

    var PAtrue2 = "\\True Xác suất của biến cố $AB$ bằng $" + phanso(C(m, 3), C(m + n, 3)) + "$";
    var LGPAtrue2 = "Ta thấy $AB$ là biến cố: \"Ba bạn được chọn đều là nam\". Do đó $P(AB)=\\dfrac{C_" + format(m) + "^3}{C_" + format(m + n) + "^3}=" + phanso(C(m, 3), C(m + n, 3)) + "$.";
    
    var PAfalse2 = "Xác suất của biến cố $AB$ bằng $" + phanso(3, C(m + n, 3)) + "$";
    var LGPAfalse2 = "Ta thấy $AB$ là biến cố: \"Ba bạn được chọn đều là nam\". Do đó $P(AB)=\\dfrac{C_" + format(m) + "^3}{C_" + format(m + n) + "^3}=" + phanso(C(m, 3), C(m + n, 3)) + "$.";

    var select_answers_ab = function() {
        var valid_pairs = [
            [[PAtrue1, PAfalse2], [LGPAtrue1, LGPAfalse2]],
            [[PAfalse2, PAtrue1], [LGPAfalse2, LGPAtrue1]],
            [[PAfalse1, PAtrue2], [LGPAfalse1, LGPAtrue2]],
            [[PAtrue2, PAfalse1], [LGPAtrue2, LGPAfalse1]],
            [[PAtrue1, PAtrue2], [LGPAtrue1, LGPAtrue2]],
            [[PAtrue2, PAtrue1], [LGPAtrue2, LGPAtrue1]],
            [[PAfalse1, PAfalse2], [LGPAfalse1, LGPAfalse2]],
            [[PAfalse2, PAfalse1], [LGPAfalse2, LGPAfalse1]]
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    };

    var resAB = select_answers_ab();
    var PAcauAB = resAB[0];
    var LGcauAB = resAB[1];

    // --- Thiết lập phương án C, D ---
    var PAtrue3 = "\\True Xác suất của biến cố $A$ với điều kiện $B$ bằng $" + phanso(C(m, 3), C(m, 3) + C(n, 3)) + "$";
    var LGPAtrue3 = "Ta có \n$$P(A|B)=\\dfrac{P(AB)}{P(B)}=\\dfrac{" + phanso(C(m, 3), C(m + n, 3)) + "}{" + phanso(C(m, 3) + C(n, 3), C(m + n, 3)) + "}=" + phanso(C(m, 3), C(m, 3) + C(n, 3)) + ".$$";
    
    var PAfalse3 = "Xác suất của biến cố $A$ với điều kiện $B$ bằng $" + phanso(3, C(m, 3) + C(n, 3)) + "$";
    var LGPAfalse3 = "Ta có \n$$P(A|B)=\\dfrac{P(AB)}{P(B)}=\\dfrac{" + phanso(C(m, 3), C(m + n, 3)) + "}{" + phanso(C(m, 3) + C(n, 3), C(m + n, 3)) + "}=" + phanso(C(m, 3), C(m, 3) + C(n, 3)) + ".$$";

    var PAtrue4 = "\\True Xác suất của biến cố $A\\overline{B}$ bằng $" + phanso(C(m + n, 3) - C(n, 3) - C(m, 3), C(m + n, 3)) + "$";
    var LGPAtrue4 = "Ta thấy $\\overline{A}$ là biến cố: \"Ba bạn được chọn đều là nữ\".\\\\\n" +
        "Do đó\n" +
        "$$P(A)=1-P(\\overline{A})=1-\\dfrac{C_" + format(n) + "^3}{C_" + format(m + n) + "^3}=" + phanso(C(m + n, 3) - C(n, 3), C(m + n, 3)) + ".$$\n" +
        "Vậy\n" +
        "$$P(A\\overline{B})=P(A)-P(AB)=" + phanso(C(m + n, 3) - C(n, 3) - C(m, 3), C(m + n, 3)) + ".$$";
    
    var PAfalse4 = "Xác suất của biến cố $A\\overline{B}$ bằng $" + phanso(C(n, 3), C(m + n, 3)) + "$";
    var LGPAfalse4 = "Ta thấy $\\overline{A}$ là biến cố: \"Ba bạn được chọn đều là nữ\".\\\\\n" +
        "Do đó\n" +
        "$$P(A)=1-P(\\overline{A})=1-\\dfrac{C_" + format(n) + "^3}{C_" + format(m + n) + "^3}=" + phanso(C(m + n, 3) - C(n, 3), C(m + n, 3)) + ".$$\n" +
        "Vậy\n" + 
        "$$P(A\\overline{B})=P(A)-P(AB)=" + phanso(C(m + n, 3) - C(n, 3) - C(m, 3), C(m + n, 3)) + ".$$";

    var select_answers_cd = function() {
        var valid_pairs = [
            [[PAtrue3, PAfalse4], [LGPAtrue3, LGPAfalse4]],
            [[PAfalse3, PAtrue4], [LGPAfalse3, LGPAtrue4]],
            [[PAtrue3, PAtrue4], [LGPAtrue3, LGPAtrue4]],
            [[PAfalse3, PAfalse4], [LGPAfalse3, LGPAfalse4]]
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    };

    var resCD = select_answers_cd();
    var PAcauCD = resCD[0];
    var LGcauCD = resCD[1];

    var loigiai = "\\begin{itemchoice}\n" +
        "\\itemch " + LGcauAB[0] + "\n" +
        "\\itemch " + LGcauAB[1] + "\n" +
        "\\itemch " + LGcauCD[0] + "\n" +
        "\\itemch " + LGcauCD[1] + "\n" +
        "\\end{itemchoice}";

    return "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choiceTF\n" +
        "{" + PAcauAB[0] + "}\n" +
        "{" + PAcauAB[1] + "}\n" +
        "{" + PAcauCD[0] + "}\n" +
        "{" + PAcauCD[1] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n\n";
}

function TF_vidu3(loai) {
    var a = randomchoice(60, 90);
    var b = randomchoice(4, 10);
    var c = randomchoice(20, 40);
    while (a * b == (100 - a) * c) {
        a = randomchoice(60, 90);
        b = randomchoice(4, 10);
        c = randomchoice(20, 40);
    }
    var debai = 'Tỉ lệ người dân đã tiêm vắc xin phòng bệnh $X$ ở một địa phương là $' + a + '\\%$. Trong số những người đã tiêm phòng, tỉ lệ mắc bệnh $X$ là $' + b + '\\%$; trong số những người chưa tiêm phòng, tỉ lệ mắc bệnh $X$ là $' + c + '\\%$. Chọn ngẫu nhiên một người ở địa phương đó. Gọi $A$ là biến cố: "Người được chọn đã tiêm vắc xin phòng bệnh" và $B$ là biến cố: "Người được chọn mắc bệnh $X$".';
    var PAtrue1 = "\\True Xác suất của biến cố $\\overline{A}$ bằng $" + convert((100 - a) / 100) + "$";
    var LGPAtrue1 = "Vì tỉ lệ người dân đã tiêm vắc xin phòng bệnh $X$ ở địa phương là $" + a + "\\%$ nên $P(A)=" + convert(a / 100) + "$. Do đó $P(\\overline{A})=1-P(A)=1-" + convert(a / 100) + "=" + convert((100 - a) / 100) + "$.";
    var PAfalse1 = "Xác suất của biến cố $\\overline{A}$ bằng $" + convert(a / 100) + "$";
    var LGPAfalse1 = "Vì tỉ lệ người dân đã tiêm vắc xin phòng bệnh $X$ ở địa phương là $" + a + "\\%$ nên $P(A)=" + convert(a / 100) + "$. Do đó $P(\\overline{A})=1-P(A)=1-" + convert(a / 100) + "=" + convert((100 - a) / 100) + "$.";
    var PAtrue2 = "\\True $P(B|A)=" + convert(b / 100) + "$ và $P(B|\\overline{A})=" + convert(c / 100) + "$";
    var LGPAtrue2 = "Vì tỉ lệ mắc bệnh $X$ trong số những người đã tiêm phòng là $" + b + "\\%$ và trong số những người chưa tiêm phòng là $" + c + "\\%$ nên $P(B|A)=" + convert(b / 100) + "$ và $P(B|\\overline{A})=" + convert(c / 100) + "$.";
    var PAfalse2 = "$P(B|A)=" + convert(c / 100) + "$ và $P(B|\\overline{A})=" + convert(b / 100) + "$";
    var LGPAfalse2 = "Vì tỉ lệ mắc bệnh $X$ trong số những người đã tiêm phòng là $" + b + "\\%$ và trong số những người chưa tiêm phòng là $" + c + "\\%$ nên $P(B|A)=" + convert(b / 100) + "$ và $P(B|\\overline{A})=" + convert(c / 100) + "$.";
    
    function select_answers_ab() {
        var valid_pairs = [
            [[PAtrue1, PAfalse2], [LGPAtrue1, LGPAfalse2]],
            [[PAfalse2, PAtrue1], [LGPAfalse2, LGPAtrue1]],
            [[PAfalse1, PAtrue2], [LGPAfalse1, LGPAtrue2]],
            [[PAtrue2, PAfalse1], [LGPAtrue2, LGPAfalse1]],
            [[PAtrue1, PAtrue2], [LGPAtrue1, LGPAtrue2]],
            [[PAtrue2, PAtrue1], [LGPAtrue2, LGPAtrue1]],
            [[PAfalse1, PAfalse2], [LGPAfalse1, LGPAfalse2]],
            [[PAfalse2, PAfalse1], [LGPAfalse2, LGPAfalse1]],
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    }
    
    var resAB = select_answers_ab();
    var PAcauAB = resAB[0];
    var LGcauAB = resAB[1];
    
    var PAtrue3 = "\\True Xác suất của biến cố $B$ bằng $" + convert((a * b + (100 - a) * c) / 10000) + "$";
    var LGPAtrue3 = "Theo công thức xác suất toàn phần\n" +
        "$$P(B)=P(A)P(B|A)+P(\\overline{A})P(B|\\overline{A})=" + convert(a / 100) + "\\cdot " + convert(b / 100) + "+" + convert((100 - a) / 100) + "\\cdot " + convert(c / 100) + "=" + convert((a * b + (100 - a) * c) / 10000) + ".$$";
    var PAfalse3 = "Xác suất của biến cố $B$ bằng $" + convert(((100 - a) * (b + c)) / 10000) + "$";
    var LGPAfalse3 = "Theo công thức xác suất toàn phần\n" +
        "$$P(B)=P(A)P(B|A)+P(\\overline{A})P(B|\\overline{A})=" + convert(a / 100) + "\\cdot " + convert(b / 100) + "+" + convert((100 - a) / 100) + "\\cdot " + convert(c / 100) + "=" + convert((a * b + (100 - a) * c) / 10000) + ".$$";
    
    var PAtrue4a = "\\True Xác suất của biến cố $\\overline{A}$ với điều kiện $B$ bằng $" + phanso((100 - a) * c, a * b + (100 - a) * c) + "$";
    var LGPAtrue4a = "Theo công thức Bayes\n" +
        "$$P(\\overline{A}|B)=\\dfrac{P(\\overline{A})P(B|\\overline{A})}{P(B)}=\\dfrac{" + convert((100 - a) / 100) + "\\cdot " + convert(c / 100) + "}{" + convert((a * b + (100 - a) * c) / 10000) + "}=" + phanso((100 - a) * c, a * b + (100 - a) * c) + ".$$";
    var PAtrue4b = "\\True Xác suất của biến cố $A$ với điều kiện $B$ bằng $" + phanso(a * b, a * b + (100 - a) * c) + "$";
    var LGPAtrue4b = "Theo công thức Bayes\n" +
        "$$P(A|B)=\\dfrac{P(A)P(B|A)}{P(B)}=\\dfrac{" + convert(a / 100) + "\\cdot " + convert(b / 100) + "}{" + convert((a * b + (100 - a) * c) / 10000) + "}=" + phanso(a * b, a * b + (100 - a) * c) + ".$$";
    
    var LGPAtrue4 = LGPAtrue4a;
    var PAtrue4 = (randomchoice(0, 1) == 0) ? PAtrue4a : PAtrue4b;
    if (PAtrue4 == PAtrue4b) {
        LGPAtrue4 = LGPAtrue4b;
    }
    
    var PAfalse4a = "Xác suất của biến cố $\\overline{A}$ với điều kiện $B$ bằng $" + phanso(a * b, a * b + (100 - a) * c) + "$";
    var LGPAfalse4a = "Theo công thức Bayes\n" +
        "$$P(\\overline{A}|B)=\\dfrac{P(\\overline{A})P(B|\\overline{A})}{P(B)}=\\dfrac{" + convert((100 - a) / 100) + "\\cdot " + convert(c / 100) + "}{" + convert((a * b + (100 - a) * c) / 10000) + "}=" + phanso((100 - a) * c, a * b + (100 - a) * c) + ".$$";
    var PAfalse4b = "Xác suất của biến cố $A$ với điều kiện $B$ bằng $" + phanso((100 - a) * c, a * b + (100 - a) * c) + "$";
    var LGPAfalse4b = "Theo công thức Bayes\n" +
        "$$P(A|B)=\\dfrac{P(A)P(B|A)}{P(B)}=\\dfrac{" + convert(a / 100) + "\\cdot " + convert(b / 100) + "}{" + convert((a * b + (100 - a) * c) / 10000) + "}=" + phanso(a * b, a * b + (100 - a) * c) + ".$$";
    
    var LGPAfalse4 = LGPAfalse4a;
    var PAfalse4 = (randomchoice(0, 1) == 0) ? PAfalse4a : PAfalse4b;
    if (PAfalse4 == PAfalse4b) {
        LGPAfalse4 = LGPAfalse4b;
    }
    
    function select_answers_cd() {
        var valid_pairs = [
            [[PAtrue3, PAfalse4], [LGPAtrue3, LGPAfalse4]],
            [[PAfalse3, PAtrue4], [LGPAfalse3, LGPAtrue4]],
            [[PAtrue3, PAtrue4], [LGPAtrue3, LGPAtrue4]],
            [[PAfalse3, PAfalse4], [LGPAfalse3, LGPAfalse4]],
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    }
    
    var resCD = select_answers_cd();
    var PAcauCD = resCD[0];
    var LGcauCD = resCD[1];
    
    var loigiai = "\\begin{itemchoice}\n" +
        "\\itemch " + LGcauAB[0] + "\n" +
        "\\itemch " + LGcauAB[1] + "\n" +
        "\\itemch " + LGcauCD[0] + "\n" +
        "\\itemch " + LGcauCD[1] + "\n" +
        "\\end{itemchoice}";
        
    var cauhoi = "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choiceTF\n" +
        "{" + PAcauAB[0] + "}\n" +
        "{" + PAcauAB[1] + "}\n" +
        "{" + PAcauCD[0] + "}\n" +
        "{" + PAcauCD[1] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";
        
    return cauhoi;
}

function TF_vidu4(loai) {
    var a = randomchoice(60, 90);
    var b = randomchoice(34, 49);
    var c = randomchoice(10, 39);
    while (a <= b || 100 - a <= c || b == c || a >= b + c || 100 - a >= b + c || kiemtrabaxau(phanso(a, a * b + (100 - a) * c), phanso(b, b + c), phanso(a, b + c)) == false || kiemtrabaxau(phanso(100 - a, a * b + (100 - a) * c), phanso(c, b + c), phanso(100 - a, b + c)) == false) {
        a = randomchoice(60, 90);
        b = randomchoice(34, 49);
        c = randomchoice(10, 39);
    }
    var debai = 'Một phân xưởng có $' + a + '\\%$ công nhân là nữ. Tỉ lệ công nhân nữ có tay nghề cao chiếm $' + b + '\\%$ số công nhân toàn phân xưởng, tỉ lệ công nhân nam có tay nghề cao chiếm $' + c + '\\%$ số công nhân toàn phân xưởng. Chọn ngẫu nhiên $1$ công nhân của phân xưởng. Gọi $A$ là biến cố: "Công nhân được chọn là nữ" và $B$ là biến cố: "Công nhân được chọn có tay nghề cao".';
    
    var PAtrue1 = "\\True Xác suất của biến cố $\\overline{A}$ bằng $" + convert((100 - a) / 100) + "$";
    var LGPAtrue1 = "Vì phân xưởng có $" + a + "\\%$ công nhân là nữ nên $P(A)=" + convert(a / 100) + "$.\\\\\n" +
        "Do đó\n" +
        "$$P(\\overline{A})=1-P(A)=1-" + convert(a / 100) + "=" + convert((100 - a) / 100) + ".$$";
    
    var PAfalse1 = "Xác suất của biến cố $\\overline{A}$ bằng $" + convert(a / 100) + "$";
    var LGPAfalse1 = "Vì phân xưởng có $" + a + "\\%$ công nhân là nữ nên $P(A)=" + convert(a / 100) + "$.\\\\\n" +
        "Do đó\n" +
        "$$P(\\overline{A})=1-P(A)=1-" + convert(a / 100) + "=" + convert((100 - a) / 100) + ".$$";
    
    var PAtrue2 = "\\True Xác suất của biến cố $B$ bằng $" + convert((b + c) / 100) + "$";
    var LGPAtrue2 = 'Ta thấy $AB$ là biến cố: "Công nhân được chọn là nữ có tay nghề cao" và $\\overline{A}B$ là biến cố: "Công nhân được chọn là nam có tay nghề cao. Do đó $P(AB)=' + convert(b / 100) + '$ và $P(\\overline{A}B)=' + convert(c / 100) + '$.\\\\\n' +
        'Do đó\n' +
        '$$P(B)=P(AB)+P(\\overline{A}B)=' + convert(b / 100) + '+' + convert(c / 100) + '=' + convert((b + c) / 100) + '.$$';
    
    var PAfalse2 = "Xác suất của biến cố $B$ bằng $" + convert((a * b + (100 - a) * c) / 10000) + "$";
    var LGPAfalse2 = 'Ta thấy $AB$ là biến cố: "Công nhân được chọn là nữ có tay nghề cao" và $\\overline{A}B$ là biến cố: "Công nhân được chọn là nam có tay nghề cao. Do đó $P(AB)=' + convert(b / 100) + '$ và $P(\\overline{A}B)=' + convert(c / 100) + '$.\\\\\n' +
        'Do đó\n' +
        '$$P(B)=P(AB)+P(\\overline{A}B)=' + convert(b / 100) + '+' + convert(c / 100) + '=' + convert((b + c) / 100) + '.$$';

    function select_answers_ab() {
        var valid_pairs = [
            [[PAtrue1, PAfalse2], [LGPAtrue1, LGPAfalse2]],
            [[PAfalse1, PAtrue2], [LGPAfalse1, LGPAtrue2]],
            [[PAtrue1, PAtrue2], [LGPAtrue1, LGPAtrue2]],
            [[PAfalse1, PAfalse2], [LGPAfalse1, LGPAfalse2]],
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    }

    var resAB = select_answers_ab();
    var PAcauAB = resAB[0];
    var LGcauAB = resAB[1];

    var PAtrue3 = "\\True Xác suất của $A$ với điều kiện $B$ bằng $" + phanso(b, b + c) + "$";
    var LGPAtrue3 = "Ta có\n" +
        "$$P(A|B)=\\dfrac{P(AB)}{P(B)}=\\dfrac{" + convert(b / 100) + "}{" + convert((b + c) / 100) + "}=" + phanso(b, b + c) + "$$";
    
    var PAfalse3 = "Xác suất của $A$ với điều kiện $B$ bằng " + (randomchoice(0, 1) == 0 ? "$" + phanso(a, a * b + (100 - a) * c) + "$" : "$" + phanso(a, b + c) + "$");
    var LGPAfalse3 = "Ta có\n" +
        "$$P(A|B)=\\dfrac{P(AB)}{P(B)}=\\dfrac{" + convert(b / 100) + "}{" + convert((b + c) / 100) + "}=" + phanso(b, b + c) + "$$";
    
    var PAtrue4 = "\\True Xác suất của $\\overline{A}$ với điều kiện $B$ bằng $" + phanso(c, b + c) + "$";
    var LGPAtrue4 = "Ta có\n" +
        "$$P(\\overline{A}|B)=\\dfrac{P(\\overline{A}B)}{P(B)}=\\dfrac{" + convert(c / 100) + "}{" + convert((b + c) / 100) + "}=" + phanso(c, b + c) + "$$";
    
    var PAfalse4 = "Xác suất của $\\overline{A}$ với điều kiện $B$ bằng " + (randomchoice(0, 1) == 0 ? "$" + phanso(100 - a, a * b + (100 - a) * c) + "$" : "$" + phanso(100 - a, b + c) + "$");
    var LGPAfalse4 = "Ta có\n" +
        "$$P(\\overline{A}|B)=\\dfrac{P(\\overline{A}B)}{P(B)}=\\dfrac{" + convert(c / 100) + "}{" + convert((b + c) / 100) + "}=" + phanso(c, b + c) + "$$";

    function select_answers_cd() {
        var valid_pairs = [
            [[PAtrue3, PAfalse4], [LGPAtrue3, LGPAfalse4]],
            [[PAfalse4, PAtrue3], [LGPAfalse4, LGPAtrue3]],
            [[PAfalse3, PAtrue4], [LGPAfalse3, LGPAtrue4]],
            [[PAtrue4, PAfalse3], [LGPAtrue4, LGPAfalse3]],
            [[PAtrue3, PAtrue4], [LGPAtrue3, LGPAtrue4]],
            [[PAtrue4, PAtrue3], [LGPAtrue4, LGPAtrue3]],
            [[PAfalse3, PAfalse4], [LGPAfalse3, LGPAfalse4]],
            [[PAfalse4, PAfalse3], [LGPAfalse4, LGPAfalse3]],
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    }

    var resCD = select_answers_cd();
    var PAcauCD = resCD[0];
    var LGcauCD = resCD[1];

    var loigiai = "\\begin{itemchoice}\n" +
        "\\itemch " + LGcauAB[0] + "\n" +
        "\\itemch " + LGcauAB[1] + "\n" +
        "\\itemch " + LGcauCD[0] + "\n" +
        "\\itemch " + LGcauCD[1] + "\n" +
        "\\end{itemchoice}";

    var cauhoi = "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choiceTF\n" +
        "{" + PAcauAB[0] + "}\n" +
        "{" + PAcauAB[1] + "}\n" +
        "{" + PAcauCD[0] + "}\n" +
        "{" + PAcauCD[1] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";

    return cauhoi;
}

function TF_vidu5(loai) {
    var a = randomchoice(3, 9);
    var b = randomchoice(3, 9);
    var c = randomchoice(3, 9);
    while (a == b || a == c || b == c || phanso(C(a, 2), C(a + 1, 2)) == phanso(2, a)) {
        a = randomchoice(3, 9);
        b = randomchoice(3, 9);
        c = randomchoice(3, 9);
    }
    var maulist = ["xanh", "đỏ", "tím", "vàng", "đen", "trắng"];
    // Sửa lỗi chọn màu ở đây bằng cách dùng index
    var i1 = randomchoice(0, maulist.length - 1);
    var mau1 = maulist[i1];
    var i2 = randomchoice(0, maulist.length - 1);
    while (i1 == i2) {
        i2 = randomchoice(0, maulist.length - 1);
    }
    var mau2 = maulist[i2];

    var debai = 'Hộp thứ nhất có $1$ viên bi ' + mau1 + ' và $' + a + '$ viên bi ' + mau2 + '. Hộp thứ hai có $' + b + '$ viên bi bi ' + mau1 + ' và $' + c + '$ viên bi ' + mau2 + '. Các viên bi có cùng kích thước và khối lượng. Lấy ra ngẫu nhiên đồng thời $2$ viên bi từ hộp thứ nhất chuyển sang hộp thứ hai. Sau đó lại lấy ra ngẫu nhiên đồng thời $2$ viên bi từ hộp thứ hai. Gọi A là biến cố: "Hai viên bi lấy ra từ hộp thứ hai là bi ' + mau2 + '", $B$ là biến cố: "Hai viên bi lấy ra từ hộp thứ nhất là bi ' + mau2 + '".';
    
    var PAtrue1 = "\\True Xác suất của biến cố $B$ bằng $" + phanso(C(a, 2), C(a + 1, 2)) + "$";
    var LGPAtrue1 = "Xác suất của biến cố $B$ là $P(B)=\\dfrac{" + "C_" + format(a) + "^2}{" + "C_" + format(a + 1) + "^2}=" + phanso(C(a, 2), C(a + 1, 2)) + "$.";
    var PAfalse1 = "Xác suất của biến cố $B$ bằng $" + phanso(2, a) + "$";
    var LGPAfalse1 = "Xác suất của biến cố $B$ là $P(B)=\\dfrac{" + "C_" + format(a) + "^2}{" + "C_" + format(a + 1) + "^2}=" + phanso(C(a, 2), C(a + 1, 2)) + "$.";
    
    var PAtrue2 = "\\True Xác suất của biến cố $A$ với điều kiện $B$ bằng $" + phanso(C(c + 2, 2), C(b + c + 2, 2)) + "$";
    var LGPAtrue2 = "Ta có $P(A|B)=\\dfrac{" + "C_" + format(c + 2) + "^2}{" + "C_" + format(b + c + 2) + "^2}=" + phanso(C(c + 2, 2), C(b + c + 2, 2)) + "$.";
    var PAfalse2 = "Xác suất của biến cố $A$ với điều kiện $B$ bằng $" + phanso(C(c + 1, 2), C(b + c + 2, 2)) + "$";
    var LGPAfalse2 = "Ta có $P(A|B)=\\dfrac{" + "C_" + format(c + 2) + "^2}{" + "C_" + format(b + c + 2) + "^2}=" + phanso(C(c + 2, 2), C(b + c + 2, 2)) + "$.";

    function select_answers_ab() {
        var valid_pairs = [
            [[PAtrue1, PAfalse2], [LGPAtrue1, LGPAfalse2]],
            [[PAfalse2, PAtrue1], [LGPAfalse2, LGPAtrue1]],
            [[PAfalse1, PAtrue2], [LGPAfalse1, LGPAtrue2]],
            [[PAtrue2, PAfalse1], [LGPAtrue2, LGPAfalse1]],
            [[PAtrue1, PAtrue2], [LGPAtrue1, LGPAtrue2]],
            [[PAtrue2, PAtrue1], [LGPAtrue2, LGPAtrue1]],
            [[PAfalse1, PAfalse2], [LGPAfalse1, LGPAfalse2]],
            [[PAfalse2, PAfalse1], [LGPAfalse2, LGPAfalse1]],
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    }

    var resAB = select_answers_ab();
    var PAcauAB = resAB[0];
    var LGcauAB = resAB[1];

    var PAtrue3 = "\\True Xác suất của biến cố $A$ với điều kiện $\\overline{B}$ bằng $" + phanso(C(c + 1, 2), C(b + c + 2, 2)) + "$";
    var LGPAtrue3 = "Ta có $P(A|\\overline{B})=\\dfrac{" + "C_" + format(c + 1) + "^2}{" + "C_" + format(b + c + 2) + "^2}=" + phanso(C(c + 1, 2), C(b + c + 2, 2)) + "$.";
    var PAfalse3 = "Xác suất của biến cố $A$ với điều kiện $\\overline{B}$ bằng $" + phanso(C(c + 2, 2), C(b + c + 2, 2)) + "$";
    var LGPAfalse3 = "Ta có $P(A|\\overline{B})=\\dfrac{" + "C_" + format(c + 1) + "^2}{" + "C_" + format(b + c + 2) + "^2}=" + phanso(C(c + 1, 2), C(b + c + 2, 2)) + "$.";

    var PAtrue4 = "\\True Xác suất của biến cố $A$ bằng $" + phanso(C(a, 2) * C(c + 2, 2) + a * C(c + 1, 2), C(a + 1, 2) * C(b + c + 2, 2)) + "$";
    var LGPAtrue4 = "Ta có\n" +
        "$$P(\\overline{B})=1-P(B)=1-" + phanso(C(a, 2), C(a + 1, 2)) + "=" + phanso(a, C(a + 1, 2)) + ".$$\n" +
        "Theo công thức xác suất toàn phần\n" +
        "$$P(A)=P(B)P(A|B)+P(\\overline{B})P(A|\\overline{B})=" + phanso(C(a, 2), C(a + 1, 2)) + "\\cdot" + phanso(C(c + 2, 2), C(b + c + 2, 2)) + "+" + phanso(a, C(a + 1, 2)) + "\\cdot" + phanso(C(c + 1, 2), C(b + c + 2, 2)) + "=" + phanso(C(a, 2) * C(c + 2, 2) + a * C(c + 1, 2), C(a + 1, 2) * C(b + c + 2, 2)) + ".$$";
    var PAfalse4 = "Xác suất của biến cố $A$ bằng $" + phanso(C(a, 2) * C(c + 2, 2) + C(c + 1, 2), C(a + 1, 2) * C(b + c + 2, 2)) + "$";
    var LGPAfalse4 = "Ta có\n" +
        "$$P(\\overline{B})=1-P(B)=1-" + phanso(C(a, 2), C(a + 1, 2)) + "=" + phanso(a, C(a + 1, 2)) + ".$$\n" +
        "Theo công thức xác suất toàn phần\n" +
        "$$P(A)=P(B)P(A|B)+P(\\overline{B})P(A|\\overline{B})=" + phanso(C(a, 2), C(a + 1, 2)) + "\\cdot" + phanso(C(c + 2, 2), C(b + c + 2, 2)) + "+" + phanso(a, C(a + 1, 2)) + "\\cdot" + phanso(C(c + 1, 2), C(b + c + 2, 2)) + "=" + phanso(C(a, 2) * C(c + 2, 2) + a * C(c + 1, 2), C(a + 1, 2) * C(b + c + 2, 2)) + ".$$";

    function select_answers_cd() {
        var valid_pairs = [
            [[PAtrue3, PAfalse4], [LGPAtrue3, LGPAfalse4]],
            [[PAfalse3, PAtrue4], [LGPAfalse3, LGPAtrue4]],
            [[PAtrue3, PAtrue4], [LGPAtrue3, LGPAtrue4]],
            [[PAfalse3, PAfalse4], [LGPAfalse3, LGPAfalse4]],
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    }

    var resCD = select_answers_cd();
    var PAcauCD = resCD[0];
    var LGcauCD = resCD[1];

    var loigiai = "\\begin{itemchoice}\n" +
        "\\itemch " + LGcauAB[0] + "\n" +
        "\\itemch " + LGcauAB[1] + "\n" +
        "\\itemch " + LGcauCD[0] + "\n" +
        "\\itemch " + LGcauCD[1] + "\n" +
        "\\end{itemchoice}";

    var cauhoi = "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choiceTF\n" +
        "{" + PAcauAB[0] + "}\n" +
        "{" + PAcauAB[1] + "}\n" +
        "{" + PAcauCD[0] + "}\n" +
        "{" + PAcauCD[1] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";

    return cauhoi;
}

function TF_vidu6(loai) {
    var hl_I = randomchoice(40, 70);
    var hl_II = randomchoice(40, 70);
    var khl_I = randomchoice(10, 30);
    var khl_II = randomchoice(10, 30);
    var n1 = hl_I + khl_I;
    var n2 = hl_II + khl_II;
    var n = n1 + n2;

    while (hl_I == hl_II || khl_I == khl_II || n1 == n2 || hl_I + hl_II == khl_I + khl_II) {
        hl_I = randomchoice(40, 70);
        hl_II = randomchoice(40, 70);
        khl_I = randomchoice(10, 30);
        khl_II = randomchoice(10, 30);
        n1 = hl_I + khl_I;
        n2 = hl_II + khl_II;
        n = n1 + n2;
    }

    var debai = 'Một nhà máy thực hiện khảo sát toàn bộ công nhân về sự hài lòng của họ về điều kiện làm việc tại phân xưởng. Kết quả khảo sát như sau:\n' +
        '\\begin{center}\n' +
        '\\begin{tabular}{|c|c|c|}\n' +
        '\\hline\n' +
        '\\diagbox {Khảo sát công nhân}{Kết quả khảo sát} & Hài lòng & Không hài lòng \\\\\n' +
        '\\hline\n' +
        '\\textbf{Số công nhân phân xưởng I} & $' + hl_I + '$ & $' + khl_I + '$ \\\\\n' +
        '\\hline\n' +
        '\\textbf{Số công nhân phân xưởng II} & $' + hl_II + '$ & $' + khl_II + '$\\\\\n' +
        '\\hline\n' +
        '\\end{tabular}\n' +
        '\\end{center}\n' +
        'Gặp ngẫu nhiên một công nhân của nhà máy. Gọi $A$ là biến cố: "Công nhân đó làm việc tại phân xưởng I" và $B$ là biến cố: "Công nhân đó hài lòng với điều kiện làm việc tại phân xưởng"';

    var PAtrue1 = "\\True Xác suất của biến cố $A$ bằng $" + phanso(n1, n) + "$";
    var LGPAtrue1 = 'Số công nhân của phân xưởng I là $' + hl_I + '+' + khl_I + '=' + n1 + '$, số công nhân của phân xưởng II là $' + hl_II + '+' + khl_II + '=' + n2 + '$. Do đó số công nhân của nhà máy là $' + n1 + '+' + n2 + '=' + n + '$. Vậy $P(A)=' + phansobuoclam(n1, n) + '$.';
    var PAfalse1 = "Xác suất của biến cố $A$ bằng $" + phanso(n2, n) + "$";
    var LGPAfalse1 = LGPAtrue1;

    var PAtrue2 = "\\True Xác suất của biến cố $B$ bằng $" + phanso(hl_I + hl_II, n) + "$";
    var LGPAtrue2 = 'Số công nhân hài lòng với điều kiện làm việc tại phân xưởng là $' + hl_I + '+' + hl_II + '=' + (hl_I + hl_II) + '$. Do đó $P(B)=' + phansobuoclam(hl_I + hl_II, n) + '$.';
    var PAfalse2 = "Xác suất của biến cố $B$ bằng $" + phanso(khl_I + khl_II, n) + "$";
    var LGPAfalse2 = LGPAtrue2;

    function select_answers_ab() {
        var valid_pairs = [
            [[PAtrue1, PAfalse2], [LGPAtrue1, LGPAfalse2]],
            [[PAfalse1, PAtrue2], [LGPAfalse1, LGPAtrue2]],
            [[PAtrue1, PAtrue2], [LGPAtrue1, LGPAtrue2]],
            [[PAfalse1, PAfalse2], [LGPAfalse1, LGPAfalse2]],
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    }

    var resAB = select_answers_ab();
    var PAcauAB = resAB[0];
    var LGcauAB = resAB[1];

    var PAtrue3 = "\\True Xác suất của biến cố $A$ với điều kiện $B$ bằng $" + phanso(hl_I, hl_I + hl_II) + "$";
    var LGPAtrue3 = 'Ta thấy $AB$ là biến cố: "Công nhân đó làm việc tại phân xưởng I và hài lòng với điều kiện làm việc tại phân xưởng". Do đó $P(AB)=' + phansobuoclam(hl_I, n) + '$.\\\\\n' +
        'Vậy $P(A|B)=\\dfrac{P(AB)}{P(B)}=\\dfrac{' + phanso(hl_I, n) + '}{' + phanso(hl_I + hl_II, n) + '}=' + phanso(hl_I, hl_I + hl_II) + '$.';
    var PAfalse3 = "Xác suất của biến cố $A$ với điều kiện $B$ bằng $" + phanso(hl_II, hl_I + hl_II) + "$";
    var LGPAfalse3 = LGPAtrue3;

    var PAtrue4 = "\\True Xác suất của biến cố $B$ với điều kiện $A$ bằng $" + phanso(hl_I, n1) + "$";
    var LGPAtrue4 = 'Ta có $P(B|A)=\\dfrac{P(AB)}{P(A)}=\\dfrac{' + phanso(hl_I, n) + '}{' + phanso(n1, n) + '}=' + phanso(hl_I, n1) + '$.';
    var PAfalse4 = "Xác suất của biến cố $B$ với điều kiện $A$ bằng $" + phanso(khl_I, n1) + "$";
    var LGPAfalse4 = LGPAtrue4;

    function select_answers_cd() {
        var valid_pairs = [
            [[PAtrue3, PAfalse4], [LGPAtrue3, LGPAfalse4]],
            [[PAfalse3, PAtrue4], [LGPAfalse3, LGPAtrue4]],
            [[PAtrue3, PAtrue4], [LGPAtrue3, LGPAtrue4]],
            [[PAfalse3, PAfalse4], [LGPAfalse3, LGPAfalse4]],
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    }

    var resCD = select_answers_cd();
    var PAcauCD = resCD[0];
    var LGcauCD = resCD[1];

    var loigiai = "\\begin{itemchoice}\n" +
        "\\itemch " + LGcauAB[0] + "\n" +
        "\\itemch " + LGcauAB[1] + "\n" +
        "\\itemch " + LGcauCD[0] + "\n" +
        "\\itemch " + LGcauCD[1] + "\n" +
        "\\end{itemchoice}";

    var cauhoi = "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choiceTF\n" +
        "{" + PAcauAB[0] + "}\n" +
        "{" + PAcauAB[1] + "}\n" +
        "{" + PAcauCD[0] + "}\n" +
        "{" + PAcauCD[1] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";

    return cauhoi;
}




function TF_vidu(loai) {
    var a = randomchoice(15, 40);
    var a1 = randomchoice(60, 85);
    var c = randomchoice(10, 30);
    var c1 = randomchoice(70, 90);
    
    while (100 - a === a1 || 100 - c === c1) {
        a = randomchoice(15, 40);
        a1 = randomchoice(60, 85);
        c = randomchoice(10, 30);
        c1 = randomchoice(70, 90);
    }
    
    var b = randomchoice(10, 30);
    var d = randomchoice(100, 140);

    var debai = "Một phần mềm nhận dạng tin nhắn quảng cáo trên điện thoại bằng cách dựa theo từ khóa để đánh dấu một số tin nhắn được gửi đến. Qua một thời gian dài sử dụng, người ta thấy rằng trong số tất cả các tin nhắn gửi đến, có $" + a + "\\%$ số tin nhắn bị đánh dấu. Trong số các tin nhắn bị đánh dấu, có $" + b + "\\%$ số tin nhắn không phải là quảng cáo. Trong số các tin nhắn không bị đánh dấu, có $" + c + "\\%$ số tin nhắn là quảng cáo. Chọn ngẫu nhiên một tin nhắn được gửi đến điện thoại.";

    // Ý a
    var PAtrue1 = "\\True Xác suất để tin nhắn đó không bị đánh dấu bằng $" + convert((100 - a) / 100) + "$";
    var PAfalse1 = "Xác suất để tin nhắn đó không bị đánh dấu bằng $" + convert(a1 / 100) + "$";
    var LGPAtrue1 = 'Gọi $A$ là biến cố: "Tin nhắn bị đánh dấu". Theo giả thiết $P(A)=' + convert(a / 100) + '$. Do đó xác suất để tin nhắn không bị đánh dấu bằng $P(\\overline{A})=1-P(A)=' + convert((100 - a) / 100) + '$.';

    // Ý b
    var PAtrue2 = "\\True Xác suất để tin nhắn đó không phải là quảng cáo, biết rằng nó không bị đánh dấu, bằng $" + convert((100 - c) / 100) + "$";
    var PAfalse2 = "Xác suất để tin nhắn đó không phải là quảng cáo, biết rằng nó không bị đánh dấu, bằng $" + convert(c1 / 100) + "$";
    var LGPAtrue2 = 'Gọi $B$ là biến cố: "Tin nhắn là quảng cáo".\\\\\n' + 
    'Theo đề bài\n' + 
    '$$P(B|\\overline{A})=' + convert(c / 100) + '\\Rightarrow P(\\overline{B}|\\overline{A})=' + convert((100 - c) / 100) + '.$$\n' + 
    'Do đó xác suất cần tìm bằng $' + convert((100 - c) / 100) + '$.';

    function select_answers_ab() {
        var valid_pairs = [
            [[PAtrue1, PAfalse2], [LGPAtrue1, LGPAtrue2]],
            [[PAfalse1, PAtrue2], [LGPAtrue1, LGPAtrue2]],
            [[PAtrue1, PAtrue2], [LGPAtrue1, LGPAtrue2]],
            [[PAfalse1, PAfalse2], [LGPAtrue1, LGPAtrue2]],
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    }

    var resAB = select_answers_ab();
    var PAcauAB = resAB[0];
    var LGcauAB = resAB[1];

    // Ý c
    var PAtrue3 = "\\True Xác suất để tin nhắn đó không phải là quảng cáo bằng $" + convert((a * b + (100 - a) * (100 - c)) / 10000) + "$";
    var PAfalse3 = "Xác suất để tin nhắn đó không phải là quảng cáo bằng $" + convert((a * b + (100 - a) * (100 - c) - 1) / 10000) + "$";
    var LGPAtrue3 = "Xác suất để tin nhắn không phải là quảng cáo là $P(\\overline{B})$. Theo công thức xác suất toàn phần\n" +
    "$$P(\\overline{B})=P(A)P(\\overline{B}|A)+P(\\overline{A})P(\\overline{B}|\\overline{A})=" +convert(a/100)+"\\cdot "+convert(b/100)+"+"+convert((100-a)/100)+"\\cdot "+convert((100-c)/100)+"="+ convert((a * b + (100 - a) * (100 - c)) / 10000) + ".$$";
    // Ý d
    var PAtrue4 = "\\True Xác suất để tin nhắn đó không bị đánh dấu, biết rằng nó không phải là quảng cáo, bằng $" + phanso((100 - a) * (100 - c), a * b + (100 - a) * (100 - c)) + "$";
    var PAfalse4 = "Xác suất để tin nhắn đó không bị đánh dấu, biết rằng nó không phải là quảng cáo, bằng $" + phanso((100 - a) * (100 - c) + d, a * b + (100 - a) * (100 - c)) + "$";
    var LGPAtrue4 = "Xác suất cần tính là $P(\\overline{A}|\\overline{B})$. Theo công thức Bayes\n" + 
    "$$P(\\overline{A}|\\overline{B})=\\dfrac{P(\\overline{A})P(\\overline{B}|\\overline{A})}{P(\\overline{B})}=\\dfrac{"+convert((100-a)/100)+"\\cdot "+convert((100-c)/100)+"}{"+convert((a*b+(100-a)*(100-c))/10000)+"}="+ phanso((100 - a) * (100 - c), a * b + (100 - a) * (100 - c)) + ".$$";

    function select_answers_cd() {
        var valid_pairs = [
            [[PAtrue3, PAfalse4], [LGPAtrue3, LGPAtrue4]],
            [[PAfalse3, PAtrue4], [LGPAtrue3, LGPAtrue4]],
            [[PAtrue3, PAtrue4], [LGPAtrue3, LGPAtrue4]],
            [[PAfalse3, PAfalse4], [LGPAtrue3, LGPAtrue4]],
        ];
        return valid_pairs[randomchoice(0, valid_pairs.length - 1)];
    }

    var resCD = select_answers_cd();
    var PAcauCD = resCD[0];
    var LGcauCD = resCD[1];

    var loigiai = "\\begin{itemchoice}\n" +
        "\\itemch " + LGcauAB[0] + "\n" +
        "\\itemch " + LGcauAB[1] + "\n" +
        "\\itemch " + LGcauCD[0] + "\n" +
        "\\itemch " + LGcauCD[1] + "\n" +
        "\\end{itemchoice}";

    var cauhoi = "\\begin{"+loai+"}\n" +
        debai + "\n" +
        "\\choiceTFt\n" +
        "{" + PAcauAB[0] + "}\n" +
        "{" + PAcauAB[1] + "}\n" +
        "{" + PAcauCD[0] + "}\n" +
        "{" + PAcauCD[1] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{"+loai+"}\n";

    return cauhoi;
}

function get_XS_Hiepphuongsai(loai) {
        var y1 = randomchoice(-4,4);
        var y2 = randomchoice(-4,4);
        var y3 = randomchoice(-4,4);
        while (y1 >= y2 || y2 >= y3 || y1*y2*y3 === 0) {
            y1 = randomchoice(-4,4);
            y2 = randomchoice(-4,4);
            y3 = randomchoice(-4,4);
        }
        var x1 = randomchoice(-4,4);
        var x2 = randomchoice(-4,4);
        while (x1 >= x2 || x1*x2 === 0) {
            x1 = randomchoice(-4,4);
            x2 = randomchoice(-4,4);
        }
        var a11 = randomchoice(1,99);
        var a12 = randomchoice(1,99);
        var a13 = randomchoice(1,99);
        var a21 = randomchoice(1,99);
        var a22 = randomchoice(1,99);
        var a23 = 100 - a11 - a12 - a13 - a21 - a22;
        while (a11 + a12 + a13 + a21 + a22 >= 100) {
            a11 = randomchoice(1,99);
            a12 = randomchoice(1,99);
            a13 = randomchoice(1,99);
            a21 = randomchoice(1,99);
            a22 = randomchoice(1, 99);
            a23 = 100 - a11 - a12 - a13 - a21 - a22;
        }
        var p11 = convert(a11 / 100);
        var p12 = convert(a12 / 100);
        var p13 = convert(a13 / 100);
        var p21 = convert(a21 / 100);
        var p22 = convert(a22 / 100);
        var p23 = convert(a23 / 100);
        var ex = (a11+a12+a13)*x1+(a21+a22+a23)*x2;
        var ey = (a11+a21)*y1+(a12+a22)*y2+(a13+a23)*y3;
        var exy = x1*y1*a11+x1*y2*a12+x1*y3*a13+x2*y1*a21+x2*y2*a22+x2*y3*a23;
        var cov = 100*exy-ex*ey;
        var phuongAn2;
        var phuongAn3;
        var phuongAn4;
        if (randomchoice(0,1) === 0) {
            phuongAn2 = "{$"+convert((cov+2)/10000)+"$}"; 
        } else {
            phuongAn2 = "{$"+convert((cov-8)/10000)+"$}"; 
        }
        if (randomchoice(0,1) === 0) {
            phuongAn3 = "{$"+convert((cov-2)/10000)+"$}"; 
        } else {
            phuongAn3 = "{$"+convert((cov+8)/10000)+"$}"; 
        }
        var r = randomchoice(0,3);
        if (r === 0) {
            phuongAn4 = "{$"+convert((cov+4)/10000)+"$}";
        } 
        if (r === 1) {
            phuongAn4 = "{$"+convert((cov-4)/10000)+"$}";
        } 
        if (r === 2) {
            phuongAn4 = "{$"+convert((cov+6)/10000)+"$}";
        } 
        if (r === 3) {
            phuongAn4 = "{$"+convert((cov-6)/10000)+"$}";
        } 
        var options = [
        "{\\True $"+convert(cov/10000)+"$}",
        phuongAn2,
        phuongAn3,
        phuongAn4
        ];
        shuffle(options);
        return "\\begin{"+loai+"}\n" +
            "Cho biến ngẫu nhiên rời rạc hai chiều $(X,Y)$ có bảng phân bố xác suất\n" + 
            vectohaiba(x1,x2,y1,y2,y3,p11,p12,p13,p21,p22,p23) + "Hiệp phương sai của hai biến ngẫu nhiên $X,Y$ bằng\n" +  
            "\\choice\n" +
            options[0] + "\n" +
            options[1] + "\n" +
            options[2] + "\n" +
            options[3] + "\n" +
            "\\loigiai{\n}" +
            "\\end{"+loai+"}\n";
    }


    function tenham3(loai) { return `\\begin{${loai}}\n [1.1.2.a] Nội dung...\n\\choice{A}{B}{\\True C}{D}\n\\end{${loai}}\n`; }
    function tenham4(loai) { return `\\begin{${loai}}\n [1.1.2.b] Nội dung...\n\\choice{A}{B}{\\True C}{D}\n\\end{${loai}}\n`; }
    function tenham5(loai) { return `\\begin{${loai}}\n [1.2.1.a] Nội dung...\n\\choice{A}{B}{\\True C}{D}\n\\end{${loai}}\n`; }
    function tenham6(loai) { return `\\begin{${loai}}\n [1.2.1.b] Nội dung...\n\\choice{A}{B}{\\True C}{D}\n\\end{${loai}}\n`; }
    function tenham7(loai) { return `\\begin{${loai}}\n [1.2.2.a] Nội dung...\n\\choice{A}{B}{\\True C}{D}\n\\end{${loai}}\n`; }
    function tenham8(loai) { return `\\begin{${loai}}\n [1.2.2.b] Nội dung...\n\\choice{A}{B}{\\True C}{D}\n\\end{${loai}}\n`; }
    function tenham9(loai) { return `\\begin{${loai}}\n [2.1.1.a] Nội dung...\n\\choice{A}{B}{\\True C}{D}\n\\end{${loai}}\n`; }
    function tenham10(loai) { return `\\begin{${loai}}\n [2.1.1.b] Nội dung...\n\\choice{A}{B}{\\True C}{D}\n\\end{${loai}}\n`; }
    function tenham11(loai) { return `\\begin{${loai}}\n [2.1.2.a] Nội dung...\n\\choice{A}{B}{\\True C}{D}\n\\end{${loai}}\n`; }
    function tenham12(loai) { return `\\begin{${loai}}\n [2.1.2.b] Nội dung...\n\\choice{A}{B}{\\True C}{D}\n\\end{${loai}}\n`; }
    function tenham13(loai) { return `\\begin{${loai}}\n [2.2.1.a] Nội dung...\n\\choice{A}{B}{\\True C}{D}\n\\end{${loai}}\n`; }
    function tenham14(loai) { return `\\begin{${loai}}\n [2.2.1.b] Nội dung...\n\\choice{A}{B}{\\True C}{D}\n\\end{${loai}}\n`; }
    function tenham15(loai) { return `\\begin{${loai}}\n [2.2.2.a] Nội dung...\n\\choice{A}{B}{\\True C}{D}\n\\end{${loai}}\n`; }
    function tenham16(loai) { return `\\begin{${loai}}\n [2.2.2.b] Nội dung...\n\\choice{A}{B}{\\True C}{D}\n\\end{${loai}}\n`; }
