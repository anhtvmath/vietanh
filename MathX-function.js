function timvectophaptuyen_mp(loai) {
    var a, b, c, d;
    while (true) {
        a = randomchoice(-5, 6);
        b = randomchoice(-5, 6);
        c = randomchoice(-5, 6);
        d = randomchoice(-5, 6);
        
        // Điều kiện lọc bộ số đẹp của bạn
        if (a * b * c * d !== 0 && 
            a !== b && b !== c && c !== d && c !== -d && 
            !(a < 0 && b < 0 && c < 0 && d < 0) && 
            ucln(Math.abs(a), ucln(Math.abs(b), Math.abs(c))) === 1 && 
            ucln(Math.abs(a), ucln(Math.abs(b), Math.abs(d))) === 1 && 
            ucln(Math.abs(a), ucln(Math.abs(c), Math.abs(d))) === 1 && 
            ucln(Math.abs(b), ucln(Math.abs(c), Math.abs(d))) === 1) break;
    }
    var PA1 = "(" + a + ";" + b + ";" + c + ")";
    var PA2 = "(" + a + ";" + b + ";" + d + ")";
    var PA3 = "(" + a + ";" + b + ";" + (-c) + ")";
    var PA4 = "(" + a + ";" + c + ";" + d + ")"; 
    var PA5 = "(" + b + ";" + c + ";" + d + ")";   
    var PA6 = "(" + b + ";" + c + ";" + (-d) + ")";
    var questionchoice = [PA1, PA2];
    var questionwrongchoice = [PA4, PA5];
    if (c < 0) {
        questionwrongchoice.push(PA3);
    }
    if (d < 0) {
        questionwrongchoice.push(PA6);
    }
    for (var i = 0; i < 2; i++) {
        var vi_tri = randomchoice(0, questionwrongchoice.length - 1);
        var PAwrong = questionwrongchoice[vi_tri];
        questionchoice.push(PAwrong);
        questionwrongchoice = questionwrongchoice.filter(function(item) {
            return item !== PAwrong;
        });
    }
    var pt_matphang = hesodau(a, "x") + hesosau(b, "y") + hesosau(c, "z") + sodungsau(d);
    var debai = "Trong không gian $Oxyz$, cho mặt phẳng $(P)\\colon " + pt_matphang + "=0$. Vectơ nào "+ngaunhien(["dưới đây", "sau đây"])+" là một vectơ pháp tuyến của $(P)?$";
    var options = [];
    var i_true = 1; 
    for (var j = 1; j <= 4; j++) {
        var vi_tri_pa = randomchoice(0, questionchoice.length - 1);
        var PA = questionchoice[vi_tri_pa];
        if (PA === PA1) {
            i_true = j; // Lưu lại chỉ số vòng lặp chính xác làm đáp án đúng cho lời giải
            options.push("{\\True $\\overrightarrow{n_" + j + "}=" + PA + "$}");
        } else {
            options.push("{$\\overrightarrow{n_" + j + "}=" + PA + "$}");
        }
        questionchoice = questionchoice.filter(function(item) { 
            return item !== PA; 
        });
    }
    
    shuffle(options);
    
    var loigiai = "Mặt phẳng $(P)\\colon " + pt_matphang + "=0$ có một vectơ pháp tuyến là $\\overrightarrow{n_" + i_true + "} = (" + a + ";" + b + ";" + c + ").$";
    
    return "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
}


function phuongtrinhmp_diquadiem_phaptuyen(loai) {
    var a, b, c, m, n, p, dM, dM1;
    while (true) {
        a = randomchoice(-5, 6);
        b = randomchoice(-5, 6);
        c = randomchoice(-5, 6);
        m = randomchoice(-5, 6);
        n = randomchoice(-5, 6);
        p = randomchoice(-5, 6);
        
        dM = a * m + b * n + c * p;
        dM1 = a * m + b * n - c * p;
        
        // Điều kiện lọc bộ số đẹp và chống trùng đáp án
        if (dM !== 0 && dM1 !== 0 && a * b * c !== 0 && m * n * p !== 0 && 
            !(a < 0 && b < 0 && c < 0) && 
            c !== -c && dM !== -dM && dM !== dM1 && dM !== -dM1 && // Chặn trùng giữa PA1, PA2, PA3, PA4
            ucln(Math.abs(a), ucln(Math.abs(b), Math.abs(c))) === 1) break;
    }

    // Định nghĩa các hàm phụ để dùng riêng trong phần lời giải (thay cho hello và hesosecondnew)
    function hello(num) {
        if (num > 0) return "-" + num;
        if (num < 0) return "+" + (-num);
        return "-0";
    }
    
    function hesosecondnew(num) {
        if (num >= 0) return "+" + num;
        return num.toString();
    }

    // --- DỰNG CÁC PHƯƠNG ÁN LỰA CHỌN (SỬ DỤNG HÀM HỆ THỐNG CỦA BẠN) ---
    var PA1 = "$" + hesodau(a, "x") + hesosau(b, "y") + hesosau(c, "z") + sodungsau(-dM) + "=0$";
    var PA2 = "$" + hesodau(a, "x") + hesosau(b, "y") + hesosau(c, "z") + sodungsau(dM) + "=0$";
    var PA3 = "$" + hesodau(a, "x") + hesosau(b, "y") + hesosau(-c, "z") + sodungsau(-dM1) + "=0$";
    var PA4 = "$" + hesodau(a, "x") + hesosau(b, "y") + hesosau(-c, "z") + sodungsau(dM1) + "=0$";
    
    var questionchoice = [PA1];
    var questionwrongchoice = [PA2, PA3, PA4];
    
    // Bốc ngẫu nhiên đáp án nhiễu (Dùng length - 1 cho hàm randomchoice của bạn)
    for (var i = 0; i < 3; i++) {
        var vi_tri = randomchoice(0, questionwrongchoice.length - 1);
        var PAwrong = questionwrongchoice[vi_tri];
        questionchoice.push(PAwrong);
        questionwrongchoice = questionwrongchoice.filter(function(item) {
            return item !== PAwrong;
        });
    }
    
    var debai = "Trong không gian $Oxyz$, phương trình nào dưới đây là phương trình mặt phẳng đi qua điểm $A(" + m + ";" + n + ";" + p + ")$ và có một vectơ pháp tuyến $\\overrightarrow{n}=(" + a + ";" + b + ";" + c + ")$?";
    
    var options = [];
    for (var j = 0; j < 4; j++) {
        var vi_tri_pa = randomchoice(0, questionchoice.length - 1);
        var PA = questionchoice[vi_tri_pa];
        
        if (PA === PA1) {
            options.push("{\\True " + PA + "}");
        } else {
            options.push("{" + PA + "}");
        }
        
        questionchoice = questionchoice.filter(function(item) {
            return item !== PA;
        });
    }
    
    shuffle(options);
    
    var loigiai = "Mặt phẳng đi qua điểm $A(" + m + ";" + n + ";" + p + ")$ và có vectơ pháp tuyến $\\overrightarrow{n}=(" + a + ";" + b + ";" + c + ")$ có phương trình là\n" + 
                  "$$" + a + "(x" + hello(m) + ")" + hesosecondnew(b) + "(y" + hello(n) + ")" + hesosecondnew(c) + "(z" + hello(p) + ")=0\\Leftrightarrow " + hesodau(a, "x") + hesosau(b, "y") + hesosau(c, "z") + sodungsau(-dM) + "=0.$$";
                  
    return "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
}





function nguyenham1(loai) {
    var a, b;
    while (true) {
        a = randomchoice(-6, 6);
        b = randomchoice(-6, 6);
    if (a !== b && a !== -b && a * b !== 0 && (a > 0 || b > 0)) break;
    }
    var debai = "Họ nguyên hàm của hàm số $f(x)="+hesodau(a,"\\sin x")+hesosau(b,"\\cos x")+"$ là";
    var PA1 = "{\\True $"+hesodau(-a,"\\cos x")+hesosau(b,"\\sin x")+"+C$}";
    var PA2 = "{$"+hesodau(a,"\\cos x")+hesosau(-b,"\\sin x")+"+C$}";
    var PA3 = "{$"+hesodau(-a,"\\cos x")+hesosau(-b,"\\sin x")+"+C$}";
    var PA4 = "{$"+hesodau(a,"\\cos x")+hesosau(b,"\\sin x")+"+C$}";
    var loigiai = "Ta có\n" + 
                "$$\\displaystyle\\int f(x)\\mathrm{d}x=\\displaystyle\\int ("+hesodau(a,"\\sin x")+hesosau(b,"\\cos x")+")\\mathrm{d}x="+hesodau(-a,"\\cos x")+hesosau(b,"\\sin x")+"+C.$$"
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

function nguyenham2(loai) {
    function xmu(c) {
        if (c === 0) {
            return "";
        }
        if (c === 1) {
            return "x";
        }
        if (c > 1 && c < 10) {
            return "x^" + c;
        }
        if (c >= 10) {
            return "x^{" + c + "}";
        }
        return "x";
    }
    var a, b, c;
    while (true) {
        a = randomchoice(-6, 6);
        b = randomchoice(-6, 6);
        c = randomchoice(1,9);
    if (a !== b && a !== -b && a * b !== 0 && (a > 0 || b > 0)) break;
    }
    var debai = "Họ nguyên hàm của hàm số $f(x) = " + hesodau(a, "\\sin x") + hesosau(b, xmu(c)) + "$ là";
    var PA1 = "{\\True $"+hesodau(-a,"\\cos x")+hesoxausau(phanso(b,c+1),xmu(c+1))+"+C$}";
    var PA2 = "{$"+hesodau(a,"\\cos x")+hesosau(b*c,xmu(c-1))+"+C$}";
    var PA3 = "{$"+hesodau(a,"\\cos x")+hesoxausau(phanso(b,c+1),xmu(c+1))+"+C$}";
    var PA4 = "{$"+hesodau(-a,"\\cos x")+hesosau(b*c,xmu(c-1))+"+C$}";
    var loigiai = "Ta có\n" + 
                "$$\\displaystyle\\int f(x)\\mathrm{d}x=\\displaystyle\\int ("+hesodau(a,"\\sin x")+hesosau(b, xmu(c))+")\\mathrm{d}x="+hesodau(-a,"\\cos x")+hesoxausau(phanso(b,c+1),xmu(c+1))+"+C.$$"
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


function nguyenham3(loai) {
    function xmu(c) {
        if (c === 0) {
            return "";
        }
        if (c === 1) {
            return "x";
        }
        if (c > 1 && c < 10) {
            return "x^" + c;
        }
        if (c >= 10) {
            return "x^{" + c + "}";
        }
        return "x";
    }
    var a, b, c;
    while (true) {
        a = randomchoice(-6, 6);
        b = randomchoice(-6, 6);
        c = randomchoice(1,9);
    if (a !== b && a !== -b && a * b !== 0 && (a > 0 || b > 0)) break;
    }
    var debai = "Họ nguyên hàm của hàm số $f(x) = " + hesodau(a, "\\cos x") + hesosau(b, xmu(c)) + "$ là";
    var PA1 = "{\\True $"+hesodau(a,"\\sin x")+hesoxausau(phanso(b,c+1),xmu(c+1))+"+C$}";
    var PA2 = "{$"+hesodau(-a,"\\sin x")+hesosau(b*c,xmu(c-1))+"+C$}";
    var PA3 = "{$"+hesodau(-a,"\\sin x")+hesoxausau(phanso(b,c+1),xmu(c+1))+"+C$}";
    var PA4 = "{$"+hesodau(a,"\\sin x")+hesosau(b*c,xmu(c-1))+"+C$}";
    var loigiai = "Ta có\n" + 
                "$$\\displaystyle\\int f(x)\\mathrm{d}x=\\displaystyle\\int ("+hesodau(a,"\\cos x")+hesosau(b, xmu(c))+")\\mathrm{d}x="+hesodau(a,"\\sin x")+hesoxausau(phanso(b,c+1),xmu(c+1))+"+C.$$"
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

function nguyenham4(loai) {
    var a, b;
    while (true) {
        a = randomchoice(-6, 6);
        b = randomchoice(-6, 6);
    if (a !== b && a !== -b && a * b !== 0 && (a > 0 || b > 0)) break;
    }
    var debai = "Họ nguyên hàm của hàm số $f(x)="+hesodau(a,"\\sin x")+hesosau(b,"\\mathrm{e}^x")+"$ là";
    var PA1 = "{\\True $"+hesodau(-a,"\\cos x")+hesosau(b,"\\mathrm{e}^x")+"+C$}";
    var PA2 = "{$"+hesodau(a,"\\cos x")+hesosau(b,"\\mathrm{e}^x")+"+C$}";
    var PA3 = "{$"+hesodau(-a,"\\cos x")+hesosau(-b,"\\mathrm{e}^x")+"+C$}";
    var PA4 = "{$"+hesodau(a,"\\cos x")+hesosau(-b,"\\mathrm{e}^x")+"+C$}";
    var loigiai = "Ta có\n" + 
                "$$\\displaystyle\\int f(x)\\mathrm{d}x=\\displaystyle\\int ("+hesodau(a,"\\sin x")+hesosau(b,"\\mathrm{e}^x")+")\\mathrm{d}x="+hesodau(-a,"\\cos x")+hesosau(b,"\\mathrm{e}^x")+"+C.$$"
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


function TF_SBT_DT_hambacbaCTC(loai) {
    var boMau = [
        [1, 0, -3, -2], [1, 0, -3, -1], [1, 0, -3, 0], [1, 0, -3, 1], [1, 0, -3, 2], // Cực trị -1, 1
        [1, -3, 0, -2], [1, -3, 0, -1], [1, -3, 0, 1], [1, -3, 0, 2], [1, -3, 0, 3], [1, -3, 0, 4], [1, -3, 0, 5], // Cực trị 0, 2
        [1, 3, 0, -4], [1, 3, 0, -3], [1, 3, 0, -2], [1, 3, 0, -1], [1, 3, 0, 1], [1, 3, 0, 2] // Cực trị -2, 0
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
    var cumtuArr = ["Dựa vào ", "Từ "];
    var ketluanArr = [" Do đó ", " Vậy "];
    var PAnghichbien = "("+x1+";"+x2+")";
    var PAdongbien_options = ["(-\\infty;"+x1+")", "("+x2+";+\\infty)"];
    var PAdongbien = PAdongbien_options[randomchoice(0,1)];
    var codehinhve = "\\begin{center}\n"+dothibacba_a_duong(a, b, c, d)+"\n\\end{center}";
    var debai = "Cho hàm số $y=f(x)$ có đồ thị là đường cong trong hình bên.\n" +
           codehinhve + "\n";
        // --- Ý B ---
    var PAtrue1 = "\\True Hàm số nghịch biến trên khoảng $" + PAnghichbien + "$";
    var LGPAtrue1 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in " + PAnghichbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho nghịch biến trên khoảng $" + PAnghichbien + ".$";
    var PAfalse1 = "Hàm số đồng biến trên khoảng $" + PAnghichbien + "$";
    var LGPAfalse1 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in " + PAnghichbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho nghịch biến trên khoảng $" + PAnghichbien + ".$";

    // --- Ý B ---
    var PAtrue2 = "\\True Giá trị cực tiểu của hàm số đã cho bằng $" + y2 + "$";
    var LGPAtrue2 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy giá trị cực tiểu của hàm số đã cho bằng $" + y2 + "$";
    var PAfalse2 = "Giá trị cực tiểu của hàm số đã cho bằng $" + x2 + "$";
    var LGPAfalse2 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy giá trị cực tiểu của hàm số đã cho bằng $" + y2 + "$ chứ không phải bằng $" + x2 + ".$ Cụ thể thì $" + x2 + "$ là điểm cực tiểu của hàm số.";

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
    }
    var resAB = select_answers_ab();
    var PAcauAB = resAB[0];
    var LGcauAB = resAB[1];

    // --- Ý C ---
    var PAtrue3 = "\\True Hàm số đồng biến trên khoảng $" + PAdongbien + "$";
    var LGPAtrue3 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in " + PAdongbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho đồng biến trên khoảng $" + PAdongbien + ".$";
    var PAfalse3 = "Hàm số nghịch biến trên khoảng $" + PAdongbien + "$";
    var LGPAfalse3 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in " + PAdongbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho đồng biến trên khoảng $" + PAdongbien + ".$";

    // --- Ý D ---
    var PAtrue4 = "\\True Điểm cực đại của hàm số đã cho là $" + x1 + "$";
    var LGPAtrue4 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy điểm cực đại của hàm số đã cho là $" + x1 + "$";
    var PAfalse4 = "Điểm cực đại của hàm số đã cho là $" + y1 + "$";
    var LGPAfalse4 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy điểm cực đại của hàm số đã cho là $" + x1 + "$ chứ không phải là $" + y1 + ".$ Cụ thể thì $" + y1 + "$ là giá trị cực đại của hàm số.";

    function select_answers_cd() {
        var valid_pairs = [
            [[PAtrue3, PAfalse4], [LGPAtrue3, LGPAfalse4]],
            [[PAfalse4, PAtrue3], [LGPAfalse4, LGPAtrue3]],
            [[PAfalse3, PAtrue4], [LGPAfalse3, LGPAtrue4]],
            [[PAtrue4, PAfalse3], [LGPAtrue4, LGPAfalse3]],
            [[PAtrue3, PAtrue4], [LGPAtrue3, LGPAtrue4]],
            [[PAtrue4, PAtrue3], [LGPAtrue4, LGPAtrue3]],
            [[PAfalse3, PAfalse4], [LGPAfalse3, LGPAfalse4]],
            [[PAfalse4, PAfalse3], [LGPAfalse4, LGPAfalse3]]
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
        debai +
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


function TF_SBT_DT_hambacbaTCT(loai) {
    var boMau = [
    [-1, 0, 3, -2], [-1, 0, 3, 0], [-1, 0, 3, 2], 
    [-1, 3, 0, -4], [-1, 3, 0, -3], [-1, 3, 0, -1],
    [-1, -3, 0, 1], [-1, -3, 0, 3], [-1, -3, 0, 4]
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
    var cumtuArr = ["Dựa vào ", "Từ "];
    var ketluanArr = [" Do đó ", " Vậy "];
    var PAdongbien = "("+x1+";"+x2+")";
    var PAnghichbien_options = ["(-\\infty;"+x1+")", "("+x2+";+\\infty)"];
    var PAnghichbien = PAnghichbien_options[randomchoice(0,1)];
    var codehinhve = "\\begin{center}\n"+dothibacba_a_am(a, b, c, d)+"\n\\end{center}";
    var debai = "Cho hàm số $y=f(x)$ có đồ thị là đường cong trong hình bên.\n" +
           codehinhve + "\n";
        // --- Ý B ---
    var PAtrue1 = "\\True Hàm số đồng biến trên khoảng $" + PAdongbien + "$";
    var LGPAtrue1 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in " + PAdongbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho đồng biến trên khoảng $" + PAdongbien + ".$";
    var PAfalse1 = "Hàm số nghịch biến trên khoảng $" + PAdongbien + "$";
    var LGPAfalse1 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in " + PAdongbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho đồng biến trên khoảng $" + PAdongbien + ".$";

    // --- Ý B ---
    var PAtrue2 = "\\True Giá trị cực tiểu của hàm số đã cho bằng $" + y1 + "$";
    var LGPAtrue2 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy giá trị cực tiểu của hàm số đã cho bằng $" + y1 + "$";
    var PAfalse2 = "Giá trị cực tiểu của hàm số đã cho bằng $" + x1 + "$";
    var LGPAfalse2 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy giá trị cực tiểu của hàm số đã cho bằng $" + y1 + "$ chứ không phải bằng $" + x1 + ".$ Cụ thể thì $" + x1 + "$ là điểm cực tiểu của hàm số.";

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
    }
    var resAB = select_answers_ab();
    var PAcauAB = resAB[0];
    var LGcauAB = resAB[1];

    // --- Ý C ---
    var PAtrue3 = "\\True Hàm số nghịch biến trên khoảng $" + PAnghichbien + "$";
    var LGPAtrue3 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in " + PAnghichbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho nghịch biến trên khoảng $" + PAnghichbien + ".$";
    var PAfalse3 = "Hàm số đồng biến trên khoảng $" + PAnghichbien + "$";
    var LGPAfalse3 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in " + PAdongbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho nghịch biến trên khoảng $" + PAnghichbien + ".$";

    // --- Ý D ---
    var PAtrue4 = "\\True Điểm cực đại của hàm số đã cho là $" + x2 + "$";
    var LGPAtrue4 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy điểm cực đại của hàm số đã cho là $" + x2 + "$";
    var PAfalse4 = "Điểm cực đại của hàm số đã cho là $" + y2 + "$";
    var LGPAfalse4 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy điểm cực đại của hàm số đã cho là $" + x2 + "$ chứ không phải là $" + y2 + ".$ Cụ thể thì $" + y2 + "$ là giá trị cực đại của hàm số.";

    function select_answers_cd() {
        var valid_pairs = [
            [[PAtrue3, PAfalse4], [LGPAtrue3, LGPAfalse4]],
            [[PAfalse4, PAtrue3], [LGPAfalse4, LGPAtrue3]],
            [[PAfalse3, PAtrue4], [LGPAfalse3, LGPAtrue4]],
            [[PAtrue4, PAfalse3], [LGPAtrue4, LGPAfalse3]],
            [[PAtrue3, PAtrue4], [LGPAtrue3, LGPAtrue4]],
            [[PAtrue4, PAtrue3], [LGPAtrue4, LGPAtrue3]],
            [[PAfalse3, PAfalse4], [LGPAfalse3, LGPAfalse4]],
            [[PAfalse4, PAfalse3], [LGPAfalse4, LGPAfalse3]]
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
        debai +
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

function TF_CHO_HS_hambacbaCTC(loai) {
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
    var cumtuArr = ["Dựa vào ", "Từ "];
    var ketluanArr = [" Do đó ", " Vậy "];
    var PAnghichbien = "("+x1+";"+x2+")";
    var PAdongbien_options = ["(-\\infty;"+x1+")", "("+x2+";+\\infty)"];
    var PAdongbien = PAdongbien_options[randomchoice(0,1)];
    var debai = "Cho hàm số $f(x)=" + hesoxaudau(phanso(a, 3), "x^3") + hesoxausau(phanso(-a * S, 2), "x^2") + hesosau(a * P, "x") + sodungsau(b) + "$ với mọi $x\\in\\Bbb R.$";
    var PAtrue1 = "\\True Hàm số đã cho có đạo hàm là $f'(x)=" + hesodau(a, "x^2") + hesosau(-a * S, "x") + sodungsau(a * P) + ".$";
    var LGPAtrue1 = "Ta có $f'(x)=" + hesodau(a, "x^2") + hesosau(-a * S, "x") + sodungsau(a * P) + ".$";
    var PAfalse1 = "Hàm số đã cho có đạo hàm là $f'(x)=" + hesodau(-a, "x^2") + hesosau(-a * S, "x") + sodungsau(a * P) + ".$";
    var LGPAfalse1 = "Ta có $f'(x)=" + hesodau(a, "x^2") + hesosau(-a * S, "x") + sodungsau(a * P) + ".$";

    var PAtrue2 = "\\True Giá trị cực đại của hàm số đã cho bằng $" + y1 + "$";    
    var LGPAtrue2 = "Ta có\n" +
        "$$f'(x) = 0\\Leftrightarrow\\left[\\begin{array}{l} x = "+x1+" \\\\ x = "+x2+"\\end{array}\\right.$$\n" + 
        "Bảng biến thiên\n" +
        hambacbaCTC("x", "f", x1, x2, y1, y2)+
        cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy giá trị cực đại của hàm số đã cho bằng $" + y1 + ".$";
    var PAfalse2 = "Giá trị cực tiểu của hàm số đã cho bằng $" + y1 + "$";
    var LGPAfalse2 = LGPAtrue2;

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
    var PAtrue3 = "\\True Hàm số nghịch biến trên khoảng $" + PAnghichbien + "$";
    var LGPAtrue3 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in " + PAnghichbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho nghịch biến trên khoảng $" + PAnghichbien + ".$";
    var PAfalse3 = "Hàm số đồng biến trên khoảng $" + PAnghichbien + "$";
    var LGPAfalse3 = LGPAtrue3;

    // --- Ý D ---
    var PAtrue4 = "\\True Hàm số đồng biến trên khoảng $" + PAdongbien + "$";
    var LGPAtrue4 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in " + PAdongbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho đồng biến trên khoảng $" + PAdongbien + ".$";
    var PAfalse4 = "Hàm số nghịch biến trên khoảng $" + PAdongbien + "$";
    var LGPAfalse4 = LGPAtrue4;

    function select_answers_cd() {
        var valid_pairs = [
            [[PAtrue3, PAfalse4], [LGPAtrue3, LGPAfalse4]],
            [[PAfalse4, PAtrue3], [LGPAfalse4, LGPAtrue3]],
            [[PAfalse3, PAtrue4], [LGPAfalse3, LGPAtrue4]],
            [[PAtrue4, PAfalse3], [LGPAtrue4, LGPAfalse3]],
            [[PAtrue3, PAtrue4], [LGPAtrue3, LGPAtrue4]],
            [[PAtrue4, PAtrue3], [LGPAtrue4, LGPAtrue3]],
            [[PAfalse3, PAfalse4], [LGPAfalse3, LGPAfalse4]],
            [[PAfalse4, PAfalse3], [LGPAfalse4, LGPAfalse3]]
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
        debai + 
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

function TF_SBT_BBT_hambacbaTCT(loai) {
    var x1 = randomchoice(-6,-1);
    var x2 = randomchoice(1,6);
    var y1 = randomchoice(-6,-1);
    var y2 = randomchoice(1,6);
    while (x1 === y1 || x2 === y2) {
        x1 = randomchoice(-6,-1);
        x2 = randomchoice(1,6);
        y1 = randomchoice(-6,-1);
        y2 = randomchoice(1,6);
    }
    var cumtuArr = ["Dựa vào ", "Từ "];
    var ketluanArr = [" Do đó ", " Vậy "];
    var PAdongbien = "("+x1+";"+x2+")";
    var PAnghichbien_options = ["(-\\infty;"+x1+")", "("+x2+";+\\infty)"];
    var PAnghichbien = PAnghichbien_options[randomchoice(0,1)];
    var debai = "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:\n" +  
        hambacbaTCT("x","f",x1,x2,y1,y2);
        // --- Ý B ---
    var PAtrue1 = "\\True Hàm số đồng biến trên khoảng $" + PAdongbien + "$";
    var LGPAtrue1 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in " + PAdongbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho đồng biến trên khoảng $" + PAdongbien + ".$";
    var PAfalse1 = "Hàm số nghịch biến trên khoảng $" + PAdongbien + "$";
    var LGPAfalse1 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in " + PAdongbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho đồng biến trên khoảng $" + PAdongbien + ".$";

    // --- Ý B ---
    var PAtrue2 = "\\True Giá trị cực tiểu của hàm số đã cho bằng $" + y1 + "$";
    var LGPAtrue2 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy giá trị cực tiểu của hàm số đã cho bằng $" + y1 + "$";
    var PAfalse2 = "Giá trị cực tiểu của hàm số đã cho bằng $" + x1 + "$";
    var LGPAfalse2 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy giá trị cực tiểu của hàm số đã cho bằng $" + y1 + "$ chứ không phải bằng $" + x1 + ".$ Cụ thể thì $" + x1 + "$ là điểm cực tiểu của hàm số.";

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
    }
    var resAB = select_answers_ab();
    var PAcauAB = resAB[0];
    var LGcauAB = resAB[1];

    // --- Ý C ---
    var PAtrue3 = "\\True Hàm số nghịch biến trên khoảng $" + PAnghichbien + "$";
    var LGPAtrue3 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in " + PAnghichbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho nghịch biến trên khoảng $" + PAnghichbien + ".$";
    var PAfalse3 = "Hàm số đồng biến trên khoảng $" + PAnghichbien + "$";
    var LGPAfalse3 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in " + PAdongbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho nghịch biến trên khoảng $" + PAnghichbien + ".$";

    // --- Ý D ---
    var PAtrue4 = "\\True Điểm cực đại của hàm số đã cho là $" + x2 + "$";
    var LGPAtrue4 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy điểm cực đại của hàm số đã cho là $" + x2 + "$";
    var PAfalse4 = "Điểm cực đại của hàm số đã cho là $" + y2 + "$";
    var LGPAfalse4 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy điểm cực đại của hàm số đã cho là $" + x2 + "$ chứ không phải là $" + y2 + ".$ Cụ thể thì $" + y2 + "$ là giá trị cực đại của hàm số.";

    function select_answers_cd() {
        var valid_pairs = [
            [[PAtrue3, PAfalse4], [LGPAtrue3, LGPAfalse4]],
            [[PAfalse4, PAtrue3], [LGPAfalse4, LGPAtrue3]],
            [[PAfalse3, PAtrue4], [LGPAfalse3, LGPAtrue4]],
            [[PAtrue4, PAfalse3], [LGPAtrue4, LGPAfalse3]],
            [[PAtrue3, PAtrue4], [LGPAtrue3, LGPAtrue4]],
            [[PAtrue4, PAtrue3], [LGPAtrue4, LGPAtrue3]],
            [[PAfalse3, PAfalse4], [LGPAfalse3, LGPAfalse4]],
            [[PAfalse4, PAfalse3], [LGPAfalse4, LGPAfalse3]]
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
        debai +
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


function TF_SBT_BBT_hambacbaCTC(loai) {
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
    var cumtuArr = ["Dựa vào ", "Từ "];
    var ketluanArr = [" Do đó ", " Vậy "];
    var PAnghichbien = "("+x1+";"+x2+")";
    var PAdongbien_options = ["(-\\infty;"+x1+")", "("+x2+";+\\infty)"];
    var PAdongbien = PAdongbien_options[randomchoice(0,1)];
    var debai = "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:\n" +  
        hambacbaCTC("x","f",x1,x2,y1,y2);
        // --- Ý B ---
    var PAtrue1 = "\\True Hàm số nghịch biến trên khoảng $" + PAnghichbien + "$";
    var LGPAtrue1 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in " + PAnghichbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho nghịch biến trên khoảng $" + PAnghichbien + ".$";
    var PAfalse1 = "Hàm số đồng biến trên khoảng $" + PAnghichbien + "$";
    var LGPAfalse1 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in " + PAnghichbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho nghịch biến trên khoảng $" + PAnghichbien + ".$";

    // --- Ý B ---
    var PAtrue2 = "\\True Giá trị cực tiểu của hàm số đã cho bằng $" + y2 + "$";
    var LGPAtrue2 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy giá trị cực tiểu của hàm số đã cho bằng $" + y2 + "$";
    var PAfalse2 = "Giá trị cực tiểu của hàm số đã cho bằng $" + x2 + "$";
    var LGPAfalse2 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy giá trị cực tiểu của hàm số đã cho bằng $" + y2 + "$ chứ không phải bằng $" + x2 + ".$ Cụ thể thì $" + x2 + "$ là điểm cực tiểu của hàm số.";

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
    }
    var resAB = select_answers_ab();
    var PAcauAB = resAB[0];
    var LGcauAB = resAB[1];

    // --- Ý C ---
    var PAtrue3 = "\\True Hàm số đồng biến trên khoảng $" + PAdongbien + "$";
    var LGPAtrue3 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in " + PAdongbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho đồng biến trên khoảng $" + PAdongbien + ".$";
    var PAfalse3 = "Hàm số nghịch biến trên khoảng $" + PAdongbien + "$";
    var LGPAfalse3 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in " + PAdongbien + "$." + ketluanArr[randomchoice(0, 1)] + "hàm số đã cho đồng biến trên khoảng $" + PAdongbien + ".$";

    // --- Ý D ---
    var PAtrue4 = "\\True Điểm cực đại của hàm số đã cho là $" + x1 + "$";
    var LGPAtrue4 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy điểm cực đại của hàm số đã cho là $" + x1 + "$";
    var PAfalse4 = "Điểm cực đại của hàm số đã cho là $" + y1 + "$";
    var LGPAfalse4 = cumtuArr[randomchoice(0, 1)] + "bảng biến thiên, ta thấy điểm cực đại của hàm số đã cho là $" + x1 + "$ chứ không phải là $" + y1 + ".$ Cụ thể thì $" + y1 + "$ là giá trị cực đại của hàm số.";

    function select_answers_cd() {
        var valid_pairs = [
            [[PAtrue3, PAfalse4], [LGPAtrue3, LGPAfalse4]],
            [[PAfalse4, PAtrue3], [LGPAfalse4, LGPAtrue3]],
            [[PAfalse3, PAtrue4], [LGPAfalse3, LGPAtrue4]],
            [[PAtrue4, PAfalse3], [LGPAtrue4, LGPAfalse3]],
            [[PAtrue3, PAtrue4], [LGPAtrue3, LGPAtrue4]],
            [[PAtrue4, PAtrue3], [LGPAtrue4, LGPAtrue3]],
            [[PAfalse3, PAfalse4], [LGPAfalse3, LGPAfalse4]],
            [[PAfalse4, PAfalse3], [LGPAfalse4, LGPAfalse3]]
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
        debai +
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
        hamtrungphuongCTCT(a, b, c) + 
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

function SBT_BBT_DB_hamtrungphuongTCTC(loai) {
    var a, b, c;
    while (true) {
        a = randomchoice(1, 6);
        b = randomchoice(-6, 7);
        c = randomchoice(-6, 7);
        if (c > b) break;
    }
    var debai = "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:\n" +
        hamtrungphuongTCTC(a, b, c) +
        "Hàm số đã cho đồng biến trên khoảng nào dưới đây?";
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

function SBT_BBT_NB_hamtrungphuongTCTC(loai) {
    var a, b, c;
    while (true) {
        a = randomchoice(1, 6);
        b = randomchoice(-6, 7);
        c = randomchoice(-6, 7);
        if (c > b) break;
    }
    var debai = "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:\n" +
        hamtrungphuongTCTC(a, b, c) + 
        "Hàm số đã cho nghịch biến trên khoảng nào dưới đây?";
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

function SBT_BBT_NB_hambacbaCTC(loai) {
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
    var PAtrue = "("+x1+";"+x2+")";
    var PA1 = "{\\True $" + PAtrue + "$}";
    var PA2 = "{$("+x1+";+\\infty)$}";
    var PA3 = "{$(-\\infty;"+x2+")$}";
    var PA4_options = ["{$(-\\infty;"+x1+")$}", "{$("+x2+";+\\infty)$}"];
    var PA4 = PA4_options[randomchoice(0,1)];
    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);
    var cumtuArr = ["Dựa vào ", "Từ "];
    var ketluanArr = [" Do đó ", " Vậy "];
    var cumtu = cumtuArr[randomchoice(0, 1)];
    var ketluan = ketluanArr[randomchoice(0, 1)];
    var loigiai = cumtu + "bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in " + PAtrue + "$." + ketluan + "hàm số đã cho nghịch biến trên khoảng $" + PAtrue + ".$";
    return "\\begin{"+loai+"}\n" +
        "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:\n" +  
        hambacbaCTC("x","f",x1,x2,y1,y2) + "Hàm số đã cho nghịch biến trên khoảng nào dưới đây?\n" + 
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

function SBT_BBT_DB_hambacbaCTC(loai) {
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
    var PAtrue_options = ["(-\\infty;"+x1+")", "("+x2+";+\\infty)"];
    var PAtrue = PAtrue_options[randomchoice(0, 1)];
    var PA1 = "{\\True $" + PAtrue + "$}";
    var PA2 = "{$("+x1+";"+x2+")$}";
    var PA3 = "{$("+x1+";+\\infty)$}";
    var PA4 = "{$(-\\infty;"+x2+")$}";
    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);
    var cumtuArr = ["Dựa vào ", "Từ "];
    var ketluanArr = [" Do đó ", " Vậy "];
    var cumtu = cumtuArr[randomchoice(0, 1)];
    var ketluan = ketluanArr[randomchoice(0, 1)];
    var loigiai = cumtu + "bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in " + PAtrue + "$." + ketluan + "hàm số đã cho đồng biến trên khoảng $" + PAtrue + ".$";
    return "\\begin{"+loai+"}\n" +
        "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:\n" +  
        hambacbaCTC("x","f",x1,x2,y1,y2) + "Hàm số đã cho đồng biến trên khoảng nào dưới đây?\n" + 
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

function SBT_BBT_DB_hambacbaTCT(loai) {
    var x1 = randomchoice(-6,-1);
    var x2 = randomchoice(1,6);
    var y1 = randomchoice(-6,-1);
    var y2 = randomchoice(1,6);
    while (x1 === y1 || x2 === y2) {
        x1 = randomchoice(-6,-1);
        x2 = randomchoice(1,6);
        y1 = randomchoice(-6,-1);
        y2 = randomchoice(1,6);
    }
    var PAtrue = "("+x1+";"+x2+")";
    var PA1 = "{\\True $" + PAtrue + "$}";
    var PA2 = "{$("+x1+";+\\infty)$}";
    var PA3 = "{$(-\\infty;"+x2+")$}";
    var PA4_options = ["{$(-\\infty;"+x1+")$}", "{$("+x2+";+\\infty)$}"];
    var PA4 = PA4_options[randomchoice(0,1)];
    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);
    var cumtuArr = ["Dựa vào ", "Từ "];
    var ketluanArr = [" Do đó ", " Vậy "];
    var cumtu = cumtuArr[randomchoice(0, 1)];
    var ketluan = ketluanArr[randomchoice(0, 1)];
    var loigiai = cumtu + "bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in " + PAtrue + "$." + ketluan + "hàm số đã cho đồng biến trên khoảng $" + PAtrue + ".$";
    return "\\begin{"+loai+"}\n" +
        "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:\n" +  
        hambacbaTCT("x","f",x1,x2,y1,y2) + "Hàm số đã cho đồng biến trên khoảng nào dưới đây?\n" + 
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

function SBT_BBT_NB_hambacbaTCT(loai) {
    var x1 = randomchoice(-6,-1);
    var x2 = randomchoice(1,6);
    var y1 = randomchoice(-6,-1);
    var y2 = randomchoice(1,6);
    while (x1 === y1 || x2 === y2) {
        x1 = randomchoice(-6,-1);
        x2 = randomchoice(1,6);
        y1 = randomchoice(-6,-1);
        y2 = randomchoice(1,6);
    }
    var PAtrue_options = ["(-\\infty;"+x1+")", "("+x2+";+\\infty)"];
    var PAtrue = PAtrue_options[randomchoice(0, 1)];
    var PA1 = "{\\True $" + PAtrue + "$}";
    var PA2 = "{$("+x1+";"+x2+")$}";
    var PA3 = "{$("+x1+";+\\infty)$}";
    var PA4 = "{$(-\\infty;"+x2+")$}";
    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);
    var cumtuArr = ["Dựa vào ", "Từ "];
    var ketluanArr = [" Do đó ", " Vậy "];
    var cumtu = cumtuArr[randomchoice(0, 1)];
    var ketluan = ketluanArr[randomchoice(0, 1)];
    var loigiai = cumtu + "bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in " + PAtrue + "$." + ketluan + "hàm số đã cho nghịch biến trên khoảng $" + PAtrue + ".$";
    return "\\begin{"+loai+"}\n" +
        "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:\n" +  
        hambacbaTCT("x","f",x1,x2,y1,y2) + "Hàm số đã cho nghịch biến trên khoảng nào dưới đây?\n" + 
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

function SBT_DT_hambacbaCTC(loai) {
    // Với a > 0: Nghịch biến nằm giữa (x1, x2), Đồng biến nằm 2 bên vô cực
    var dang = randomchoice(0, 1) === 0 ? "ĐB" : "NB";
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
    var codehinhve = "\\begin{center}\n"+dothibacba_a_duong(a, b, c, d)+"\n\\end{center}";
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
    var codehinhve = "\\begin{center}\n"+dothibacba_a_am(a, b, c, d)+"\n\\end{center}";
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

function SBT_DT_hamtrungphuongTCTC(loai) {
    // Với a > 0 và b < 0: 
    // - Đồng biến (đồ thị đi lên) trên: (x1; 0) và (x2; +\infty)
    // - Nghịch biến (đồ thị đi xuống) trên: (-\infty; x1) và (0; x2)
    // (Trong đó x1 là cực tiểu bên trái, x2 là cực tiểu bên phải)
    var dang = randomchoice(0, 1) === 0 ? "ĐB" : "NB";
    // BỘ MẪU CHO HÀM TRÙNG PHƯƠNG A DƯƠNG (Khớp 100% với hàm vẽ của bạn)
    var boMau = [
        // [a, b, c]
        [1, -2, -3], [1, -2, -2], [1, -2, -1], [1, -2, 0], [1, -2, 1], [1, -2, 2], // Bộ 1: Cực trị tại -1, 0, 1
        [0.25, -2, -3], [0.25, -2, -2], [0.25, -2, -1], [0.25, -2, 0], [0.25, -2, 1], [0.25, -2, 2] // Bộ 2: Cực trị tại -2, 0, 2
    ];
    var index = randomchoice(0, boMau.length - 1);
    var boChon = boMau[index];
    var a = boChon[0], b = boChon[1], c = boChon[2];
    // Xác định hoành độ cực trị (x1 < 0 < x2)
    var x1, x2;
    if (a === 1 && b === -2) { 
        x1 = -1; x2 = 1; 
    } else { 
        x1 = -2; x2 = 2; 
    }
    var PA1, PA2, PA3, PA4, cauHoiTxt, loigiaiTxt;
    if (dang === "ĐB") {
        // HÀM ĐỒNG BIẾN (Đi lên trên khoảng (x1; 0) và (x2; +\infty))
        cauHoiTxt = "Hàm số đã cho đồng biến trên khoảng nào dưới đây?";
        var khoangDung;
        if (randomchoice(0, 1) === 0) {
            khoangDung = "(" + x1 + ";0)";
        } else {
            khoangDung = "(" + x2 + ";+\\infty)";
        }
        PA1 = "{\\True $" + khoangDung + "$}";
        var nhieuQuocDan = [
            "{$(-\\infty;0)$}",
            "{$(0;+\\infty)$}",
            "{$(-\\infty;" + x2 + ")$}",
            "{$(" + x1 + ";+\\infty)$}",
            "{$(-\\infty;" + x1 + ")$}",
            "{$(0;" + x2 + ")$}"
        ];
        shuffle(nhieuQuocDan);
        PA2 = nhieuQuocDan[0];
        PA3 = nhieuQuocDan[1];
        PA4 = nhieuQuocDan[2];
        loigiaiTxt = "Dựa vào đồ thị, ta thấy đồ thị hàm số đi lên từ trái sang phải trên các khoảng $(" + x1 + ";0)$ và $(" + x2 + ";+\\infty)$. " + 
                     "Trong các phương án đã cho, có khoảng $" + khoangDung + "$ là thỏa mãn.";

    } else {
        // HÀM NGHỊCH BIẾN (Đi xuống trên khoảng (-\infty; x1) và (0; x2))
        cauHoiTxt = "Hàm số đã cho nghịch biến trên khoảng nào dưới đây?";
        
        var khoangDung;
        if (randomchoice(0, 1) === 0) {
            khoangDung = "(-\\infty;" + x1 + ")";
        } else {
            khoangDung = "(0;" + x2 + ")";
        }
        PA1 = "{\\True $" + khoangDung + "$}";
        var nhieuQuocDan = [
            "{$(-\\infty;0)$}",
            "{$(0;+\\infty)$}",
            "{$(-\\infty;" + x2 + ")$}",
            "{$(" + x1 + ";+\\infty)$}",
            "{$(" + x1 + ";0)$}", 
            "{$(" + x2 + ";+\\infty)$}"
        ];
        shuffle(nhieuQuocDan);
        PA2 = nhieuQuocDan[0];
        PA3 = nhieuQuocDan[1];
        PA4 = nhieuQuocDan[2];
        loigiaiTxt = "Dựa vào đồ thị, ta thấy đồ thị hàm số đi xuống từ trái sang phải trên các khoảng $(-\\infty;" + x1 + ")$ và $(0;" + x2 + ")$. " + 
                     "Trong các phương án đã cho, có khoảng $" + khoangDung + "$ là thỏa mãn.";
    }
    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);
    // Gọi hàm vẽ đồ thị trùng phương a dương đã khớp 100% của bạn
    var codehinhve = "\\begin{center}\n"+dothihamtrungphuong_a_duong(a, b, c)+"\n\\end{center}";
    return "\\begin{" + loai + "}\n" +
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
           "\\end{" + loai + "}\n";
}


function SBT_DT_hamtrungphuongCTCT(loai) {
    // Với a < 0 và b > 0: 
    // - Đồng biến (đồ thị đi lên) trên: (-\infty; x1) và (0; x2)
    // - Nghịch biến (đồ thị đi xuống) trên: (x1; 0) và (x2; +\infty)
    // (Trong đó x1 là cực đại bên trái, x2 là cực đại bên phải)
    
    var dang = randomchoice(0, 1) === 0 ? "ĐB" : "NB";
    
    // BỘ MẪU CHO HÀM TRÙNG PHƯƠNG A ÂM (Khớp 100% với dữ liệu đồ thị bạn đã gửi)
    var boMau = [
        // [a, b, c]
        [-1, 2, -2], [-1, 2, -1], [-1, 2, 0], [-1, 2, 1], [-1, 2, 2], [-1, 2, 3], // Bộ 1: Cực trị tại -1, 0, 1
        [-0.25, 2, -3], [-0.25, 2, -2], [-0.25, 2, -1], [-0.25, 2, 0], [-0.25, 2, 1], [-0.25, 2, 2] // Bộ 2: Cực trị tại -2, 0, 2
    ];
    
    var index = randomchoice(0, boMau.length - 1);
    var boChon = boMau[index];
    var a = boChon[0], b = boChon[1], c = boChon[2];
    
    // Xác định hoành độ cực trị (x1 < 0 < x2)
    var x1, x2;
    if (a === -1 && b === 2) { 
        x1 = -1; x2 = 1; 
    } else { 
        x1 = -2; x2 = 2; 
    }
    
    var PA1, PA2, PA3, PA4, cauHoiTxt, loigiaiTxt;
    
    if (dang === "ĐB") {
        // HÀM ĐỒNG BIẾN (Đi lên trên khoảng (-\infty; x1) và (0; x2))
        cauHoiTxt = "Hàm số đã cho đồng biến trên khoảng nào dưới đây?";
        
        var khoangDung;
        if (randomchoice(0, 1) === 0) {
            khoangDung = "(-\\infty;" + x1 + ")";
        } else {
            khoangDung = "(0;" + x2 + ")";
        }
        PA1 = "{\\True $" + khoangDung + "$}";
        
        var nhieuQuocDan = [
            "{$(-\\infty;0)$}",
            "{$(0;+\\infty)$}",
            "{$(-\\infty;" + x2 + ")$}",
            "{$(" + x1 + ";+\\infty)$}",
            "{$(" + x1 + ";0)$}", 
            "{$(" + x2 + ";+\\infty)$}"
        ];
        shuffle(nhieuQuocDan);
        PA2 = nhieuQuocDan[0];
        PA3 = nhieuQuocDan[1];
        PA4 = nhieuQuocDan[2];
        
        loigiaiTxt = "Dựa vào đồ thị, ta thấy đồ thị hàm số đi lên từ trái sang phải trên các khoảng $(-\\infty;" + x1 + ")$ và $(0;" + x2 + ")$. " + 
                     "Trong các phương án đã cho, có khoảng $" + khoangDung + "$ là thỏa mãn.";

    } else {
        // HÀM NGHỊCH BIẾN (Đi xuống trên khoảng (x1; 0) và (x2; +\infty))
        cauHoiTxt = "Hàm số đã cho nghịch biến trên khoảng nào dưới đây?";
        
        var khoangDung;
        if (randomchoice(0, 1) === 0) {
            khoangDung = "(" + x1 + ";0)";
        } else {
            khoangDung = "(" + x2 + ";+\\infty)";
        }
        PA1 = "{\\True $" + khoangDung + "$}";
        
        var nhieuQuocDan = [
            "{$(-\\infty;0)$}",
            "{$(0;+\\infty)$}",
            "{$(-\\infty;" + x2 + ")$}",
            "{$(" + x1 + ";+\\infty)$}",
            "{$(-\\infty;" + x1 + ")$}",
            "{$(0;" + x2 + ")$}"
        ];
        shuffle(nhieuQuocDan);
        PA2 = nhieuQuocDan[0];
        PA3 = nhieuQuocDan[1];
        PA4 = nhieuQuocDan[2];
        
        loigiaiTxt = "Dựa vào đồ thị, ta thấy đồ thị hàm số đi xuống từ trái sang phải trên các khoảng $(" + x1 + ";0)$ và $(" + x2 + ";+\\infty)$. " + 
                     "Trong các phương án đã cho, có khoảng $" + khoangDung + "$ là thỏa mãn.";
    }
    
    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);
    
    // Gọi hàm vẽ đồ thị trùng phương a âm đã khớp 100% của bạn
    var codehinhve = "\\begin{center}\n"+dothihamtrungphuong_a_am(a, b, c)+"\n\\end{center}";
    
    return "\\begin{" + loai + "}\n" +
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
           "\\end{" + loai + "}\n";
}


function SBT_CHO_HS_NB_hamtrungphuongCTCT(loai) {
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

function SBT_CHO_HS_DB_hamtrungphuongCTCT(loai) {
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

function SBT_CHO_HS_NB_hamtrungphuongTCTC(loai) {
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

function SBT_CHO_HS_DB_hamtrungphuongTCTC(loai) {
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


function SBT_CHO_HS_DB_hambacbaCTC(loai) {
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

function SBT_CHO_HS_NB_hambacbaCTC(loai) {
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
        var PA1, PA2, PA3, PA4;
        PA1 = "{\\True $(" + x1 + ";" + x2 + ")$}";
        var nhieuQuocDan = [
            "{$(-\\infty;" + x1 + ")$}",
            "{$(-\\infty;" + x2 + ")$}",
            "{$(" + x1 + ";+\\infty)$}",
            "{$(" + x2 + ";+\\infty)$}"
        ];
        shuffle(nhieuQuocDan);
        PA2 = nhieuQuocDan[0];
        PA3 = nhieuQuocDan[1];
        PA4 = nhieuQuocDan[2];
        var options = [PA1, PA2, PA3, PA4];
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
               "$$f'(x) < 0\\Leftrightarrow " + x1 + " < x < " + x2 + ".$$\n" + 
               "Vậy hàm số nghịch biến trên khoảng $(" + x1 + ";" + x2 + ").$\n" + 
               "}\n" +
            "\\end{"+loai+"}\n";
    }


function SBT_CHO_HS_NB_hambacbaTCT(loai) {
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


    function SBT_CHO_HS_DB_hambacbaTCT(loai) {
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
        var PA1, PA2, PA3, PA4;
        PA1 = "{\\True $(" + x1 + ";" + x2 + ")$}";
        var nhieuQuocDan = [
            "{$(-\\infty;" + x1 + ")$}",
            "{$(-\\infty;" + x2 + ")$}",
            "{$(" + x1 + ";+\\infty)$}",
            "{$(" + x2 + ";+\\infty)$}"
        ];
        shuffle(nhieuQuocDan);
        PA2 = nhieuQuocDan[0];
        PA3 = nhieuQuocDan[1];
        PA4 = nhieuQuocDan[2];
        var options = [PA1, PA2, PA3, PA4];
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
               "$$f'(x) > 0\\Leftrightarrow " + x1 + " < x < " + x2 + ".$$\n" + 
               "Vậy hàm số đồng biến trên khoảng $(" + x1 + ";" + x2 + ").$\n" + 
               "}\n" +
            "\\end{"+loai+"}\n";
    }

    function SBT_CHO_DAOHAM_hambacba_1(loai) {
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
        "$$f'(x) > 0\\Leftrightarrow " + ngoacnew(a) + ngoacnew(b) + " > 0\\Leftrightarrow\\left[\\begin{array}{l} x > " + (-a) + "\\\\ x < " + (-b) + "\\end{array}\\right.$$\n" +
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

function SBT_CHO_DAOHAM_hambacba_2(loai) {
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
        "$$f'(x) > 0\\Leftrightarrow x^2" + hesosau(a + b, "x") + sodungsau(a * b) + " > 0\\Leftrightarrow\\left[\\begin{array}{l} x > " + (-a) + "\\\\ x < " + (-b) + "\\end{array}\\right.$$\n" +
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

function SBT_CHO_DAOHAM_hambacba_3(loai) {
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
        "$$f'(x) < 0\\Leftrightarrow -x^2" + hesosau(-a - b, "x") + sodungsau(-a * b) + " < 0\\Leftrightarrow\\left[\\begin{array}{l} x > " + (-a) + "\\\\ x < " + (-b) + "\\end{array}\\right.$$\n" +
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

function SBT_CHO_DAOHAM_hambacba_4(loai) {
    var a, b;
    while (true) {
        a = randomchoice(-6, 7);
        b = randomchoice(-6, 7);
        if (b > a) break;
    }
    var debai = "Cho hàm số $y=f(x)$ có đạo hàm $f'(x)=-x^2" + hesosau(-a - b, "x") + sodungsau(-a * b) + "$ với mọi $x\\in\\Bbb R$. Hàm số đã cho đồng biến trên khoảng nào dưới đây?";
    var PAtrue = "(" + (-b) + ";" + (-a) + ")";
    var PA1 = "{\\True $" + PAtrue + "$}";
    var PA2_options = ["(" + (-a) + ";+\\infty)", "(-\\infty;" + (-b) + ")"];
    var PA2 = "{$" + PA2_options[randomchoice(0, 1)] + "$}";
    var PA3 = "{$(" + (-b) + ";+\\infty)$}";
    var PA4 = "{$(-\\infty;" + (-a) + ")$}";
    var loigiai = "Ta có\n" +
        "$$f'(x) > 0\\Leftrightarrow -x^2" + hesosau(-a - b, "x") + sodungsau(-a * b) + ">0\\Leftrightarrow" + (-b) + " < x < " + (-a) + ".$$\n" +
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
       
function CUCTRI_CHO_HS_hambacbaCTC(loai) {
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
    var cumtuArr = ["Dựa vào ", "Quan sát ", "Dựa trên "];
    var cumtu = cumtuArr[randomchoice(0, 2)]; 
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

function CUCTRI_CHO_HS_hambacbaTCT(loai) {
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
    var cumtuArr = ["Dựa vào ", "Quan sát ", "Dựa trên "];
    var cumtu = cumtuArr[randomchoice(0, 2)]; 
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

function CUCTRI_DOTHI_hambacbaCTC(loai) {
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

function CUCTRI_DOTHI_hambacbaTCT(loai) {
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


function CUCTRI_BBT_hamtrungphuongCTCT(loai) {
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


function CUCTRI_CHO_HS_hamtrungphuongCTCT(loai) {
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
    var cumtuArr = ["Dựa vào ", "Quan sát "];
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


function CUCTRI_CHO_DAOHAM_SODIEMCUCTRI_hamsobacba1(loai) {
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

function CUCTRI_CHO_DAOHAM_SODIEMCUCTRI_hamsobacba2(loai) {
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

function CUCTRI_CHO_DAOHAM_SODIEMCUCTRI_hamsobacba3(loai) {
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


function TIM_HAM_SO_BIET_DOTHI_hambacbaCTC(loai) {
    var boMau = [
        [1, 0, -3, -2], [1, 0, -3, -1], [1, 0, -3, 0], [1, 0, -3, 1], [1, 0, -3, 2], // Cực trị -1, 1
        [1, -3, 0, -2], [1, -3, 0, -1], [1, -3, 0, 0], [1, -3, 0, 1], [1, -3, 0, 2], [1, -3, 0, 3], [1, -3, 0, 4], [1, -3, 0, 5], // Cực trị 0, 2
        [1, 3, 0, -4], [1, 3, 0, -3], [1, 3, 0, -2], [1, 3, 0, -1], [1, 3, 0, 0], [1, 3, 0, 1], [1, 3, 0, 2] // Cực trị -2, 0
    ];
    var index = randomchoice(0, boMau.length - 1);
    var boChon = boMau[index];
    var a = boChon[0], b = boChon[1], c = boChon[2], d = boChon[3];
    var b_sai, c_sai;
    if (b !== 0) {
        b_sai = -b; // Đổi dấu b
        c_sai = c;  // Giữ nguyên c
    } else {
        b_sai = b;  // Giữ nguyên b (bằng 0)
        c_sai = -c; // Đổi dấu c
    }
    var d_sai;
    if (d >= 0) {
        d_sai = d - 1; // Nếu d dương hoặc bằng 0, thì trừ đi 1
    } else {
        d_sai = d + 1; // Nếu d âm, thì cộng thêm 1
    }
    var hamDung = hesodau(a,"x^3")+hesosau(b,"x^2")+hesosau(c,"x")+sodungsau(d);
    var hamsai2 = hesodau(a,"x^3")+hesosau(b,"x^2")+hesosau(c,"x")+sodungsau(d_sai);
    var hamsai3 = hesodau(-a,"x^3")+hesosau(-b,"x^2")+hesosau(-c,"x")+sodungsau(d);
    var hamsai4 = hesodau(a,"x^3")+hesosau(b_sai,"x^2")+hesosau(c_sai,"x")+sodungsau(d);
    var PA1 = "{\\True $y=" + hamDung + "$}";
    var PA2 = "{$y=" + hamsai2 + "$}"; 
    var PA3 = "{$y=" + hamsai3 + "$}"; 
    var PA4 = "{$y=" + hamsai4 + "$}"; 
    var loigiaiTxt = "Đường cong như hình vẽ là đồ thị hàm số $y=" + hamDung + ".$"
    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);
    var codehinhve = dothibacba_a_duong(a, b, c, d);
    return "\\begin{"+loai+"}\n" +
           "Hàm số nào dưới đây có đồ thị là đường cong như hình vẽ:\n" +
           codehinhve + "\n" +
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

function TIM_HAM_SO_BIET_DOTHI_hambacbaTCT(loai) {
    var boMau = [
        [-1, 0, 3, -2], [-1, 0, 3, -1], [-1, 0, 3, 0], [-1, 0, 3, 1], [-1, 0, 3, 2],
        [-1, 3, 0, -4], [-1, 3, 0, -3], [-1, 3, 0, -2], [-1, 3, 0, -1], [-1, 3, 0, 0],
        [-1, -3, 0, 0], [-1, -3, 0, 1], [-1, -3, 0, 2], [-1, -3, 0, 3], [-1, -3, 0, 4]
    ];
    var index = randomchoice(0, boMau.length - 1);
    var boChon = boMau[index];
    var a = boChon[0], b = boChon[1], c = boChon[2], d = boChon[3];
    var b_sai, c_sai;
    if (b !== 0) {
        b_sai = -b; // Đổi dấu b
        c_sai = c;  // Giữ nguyên c
    } else {
        b_sai = b;  // Giữ nguyên b (bằng 0)
        c_sai = -c; // Đổi dấu c
    }
    var d_sai;
    if (d >= 0) {
        d_sai = d - 1; // Nếu d dương hoặc bằng 0, thì trừ đi 1
    } else {
        d_sai = d + 1; // Nếu d âm, thì cộng thêm 1
    }
    var hamDung = hesodau(a,"x^3")+hesosau(b,"x^2")+hesosau(c,"x")+sodungsau(d);
    var hamsai2 = hesodau(a,"x^3")+hesosau(b,"x^2")+hesosau(c,"x")+sodungsau(d_sai);
    var hamsai3 = hesodau(-a,"x^3")+hesosau(-b,"x^2")+hesosau(-c,"x")+sodungsau(d);
    var hamsai4 = hesodau(a,"x^3")+hesosau(b_sai,"x^2")+hesosau(c_sai,"x")+sodungsau(d);
    var PA1 = "{\\True $y=" + hamDung + "$}";
    var PA2 = "{$y=" + hamsai2 + "$}"; 
    var PA3 = "{$y=" + hamsai3 + "$}"; 
    var PA4 = "{$y=" + hamsai4 + "$}"; 
    var loigiaiTxt = "Đường cong như hình vẽ là đồ thị hàm số $y=" + hamDung + ".$"
    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);
    var codehinhve = dothibacba_a_am(a, b, c, d);
    return "\\begin{"+loai+"}\n" +
           "Hàm số nào dưới đây có đồ thị là đường cong như hình vẽ:\n" +
           codehinhve + "\n" +
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

function secapnhat(loai) {
    var PA1 = "{\\True Phương án đúng}";
    var PA2 = "{Phương án sai 1}"; 
    var PA3 = "{Phương án sai 2}"; 
    var PA4 = "{Phương án sai 3}"; 
    var loigiaiTxt = "Lời giải bài toán..."
    var options = [PA1, PA2, PA3, PA4];
    shuffle(options);
    return "\\begin{"+loai+"}\n" +
           "Chúng tôi sẽ cập nhật tự động vào đây! ❤️ Bạn chờ nhé :)\n" +
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


function khoang_bien_thien(loai) {
    var value_range = Array.from({ length: 11 }, (_, i) => i + 2); // [2, 3, ..., 12]
    var max_repeats = 2;
    var sokhoang = randomchoice(4, 7);
    var a = randomchoice(15, 20);
    var h = randomchoice(2, 6);
    var intervals = [];
    for (var i = 0; i <= sokhoang; i++) {
        intervals.push(String(a + i * h));
    }
    var values = generateValues(sokhoang, value_range, max_repeats);
    var danhsach = [sokhoang - 2, sokhoang - 1, sokhoang + 1, sokhoang + 2];
    var dsten = ["ông Thắng", "ông Dũng", "ông Nam", "ông Hùng", "ông Tiến", "ông Tuấn", "ông Hải", "ông Thịnh", "bà Oanh", "bà Lan", "bà Giang", "bà Hòa", "bà Hạnh", "bà Nga"];
    var name = dsten[randomchoice(0, dsten.length - 1)];
    var debai = "Hằng ngày " + name + " đều đi xe buýt từ nhà đến cơ quan. Dưới đây là bảng thống kê thời gian của những lần " + name + " đi xe buýt từ nhà đến cơ quan.\n" +
                taobanglatex("Thời gian (phút)", intervals, "Số lần", values) + "\n" +
                "Khoảng biến thiên (đơn vị: phút) của mẫu số liệu ghép nhóm trên là";
    var n1 = danhsach.splice(randomchoice(0, danhsach.length - 1), 1)[0];
    var n2 = danhsach.splice(randomchoice(0, danhsach.length - 1), 1)[0];
    var n3 = danhsach.splice(randomchoice(0, danhsach.length - 1), 1)[0];
    var options = [
        "{\\True $" + (sokhoang * h) + "$}",
        "{$" + (n1 * h) + "$}",
        "{$" + (n2 * h) + "$}",
        "{$" + (n3 * h) + "$}"
    ];
    shuffle(options);
    var loigiai = "Khoảng biến thiên của mẫu số liệu ghép nhóm trên là $" + (a + sokhoang * h) + "-" + a + "=" + (sokhoang * h) + "$ (phút).";
    return "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        options[0] + "\n" +
        options[1] + "\n" +
        options[2] + "\n" +
        options[3] + "\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
}

function Tim_Q1_vidu1(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); // [2, 3, ..., 12]
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq1, tusoq1, mausoq1;
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(15, 20);      
        h = randomchoice(2, 6);        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        values = generateValuesFlexible(sokhoang, value_range, max_repeats);
        n = tongcacphantu(values);
        posq1 = posvalueq1(values, n);
        const cfArray = cf(values);
        const prevCfValue = (posq1 - 2 >= 0) ? cfArray[posq1 - 2] : 0;
        tusoq1 = 4 * (a + (posq1 - 1) * h) * values[posq1 - 1] + (n - 4 * prevCfValue) * h;
        mausoq1 = 4 * values[posq1 - 1];
        const dk_vonglap = (tusoq1 % mausoq1 === 0) || ((100 * tusoq1) % mausoq1 !== 0) || (posq1 < 2) || (posq1 > 3);
        if (!dk_vonglap) {
            break; 
        }
    }
    const dsten = ["ông Thắng", "ông Dũng", "ông Nam", "ông Hùng", "ông Tiến", "ông Tuấn", "ông Hải", "ông Thịnh", "bà Oanh", "bà Lan", "bà Giang", "bà Hòa", "bà Hạnh", "bà Nga"];
    const name = dsten[randomchoice(0, dsten.length - 1)];
    const debai = "Hằng ngày " + name + " đều đi xe buýt từ nhà đến cơ quan. Dưới đây là bảng thống kê thời gian của những lần " + name + " đi xe buýt từ nhà đến cơ quan.\n" +
                  taobanglatex("Thời gian (phút)", intervals, "Số lần", values) + "\n" +
                  "Tứ phân vị thứ nhất của mẫu số liệu ghép nhóm trên là";
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    const PA1 = "\\True $" + convert(tusoq1 / mausoq1) + "$";
    const PA2 = "$" + convert((10 * tusoq1 + k1 * mausoq1) / (10 * mausoq1)) + "$";
    const PA3 = "$" + convert((10 * tusoq1 + k2 * mausoq1) / (10 * mausoq1)) + "$";
    const PA4 = "$" + convert((10 * tusoq1 + k3 * mausoq1) / (10 * mausoq1)) + "$";
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq1 - 2 >= 0) ? cfArrayFinal[posq1 - 2] : 0;
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq1 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{n}{4}=" + phanso(n, 4) + "\\leq cf_" + String(posq1) + "=" + String(cfArrayFinal[posq1 - 1]) + "$ nên nhóm chứa tứ phân vị thứ nhất là nhóm $[" + intervals[posq1 - 1] + "; " + intervals[posq1] + ")$.\\\\\n" +
        "Vậy tứ phân vị thứ nhất của mẫu số liệu ghép nhóm là\n" +
        "$$Q_1=a_" + String(posq1) + "+\\dfrac{\\dfrac{n}{4}-cf_" + String(posq1 - 1) + "}{n_" + String(posq1) + "}(a_" + String(posq1 + 1) + "-a_" + String(posq1) + ")=" + intervals[posq1 - 1] + "+\\dfrac{" + phanso(n, 4) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq1 - 1]) + "}(" + intervals[posq1] + "-" + intervals[posq1 - 1] + ")=" + convert(tusoq1 / mausoq1) + ".$$";
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
    return cauhoi;
}

function Tim_Q1_vidu2(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); // [2, 3, ..., 12]
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq1, tusoq1, mausoq1;
    
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(7, 12);      
        h = randomchoice(2, 6);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        // Gọi hàm sinh số linh hoạt của bạn đã có sẵn trong hệ thống
        values = generateValuesFlexible(sokhoang);
        
        n = tongcacphantu(values);
        posq1 = posvalueq1(values, n);
        
        const cfArray = cf(values);
        const prevCfValue = (posq1 - 2 >= 0) ? cfArray[posq1 - 2] : 0;
        
        tusoq1 = 4 * (a + (posq1 - 1) * h) * values[posq1 - 1] + (n - 4 * prevCfValue) * h;
        mausoq1 = 4 * values[posq1 - 1];
        
        const tuBig = BigInt(tusoq1);
        const mauBig = BigInt(mausoq1);
        
        // Bộ lọc: số thập phân đẹp + Q1 nằm ở nhóm 2 hoặc nhóm 3
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq1 < 2) || 
                           (posq1 > 3);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    const thang = randomchoice(1, 12).toString().padStart(2, '0');
    
    const debai = "Một công ty cung cấp nước sạch thống kê lượng nước sạch mỗi hộ gia đình ở một khu vực sử dụng trong tháng " + thang + "/2023 ở bảng sau (đơn vị: $\\text{m}^3$).\n" +
                  taobanglatex("Lượng nước ($\\text{m}^3$)", intervals, "Số hộ gia đình", values) + "\n" +
                  "Tứ phân vị thứ nhất của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + convert(tusoq1 / mausoq1) + "$";
    const PA2 = "$" + convert((10 * tusoq1 + k1 * mausoq1) / (10 * mausoq1)) + "$";
    const PA3 = "$" + convert((10 * tusoq1 + k2 * mausoq1) / (10 * mausoq1)) + "$";
    const PA4 = "$" + convert((10 * tusoq1 + k3 * mausoq1) / (10 * mausoq1)) + "$";
    
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq1 - 2 >= 0) ? cfArrayFinal[posq1 - 2] : 0;
    
    // --- ĐÃ ĐỔI ĐOẠN NÀY THEO ĐÚNG MẪU CỦA VÍ DỤ 1 ---
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq1 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{n}{4}=" + phanso(n, 4) + "\\leq cf_" + String(posq1) + "=" + String(cfArrayFinal[posq1 - 1]) + "$ nên nhóm chứa tứ phân vị thứ nhất là nhóm $[" + intervals[posq1 - 1] + "; " + intervals[posq1] + ")$.\\\\\n" +
        "Vậy tứ phân vị thứ nhất của mẫu số liệu ghép nhóm là\n" +
        "$$Q_1=a_" + String(posq1) + "+\\dfrac{\\dfrac{n}{4}-cf_" + String(posq1 - 1) + "}{n_" + String(posq1) + "}(a_" + String(posq1 + 1) + "-a_" + String(posq1) + ")=" + intervals[posq1 - 1] + "+\\dfrac{" + phanso(n, 4) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq1 - 1]) + "}(" + intervals[posq1] + "-" + intervals[posq1 - 1] + ")=" + convert(tusoq1 / mausoq1) + ".$$";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
        
    return cauhoi;
}

function Tim_Q1_vidu3(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); // [2, 3, ..., 12]
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq1, tusoq1, mausoq1;
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(38, 41);      
        h = randomchoice(2, 4);        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        // Gọi hàm sinh số linh hoạt của bạn đã có sẵn trong hệ thống
        values = generateValuesFlexible(sokhoang);
        n = tongcacphantu(values);
        posq1 = posvalueq1(values, n);
        const cfArray = cf(values);
        const prevCfValue = (posq1 - 2 >= 0) ? cfArray[posq1 - 2] : 0;
        tusoq1 = 4 * (a + (posq1 - 1) * h) * values[posq1 - 1] + (n - 4 * prevCfValue) * h;
        mausoq1 = 4 * values[posq1 - 1];
        const tuBig = BigInt(tusoq1);
        const mauBig = BigInt(mausoq1); 
        // Bộ lọc: số thập phân đẹp + Q1 nằm ở nhóm 2 hoặc nhóm 3
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq1 < 2) || 
                           (posq1 > 3);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    const debai = "Khối lượng của một số quả trứng gà trong một trang trại được " + ngaunhien(["thống kê lại", "ghi lại"]) + " ở bảng sau:\n" +
                  taobanglatex("Khối lượng (gam)", intervals, "Số quả trứng", values) + "\n" +
                  "Tứ phân vị thứ nhất của mẫu số liệu ghép nhóm trên là";            
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    const PA1 = "\\True $" + convert(tusoq1 / mausoq1) + "$";
    const PA2 = "$" + convert((10 * tusoq1 + k1 * mausoq1) / (10 * mausoq1)) + "$";
    const PA3 = "$" + convert((10 * tusoq1 + k2 * mausoq1) / (10 * mausoq1)) + "$";
    const PA4 = "$" + convert((10 * tusoq1 + k3 * mausoq1) / (10 * mausoq1)) + "$";
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq1 - 2 >= 0) ? cfArrayFinal[posq1 - 2] : 0;
    // Lời giải đồng bộ theo định dạng so sánh chặn hai đầu của Ví dụ 1
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq1 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{n}{4}=" + phanso(n, 4) + "\\leq cf_" + String(posq1) + "=" + String(cfArrayFinal[posq1 - 1]) + "$ nên nhóm chứa tứ phân vị thứ nhất là nhóm $[" + intervals[posq1 - 1] + "; " + intervals[posq1] + ")$.\\\\\n" +
        "Vậy tứ phân vị thứ nhất của mẫu số liệu ghép nhóm là\n" +
        "$$Q_1=a_" + String(posq1) + "+\\dfrac{\\dfrac{n}{4}-cf_" + String(posq1 - 1) + "}{n_" + String(posq1) + "}(a_" + String(posq1 + 1) + "-a_" + String(posq1) + ")=" + intervals[posq1 - 1] + "+\\dfrac{" + phanso(n, 4) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq1 - 1]) + "}(" + intervals[posq1] + "-" + intervals[posq1 - 1] + ")=" + convert(tusoq1 / mausoq1) + ".$$";   
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
    return cauhoi;
}


function Tim_Q1_vidu4(loai) {
    const value_range = Array.from({ length: 16 }, (_, i) => i + 5); // [5, 6, ..., 20]
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq1, tusoq1, mausoq1;
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(45, 52);      
        h = randomchoice(2, 5);        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        // Gọi hàm sinh số linh hoạt của bạn đã có sẵn trong hệ thống để điều tiết nhóm 2, nhóm 3
        values = generateValuesFlexible(sokhoang);
        n = tongcacphantu(values);
        posq1 = posvalueq1(values, n);
        const cfArray = cf(values);
        const prevCfValue = (posq1 - 2 >= 0) ? cfArray[posq1 - 2] : 0;
        tusoq1 = 4 * (a + (posq1 - 1) * h) * values[posq1 - 1] + (n - 4 * prevCfValue) * h;
        mausoq1 = 4 * values[posq1 - 1];
        const tuBig = BigInt(tusoq1);
        const mauBig = BigInt(mausoq1);
        // Bộ lọc: số thập phân đẹp + Q1 nằm ở nhóm 2 hoặc nhóm 3
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq1 < 2) || 
                           (posq1 > 3);                
        if (!dk_vonglap) {
            break; 
        }
    }
    const debai = "Bảng dưới đây ghi lại tốc độ của một số chiếc xe ô tô khi đi qua một điểm đo tốc độ.\n" +
                  taobanglatex("Tốc độ (km/h)", intervals, "Số xe ô tô", values) + "\n" +
                  "Tứ phân vị thứ nhất của mẫu số liệu ghép nhóm trên là";            
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    const PA1 = "\\True $" + convert(tusoq1 / mausoq1) + "$";
    const PA2 = "$" + convert((10 * tusoq1 + k1 * mausoq1) / (10 * mausoq1)) + "$";
    const PA3 = "$" + convert((10 * tusoq1 + k2 * mausoq1) / (10 * mausoq1)) + "$";
    const PA4 = "$" + convert((10 * tusoq1 + k3 * mausoq1) / (10 * mausoq1)) + "$";
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq1 - 2 >= 0) ? cfArrayFinal[posq1 - 2] : 0;
    // Lời giải đồng bộ theo định dạng so sánh chặn hai đầu của Ví dụ 1
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq1 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{n}{4}=" + phanso(n, 4) + "\\leq cf_" + String(posq1) + "=" + String(cfArrayFinal[posq1 - 1]) + "$ nên nhóm chứa tứ phân vị thứ nhất là nhóm $[" + intervals[posq1 - 1] + "; " + intervals[posq1] + ")$.\\\\\n" +
        "Vậy tứ phân vị thứ nhất của mẫu số liệu ghép nhóm là\n" +
        "$$Q_1=a_" + String(posq1) + "+\\dfrac{\\dfrac{n}{4}-cf_" + String(posq1 - 1) + "}{n_" + String(posq1) + "}(a_" + String(posq1 + 1) + "-a_" + String(posq1) + ")=" + intervals[posq1 - 1] + "+\\dfrac{" + phanso(n, 4) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq1 - 1]) + "}(" + intervals[posq1] + "-" + intervals[posq1 - 1] + ")=" + convert(tusoq1 / mausoq1) + ".$$";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";   
    return cauhoi;
}

function Tim_Q1_vidu5(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); // [2, 3, ..., 12]
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq1, tusoq1, mausoq1;
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(4, 10);      
        h = randomchoice(1, 4);        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        } 
        // Gọi hàm sinh số linh hoạt đã có sẵn trong hệ thống để điều tiết nhóm 2, nhóm 3
        values = generateValuesFlexible(sokhoang);
        n = tongcacphantu(values);
        posq1 = posvalueq1(values, n);
        const cfArray = cf(values);
        const prevCfValue = (posq1 - 2 >= 0) ? cfArray[posq1 - 2] : 0;
        tusoq1 = 4 * (a + (posq1 - 1) * h) * values[posq1 - 1] + (n - 4 * prevCfValue) * h;
        mausoq1 = 4 * values[posq1 - 1];
        const tuBig = BigInt(tusoq1);
        const mauBig = BigInt(mausoq1);
        // Bộ lọc: số thập phân đẹp + Q1 nằm ở nhóm 2 hoặc nhóm 3
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq1 < 2) || 
                           (posq1 > 3);                  
        if (!dk_vonglap) {
            break; 
        }
    }
    const dslop = ["12A", "12B", "12C", "12H", "11A", "11B", "11C", "11H"];
    const name = dslop[randomchoice(0, dslop.length - 1)];
    const debai = "Thời gian thực hiện xong một thí nghiệm hóa học của học sinh lớp " + name + ngaunhien([" được ghi lại", " được thống kê"]) + " ở bảng sau:\n" +
                  taobanglatex("Thời gian (phút)", intervals, "Số học sinh", values) + "\n" +
                  "Tứ phân vị thứ nhất của mẫu số liệu ghép nhóm trên là";
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    const PA1 = "\\True $" + convert(tusoq1 / mausoq1) + "$";
    const PA2 = "$" + convert((10 * tusoq1 + k1 * mausoq1) / (10 * mausoq1)) + "$";
    const PA3 = "$" + convert((10 * tusoq1 + k2 * mausoq1) / (10 * mausoq1)) + "$";
    const PA4 = "$" + convert((10 * tusoq1 + k3 * mausoq1) / (10 * mausoq1)) + "$";
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq1 - 2 >= 0) ? cfArrayFinal[posq1 - 2] : 0;
    // Lời giải đồng bộ theo định dạng so sánh chặn hai đầu của Ví dụ 1
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq1 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{n}{4}=" + phanso(n, 4) + "\\leq cf_" + String(posq1) + "=" + String(cfArrayFinal[posq1 - 1]) + "$ nên nhóm chứa tứ phân vị thứ nhất là nhóm $[" + intervals[posq1 - 1] + "; " + intervals[posq1] + ")$.\\\\\n" +
        "Vậy tứ phân vị thứ nhất của mẫu số liệu ghép nhóm là\n" +
        "$$Q_1=a_" + String(posq1) + "+\\dfrac{\\dfrac{n}{4}-cf_" + String(posq1 - 1) + "}{n_" + String(posq1) + "}(a_" + String(posq1 + 1) + "-a_" + String(posq1) + ")=" + intervals[posq1 - 1] + "+\\dfrac{" + phanso(n, 4) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq1 - 1]) + "}(" + intervals[posq1] + "-" + intervals[posq1 - 1] + ")=" + convert(tusoq1 / mausoq1) + ".$$";
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
    return cauhoi;
}

function Tim_Q1_vidu6(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); // [2, 3, ..., 12]
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq1, tusoq1, mausoq1;
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(15, 19);      
        h = randomchoice(2, 5);         
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        // Gọi hàm sinh số linh hoạt đã có sẵn trong hệ thống để điều tiết nhóm 2, nhóm 3
        values = generateValuesFlexible(sokhoang);
        n = tongcacphantu(values);
        posq1 = posvalueq1(values, n);
        const cfArray = cf(values);
        const prevCfValue = (posq1 - 2 >= 0) ? cfArray[posq1 - 2] : 0;
        tusoq1 = 4 * (a + (posq1 - 1) * h) * values[posq1 - 1] + (n - 4 * prevCfValue) * h;
        mausoq1 = 4 * values[posq1 - 1];
        const tuBig = BigInt(tusoq1);
        const mauBig = BigInt(mausoq1);
        // Bộ lọc: số thập phân đẹp + Q1 nằm ở nhóm 2 hoặc nhóm 3
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq1 < 2) || 
                           (posq1 > 3);              
        if (!dk_vonglap) {
            break; 
        }
    }
    const dslop = ["12A", "12B", "12C", "12H", "11A", "11B", "11C", "11H"];
    const name = dslop[randomchoice(0, dslop.length - 1)];
    const dsmon = ["Toán", "Vật lí", "Hóa học", "Tiếng Anh"];
    const mon = dsmon[randomchoice(0, dsmon.length - 1)];
    const debai = "Thời gian hoàn thành bài kiểm tra môn " + mon + " của các bạn trong lớp " + name + ngaunhien([" được ghi lại", " được thống kê", " được cho"]) + " ở bảng sau:\n" +
                  taobanglatex("Thời gian (phút)", intervals, "Số học sinh", values) + "\n" +
                  "Tứ phân vị thứ nhất của mẫu số liệu ghép nhóm trên là";          
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    const PA1 = "\\True $" + convert(tusoq1 / mausoq1) + "$";
    const PA2 = "$" + convert((10 * tusoq1 + k1 * mausoq1) / (10 * mausoq1)) + "$";
    const PA3 = "$" + convert((10 * tusoq1 + k2 * mausoq1) / (10 * mausoq1)) + "$";
    const PA4 = "$" + convert((10 * tusoq1 + k3 * mausoq1) / (10 * mausoq1)) + "$";
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq1 - 2 >= 0) ? cfArrayFinal[posq1 - 2] : 0;
    // Lời giải đồng bộ theo định dạng so sánh chặn hai đầu của Ví dụ 1
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq1 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{n}{4}=" + phanso(n, 4) + "\\leq cf_" + String(posq1) + "=" + String(cfArrayFinal[posq1 - 1]) + "$ nên nhóm chứa tứ phân vị thứ nhất là nhóm $[" + intervals[posq1 - 1] + "; " + intervals[posq1] + ")$.\\\\\n" +
        "Vậy tứ phân vị thứ nhất của mẫu số liệu ghép nhóm là\n" +
        "$$Q_1=a_" + String(posq1) + "+\\dfrac{\\dfrac{n}{4}-cf_" + String(posq1 - 1) + "}{n_" + String(posq1) + "}(a_" + String(posq1 + 1) + "-a_" + String(posq1) + ")=" + intervals[posq1 - 1] + "+\\dfrac{" + phanso(n, 4) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq1 - 1]) + "}(" + intervals[posq1] + "-" + intervals[posq1 - 1] + ")=" + convert(tusoq1 / mausoq1) + ".$$";  
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";   
    return cauhoi;
}

function Tim_Q2_vidu1(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); 
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq2, tusoq2, mausoq2;
    
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(15, 20);      
        h = randomchoice(2, 6);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        // Sử dụng hàm sinh linh hoạt điều tiết cho Q2
        values = generateValuesFlexibleQ2(sokhoang);
        
        n = tongcacphantu(values);
        posq2 = posvalueq2(values, n); // Hàm giả định tìm vị trí nhóm chứa Q2
        
        const cfArray = cf(values);
        const prevCfValue = (posq2 - 2 >= 0) ? cfArray[posq2 - 2] : 0;
        
        // Hệ thức toán học tính toán cho mốc Q2 (n/2)
        tusoq2 = 2 * (a + (posq2 - 1) * h) * values[posq2 - 1] + (n - 2 * prevCfValue) * h;
        mausoq2 = 2 * values[posq2 - 1];
        
        const tuBig = BigInt(tusoq2);
        const mauBig = BigInt(mausoq2);
        
        // Điều kiện lọc Q2: Số thập phân đẹp và nằm ở các nhóm giữa bảng (không kẹt ở nhóm 1 hay nhóm cuối)
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq2 < 2) || 
                           (posq2 === sokhoang);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    const dsten = ["ông Thắng", "ông Dũng", "ông Nam", "ông Hùng", "ông Tiến", "ông Tuấn", "ông Hải", "ông Thịnh", "bà Oanh", "bà Lan", "bà Giang", "bà Hòa", "bà Hạnh", "bà Nga"];
    const name = dsten[randomchoice(0, dsten.length - 1)];
    
    const debai = "Hằng ngày " + name + " đều đi xe buýt từ nhà đến cơ quan. Dưới đây là bảng thống kê thời gian của những lần " + name + " đi xe buýt từ nhà đến cơ quan.\n" +
                  taobanglatex("Thời gian (phút)", intervals, "Số lần", values) + "\n" +
                  "Trung vị của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + convert(tusoq2 / mausoq2) + "$";
    const PA2 = "$" + convert((10 * tusoq2 + k1 * mausoq2) / (10 * mausoq2)) + "$";
    const PA3 = "$" + convert((10 * tusoq2 + k2 * mausoq2) / (10 * mausoq2)) + "$";
    const PA4 = "$" + convert((10 * tusoq2 + k3 * mausoq2) / (10 * mausoq2)) + "$";
    
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq2 - 2 >= 0) ? cfArrayFinal[posq2 - 2] : 0;
    
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq2 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{n}{2}=" + phanso(n, 2) + "\\leq cf_" + String(posq2) + "=" + String(cfArrayFinal[posq2 - 1]) + "$ nên nhóm chứa trung vị là nhóm $[" + intervals[posq2 - 1] + "; " + intervals[posq2] + ")$.\\\\\n" +
        "Vậy trung vị của mẫu số liệu ghép nhóm là\n" +
        "$$M_e=a_" + String(posq2) + "+\\dfrac{\\dfrac{n}{2}-cf_" + String(posq2 - 1) + "}{n_" + String(posq2) + "}(a_" + String(posq2 + 1) + "-a_" + String(posq2) + ")=" + intervals[posq2 - 1] + "+\\dfrac{" + phanso(n, 2) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq2 - 1]) + "}(" + intervals[posq2] + "-" + intervals[posq2 - 1] + ")=" + convert(tusoq2 / mausoq2) + ".$$";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
        
    return cauhoi;
}

function Tim_Q2_vidu2(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); 
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq2, tusoq2, mausoq2;
    
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(7, 12);      
        h = randomchoice(2, 6);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        values = generateValuesFlexibleQ2(sokhoang);
        
        n = tongcacphantu(values);
        posq2 = posvalueq2(values, n);
        
        const cfArray = cf(values);
        const prevCfValue = (posq2 - 2 >= 0) ? cfArray[posq2 - 2] : 0;
        
        tusoq2 = 2 * (a + (posq2 - 1) * h) * values[posq2 - 1] + (n - 2 * prevCfValue) * h;
        mausoq2 = 2 * values[posq2 - 1];
        
        const tuBig = BigInt(tusoq2);
        const mauBig = BigInt(mausoq2);
        
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq2 < 2) || 
                           (posq2 === sokhoang);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    const thang = randomchoice(1, 12).toString().padStart(2, '0');
    
    const debai = "Một công ty cung cấp nước sạch thống kê lượng nước sạch mỗi hộ gia đình ở một khu vực sử dụng trong tháng " + thang + "/2023 ở bảng sau (đơn vị: $\\text{m}^3$):\n" +
                  taobanglatex("Lượng nước ($\\text{m}^3$)", intervals, "Số hộ gia đình", values) + "\n" +
                  "Trung vị của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + convert(tusoq2 / mausoq2) + "$";
    const PA2 = "$" + convert((10 * tusoq2 + k1 * mausoq2) / (10 * mausoq2)) + "$";
    const PA3 = "$" + convert((10 * tusoq2 + k2 * mausoq2) / (10 * mausoq2)) + "$";
    const PA4 = "$" + convert((10 * tusoq2 + k3 * mausoq2) / (10 * mausoq2)) + "$";
    
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq2 - 2 >= 0) ? cfArrayFinal[posq2 - 2] : 0;
    
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq2 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{n}{2}=" + phanso(n, 2) + "\\leq cf_" + String(posq2) + "=" + String(cfArrayFinal[posq2 - 1]) + "$ nên nhóm chứa trung vị là nhóm $[" + intervals[posq2 - 1] + "; " + intervals[posq2] + ")$.\\\\\n" +
        "Vậy trung vị của mẫu số liệu ghép nhóm là\n" +
        "$$M_e=a_" + String(posq2) + "+\\dfrac{\\dfrac{n}{2}-cf_" + String(posq2 - 1) + "}{n_" + String(posq2) + "}(a_" + String(posq2 + 1) + "-a_" + String(posq2) + ")=" + intervals[posq2 - 1] + "+\\dfrac{" + phanso(n, 2) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq2 - 1]) + "}(" + intervals[posq2] + "-" + intervals[posq2 - 1] + ")=" + convert(tusoq2 / mausoq2) + ".$$";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
        
    return cauhoi;
}

function Tim_Q2_vidu3(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); 
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq2, tusoq2, mausoq2;
    
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(38, 41);      
        h = randomchoice(2, 4);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        values = generateValuesFlexibleQ2(sokhoang);
        
        n = tongcacphantu(values);
        posq2 = posvalueq2(values, n);
        
        const cfArray = cf(values);
        const prevCfValue = (posq2 - 2 >= 0) ? cfArray[posq2 - 2] : 0;
        
        tusoq2 = 2 * (a + (posq2 - 1) * h) * values[posq2 - 1] + (n - 2 * prevCfValue) * h;
        mausoq2 = 2 * values[posq2 - 1];
        
        const tuBig = BigInt(tusoq2);
        const mauBig = BigInt(mausoq2);
        
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq2 < 2) || 
                           (posq2 === sokhoang);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    const debai = "Khối lượng của một số quả trứng gà trong một trang trại được " + ngaunhien(["thống kê lại", "ghi lại"]) + " ở bảng sau:\n" +
                  taobanglatex("Khối lượng (gam)", intervals, "Số quả trứng", values) + "\n" +
                  "Trung vị của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + convert(tusoq2 / mausoq2) + "$";
    const PA2 = "$" + convert((10 * tusoq2 + k1 * mausoq2) / (10 * mausoq2)) + "$";
    const PA3 = "$" + convert((10 * tusoq2 + k2 * mausoq2) / (10 * mausoq2)) + "$";
    const PA4 = "$" + convert((10 * tusoq2 + k3 * mausoq2) / (10 * mausoq2)) + "$";
    
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq2 - 2 >= 0) ? cfArrayFinal[posq2 - 2] : 0;
    
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq2 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{n}{2}=" + phanso(n, 2) + "\\leq cf_" + String(posq2) + "=" + String(cfArrayFinal[posq2 - 1]) + "$ nên nhóm chứa trung vị là nhóm $[" + intervals[posq2 - 1] + "; " + intervals[posq2] + ")$.\\\\\n" +
        "Vậy trung vị của mẫu số liệu ghép nhóm là\n" +
        "$$M_e=a_" + String(posq2) + "+\\dfrac{\\dfrac{n}{2}-cf_" + String(posq2 - 1) + "}{n_" + String(posq2) + "}(a_" + String(posq2 + 1) + "-a_" + String(posq2) + ")=" + intervals[posq2 - 1] + "+\\dfrac{" + phanso(n, 2) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq2 - 1]) + "}(" + intervals[posq2] + "-" + intervals[posq2 - 1] + ")=" + convert(tusoq2 / mausoq2) + ".$$";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
        
    return cauhoi;
}

function Tim_Q2_vidu4(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); 
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq2, tusoq2, mausoq2;
    
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(45, 52);      
        h = randomchoice(2, 5);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        values = generateValuesFlexibleQ2(sokhoang);
        
        n = tongcacphantu(values);
        posq2 = posvalueq2(values, n);
        
        const cfArray = cf(values);
        const prevCfValue = (posq2 - 2 >= 0) ? cfArray[posq2 - 2] : 0;
        
        tusoq2 = 2 * (a + (posq2 - 1) * h) * values[posq2 - 1] + (n - 2 * prevCfValue) * h;
        mausoq2 = 2 * values[posq2 - 1];
        
        const tuBig = BigInt(tusoq2);
        const mauBig = BigInt(mausoq2);
        
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq2 < 2) || 
                           (posq2 === sokhoang);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    const debai = "Bảng dưới đây ghi lại tốc độ của một số chiếc xe ô tô khi đi qua một điểm đo tốc độ.\n" +
                  taobanglatex("Tốc độ (km/h)", intervals, "Số xe ô tô", values) + "\n" +
                  "Trung vị của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + convert(tusoq2 / mausoq2) + "$";
    const PA2 = "$" + convert((10 * tusoq2 + k1 * mausoq2) / (10 * mausoq2)) + "$";
    const PA3 = "$" + convert((10 * tusoq2 + k2 * mausoq2) / (10 * mausoq2)) + "$";
    const PA4 = "$" + convert((10 * tusoq2 + k3 * mausoq2) / (10 * mausoq2)) + "$";
    
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq2 - 2 >= 0) ? cfArrayFinal[posq2 - 2] : 0;
    
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq2 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{n}{2}=" + phanso(n, 2) + "\\leq cf_" + String(posq2) + "=" + String(cfArrayFinal[posq2 - 1]) + "$ nên nhóm chứa trung vị là nhóm $[" + intervals[posq2 - 1] + "; " + intervals[posq2] + ")$.\\\\\n" +
        "Vậy trung vị của mẫu số liệu ghép nhóm là\n" +
        "$$M_e=a_" + String(posq2) + "+\\dfrac{\\dfrac{n}{2}-cf_" + String(posq2 - 1) + "}{n_" + String(posq2) + "}(a_" + String(posq2 + 1) + "-a_" + String(posq2) + ")=" + intervals[posq2 - 1] + "+\\dfrac{" + phanso(n, 2) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq2 - 1]) + "}(" + intervals[posq2] + "-" + intervals[posq2 - 1] + ")=" + convert(tusoq2 / mausoq2) + ".$$";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
        
    return cauhoi;
}

function Tim_Q2_vidu5(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); 
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq2, tusoq2, mausoq2;
    
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(4, 10);      
        h = randomchoice(1, 4);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        values = generateValuesFlexibleQ2(sokhoang);
        
        n = tongcacphantu(values);
        posq2 = posvalueq2(values, n);
        
        const cfArray = cf(values);
        const prevCfValue = (posq2 - 2 >= 0) ? cfArray[posq2 - 2] : 0;
        
        tusoq2 = 2 * (a + (posq2 - 1) * h) * values[posq2 - 1] + (n - 2 * prevCfValue) * h;
        mausoq2 = 2 * values[posq2 - 1];
        
        const tuBig = BigInt(tusoq2);
        const mauBig = BigInt(mausoq2);
        
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq2 < 2) || 
                           (posq2 === sokhoang);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    const dslop = ["12A", "12B", "12C", "12H", "11A", "11B", "11C", "11H"];
    const name = dslop[randomchoice(0, dslop.length - 1)];
    
    const debai = "Thời gian thực hiện xong một thí nghiệm hóa học của học sinh lớp " + name + ngaunhien([" được ghi lại", " được thống kê"]) + " ở bảng sau:\n" +
                  taobanglatex("Thời gian (phút)", intervals, "Số học sinh", values) + "\n" +
                  "Trung vị của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + convert(tusoq2 / mausoq2) + "$";
    const PA2 = "$" + convert((10 * tusoq2 + k1 * mausoq2) / (10 * mausoq2)) + "$";
    const PA3 = "$" + convert((10 * tusoq2 + k2 * mausoq2) / (10 * mausoq2)) + "$";
    const PA4 = "$" + convert((10 * tusoq2 + k3 * mausoq2) / (10 * mausoq2)) + "$";
    
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq2 - 2 >= 0) ? cfArrayFinal[posq2 - 2] : 0;
    
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq2 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{n}{2}=" + phanso(n, 2) + "\\leq cf_" + String(posq2) + "=" + String(cfArrayFinal[posq2 - 1]) + "$ nên nhóm chứa trung vị là nhóm $[" + intervals[posq2 - 1] + "; " + intervals[posq2] + ")$.\\\\\n" +
        "Vậy trung vị của mẫu số liệu ghép nhóm là\n" +
        "$$M_e=a_" + String(posq2) + "+\\dfrac{\\dfrac{n}{2}-cf_" + String(posq2 - 1) + "}{n_" + String(posq2) + "}(a_" + String(posq2 + 1) + "-a_" + String(posq2) + ")=" + intervals[posq2 - 1] + "+\\dfrac{" + phanso(n, 2) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq2 - 1]) + "}(" + intervals[posq2] + "-" + intervals[posq2 - 1] + ")=" + convert(tusoq2 / mausoq2) + ".$$";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
        
    return cauhoi;
}

function Tim_Q2_vidu6(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); 
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq2, tusoq2, mausoq2;
    
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(15, 19);      
        h = randomchoice(2, 5);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        values = generateValuesFlexibleQ2(sokhoang);
        
        n = tongcacphantu(values);
        posq2 = posvalueq2(values, n);
        
        const cfArray = cf(values);
        const prevCfValue = (posq2 - 2 >= 0) ? cfArray[posq2 - 2] : 0;
        
        tusoq2 = 2 * (a + (posq2 - 1) * h) * values[posq2 - 1] + (n - 2 * prevCfValue) * h;
        mausoq2 = 2 * values[posq2 - 1];
        
        const tuBig = BigInt(tusoq2);
        const mauBig = BigInt(mausoq2);
        
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq2 < 2) || 
                           (posq2 === sokhoang);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    const dslop = ["12A", "12B", "12C", "12H", "11A", "11B", "11C", "11H"];
    const name = dslop[randomchoice(0, dslop.length - 1)];
    const dsmon = ["Toán", "Vật lí", "Hóa học", "Tiếng Anh"];
    const mon = dsmon[randomchoice(0, dsmon.length - 1)];
    
    const debai = "Thời gian hoàn thành bài kiểm tra môn " + mon + " của các bạn trong lớp " + name + ngaunhien([" được ghi lại", " được thống kê", " được cho"]) + " ở bảng sau:\n" +
                  taobanglatex("Thời gian (phút)", intervals, "Số học sinh", values) + "\n" +
                  "Trung vị của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + convert(tusoq2 / mausoq2) + "$";
    const PA2 = "$" + convert((10 * tusoq2 + k1 * mausoq2) / (10 * mausoq2)) + "$";
    const PA3 = "$" + convert((10 * tusoq2 + k2 * mausoq2) / (10 * mausoq2)) + "$";
    const PA4 = "$" + convert((10 * tusoq2 + k3 * mausoq2) / (10 * mausoq2)) + "$";
    
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq2 - 2 >= 0) ? cfArrayFinal[posq2 - 2] : 0;
    
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq2 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{n}{2}=" + phanso(n, 2) + "\\leq cf_" + String(posq2) + "=" + String(cfArrayFinal[posq2 - 1]) + "$ nên nhóm chứa trung vị là nhóm $[" + intervals[posq2 - 1] + "; " + intervals[posq2] + ")$.\\\\\n" +
        "Vậy trung vị của mẫu số liệu ghép nhóm là\n" +
        "$$M_e=a_" + String(posq2) + "+\\dfrac{\\dfrac{n}{2}-cf_" + String(posq2 - 1) + "}{n_" + String(posq2) + "}(a_" + String(posq2 + 1) + "-a_" + String(posq2) + ")=" + intervals[posq2 - 1] + "+\\dfrac{" + phanso(n, 2) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq2 - 1]) + "}(" + intervals[posq2] + "-" + intervals[posq2 - 1] + ")=" + convert(tusoq2 / mausoq2) + ".$$";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
        
    return cauhoi;
}



function Tim_Q3_vidu1(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); // [2, 3, ..., 12]
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq3, tusoq3, mausoq3;
    
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(15, 20);      
        h = randomchoice(2, 6);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        // Gọi hàm thiết kế riêng cho Q3 nhằm đẩy dữ liệu mượt mà về sau
        values = generateValuesFlexibleQ3(sokhoang);
        
        n = tongcacphantu(values);
        posq3 = posvalueq3(values, n); // Giả định hàm trả về vị trí nhóm chứa Q3 (bắt đầu từ 1)
        
        const cfArray = cf(values);
        const prevCfValue = (posq3 - 2 >= 0) ? cfArray[posq3 - 2] : 0;
        
        tusoq3 = 4 * (a + (posq3 - 1) * h) * values[posq3 - 1] + (3 * n - 4 * prevCfValue) * h;
        mausoq3 = 4 * values[posq3 - 1];
        
        const tuBig = BigInt(tusoq3);
        const mauBig = BigInt(mausoq3);
        
        // Điều kiện lọc Q3: 
        // 1. Số thập phân đẹp (không nguyên và tối đa 2 chữ số sau dấu phẩy)
        // 2. Ép Q3 nằm ở nhóm áp chót hoặc nhóm cận áp chót (Đảm bảo đa dạng phân phối cuối bảng)
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq3 < sokhoang - 2) || 
                           (posq3 > sokhoang - 1);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    const dsten = ["ông Thắng", "ông Dũng", "ông Nam", "ông Hùng", "ông Tiến", "ông Tuấn", "ông Hải", "ông Thịnh", "bà Oanh", "bà Lan", "bà Giang", "bà Hòa", "bà Hạnh", "bà Nga"];
    const name = dsten[randomchoice(0, dsten.length - 1)];
    
    const debai = "Hằng ngày " + name + " đều đi xe buýt từ nhà đến cơ quan. Dưới đây là bảng thống kê thời gian của những lần " + name + " đi xe buýt từ nhà đến cơ quan.\n" +
                  taobanglatex("Thời gian (phút)", intervals, "Số lần", values) + "\n" +
                  "Tứ phân vị thứ ba của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + convert(tusoq3 / mausoq3) + "$";
    const PA2 = "$" + convert((10 * tusoq3 + k1 * mausoq3) / (10 * mausoq3)) + "$";
    const PA3 = "$" + convert((10 * tusoq3 + k2 * mausoq3) / (10 * mausoq3)) + "$";
    const PA4 = "$" + convert((10 * tusoq3 + k3 * mausoq3) / (10 * mausoq3)) + "$";
    
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq3 - 2 >= 0) ? cfArrayFinal[posq3 - 2] : 0;
    
    // Đồng bộ định dạng so sánh chặn hai đầu chuẩn như format Ví dụ 1 của bạn
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq3 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{3n}{4}=" + phanso(3 * n, 4) + "\\leq cf_" + String(posq3) + "=" + String(cfArrayFinal[posq3 - 1]) + "$ nên nhóm chứa tứ phân vị thứ ba là nhóm $[" + intervals[posq3 - 1] + "; " + intervals[posq3] + ")$.\\\\\n" +
        "Vậy tứ phân vị thứ ba của mẫu số liệu ghép nhóm là\n" +
        "$$Q_3=a_" + String(posq3) + "+\\dfrac{\\dfrac{3n}{4}-cf_" + String(posq3 - 1) + "}{n_" + String(posq3) + "}(a_" + String(posq3 + 1) + "-a_" + String(posq3) + ")=" + intervals[posq3 - 1] + "+\\dfrac{" + phanso(3 * n, 4) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq3 - 1]) + "}(" + intervals[posq3] + "-" + intervals[posq3 - 1] + ")=" + convert(tusoq3 / mausoq3) + ".$$";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
        
    return cauhoi;
}

function Tim_Q3_vidu2(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); // [2, 3, ..., 12]
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq3, tusoq3, mausoq3;
    
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(7, 12);      
        h = randomchoice(2, 6);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        // Gọi hàm sinh số linh hoạt cho Q3 đã có sẵn trong hệ thống của bạn
        values = generateValuesFlexibleQ3(sokhoang);
        
        n = tongcacphantu(values);
        posq3 = posvalueq3(values, n);
        
        const cfArray = cf(values);
        const prevCfValue = (posq3 - 2 >= 0) ? cfArray[posq3 - 2] : 0;
        
        tusoq3 = 4 * (a + (posq3 - 1) * h) * values[posq3 - 1] + (3 * n - 4 * prevCfValue) * h;
        mausoq3 = 4 * values[posq3 - 1];
        
        const tuBig = BigInt(tusoq3);
        const mauBig = BigInt(mausoq3);
        
        // Bộ lọc Q3: số thập phân đẹp + nằm ở nhóm áp chót hoặc cận áp chót
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq3 < sokhoang - 2) || 
                           (posq3 > sokhoang - 1);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    const thang = randomchoice(1, 12).toString().padStart(2, '0');
    
    const debai = "Một công ty cung cấp nước sạch thống kê lượng nước sạch mỗi hộ gia đình ở một khu vực sử dụng trong tháng " + thang + "/2023 ở bảng sau (đơn vị: $\\text{m}^3$):\n" +
                  taobanglatex("Lượng nước ($\\text{m}^3$)", intervals, "Số hộ gia đình", values) + "\n" +
                  "Tứ phân vị thứ ba của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + convert(tusoq3 / mausoq3) + "$";
    const PA2 = "$" + convert((10 * tusoq3 + k1 * mausoq3) / (10 * mausoq3)) + "$";
    const PA3 = "$" + convert((10 * tusoq3 + k2 * mausoq3) / (10 * mausoq3)) + "$";
    const PA4 = "$" + convert((10 * tusoq3 + k3 * mausoq3) / (10 * mausoq3)) + "$";
    
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq3 - 2 >= 0) ? cfArrayFinal[posq3 - 2] : 0;
    
    // Lời giải đồng bộ theo định dạng so sánh chặn hai đầu trực quan giống Q1
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq3 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{3n}{4}=" + phanso(3 * n, 4) + "\\leq cf_" + String(posq3) + "=" + String(cfArrayFinal[posq3 - 1]) + "$ nên nhóm chứa tứ phân vị thứ ba là nhóm $[" + intervals[posq3 - 1] + "; " + intervals[posq3] + ")$.\\\\\n" +
        "Vậy tứ phân vị thứ ba của mẫu số liệu ghép nhóm là\n" +
        "$$Q_3=a_" + String(posq3) + "+\\dfrac{\\dfrac{3n}{4}-cf_" + String(posq3 - 1) + "}{n_" + String(posq3) + "}(a_" + String(posq3 + 1) + "-a_" + String(posq3) + ")=" + intervals[posq3 - 1] + "+\\dfrac{" + phanso(3 * n, 4) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq3 - 1]) + "}(" + intervals[posq3] + "-" + intervals[posq3 - 1] + ")=" + convert(tusoq3 / mausoq3) + ".$$";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
        
    return cauhoi;
}

function Tim_Q3_vidu3(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); // [2, 3, ..., 12]
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq3, tusoq3, mausoq3;
    
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(38, 41);      
        h = randomchoice(2, 4);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        // Gọi hàm sinh số linh hoạt cho Q3 đã có sẵn trong hệ thống của bạn
        values = generateValuesFlexibleQ3(sokhoang);
        
        n = tongcacphantu(values);
        posq3 = posvalueq3(values, n);
        
        const cfArray = cf(values);
        const prevCfValue = (posq3 - 2 >= 0) ? cfArray[posq3 - 2] : 0;
        
        tusoq3 = 4 * (a + (posq3 - 1) * h) * values[posq3 - 1] + (3 * n - 4 * prevCfValue) * h;
        mausoq3 = 4 * values[posq3 - 1];
        
        const tuBig = BigInt(tusoq3);
        const mauBig = BigInt(mausoq3);
        
        // Bộ lọc Q3: số thập phân đẹp + nằm ở nhóm áp chót hoặc cận áp chót
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq3 < sokhoang - 2) || 
                           (posq3 > sokhoang - 1);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    const debai = "Khối lượng của một số quả trứng gà trong một trang trại được " + ngaunhien(["thống kê lại", "ghi lại"]) + " ở bảng sau:\n" +
                  taobanglatex("Khối lượng (gam)", intervals, "Số quả trứng", values) + "\n" +
                  "Tứ phân vị thứ ba của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + convert(tusoq3 / mausoq3) + "$";
    const PA2 = "$" + convert((10 * tusoq3 + k1 * mausoq3) / (10 * mausoq3)) + "$";
    const PA3 = "$" + convert((10 * tusoq3 + k2 * mausoq3) / (10 * mausoq3)) + "$";
    const PA4 = "$" + convert((10 * tusoq3 + k3 * mausoq3) / (10 * mausoq3)) + "$";
    
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq3 - 2 >= 0) ? cfArrayFinal[posq3 - 2] : 0;
    
    // Lời giải đồng bộ theo định dạng so sánh chặn hai đầu trực quan
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq3 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{3n}{4}=" + phanso(3 * n, 4) + "\\leq cf_" + String(posq3) + "=" + String(cfArrayFinal[posq3 - 1]) + "$ nên nhóm chứa tứ phân vị thứ ba là nhóm $[" + intervals[posq3 - 1] + "; " + intervals[posq3] + ")$.\\\\\n" +
        "Vậy tứ phân vị thứ ba của mẫu số liệu ghép nhóm là\n" +
        "$$Q_3=a_" + String(posq3) + "+\\dfrac{\\dfrac{3n}{4}-cf_" + String(posq3 - 1) + "}{n_" + String(posq3) + "}(a_" + String(posq3 + 1) + "-a_" + String(posq3) + ")=" + intervals[posq3 - 1] + "+\\dfrac{" + phanso(3 * n, 4) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq3 - 1]) + "}(" + intervals[posq3] + "-" + intervals[posq3 - 1] + ")=" + convert(tusoq3 / mausoq3) + ".$$";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
        
    return cauhoi;
}

function Tim_Q3_vidu4(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); // [2, 3, ..., 12]
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq3, tusoq3, mausoq3;
    
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(45, 52);      
        h = randomchoice(2, 5);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        // Gọi hàm sinh số linh hoạt cho Q3 đã có sẵn trong hệ thống của bạn
        values = generateValuesFlexibleQ3(sokhoang);
        
        n = tongcacphantu(values);
        posq3 = posvalueq3(values, n);
        
        const cfArray = cf(values);
        const prevCfValue = (posq3 - 2 >= 0) ? cfArray[posq3 - 2] : 0;
        
        tusoq3 = 4 * (a + (posq3 - 1) * h) * values[posq3 - 1] + (3 * n - 4 * prevCfValue) * h;
        mausoq3 = 4 * values[posq3 - 1];
        
        const tuBig = BigInt(tusoq3);
        const mauBig = BigInt(mausoq3);
        
        // Bộ lọc Q3: số thập phân đẹp + nằm ở nhóm áp chót hoặc cận áp chót
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq3 < sokhoang - 2) || 
                           (posq3 > sokhoang - 1);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    const debai = "Bảng dưới đây ghi lại tốc độ của một số chiếc xe ô tô khi đi qua một điểm đo tốc độ.\n" +
                  taobanglatex("Tốc độ (km/h)", intervals, "Số xe ô tô", values) + "\n" +
                  "Tứ phân vị thứ ba của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + convert(tusoq3 / mausoq3) + "$";
    const PA2 = "$" + convert((10 * tusoq3 + k1 * mausoq3) / (10 * mausoq3)) + "$";
    const PA3 = "$" + convert((10 * tusoq3 + k2 * mausoq3) / (10 * mausoq3)) + "$";
    const PA4 = "$" + convert((10 * tusoq3 + k3 * mausoq3) / (10 * mausoq3)) + "$";
    
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq3 - 2 >= 0) ? cfArrayFinal[posq3 - 2] : 0;
    
    // Lời giải đồng bộ theo định dạng so sánh chặn hai đầu trực quan
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq3 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{3n}{4}=" + phanso(3 * n, 4) + "\\leq cf_" + String(posq3) + "=" + String(cfArrayFinal[posq3 - 1]) + "$ nên nhóm chứa tứ phân vị thứ ba là nhóm $[" + intervals[posq3 - 1] + "; " + intervals[posq3] + ")$.\\\\\n" +
        "Vậy tứ phân vị thứ ba của mẫu số liệu ghép nhóm là\n" +
        "$$Q_3=a_" + String(posq3) + "+\\dfrac{\\dfrac{3n}{4}-cf_" + String(posq3 - 1) + "}{n_" + String(posq3) + "}(a_" + String(posq3 + 1) + "-a_" + String(posq3) + ")=" + intervals[posq3 - 1] + "+\\dfrac{" + phanso(3 * n, 4) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq3 - 1]) + "}(" + intervals[posq3] + "-" + intervals[posq3 - 1] + ")=" + convert(tusoq3 / mausoq3) + ".$$";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
        
    return cauhoi;
}

function Tim_Q3_vidu5(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); // [2, 3, ..., 12]
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq3, tusoq3, mausoq3;
    
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(4, 10);      
        h = randomchoice(1, 4);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        // Gọi hàm sinh số linh hoạt cho Q3 đã có sẵn trong hệ thống của bạn
        values = generateValuesFlexibleQ3(sokhoang);
        
        n = tongcacphantu(values);
        posq3 = posvalueq3(values, n);
        
        const cfArray = cf(values);
        const prevCfValue = (posq3 - 2 >= 0) ? cfArray[posq3 - 2] : 0;
        
        tusoq3 = 4 * (a + (posq3 - 1) * h) * values[posq3 - 1] + (3 * n - 4 * prevCfValue) * h;
        mausoq3 = 4 * values[posq3 - 1];
        
        const tuBig = BigInt(tusoq3);
        const mauBig = BigInt(mausoq3);
        
        // Bộ lọc Q3: số thập phân đẹp + nằm ở nhóm áp chót hoặc cận áp chót
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq3 < sokhoang - 2) || 
                           (posq3 > sokhoang - 1);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    const dslop = ["12A", "12B", "12C", "12H", "11A", "11B", "11C", "11H"];
    const name = dslop[randomchoice(0, dslop.length - 1)];
    
    const debai = "Thời gian thực hiện xong một thí nghiệm hóa học của học sinh lớp " + name + ngaunhien([" được ghi lại", " được thống kê"]) + " ở bảng sau:\n" +
                  taobanglatex("Thời gian (phút)", intervals, "Số học sinh", values) + "\n" +
                  "Tứ phân vị thứ ba của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + convert(tusoq3 / mausoq3) + "$";
    const PA2 = "$" + convert((10 * tusoq3 + k1 * mausoq3) / (10 * mausoq3)) + "$";
    const PA3 = "$" + convert((10 * tusoq3 + k2 * mausoq3) / (10 * mausoq3)) + "$";
    const PA4 = "$" + convert((10 * tusoq3 + k3 * mausoq3) / (10 * mausoq3)) + "$";
    
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq3 - 2 >= 0) ? cfArrayFinal[posq3 - 2] : 0;
    
    // Lời giải đồng bộ theo định dạng so sánh chặn hai đầu trực quan
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq3 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{3n}{4}=" + phanso(3 * n, 4) + "\\leq cf_" + String(posq3) + "=" + String(cfArrayFinal[posq3 - 1]) + "$ nên nhóm chứa tứ phân vị thứ ba là nhóm $[" + intervals[posq3 - 1] + "; " + intervals[posq3] + ")$.\\\\\n" +
        "Vậy tứ phân vị thứ ba của mẫu số liệu ghép nhóm là\n" +
        "$$Q_3=a_" + String(posq3) + "+\\dfrac{\\dfrac{3n}{4}-cf_" + String(posq3 - 1) + "}{n_" + String(posq3) + "}(a_" + String(posq3 + 1) + "-a_" + String(posq3) + ")=" + intervals[posq3 - 1] + "+\\dfrac{" + phanso(3 * n, 4) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq3 - 1]) + "}(" + intervals[posq3] + "-" + intervals[posq3 - 1] + ")=" + convert(tusoq3 / mausoq3) + ".$$";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
        
    return cauhoi;
}

function Tim_Q3_vidu6(loai) {
    const value_range = Array.from({ length: 11 }, (_, i) => i + 2); // [2, 3, ..., 12]
    const max_repeats = 2;
    let sokhoang, a, h, intervals, values, n, posq3, tusoq3, mausoq3;
    
    while (true) {
        sokhoang = randomchoice(4, 7); 
        a = randomchoice(15, 19);      
        h = randomchoice(2, 5);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        // Gọi hàm sinh số linh hoạt cho Q3 đã có sẵn trong hệ thống của bạn
        values = generateValuesFlexibleQ3(sokhoang);
        
        n = tongcacphantu(values);
        posq3 = posvalueq3(values, n);
        
        const cfArray = cf(values);
        const prevCfValue = (posq3 - 2 >= 0) ? cfArray[posq3 - 2] : 0;
        
        tusoq3 = 4 * (a + (posq3 - 1) * h) * values[posq3 - 1] + (3 * n - 4 * prevCfValue) * h;
        mausoq3 = 4 * values[posq3 - 1];
        
        const tuBig = BigInt(tusoq3);
        const mauBig = BigInt(mausoq3);
        
        // Bộ lọc Q3: số thập phân đẹp + nằm ở nhóm áp chót hoặc cận áp chót
        const dk_vonglap = (tuBig % mauBig === 0n) || 
                           ((100n * tuBig) % mauBig !== 0n) || 
                           (posq3 < sokhoang - 2) || 
                           (posq3 > sokhoang - 1);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    const dslop = ["12A", "12B", "12C", "12H", "11A", "11B", "11C", "11H"];
    const name = dslop[randomchoice(0, dslop.length - 1)];
    const dsmon = ["Toán", "Vật lí", "Hóa học", "Tiếng Anh"];
    const mon = dsmon[randomchoice(0, dsmon.length - 1)];
    
    const debai = "Thời gian hoàn thành bài kiểm tra môn " + mon + " của các bạn trong lớp " + name + ngaunhien([" được ghi lại", " được thống kê", " được cho"]) + " ở bảng sau:\n" +
                  taobanglatex("Thời gian (phút)", intervals, "Số học sinh", values) + "\n" +
                  "Tứ phân vị thứ ba của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + convert(tusoq3 / mausoq3) + "$";
    const PA2 = "$" + convert((10 * tusoq3 + k1 * mausoq3) / (10 * mausoq3)) + "$";
    const PA3 = "$" + convert((10 * tusoq3 + k2 * mausoq3) / (10 * mausoq3)) + "$";
    const PA4 = "$" + convert((10 * tusoq3 + k3 * mausoq3) / (10 * mausoq3)) + "$";
    
    const cfArrayFinal = cf(values);
    const prevCfValueFinal = (posq3 - 2 >= 0) ? cfArrayFinal[posq3 - 2] : 0;
    
    // Lời giải đồng bộ theo định dạng so sánh chặn hai đầu trực quan
    const loigiai = "Ta có bảng\n" +
        taobanglatexcf("Nhóm", intervals, "Tần số", f_full(values), "Tần số tích lũy", cf_full(values)) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Ta thấy $cf_" + String(posq3 - 1) + "=" + String(prevCfValueFinal) + " < \\dfrac{3n}{4}=" + phanso(3 * n, 4) + "\\leq cf_" + String(posq3) + "=" + String(cfArrayFinal[posq3 - 1]) + "$ nên nhóm chứa tứ phân vị thứ ba là nhóm $[" + intervals[posq3 - 1] + "; " + intervals[posq3] + ")$.\\\\\n" +
        "Vậy tứ phân vị thứ ba của mẫu số liệu ghép nhóm là\n" +
        "$$Q_3=a_" + String(posq3) + "+\\dfrac{\\dfrac{3n}{4}-cf_" + String(posq3 - 1) + "}{n_" + String(posq3) + "}(a_" + String(posq3 + 1) + "-a_" + String(posq3) + ")=" + intervals[posq3 - 1] + "+\\dfrac{" + phanso(3 * n, 4) + "-" + String(prevCfValueFinal) + "}{" + String(values[posq3 - 1]) + "}(" + intervals[posq3] + "-" + intervals[posq3 - 1] + ")=" + convert(tusoq3 / mausoq3) + ".$$";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    const cauhoi = "\\begin{" + loai + "}\n" +
        debai + "\n" +
        "\\choice\n" +
        "{" + PA[0] + "}\n" +
        "{" + PA[1] + "}\n" +
        "{" + PA[2] + "}\n" +
        "{" + PA[3] + "}\n" +
        "\\loigiai{\n" +
        loigiai + "\n" +
        "}\n" +
        "\\end{" + loai + "}\n";
        
    return cauhoi;
}

function Tim_phuongsai_vidu1(loai) {
    let valueRange, maxRepeats, sokhoang, a, h, intervals, intervalsrutgon, intervalsrutgonnguyen, values, n, kq1, kq2, xngang, phuongsai;
    
    while (true) {
        valueRange = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        maxRepeats = 2;
        sokhoang = randomchoice(4, 6); // range(4,7) -> 4, 5, 6
        a = randomchoice(15, 20);      // range(15,21) -> từ 15 đến 20
        h = randomchoice(2, 6);        // range(2,7) -> 2, 3, 4, 5, 6
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        intervalsrutgon = [];
        intervalsrutgonnguyen = [];
        for (let i = 0; i < sokhoang; i++) {
            intervalsrutgon.push(convert((2 * a + 2 * i * h + h) / 2));
            intervalsrutgonnguyen.push(2 * a + 2 * i * h + h);
        }
        
        values = generateValues(sokhoang, valueRange, maxRepeats); 
        n = tongcacphantu(values);
        
        kq1 = ketquatichhailist(intervalsrutgonnguyen, values);
        kq2 = n * ketquatichphuongsai(values, intervalsrutgonnguyen) - Math.pow(ketquatichhailist(values, intervalsrutgonnguyen), 2);
        
        // Ép kiểu BigInt chống sai số phần mười/phần trăm khi chia lấy dư ở trình duyệt
        const kq1Big = BigInt(kq1);
        const kq2Big = BigInt(kq2);
        const nBig = BigInt(n);
        const mauXNgangBig = 2n * nBig;
        const mauPSBig = 4n * nBig * nBig;
        
        const dk_vonglap = ((100n * kq1Big) % mauXNgangBig !== 0n) || (kq1Big % mauXNgangBig === 0n) || 
                           ((100n * kq2Big) % mauPSBig !== 0n) || (kq2Big % mauPSBig === 0n);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    xngang = convert(kq1 / (2 * n));
    phuongsai = convert(kq2 / (4 * n * n));
    
    // Khởi tạo danh sách tên ngẫu nhiên chuẩn theo bản Python của anh
    const dsten = ["ông Thắng", "ông Dũng", "ông Nam", "ông Hùng", "ông Tiến", "ông Tuấn", "ông Hải", "ông Thịnh", "bà Oanh", "bà Lan", "bà Giang", "bà Hòa", "bà Hạnh", "bà Nga"];
    const name = dsten[randomchoice(0, dsten.length - 1)];
    
    const debai = "Hằng ngày " + name + " đều đi xe buýt từ nhà đến cơ quan. Dưới đây là bảng thống kê thời gian của những lần " + name + " đi xe buýt từ nhà đến cơ quan.\n" +
                  taobanglatex("Thời gian (phút)", intervals, "Số lần", values) + "\n" +
                  "Phương sai của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + phuongsai + "$";
    const PA2 = "$" + convert((5 * kq2 + k1 * 2 * n * n) / (20 * n * n)) + "$";
    const PA3 = "$" + convert((5 * kq2 + k2 * 2 * n * n) / (20 * n * n)) + "$";
    const PA4 = "$" + convert((5 * kq2 + k3 * 2 * n * n) / (20 * n * n)) + "$";
    
    const loigiai = "Ta có bảng thống kê theo giá trị đại diện\n" +
        taobangrutgon("Giá trị đại diện", intervalsrutgon, "Tần số", values) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Số trung bình của mẫu số liệu ghép nhóm\n" +
        "\\begin{align*}\n" +
        "\\overline{x}&=\\dfrac{" + tichhailist(values, intervalsrutgon) + "}{" + String(n) + "}\\\\\n" +
        "&=" + phanso(kq1, 2 * n) + "=" + xngang + ".\n" +
        "\\end{align*}\n" +
        "Phương sai của mẫu số liệu ghép nhóm\n" +
        "\\begin{align*}\n" +
        "S^2&=\\dfrac{1}{" + String(n) + "}(" + tichphuongsai(values, intervalsrutgon) + ")-" + xngang + "^2\\\\\n" +
        "&=" + phuongsai + ".\n" +
        "\\end{align*}";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    const cauhoi = "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + PA[0] + "}\n{" + PA[1] + "}\n{" + PA[2] + "}\n{" + PA[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
    return cauhoi;
}

function Tim_phuongsai_vidu2(loai) {
    let valueRange, maxRepeats, sokhoang, a, h, intervals, intervalsrutgon, intervalsrutgonnguyen, values, n, kq1, kq2, xngang, phuongsai;
    
    while (true) {
        valueRange = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        maxRepeats = 2;
        sokhoang = randomchoice(4, 6); 
        a = randomchoice(7, 12);       
        h = randomchoice(2, 6);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        intervalsrutgon = [];
        intervalsrutgonnguyen = [];
        for (let i = 0; i < sokhoang; i++) {
            intervalsrutgon.push(convert((2 * a + 2 * i * h + h) / 2));
            intervalsrutgonnguyen.push(2 * a + 2 * i * h + h);
        }
        
        values = generateValues(sokhoang, valueRange, maxRepeats); 
        n = tongcacphantu(values);
        
        kq1 = ketquatichhailist(intervalsrutgonnguyen, values);
        kq2 = n * ketquatichphuongsai(values, intervalsrutgonnguyen) - Math.pow(ketquatichhailist(values, intervalsrutgonnguyen), 2);
        
        const kq1Big = BigInt(kq1);
        const kq2Big = BigInt(kq2);
        const nBig = BigInt(n);
        const mauXNgangBig = 2n * nBig;
        const mauPSBig = 4n * nBig * nBig;
        
        const dk_vonglap = ((100n * kq1Big) % mauXNgangBig !== 0n) || (kq1Big % mauXNgangBig === 0n) || 
                           ((100n * kq2Big) % mauPSBig !== 0n) || (kq2Big % mauPSBig === 0n);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    xngang = convert(kq1 / (2 * n));
    phuongsai = convert(kq2 / (4 * n * n));
    
    const dsthang = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const thang = dsthang[randomchoice(0, dsthang.length - 1)];
    
    const debai = "Một công ty cung cấp nước sạch thống kê lượng nước sạch mỗi hộ gia đình ở một khu vực sử dụng trong tháng " + thang + "/2023 ở bảng sau (đơn vị: $\\text{m}^3$).\n" +
                  taobanglatex("Lượng nước ($\\text{m}^3$)", intervals, "Số hộ gia đình", values) + "\n" +
                  "Phương sai của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + phuongsai + "$";
    const PA2 = "$" + convert((5 * kq2 + k1 * 2 * n * n) / (20 * n * n)) + "$";
    const PA3 = "$" + convert((5 * kq2 + k2 * 2 * n * n) / (20 * n * n)) + "$";
    const PA4 = "$" + convert((5 * kq2 + k3 * 2 * n * n) / (20 * n * n)) + "$";
    
    const loigiai = "Ta có bảng thống kê theo giá trị đại diện\n" +
        taobangrutgon("Giá trị đại diện", intervalsrutgon, "Tần số", values) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Số trung bình của mẫu số liệu ghép nhóm\n" +
        "\\begin{align*}\n" +
        "\\overline{x}&=\\dfrac{" + tichhailist(values, intervalsrutgon) + "}{" + String(n) + "}\\\\\n" +
        "&=" + phanso(kq1, 2 * n) + "=" + xngang + ".\n" +
        "\\end{align*}\n" +
        "Phương sai của mẫu số liệu ghép nhóm\n" +
        "\\begin{align*}\n" +
        "S^2&=\\dfrac{1}{" + String(n) + "}(" + tichphuongsai(values, intervalsrutgon) + ")-" + xngang + "^2\\\\\n" +
        "&=" + phuongsai + ".\n" +
        "\\end{align*}";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    return "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + PA[0] + "}\n{" + PA[1] + "}\n{" + PA[2] + "}\n{" + PA[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
}


function Tim_phuongsai_vidu3(loai) {
    let valueRange, maxRepeats, sokhoang, a, h, intervals, intervalsrutgon, intervalsrutgonnguyen, values, n, kq1, kq2, xngang, phuongsai;
    
    while (true) {
        valueRange = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        maxRepeats = 2;
        sokhoang = randomchoice(4, 6); 
        a = randomchoice(38, 41);      
        h = randomchoice(2, 4);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        intervalsrutgon = [];
        intervalsrutgonnguyen = [];
        for (let i = 0; i < sokhoang; i++) {
            intervalsrutgon.push(convert((2 * a + 2 * i * h + h) / 2));
            intervalsrutgonnguyen.push(2 * a + 2 * i * h + h);
        }
        
        values = generateValues(sokhoang, valueRange, maxRepeats); 
        n = tongcacphantu(values);
        
        kq1 = ketquatichhailist(intervalsrutgonnguyen, values);
        kq2 = n * ketquatichphuongsai(values, intervalsrutgonnguyen) - Math.pow(ketquatichhailist(values, intervalsrutgonnguyen), 2);
        
        const kq1Big = BigInt(kq1);
        const kq2Big = BigInt(kq2);
        const nBig = BigInt(n);
        const mauXNgangBig = 2n * nBig;
        const mauPSBig = 4n * nBig * nBig;
        
        const dk_vonglap = ((100n * kq1Big) % mauXNgangBig !== 0n) || (kq1Big % mauXNgangBig === 0n) || 
                           ((100n * kq2Big) % mauPSBig !== 0n) || (kq2Big % mauPSBig === 0n);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    xngang = convert(kq1 / (2 * n));
    phuongsai = convert(kq2 / (4 * n * n));
    
    const ds_cumtu = ["thống kê lại", "ghi lại"];
    const cumtu = ds_cumtu[randomchoice(0, ds_cumtu.length - 1)];
    
    const debai = "Khối lượng của một số quả trứng gà trong một trang trại được " + cumtu + " ở bảng sau:\n" +
                  taobanglatex("Khối lượng (gam)", intervals, "Số quả trứng", values) + "\n" +
                  "Phương sai của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + phuongsai + "$";
    const PA2 = "$" + convert((5 * kq2 + k1 * 2 * n * n) / (20 * n * n)) + "$";
    const PA3 = "$" + convert((5 * kq2 + k2 * 2 * n * n) / (20 * n * n)) + "$";
    const PA4 = "$" + convert((5 * kq2 + k3 * 2 * n * n) / (20 * n * n)) + "$";
    
    const loigiai = "Ta có bảng thống kê theo giá trị đại diện\n" +
        taobangrutgon("Giá trị đại diện", intervalsrutgon, "Tần số", values) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Số trung bình của mẫu số liệu ghép nhóm\n" +
        "\\begin{align*}\n" +
        "\\overline{x}&=\\dfrac{" + tichhailist(values, intervalsrutgon) + "}{" + String(n) + "}\\\\\n" +
        "&=" + phanso(kq1, 2 * n) + "=" + xngang + ".\n" +
        "\\end{align*}\n" +
        "Phương sai của mẫu số liệu ghép nhóm\n" +
        "\\begin{align*}\n" +
        "S^2&=\\dfrac{1}{" + String(n) + "}(" + tichphuongsai(values, intervalsrutgon) + ")-" + xngang + "^2\\\\\n" +
        "&=" + phuongsai + ".\n" +
        "\\end{align*}";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    return "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + PA[0] + "}\n{" + PA[1] + "}\n{" + PA[2] + "}\n{" + PA[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
}

function Tim_phuongsai_vidu4(loai) {
    let valueRange, maxRepeats, sokhoang, a, h, intervals, intervalsrutgon, intervalsrutgonnguyen, values, n, kq1, kq2, xngang, phuongsai;
    
    while (true) {
        valueRange = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        maxRepeats = 2;
        sokhoang = randomchoice(4, 6); 
        a = randomchoice(45, 52);      
        h = randomchoice(2, 5);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        intervalsrutgon = [];
        intervalsrutgonnguyen = [];
        for (let i = 0; i < sokhoang; i++) {
            intervalsrutgon.push(convert((2 * a + 2 * i * h + h) / 2));
            intervalsrutgonnguyen.push(2 * a + 2 * i * h + h);
        }
        
        values = generateValues(sokhoang, valueRange, maxRepeats); 
        n = tongcacphantu(values);
        
        kq1 = ketquatichhailist(intervalsrutgonnguyen, values);
        kq2 = n * ketquatichphuongsai(values, intervalsrutgonnguyen) - Math.pow(ketquatichhailist(values, intervalsrutgonnguyen), 2);
        
        const kq1Big = BigInt(kq1);
        const kq2Big = BigInt(kq2);
        const nBig = BigInt(n);
        const mauXNgangBig = 2n * nBig;
        const mauPSBig = 4n * nBig * nBig;
        
        const dk_vonglap = ((100n * kq1Big) % mauXNgangBig !== 0n) || (kq1Big % mauXNgangBig === 0n) || 
                           ((100n * kq2Big) % mauPSBig !== 0n) || (kq2Big % mauPSBig === 0n);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    xngang = convert(kq1 / (2 * n));
    phuongsai = convert(kq2 / (4 * n * n));
    
    const debai = "Bảng dưới đây ghi lại tốc độ của một số chiếc xe ô tô khi đi qua một điểm đo tốc độ.\n" +
                  taobanglatex("Tốc độ (km/h)", intervals, "Số xe ô tô", values) + "\n" +
                  "Phương sai của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + phuongsai + "$";
    const PA2 = "$" + convert((5 * kq2 + k1 * 2 * n * n) / (20 * n * n)) + "$";
    const PA3 = "$" + convert((5 * kq2 + k2 * 2 * n * n) / (20 * n * n)) + "$";
    const PA4 = "$" + convert((5 * kq2 + k3 * 2 * n * n) / (20 * n * n)) + "$";
    
    const loigiai = "Ta có bảng thống kê theo giá trị đại diện\n" +
        taobangrutgon("Giá trị đại diện", intervalsrutgon, "Tần số", values) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Số trung bình của mẫu số liệu ghép nhóm\n" +
        "\\begin{align*}\n" +
        "\\overline{x}&=\\dfrac{" + tichhailist(values, intervalsrutgon) + "}{" + String(n) + "}\\\\\n" +
        "&=" + phanso(kq1, 2 * n) + "=" + xngang + ".\n" +
        "\\end{align*}\n" +
        "Phương sai của mẫu số liệu ghép nhóm\n" +
        "\\begin{align*}\n" +
        "S^2&=\\dfrac{1}{" + String(n) + "}(" + tichphuongsai(values, intervalsrutgon) + ")-" + xngang + "^2\\\\\n" +
        "&=" + phuongsai + ".\n" +
        "\\end{align*}";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    return "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + PA[0] + "}\n{" + PA[1] + "}\n{" + PA[2] + "}\n{" + PA[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
}

function Tim_phuongsai_vidu5(loai) {
    let valueRange, maxRepeats, sokhoang, a, h, intervals, intervalsrutgon, intervalsrutgonnguyen, values, n, kq1, kq2, xngang, phuongsai;
    
    while (true) {
        valueRange = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        maxRepeats = 2;
        sokhoang = randomchoice(4, 6); 
        a = randomchoice(4, 10);       
        h = randomchoice(1, 4);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        intervalsrutgon = [];
        intervalsrutgonnguyen = [];
        for (let i = 0; i < sokhoang; i++) {
            intervalsrutgon.push(convert((2 * a + 2 * i * h + h) / 2));
            intervalsrutgonnguyen.push(2 * a + 2 * i * h + h);
        }
        
        values = generateValues(sokhoang, valueRange, maxRepeats); 
        n = tongcacphantu(values);
        
        kq1 = ketquatichhailist(intervalsrutgonnguyen, values);
        kq2 = n * ketquatichphuongsai(values, intervalsrutgonnguyen) - Math.pow(ketquatichhailist(values, intervalsrutgonnguyen), 2);
        
        const kq1Big = BigInt(kq1);
        const kq2Big = BigInt(kq2);
        const nBig = BigInt(n);
        const mauXNgangBig = 2n * nBig;
        const mauPSBig = 4n * nBig * nBig;
        
        const dk_vonglap = ((100n * kq1Big) % mauXNgangBig !== 0n) || (kq1Big % mauXNgangBig === 0n) || 
                           ((100n * kq2Big) % mauPSBig !== 0n) || (kq2Big % mauPSBig === 0n);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    xngang = convert(kq1 / (2 * n));
    phuongsai = convert(kq2 / (4 * n * n));
    
    const dslop = ["12A", "12B", "12C", "12H", "11A", "11B", "11C", "11H"];
    const name = dslop[randomchoice(0, dslop.length - 1)];
    
    const ds_cumtu = [" được ghi lại", " được thống kê"];
    const cumtu = ds_cumtu[randomchoice(0, ds_cumtu.length - 1)];
    
    const debai = "Thời gian thực hiện xong một thí nghiệm hóa học của học sinh lớp " + name + cumtu + " ở bảng sau:\n" +
                  taobanglatex("Thời gian (phút)", intervals, "Số học sinh", values) + "\n" +
                  "Phương sai của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + phuongsai + "$";
    const PA2 = "$" + convert((5 * kq2 + k1 * 2 * n * n) / (20 * n * n)) + "$";
    const PA3 = "$" + convert((5 * kq2 + k2 * 2 * n * n) / (20 * n * n)) + "$";
    const PA4 = "$" + convert((5 * kq2 + k3 * 2 * n * n) / (20 * n * n)) + "$";
    
    const loigiai = "Ta có bảng thống kê theo giá trị đại diện\n" +
        taobangrutgon("Giá trị đại diện", intervalsrutgon, "Tần số", values) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Số trung bình của mẫu số liệu ghép nhóm\n" +
        "\\begin{align*}\n" +
        "\\overline{x}&=\\dfrac{" + tichhailist(values, intervalsrutgon) + "}{" + String(n) + "}\\\\\n" +
        "&=" + phanso(kq1, 2 * n) + "=" + xngang + ".\n" +
        "\\end{align*}\n" +
        "Phương sai của mẫu số liệu ghép nhóm\n" +
        "\\begin{align*}\n" +
        "S^2&=\\dfrac{1}{" + String(n) + "}(" + tichphuongsai(values, intervalsrutgon) + ")-" + xngang + "^2\\\\\n" +
        "&=" + phuongsai + ".\n" +
        "\\end{align*}";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    return "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + PA[0] + "}\n{" + PA[1] + "}\n{" + PA[2] + "}\n{" + PA[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
}

function Tim_phuongsai_vidu6(loai) {
    let valueRange, maxRepeats, sokhoang, a, h, intervals, intervalsrutgon, intervalsrutgonnguyen, values, n, kq1, kq2, xngang, phuongsai;
    
    while (true) {
        valueRange = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        maxRepeats = 2;
        sokhoang = randomchoice(4, 6); 
        a = randomchoice(15, 19);      
        h = randomchoice(2, 5);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        intervalsrutgon = [];
        intervalsrutgonnguyen = [];
        for (let i = 0; i < sokhoang; i++) {
            intervalsrutgon.push(convert((2 * a + 2 * i * h + h) / 2));
            intervalsrutgonnguyen.push(2 * a + 2 * i * h + h);
        }
        
        values = generateValues(sokhoang, valueRange, maxRepeats); 
        n = tongcacphantu(values);
        
        kq1 = ketquatichhailist(intervalsrutgonnguyen, values);
        kq2 = n * ketquatichphuongsai(values, intervalsrutgonnguyen) - Math.pow(ketquatichhailist(values, intervalsrutgonnguyen), 2);
        
        const kq1Big = BigInt(kq1);
        const kq2Big = BigInt(kq2);
        const nBig = BigInt(n);
        const mauXNgangBig = 2n * nBig;
        const mauPSBig = 4n * nBig * nBig;
        
        const dk_vonglap = ((100n * kq1Big) % mauXNgangBig !== 0n) || (kq1Big % mauXNgangBig === 0n) || 
                           ((100n * kq2Big) % mauPSBig !== 0n) || (kq2Big % mauPSBig === 0n);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    xngang = convert(kq1 / (2 * n));
    phuongsai = convert(kq2 / (4 * n * n));
    
    const dslop = ["12A", "12B", "12C", "12H", "11A", "11B", "11C", "11H"];
    const name = dslop[randomchoice(0, dslop.length - 1)];
    
    const dsmon = ["Toán", "Vật lí", "Hóa học", "Tiếng Anh"];
    const mon = dsmon[randomchoice(0, dsmon.length - 1)];
    
    const ds_cumtu = [" được ghi lại", " được thống kê", " được cho"];
    const cumtu = ds_cumtu[randomchoice(0, ds_cumtu.length - 1)];
    
    const debai = "Thời gian hoàn thành bài kiểm tra môn " + mon + " của các bạn trong lớp " + name + cumtu + " ở bảng sau:\n" +
                  taobanglatex("Thời gian (phút)", intervals, "Số học sinh", values) + "\n" +
                  "Phương sai của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + phuongsai + "$";
    const PA2 = "$" + convert((5 * kq2 + k1 * 2 * n * n) / (20 * n * n)) + "$";
    const PA3 = "$" + convert((5 * kq2 + k2 * 2 * n * n) / (20 * n * n)) + "$";
    const PA4 = "$" + convert((5 * kq2 + k3 * 2 * n * n) / (20 * n * n)) + "$";
    
    const loigiai = "Ta có bảng thống kê theo giá trị đại diện\n" +
        taobangrutgon("Giá trị đại diện", intervalsrutgon, "Tần số", values) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Số trung bình của mẫu số liệu ghép nhóm\n" +
        "\\begin{align*}\n" +
        "\\overline{x}&=\\dfrac{" + tichhailist(values, intervalsrutgon) + "}{" + String(n) + "}\\\\\n" +
        "&=" + phanso(kq1, 2 * n) + "=" + xngang + ".\n" +
        "\\end{align*}\n" +
        "Phương sai của mẫu số liệu ghép nhóm\n" +
        "\\begin{align*}\n" +
        "S^2&=\\dfrac{1}{" + String(n) + "}(" + tichphuongsai(values, intervalsrutgon) + ")-" + xngang + "^2\\\\\n" +
        "&=" + phuongsai + ".\n" +
        "\\end{align*}";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    return "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + PA[0] + "}\n{" + PA[1] + "}\n{" + PA[2] + "}\n{" + PA[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
}

// ==========================================
// HÀM 1: THỜI GIAN ĐI XE BUÝT (CÓ TÊN NGẪU NHIÊN)
// ==========================================
function Tim_trungbinh_vidu1(loai) {
    let valueRange, maxRepeats, sokhoang, a, h, intervals, intervalsrutgon, intervalsrutgonnguyen, values, n, kq1, xngang;
    
    while (true) {
        valueRange = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        maxRepeats = 2;
        sokhoang = randomchoice(4, 6); 
        a = randomchoice(15, 20);      
        h = randomchoice(2, 6);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        intervalsrutgon = [];
        intervalsrutgonnguyen = [];
        for (let i = 0; i < sokhoang; i++) {
            intervalsrutgon.push(convert((2 * a + 2 * i * h + h) / 2));
            intervalsrutgonnguyen.push(2 * a + 2 * i * h + h);
        }
        
        values = generateValues(sokhoang, valueRange, maxRepeats); 
        n = tongcacphantu(values);
        
        kq1 = ketquatichhailist(intervalsrutgonnguyen, values);
        
        const kq1Big = BigInt(kq1);
        const nBig = BigInt(n);
        const mauXNgangBig = 2n * nBig;
        
        const dk_vonglap = ((100n * kq1Big) % mauXNgangBig !== 0n) || (kq1Big % mauXNgangBig === 0n);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    xngang = convert(kq1 / (2 * n));
    
    const dsten = ["ông Thắng", "ông Dũng", "ông Nam", "ông Hùng", "ông Tiến", "ông Tuấn", "ông Hải", "ông Thịnh", "bà Oanh", "bà Lan", "bà Giang", "bà Hòa", "bà Hạnh", "bà Nga"];
    const name = dsten[randomchoice(0, dsten.length - 1)];
    
    const debai = "Hằng ngày " + name + " đều đi xe buýt từ nhà đến cơ quan. Dưới đây là bảng thống kê thời gian của những lần " + name + " đi xe buýt từ nhà đến cơ quan.\n" +
                  taobanglatex("Thời gian (phút)", intervals, "Số lần", values) + "\n" +
                  "Số trung bình của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + xngang + "$";
    const PA2 = "$" + convert((5 * kq1 + k1 * n) / (10 * n)) + "$";
    const PA3 = "$" + convert((5 * kq1 + k2 * n) / (10 * n)) + "$";
    const PA4 = "$" + convert((5 * kq1 + k3 * n) / (10 * n)) + "$";
    
    const loigiai = "Ta có bảng thống kê theo giá trị đại diện\n" +
        taobangrutgon("Giá trị đại diện", intervalsrutgon, "Tần số", values) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Số trung bình của mẫu số liệu ghép nhóm là\n" +
        "\\begin{align*}\n" +
        "\\overline{x}&=\\dfrac{" + tichhailist(values, intervalsrutgon) + "}{" + String(n) + "}\\\\\n" +
        "&=" + phanso(kq1, 2 * n) + "=" + xngang + ".\n" +
        "\\end{align*}";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    return "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + PA[0] + "}\n{" + PA[1] + "}\n{" + PA[2] + "}\n{" + PA[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
}

// ==========================================
// HÀM 2: LƯỢNG NƯỚC SỬ DỤNG (CÓ THÁNG NGẪU NHIÊN)
// ==========================================
function Tim_trungbinh_vidu2(loai) {
    let valueRange, maxRepeats, sokhoang, a, h, intervals, intervalsrutgon, intervalsrutgonnguyen, values, n, kq1, xngang;
    
    while (true) {
        valueRange = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        maxRepeats = 2;
        sokhoang = randomchoice(4, 6); 
        a = randomchoice(7, 12);       
        h = randomchoice(2, 6);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        intervalsrutgon = [];
        intervalsrutgonnguyen = [];
        for (let i = 0; i < sokhoang; i++) {
            intervalsrutgon.push(convert((2 * a + 2 * i * h + h) / 2));
            intervalsrutgonnguyen.push(2 * a + 2 * i * h + h);
        }
        
        values = generateValues(sokhoang, valueRange, maxRepeats); 
        n = tongcacphantu(values);
        
        kq1 = ketquatichhailist(intervalsrutgonnguyen, values);
        
        const kq1Big = BigInt(kq1);
        const nBig = BigInt(n);
        const mauXNgangBig = 2n * nBig;
        
        const dk_vonglap = ((100n * kq1Big) % mauXNgangBig !== 0n) || (kq1Big % mauXNgangBig === 0n);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    xngang = convert(kq1 / (2 * n));
    
    const dsthang = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const thang = dsthang[randomchoice(0, dsthang.length - 1)];
    
    const debai = "Một công ty cung cấp nước sạch thống kê lượng nước sạch mỗi hộ gia đình ở một khu vực sử dụng trong tháng " + thang + "/2023 ở bảng sau (đơn vị: $\\text{m}^3$).\n" +
                  taobanglatex("Lượng nước ($\\text{m}^3$)", intervals, "Số hộ gia đình", values) + "\n" +
                  "Số trung bình của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + xngang + "$";
    const PA2 = "$" + convert((5 * kq1 + k1 * n) / (10 * n)) + "$";
    const PA3 = "$" + convert((5 * kq1 + k2 * n) / (10 * n)) + "$";
    const PA4 = "$" + convert((5 * kq1 + k3 * n) / (10 * n)) + "$";
    
    const loigiai = "Ta có bảng thống kê theo giá vị đại diện\n" +
        taobangrutgon("Giá trị đại diện", intervalsrutgon, "Tần số", values) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Số trung bình của mẫu số liệu ghép nhóm là\n" +
        "\\begin{align*}\n" +
        "\\overline{x}&=\\dfrac{" + tichhailist(values, intervalsrutgon) + "}{" + String(n) + "}\\\\\n" +
        "&=" + phanso(kq1, 2 * n) + "=" + xngang + ".\n" +
        "\\end{align*}";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    return "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + PA[0] + "}\n{" + PA[1] + "}\n{" + PA[2] + "}\n{" + PA[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
}

// ==========================================
// HÀM 3: KHỐI LƯỢNG QUẢ TRỨNG GÀ (GAM)
// ==========================================
function Tim_trungbinh_vidu3(loai) {
    let valueRange, maxRepeats, sokhoang, a, h, intervals, intervalsrutgon, intervalsrutgonnguyen, values, n, kq1, xngang;
    
    while (true) {
        valueRange = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        maxRepeats = 2;
        sokhoang = randomchoice(4, 6); 
        a = randomchoice(38, 41);      
        h = randomchoice(2, 4);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        intervalsrutgon = [];
        intervalsrutgonnguyen = [];
        for (let i = 0; i < sokhoang; i++) {
            intervalsrutgon.push(convert((2 * a + 2 * i * h + h) / 2));
            intervalsrutgonnguyen.push(2 * a + 2 * i * h + h);
        }
        
        values = generateValues(sokhoang, valueRange, maxRepeats); 
        n = tongcacphantu(values);
        
        kq1 = ketquatichhailist(intervalsrutgonnguyen, values);
        
        const kq1Big = BigInt(kq1);
        const nBig = BigInt(n);
        const mauXNgangBig = 2n * nBig;
        
        const dk_vonglap = ((100n * kq1Big) % mauXNgangBig !== 0n) || (kq1Big % mauXNgangBig === 0n);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    xngang = convert(kq1 / (2 * n));
    
    const ds_cumtu = ["thống kê lại", "ghi lại"];
    const cumtu = ds_cumtu[randomchoice(0, ds_cumtu.length - 1)];
    
    const debai = "Khối lượng của một số quả trứng gà trong một trang trại được " + cumtu + " ở bảng sau:\n" +
                  taobanglatex("Khối lượng (gam)", intervals, "Số quả trứng", values) + "\n" +
                  "Số trung bình của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + xngang + "$";
    const PA2 = "$" + convert((5 * kq1 + k1 * n) / (10 * n)) + "$";
    const PA3 = "$" + convert((5 * kq1 + k2 * n) / (10 * n)) + "$";
    const PA4 = "$" + convert((5 * kq1 + k3 * n) / (10 * n)) + "$";
    
    const loigiai = "Ta có bảng thống kê theo giá trị đại diện\n" +
        taobangrutgon("Giá trị đại diện", intervalsrutgon, "Tần số", values) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Số trung bình của mẫu số liệu ghép nhóm là\n" +
        "\\begin{align*}\n" +
        "\\overline{x}&=\\dfrac{" + tichhailist(values, intervalsrutgon) + "}{" + String(n) + "}\\\\\n" +
        "&=" + phanso(kq1, 2 * n) + "=" + xngang + ".\n" +
        "\\end{align*}";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    return "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + PA[0] + "}\n{" + PA[1] + "}\n{" + PA[2] + "}\n{" + PA[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
}

// ==========================================
// HÀM 4: TỐC ĐỘ XE Ô TÔ (KM/H)
// ==========================================
function Tim_trungbinh_vidu4(loai) {
    let valueRange, maxRepeats, sokhoang, a, h, intervals, intervalsrutgon, intervalsrutgonnguyen, values, n, kq1, xngang;
    
    while (true) {
        valueRange = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        maxRepeats = 2;
        sokhoang = randomchoice(4, 6); 
        a = randomchoice(45, 52);      
        h = randomchoice(2, 5);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        intervalsrutgon = [];
        intervalsrutgonnguyen = [];
        for (let i = 0; i < sokhoang; i++) {
            intervalsrutgon.push(convert((2 * a + 2 * i * h + h) / 2));
            intervalsrutgonnguyen.push(2 * a + 2 * i * h + h);
        }
        
        values = generateValues(sokhoang, valueRange, maxRepeats); 
        n = tongcacphantu(values);
        
        kq1 = ketquatichhailist(intervalsrutgonnguyen, values);
        
        const kq1Big = BigInt(kq1);
        const nBig = BigInt(n);
        const mauXNgangBig = 2n * nBig;
        
        const dk_vonglap = ((100n * kq1Big) % mauXNgangBig !== 0n) || (kq1Big % mauXNgangBig === 0n);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    xngang = convert(kq1 / (2 * n));
    
    const debai = "Bảng dưới đây ghi lại tốc độ của một số chiếc xe ô tô khi đi qua một điểm đo tốc độ.\n" +
                  taobanglatex("Tốc độ (km/h)", intervals, "Số xe ô tô", values) + "\n" +
                  "Số trung bình của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + xngang + "$";
    const PA2 = "$" + convert((5 * kq1 + k1 * n) / (10 * n)) + "$";
    const PA3 = "$" + convert((5 * kq1 + k2 * n) / (10 * n)) + "$";
    const PA4 = "$" + convert((5 * kq1 + k3 * n) / (10 * n)) + "$";
    
    const loigiai = "Ta có bảng thống kê theo giá trị đại diện\n" +
        taobangrutgon("Giá trị đại diện", intervalsrutgon, "Tần số", values) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Số trung bình của mẫu số liệu ghép nhóm là\n" +
        "\\begin{align*}\n" +
        "\\overline{x}&=\\dfrac{" + tichhailist(values, intervalsrutgon) + "}{" + String(n) + "}\\\\\n" +
        "&=" + phanso(kq1, 2 * n) + "=" + xngang + ".\n" +
        "\\end{align*}";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    return "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + PA[0] + "}\n{" + PA[1] + "}\n{" + PA[2] + "}\n{" + PA[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
}

// ==========================================
// HÀM 5: THỜI GIAN THÍ NGHIỆM HÓA HỌC (THEO LỚP)
// ==========================================
function Tim_trungbinh_vidu5(loai) {
    let valueRange, maxRepeats, sokhoang, a, h, intervals, intervalsrutgon, intervalsrutgonnguyen, values, n, kq1, xngang;
    
    while (true) {
        valueRange = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        maxRepeats = 2;
        sokhoang = randomchoice(4, 6); 
        a = randomchoice(4, 10);       
        h = randomchoice(1, 4);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        intervalsrutgon = [];
        intervalsrutgonnguyen = [];
        for (let i = 0; i < sokhoang; i++) {
            intervalsrutgon.push(convert((2 * a + 2 * i * h + h) / 2));
            intervalsrutgonnguyen.push(2 * a + 2 * i * h + h);
        }
        
        values = generateValues(sokhoang, valueRange, maxRepeats); 
        n = tongcacphantu(values);
        
        kq1 = ketquatichhailist(intervalsrutgonnguyen, values);
        
        const kq1Big = BigInt(kq1);
        const nBig = BigInt(n);
        const mauXNgangBig = 2n * nBig;
        
        const dk_vonglap = ((100n * kq1Big) % mauXNgangBig !== 0n) || (kq1Big % mauXNgangBig === 0n);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    xngang = convert(kq1 / (2 * n));
    
    const dslop = ["12A", "12B", "12C", "12H", "11A", "11B", "11C", "11H"];
    const name = dslop[randomchoice(0, dslop.length - 1)];
    
    const ds_cumtu = [" được ghi lại", " được thống kê"];
    const cumtu = ds_cumtu[randomchoice(0, ds_cumtu.length - 1)];
    
    const debai = "Thời gian thực hiện xong một thí nghiệm hóa học của học sinh lớp " + name + cumtu + " ở bảng sau:\n" +
                  taobanglatex("Thời gian (phút)", intervals, "Số học sinh", values) + "\n" +
                  "Số trung bình của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + xngang + "$";
    const PA2 = "$" + convert((5 * kq1 + k1 * n) / (10 * n)) + "$";
    const PA3 = "$" + convert((5 * kq1 + k2 * n) / (10 * n)) + "$";
    const PA4 = "$" + convert((5 * kq1 + k3 * n) / (10 * n)) + "$";
    
    const loigiai = "Ta có bảng thống kê theo giá trị đại diện\n" +
        taobangrutgon("Giá trị đại diện", intervalsrutgon, "Tần số", values) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Số trung bình của mẫu số liệu ghép nhóm là\n" +
        "\\begin{align*}\n" +
        "\\overline{x}&=\\dfrac{" + tichhailist(values, intervalsrutgon) + "}{" + String(n) + "}\\\\\n" +
        "&=" + phanso(kq1, 2 * n) + "=" + xngang + ".\n" +
        "\\end{align*}";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    return "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + PA[0] + "}\n{" + PA[1] + "}\n{" + PA[2] + "}\n{" + PA[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
}

// ==========================================
// HÀM 6: THỜI GIAN HOÀN THÀNH BÀI KIỂM TRA (MON & LỚP NGẪU NHIÊN)
// ==========================================
function Tim_trungbinh_vidu6(loai) {
    let valueRange, maxRepeats, sokhoang, a, h, intervals, intervalsrutgon, intervalsrutgonnguyen, values, n, kq1, xngang;
    
    while (true) {
        valueRange = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        maxRepeats = 2;
        sokhoang = randomchoice(4, 6); 
        a = randomchoice(15, 19);      
        h = randomchoice(2, 5);        
        
        intervals = [];
        for (let i = 0; i <= sokhoang; i++) {
            intervals.push(String(a + i * h));
        }
        
        intervalsrutgon = [];
        intervalsrutgonnguyen = [];
        for (let i = 0; i < sokhoang; i++) {
            intervalsrutgon.push(convert((2 * a + 2 * i * h + h) / 2));
            intervalsrutgonnguyen.push(2 * a + 2 * i * h + h);
        }
        
        values = generateValues(sokhoang, valueRange, maxRepeats); 
        n = tongcacphantu(values);
        
        kq1 = ketquatichhailist(intervalsrutgonnguyen, values);
        
        const kq1Big = BigInt(kq1);
        const nBig = BigInt(n);
        const mauXNgangBig = 2n * nBig;
        
        const dk_vonglap = ((100n * kq1Big) % mauXNgangBig !== 0n) || (kq1Big % mauXNgangBig === 0n);
                           
        if (!dk_vonglap) {
            break; 
        }
    }
    
    xngang = convert(kq1 / (2 * n));
    
    const dslop = ["12A", "12B", "12C", "12H", "11A", "11B", "11C", "11H"];
    const name = dslop[randomchoice(0, dslop.length - 1)];
    
    const dsmon = ["Toán", "Vật lí", "Hóa học", "Tiếng Anh"];
    const mon = dsmon[randomchoice(0, dsmon.length - 1)];
    
    const ds_cumtu = [" được ghi lại", " được thống kê", " được cho"];
    const cumtu = ds_cumtu[randomchoice(0, ds_cumtu.length - 1)];
    
    const debai = "Thời gian hoàn thành bài kiểm tra môn " + mon + " của các bạn trong lớp " + name + cumtu + " ở bảng sau:\n" +
                  taobanglatex("Thời gian (phút)", intervals, "Số học sinh", values) + "\n" +
                  "Số trung bình của mẫu số liệu ghép nhóm trên là";
                  
    let k1, k2, k3;
    while (true) {
        k1 = randomchoice(-9, 9);
        k2 = randomchoice(-9, 9);
        k3 = randomchoice(-9, 9);
        if (k1 * k2 * k3 !== 0 && k1 !== k2 && k2 !== k3 && k1 !== k3) {
            break;
        }
    }
    
    const PA1 = "\\True $" + xngang + "$";
    const PA2 = "$" + convert((5 * kq1 + k1 * n) / (10 * n)) + "$";
    const PA3 = "$" + convert((5 * kq1 + k2 * n) / (10 * n)) + "$";
    const PA4 = "$" + convert((5 * kq1 + k3 * n) / (10 * n)) + "$";
    
    const loigiai = "Ta có bảng thống kê theo giá trị đại diện\n" +
        taobangrutgon("Giá trị đại diện", intervalsrutgon, "Tần số", values) +
        "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + "$.\\\\\n" +
        "Số trung bình của mẫu số liệu ghép nhóm là\n" +
        "\\begin{align*}\n" +
        "\\overline{x}&=\\dfrac{" + tichhailist(values, intervalsrutgon) + "}{" + String(n) + "}\\\\\n" +
        "&=" + phanso(kq1, 2 * n) + "=" + xngang + ".\n" +
        "\\end{align*}";
        
    const PA = [PA1, PA2, PA3, PA4];
    shuffle(PA);
    
    return "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + PA[0] + "}\n{" + PA[1] + "}\n{" + PA[2] + "}\n{" + PA[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
}


function congvectoOxyz(loai) {
    var a, b, c, m, n, p;
    var txt1, txt2, txt3, txt4;
    
    while (true) {
        a = randomchoice(-5, 5); b = randomchoice(-5, 5); c = randomchoice(-5, 5);
        m = randomchoice(-5, 5); n = randomchoice(-5, 5); p = randomchoice(-5, 5);
        
        if ((a === 0 && b === 0 && c === 0) || (m === 0 && n === 0 && p === 0)) {
            continue;
        }
        
        var kq_i = a + m;
        var kq_j = b + n;
        var kq_k = c + p;
        
        // Tạo chuỗi tọa độ thuần túy để so sánh
        txt1 = "$(" + kq_i + ";" + kq_j + ";" + kq_k + ")$";
        txt2 = "$(" + (kq_i + 1) + ";" + kq_j + ";" + kq_k + ")$";
        txt3 = "$(" + kq_i + ";" + (kq_j - 1) + ";" + kq_k + ")$";
        txt4 = "$(" + kq_i + ";" + kq_j + ";" + (kq_k + 2) + ")$";
        
        // So sánh xâu thuần túy, đảm bảo 4 nội dung hiển thị phải khác nhau
        if (txt1 !== txt2 && txt1 !== txt3 && txt1 !== txt4 && txt2 !== txt3 && txt2 !== txt4 && txt3 !== txt4) {
            break;
        }
    }
    
    // Sau khi đã sạch trùng mới thêm thẻ \\True vào đáp án đúng
    var PA1 = "\\True " + txt1;
    var PA2 = txt2;
    var PA3 = txt3;
    var PA4 = txt4;
    
    var questionchoice = [PA1, PA2, PA3, PA4];
    shuffle(questionchoice);
    
    var debai = "Trong không gian $Oxyz$, cho hai vectơ $\\overrightarrow{a}=(" + a + ";" + b + ";" + c + ")$ và $\\overrightarrow{b}=(" + m + ";" + n + ";" + p + ")$. Tọa độ của vectơ $\\overrightarrow{a} + \\overrightarrow{b}$ là";
    
    var loigiai = "Sử dụng công thức $\\overrightarrow{a}+\\overrightarrow{b}=(a_1+b_1;a_2+b_2;a_3+b_3)$, ta có:\n" +
                  "$$\\overrightarrow{a}+\\overrightarrow{b}=(" + a + sodungsaunew(m) + ";" + b + sodungsaunew(n) + ";" + c + sodungsaunew(p) + ")=(" + kq_i + ";" + kq_j + ";" + kq_k + ").$$";
    
    var cauhoi = "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + questionchoice[0] + "}\n{" + questionchoice[1] + "}\n{" + questionchoice[2] + "}\n{" + questionchoice[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
    return cauhoi;
}

function truvectoOxyz(loai) {
    var a, b, c, m, n, p;
    var txt1, txt2, txt3, txt4;
    
    while (true) {
        a = randomchoice(-5, 5); b = randomchoice(-5, 5); c = randomchoice(-5, 5);
        m = randomchoice(-5, 5); n = randomchoice(-5, 5); p = randomchoice(-5, 5);
        
        if ((a === 0 && b === 0 && c === 0) || (m === 0 && n === 0 && p === 0)) {
            continue;
        }
        
        var kq_i = a - m;
        var kq_j = b - n;
        var kq_k = c - p;
        
        // Tạo chuỗi tọa độ thuần túy để so sánh
        txt1 = "$(" + kq_i + ";" + kq_j + ";" + kq_k + ")$";
        txt2 = "$(" + (a + m) + ";" + kq_j + ";" + kq_k + ")$"; 
        txt3 = "$(" + kq_i + ";" + (b + n) + ";" + kq_k + ")$"; 
        txt4 = "$(" + kq_i + ";" + kq_j + ";" + (c + p) + ")$"; 
        
        // So sánh xâu thuần túy: Triệt tiêu hoàn toàn rủi ro lọt lưới trùng đáp án đúng
        if (txt1 !== txt2 && txt1 !== txt3 && txt1 !== txt4 && txt2 !== txt3 && txt2 !== txt4 && txt3 !== txt4) {
            break; 
        }
    }
    
    // Chỉ thêm \\True sau khi vòng lặp check trùng bằng xâu đã thông qua
    var PA1 = "\\True " + txt1;
    var PA2 = txt2;
    var PA3 = txt3;
    var PA4 = txt4;
    
    var questionchoice = [PA1, PA2, PA3, PA4];
    shuffle(questionchoice);
    
    var debai = "Trong không gian $Oxyz$, cho hai vectơ $\\overrightarrow{a}=(" + a + ";" + b + ";" + c + ")$ và $\\overrightarrow{b}=(" + m + ";" + n + ";" + p + ")$. Tọa độ của vectơ $\\overrightarrow{a} - \\overrightarrow{b}$ là";
    
    var loigiai = "Sử dụng công thức $\\overrightarrow{a}-\\overrightarrow{b}=(a_1-b_1;a_2-b_2;a_3-b_3)$, ta có:\n" +
                  "$$\\overrightarrow{a}-\\overrightarrow{b}=(" + a + sodungsaunew(-m) + ";" + b + sodungsaunew(-n) + ";" + c + sodungsaunew(-p) + ")=(" + kq_i + ";" + kq_j + ";" + kq_k + ").$$";
    
    var cauhoi = "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + questionchoice[0] + "}\n{" + questionchoice[1] + "}\n{" + questionchoice[2] + "}\n{" + questionchoice[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
    return cauhoi;
}

function tichvohuongOxyz(loai) {
    var a, b, c, m, n, p;
    
    // Vòng lặp đảm bảo không đồng thời là vectơ không
    while (true) {
        a = randomchoice(-5, 5);
        b = randomchoice(-5, 5);
        c = randomchoice(-5, 5);
        m = randomchoice(-5, 5);
        n = randomchoice(-5, 5);
        p = randomchoice(-5, 5);
        
        if (!((a === 0 && b === 0 && c === 0) || (m === 0 && n === 0 && p === 0))) {
            break;
        }
    }
    
    var dapan_dung = a * m + b * n + c * p;
    
    // Tự động ép chuỗi khi cộng với ký tự $
    var PA1 = "\\True $" + dapan_dung + "$";
    var PA2 = "$" + (dapan_dung + 1) + "$";
    var PA3 = "$" + (dapan_dung + 2) + "$";
    var PA4 = "$" + (dapan_dung + 3) + "$";
    var PA5 = "$" + (dapan_dung - 1) + "$";
    var PA6 = "$" + (dapan_dung - 2) + "$";
    var PA7 = "$" + (dapan_dung - 3) + "$";
    
    var questionwrongchoice = [PA2, PA3, PA4, PA5, PA6, PA7];
    shuffle(questionwrongchoice); 
    
    var questionchoice = [PA1, questionwrongchoice[0], questionwrongchoice[1], questionwrongchoice[2]];
    shuffle(questionchoice);
    
    var debai = "Trong không gian $Oxyz$, cho hai vectơ $\\overrightarrow{a}=(" + a + ";" + b + ";" + c + ")$ và $\\overrightarrow{b}=(" + m + ";" + n + ";" + p + ")$. Tích vô hướng $\\overrightarrow{a}.\\overrightarrow{b}$ bằng";
    
    // Sử dụng hàm sodungsau mới của anh để tối ưu lời giải
    var loigiai = "Sử dụng công thức $\\overrightarrow{a}\\cdot\\overrightarrow{b}=a_1b_1+a_2b_2+a_3b_3$ nếu $\\overrightarrow{a}=(a_1;a_2;a_3)$ và $\\overrightarrow{b}=(b_1;b_2;b_3)$, ta được\n" +
                     "$$\\overrightarrow{a}\\cdot\\overrightarrow{b}=" + (a * m) + sodungsau(b * n) + sodungsau(c * p) + "=" + dapan_dung + ".$$";
    
    var cauhoi = "\\begin{" + loai + "}\n" + 
                   debai + "\n" +
                   "\\choice\n" +
                   "{" + questionchoice[0] + "}\n" +
                   "{" + questionchoice[1] + "}\n" +
                   "{" + questionchoice[2] + "}\n" +
                   "{" + questionchoice[3] + "}\n" +
                   "\\loigiai{\n" + loigiai + "\n}\n" +
                   "\\end{" + loai + "}\n";
                   
    return cauhoi;
}

function congtruvectoOxyz1(loai) {
    var a, b, c, m, n, p, x, y, z;
    var txt1, txt2, txt3, txt4;
    
    while (true) {
        a = randomchoice(-5, 5); b = randomchoice(-5, 5); c = randomchoice(-5, 5);
        m = randomchoice(-5, 5); n = randomchoice(-5, 5); p = randomchoice(-5, 5);
        x = randomchoice(-5, 5); y = randomchoice(-5, 5); z = randomchoice(-5, 5);
        
        // Loại trừ vectơ không
        if ((a === 0 && b === 0 && c === 0) || (m === 0 && n === 0 && p === 0) || (x === 0 && y === 0 && z === 0)) {
            continue;
        }
        
        // Kết quả đúng: a - m + x
        var kq_i = a - m + x;
        var kq_j = b - n + y;
        var kq_k = c - p + z;
        
        txt1 = "$(" + kq_i + ";" + kq_j + ";" + kq_k + ")$";
        txt2 = "$(" + (a + m + x) + ";" + kq_j + ";" + kq_k + ")$"; // Nhầm dấu m
        txt3 = "$(" + kq_i + ";" + (b - n - y) + ";" + kq_k + ")$"; // Nhầm dấu y
        txt4 = "$(" + kq_i + ";" + kq_j + ";" + (c + p + z) + ")$"; // Nhầm cả m và p
        
        if (txt1 !== txt2 && txt1 !== txt3 && txt1 !== txt4 && txt2 !== txt3 && txt2 !== txt4 && txt3 !== txt4) {
            break;
        }
    }
    
    var PA1 = "\\True " + txt1; var PA2 = txt2; var PA3 = txt3; var PA4 = txt4;
    var questionchoice = [PA1, PA2, PA3, PA4];
    shuffle(questionchoice);
    
    var debai = "Trong không gian $Oxyz$, cho ba vectơ $\\overrightarrow{a}=(" + a + ";" + b + ";" + c + ")$, $\\overrightarrow{b}=(" + m + ";" + n + ";" + p + ")$ và $\\overrightarrow{c}=(" + x + ";" + y + ";" + z + ")$. Tọa độ của vectơ $\\overrightarrow{a} - \\overrightarrow{b} + \\overrightarrow{c}$ là";
    
    var loigiai = "Ta có \n" +
                  "$$\\overrightarrow{a} - \\overrightarrow{b} + \\overrightarrow{c} = (" + a + sodungsaunew(-m) + sodungsaunew(x) + ";" + b + sodungsaunew(-n) + sodungsaunew(y) + ";" + c + sodungsaunew(-p) + sodungsaunew(z) + ") = (" + kq_i + ";" + kq_j + ";" + kq_k + ").$$";
    
    var cauhoi = "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + questionchoice[0] + "}\n{" + questionchoice[1] + "}\n{" + questionchoice[2] + "}\n{" + questionchoice[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
    return cauhoi;
}

function congtruvectoOxyz2(loai) {
    var a, b, c, m, n, p, x, y, z;
    var txt1, txt2, txt3, txt4;
    
    while (true) {
        a = randomchoice(-5, 5); b = randomchoice(-5, 5); c = randomchoice(-5, 5);
        m = randomchoice(-5, 5); n = randomchoice(-5, 5); p = randomchoice(-5, 5);
        x = randomchoice(-5, 5); y = randomchoice(-5, 5); z = randomchoice(-5, 5);
        
        if ((a === 0 && b === 0 && c === 0) || (m === 0 && n === 0 && p === 0) || (x === 0 && y === 0 && z === 0)) {
            continue;
        }
        
        // Kết quả đúng: a + m - x
        var kq_i = a + m - x;
        var kq_j = b + n - y;
        var kq_k = c + p - z;
        
        txt1 = "$(" + kq_i + ";" + kq_j + ";" + kq_k + ")$";
        txt2 = "$(" + kq_i + ";" + (b - n - y) + ";" + kq_k + ")$"; // Nhầm dấu n
        txt3 = "$(" + kq_i + ";" + kq_j + ";" + (c + p + z) + ")$"; // Nhầm dấu z
        txt4 = "$(" + (a - m - x) + ";" + kq_j + ";" + kq_k + ")$"; // Nhầm dấu m
        
        if (txt1 !== txt2 && txt1 !== txt3 && txt1 !== txt4 && txt2 !== txt3 && txt2 !== txt4 && txt3 !== txt4) {
            break;
        }
    }
    
    var PA1 = "\\True " + txt1; var PA2 = txt2; var PA3 = txt3; var PA4 = txt4;
    var questionchoice = [PA1, PA2, PA3, PA4];
    shuffle(questionchoice);
    
    var debai = "Trong không gian $Oxyz$, cho ba vectơ $\\overrightarrow{a}=(" + a + ";" + b + ";" + c + ")$, $\\overrightarrow{b}=(" + m + ";" + n + ";" + p + ")$ và $\\overrightarrow{c}=(" + x + ";" + y + ";" + z + ")$. Tọa độ của vectơ $\\overrightarrow{a} + \\overrightarrow{b} - \\overrightarrow{c}$ là";
    
    var loigiai = "Ta có \n" +
                  "$$\\overrightarrow{a} + \\overrightarrow{b} - \\overrightarrow{c} = (" + a + sodungsaunew(m) + sodungsaunew(-x) + ";" + b + sodungsaunew(n) + sodungsaunew(-y) + ";" + c + sodungsaunew(p) + sodungsaunew(-z) + ") = (" + kq_i + ";" + kq_j + ";" + kq_k + ").$$";
    
    var cauhoi = "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + questionchoice[0] + "}\n{" + questionchoice[1] + "}\n{" + questionchoice[2] + "}\n{" + questionchoice[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
    return cauhoi;
}

function congtruvectoOxyz3(loai) {
    var a, b, c, m, n, p, x, y, z;
    var txt1, txt2, txt3, txt4;
    
    while (true) {
        a = randomchoice(-5, 5); b = randomchoice(-5, 5); c = randomchoice(-5, 5);
        m = randomchoice(-5, 5); n = randomchoice(-5, 5); p = randomchoice(-5, 5);
        x = randomchoice(-5, 5); y = randomchoice(-5, 5); z = randomchoice(-5, 5);
        
        if ((a === 0 && b === 0 && c === 0) || (m === 0 && n === 0 && p === 0) || (x === 0 && y === 0 && z === 0)) {
            continue;
        }
        
        // Kết quả đúng: -a + m - x
        var kq_i = -a + m - x;
        var kq_j = -b + n - y;
        var kq_k = -c + p - z;
        
        txt1 = "$(" + kq_i + ";" + kq_j + ";" + kq_k + ")$";
        txt2 = "$(" + (a + m - x) + ";" + kq_j + ";" + kq_k + ")$";  // Nhầm dấu a
        txt3 = "$(" + kq_i + ";" + (-b - n - y) + ";" + kq_k + ")$"; // Nhầm dấu m
        txt4 = "$(" + kq_i + ";" + kq_j + ";" + (-c + p + z) + ")$"; // Nhầm dấu c và z
        
        if (txt1 !== txt2 && txt1 !== txt3 && txt1 !== txt4 && txt2 !== txt3 && txt2 !== txt4 && txt3 !== txt4) {
            break;
        }
    }
    
    var PA1 = "\\True " + txt1; var PA2 = txt2; var PA3 = txt3; var PA4 = txt4;
    var questionchoice = [PA1, PA2, PA3, PA4];
    shuffle(questionchoice);
    
    var debai = "Trong không gian $Oxyz$, cho ba vectơ $\\overrightarrow{a}=(" + a + ";" + b + ";" + c + ")$, $\\overrightarrow{b}=(" + m + ";" + n + ";" + p + ")$ và $\\overrightarrow{c}=(" + x + ";" + y + ";" + z + ")$. Tọa độ của vectơ $-\\overrightarrow{a} + \\overrightarrow{b} - \\overrightarrow{c}$ là";
    
    // Phần tử đầu tiên là -a nên không dùng sodungsau, các phần tử sau dùng bình thường
    var loigiai = "Ta có \n" +
                  "$$-\\overrightarrow{a} + \\overrightarrow{b} - \\overrightarrow{c} = (" + (-a) + sodungsaunew(m) + sodungsaunew(-x) + ";" + (-b) + sodungsaunew(n) + sodungsaunew(-y) + ";" + (-c) + sodungsaunew(p) + sodungsaunew(-z) + ") = (" + kq_i + ";" + kq_j + ";" + kq_k + ").$$";
    
    var cauhoi = "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + questionchoice[0] + "}\n{" + questionchoice[1] + "}\n{" + questionchoice[2] + "}\n{" + questionchoice[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
    return cauhoi;
}

function trungdiemOxyz(loai) {
    var a, b, c, m, n, p;
    var txt1, txt2, txt3, txt4;
    
    while (true) {
        a = randomchoice(-5, 5); b = randomchoice(-5, 5); c = randomchoice(-5, 5);
        m = randomchoice(-5, 5); n = randomchoice(-5, 5); p = randomchoice(-5, 5);
        
        // Ép tổng tọa độ là số chẵn để kết quả nguyên đẹp
        if ((a + m) % 2 !== 0 || (b + n) % 2 !== 0 || (c + p) % 2 !== 0) {
            continue;
        }
        
        if (a === m && b === n && c === p) {
            continue;
        }
        
        var x1 = (a + m) / 2; var y1 = (b + n) / 2; var z1 = (c + p) / 2; 
        var x2 = a + m;       var y2 = b + n;       var z2 = c + p;       
        var x3 = (m - a) / 2; var y3 = (n - b) / 2; var z3 = (p - c) / 2; 
        var x4 = m - a;       var y4 = n - b;       var z4 = p - c;       
        
        txt1 = "$(" + x1 + ";" + y1 + ";" + z1 + ")$";
        txt2 = "$(" + x2 + ";" + y2 + ";" + z2 + ")$";
        txt3 = "$(" + x3 + ";" + y3 + ";" + z3 + ")$";
        txt4 = "$(" + x4 + ";" + y4 + ";" + z4 + ")$";
        
        if (txt1 !== txt2 && txt1 !== txt3 && txt1 !== txt4 && txt2 !== txt3 && txt2 !== txt4 && txt3 !== txt4) {
            break;
        }
    }
    
    var PA1 = "\\True " + txt1; var PA2 = txt2; var PA3 = txt3; var PA4 = txt4;
    var questionchoice = [PA1, PA2, PA3, PA4];
    shuffle(questionchoice);
    
    var debai = "Trong không gian $Oxyz$, cho hai điểm $A(" + a + ";" + b + ";" + c + ")$ và $B(" + m + ";" + n + ";" + p + ")$. Tọa độ trung điểm $I$ của đoạn thẳng $AB$ là";
    
    // Sử dụng hàm sodungsaunew mới
    var loigiai = "Tọa độ trung điểm $I$ của đoạn thẳng $AB$ được tính theo công thức $x_I=\\dfrac{x_A+x_B}{2}$, $y_I=\\dfrac{y_A+y_B}{2}$, $z_I=\\dfrac{z_A+z_B}{2}.$\\\\\n" + 
                  "Ta có\n" +
                  "$$I\\left(\\dfrac{" + a + sodungsaunew(m) + "}{2};\\dfrac{" + b + sodungsaunew(n) + "}{2};\\dfrac{" + c + sodungsaunew(p) + "}{2}\\right) = (" + x1 + ";" + y1 + ";" + z1 + ").$$";
    
    var cauhoi = "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + questionchoice[0] + "}\n{" + questionchoice[1] + "}\n{" + questionchoice[2] + "}\n{" + questionchoice[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
    return cauhoi;
}

function trongtamOxyz(loai) {
    var a, b, c, m, n, p, x, y, z;
    var txt1, txt2, txt3, txt4;
    
    while (true) {
        // Tọa độ A(a;b;c), B(m;n;p), C(x;y;z)
        a = randomchoice(-5, 5); b = randomchoice(-5, 5); c = randomchoice(-5, 5);
        m = randomchoice(-5, 5); n = randomchoice(-5, 5); p = randomchoice(-5, 5);
        x = randomchoice(-5, 5); y = randomchoice(-5, 5); z = randomchoice(-5, 5);
        
        var sum_x = a + m + x;
        var sum_y = b + n + y;
        var sum_z = c + p + z;
        
        // Chỉ cần ít nhất 1 tổng khác 0 là 4 phương án chắc chắn khác nhau hoàn toàn
        if (sum_x === 0 && sum_y === 0 && sum_z === 0) {
            continue;
        }
        
        // 1. KIỂM TRA THẲNG HÀNG VÀ TRÙNG NHAU (Điều kiện hình học bắt buộc của tam giác)
        var ab1 = m - a; var ab2 = n - b; var ab3 = p - c;
        var ac1 = x - a; var ac2 = y - b; var ac3 = z - c;
        
        var t1 = ab2 * ac3 - ab3 * ac2;
        var t2 = ab3 * ac1 - ab1 * ac3;
        var t3 = ab1 * ac2 - ab2 * ac1;
        
        if (t1 === 0 && t2 === 0 && t3 === 0) {
            continue;
        }
        
        // 2. Chuyển đổi tọa độ 4 phương án qua hàm phanso (Đúng = chia 3, Nhiễu = chia 1, 2, 4)
        var f_x1 = phanso(sum_x, 3); var f_y1 = phanso(sum_y, 3); var f_z1 = phanso(sum_z, 3); // Đúng (chia 3)
        var f_x2 = phanso(sum_x, 1); var f_y2 = phanso(sum_y, 1); var f_z2 = phanso(sum_z, 1); // Nhiễu (không chia)
        var f_x3 = phanso(sum_x, 2); var f_y3 = phanso(sum_y, 2); var f_z3 = phanso(sum_z, 2); // Nhiễu (chia 2)
        var f_x4 = phanso(sum_x, 4); var f_y4 = phanso(sum_y, 4); var f_z4 = phanso(sum_z, 4); // Nhiễu (chia 4)
        
        // 3. Hàm kiểm tra và thêm \left \right độc lập nếu phương án có ít nhất 1 phân số
        function dinhDangNgoac(fx, fy, fz) {
            var s_x = String(fx);
            var s_y = String(fy);
            var s_z = String(fz);
            
            if (s_x.includes("frac") || s_y.includes("frac") || s_z.includes("frac")) {
                return "\\left(" + fx + ";" + fy + ";" + fz + "\\right)";
            }
            return "(" + fx + ";" + fy + ";" + fz + ")";
        }
        
        txt1 = "$" + dinhDangNgoac(f_x1, f_y1, f_z1) + "$";
        txt2 = "$" + dinhDangNgoac(f_x2, f_y2, f_z2) + "$";
        txt3 = "$" + dinhDangNgoac(f_x3, f_y3, f_z3) + "$";
        txt4 = "$" + dinhDangNgoac(f_x4, f_y4, f_z4) + "$";
        
        // Khử trùng xâu tuyệt đối an toàn
        if (txt1 !== txt2 && txt1 !== txt3 && txt1 !== txt4 && txt2 !== txt3 && txt2 !== txt4 && txt3 !== txt4) {
            break;
        }
    }
    
    var PA1 = "\\True " + txt1; var PA2 = txt2; var PA3 = txt3; var PA4 = txt4;
    var questionchoice = [PA1, PA2, PA3, PA4];
    shuffle(questionchoice);
    
    var debai = "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(" + a + ";" + b + ";" + c + ")$, $B(" + m + ";" + n + ";" + p + ")$ và $C(" + x + ";" + y + ";" + z + ")$. Tọa độ trọng tâm $G$ của tam giác $ABC$ là";
    
    var ket_qua_loi_giai = dinhDangNgoac(f_x1, f_y1, f_z1);
    
    var loigiai = "Tọa độ trọng tâm $G$ của tam giác $ABC$ được tính theo công thức $x_G=\\dfrac{x_A+x_B+x_C}{3}$, $y_G=\\dfrac{y_A+y_B+y_C}{3}$, $z_G=\\dfrac{z_A+z_B+z_C}{3}.$\\\\\n" +
                  "Ta có\n" +
                  "$$G\\left(\\dfrac{" + a + sodungsaunew(m) + sodungsaunew(x) + "}{3};\\dfrac{" + b + sodungsaunew(n) + sodungsaunew(y) + "}{3};\\dfrac{" + c + sodungsaunew(p) + sodungsaunew(z) + "}{3}\\right) = " + ket_qua_loi_giai + ".$$";
    
    var cauhoi = "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + questionchoice[0] + "}\n{" + questionchoice[1] + "}\n{" + questionchoice[2] + "}\n{" + questionchoice[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
    return cauhoi;
}


function dodaivectoOxyz(loai) {
    var x, y, z;
    var txt1, txt2, txt3, txt4;
    
    while (true) {
        x = randomchoice(-5, 5);
        y = randomchoice(-5, 5);
        z = randomchoice(-5, 5);
        
        // Không chọn vectơ không
        if (x === 0 && y === 0 && z === 0) {
            continue;
        }
        
        // n1: Đúng (Tổng các bình phương)
        var n1 = x * x + y * y + z * z;
        
        // n2: Bẫy tính nhầm bình phương số âm thành số âm (x^2 + y^2 - z^2)
        var n2 = x * x + y * y - z * z; 
        
        // Ép điều kiện n2 phải lớn hơn 0 để hàm canbachai chạy chuẩn
        if (n2 <= 0) {
            continue;
        }
        
        // n3: Bẫy TỔNG TRỊ TUYỆT ĐỐI 3 TỌA ĐỘ theo ý anh (|x| + |y| + |z|)
        var n3 = Math.abs(x) + Math.abs(y) + Math.abs(z);
        
        txt1 = "$" + canbachai(n1) + "$";
        txt2 = "$" + n1 + "$";  // Bẫy quên khai căn
        txt3 = "$" + canbachai(n2) + "$";
        txt4 = "$" + n3 + "$";  // Bẫy tổng trị tuyệt đối (đây là số nguyên luôn nên ko cần qua canbachai)
        
        // Khử trùng xâu tuyệt đối, đảm bảo bẫy tổng trị tuyệt đối không trùng với các đáp án khác
        if (txt1 !== txt2 && txt1 !== txt3 && txt1 !== txt4 && txt2 !== txt3 && txt2 !== txt4 && txt3 !== txt4) {
            break;
        }
    }
    
    var PA1 = "\\True " + txt1; var PA2 = txt2; var PA3 = txt3; var PA4 = txt4;
    var questionchoice = [PA1, PA2, PA3, PA4];
    shuffle(questionchoice);
    
    var debai = "Trong không gian $Oxyz$, cho vectơ $\\overrightarrow{a}=(" + x + ";" + y + ";" + z + ")$. Độ dài của vectơ $\\overrightarrow{a}$ bằng";
    
    var b_x = x < 0 ? "(" + x + ")^2" : x + "^2";
    var b_y = y < 0 ? "(" + y + ")^2" : y + "^2";
    var b_z = z < 0 ? "(" + z + ")^2" : z + "^2";
    
    var loigiai = "Độ dài của vectơ $\\overrightarrow{a}=(x;y;z)$ được tính theo công thức $|\\overrightarrow{a}| = \\sqrt{x^2+y^2+z^2}.$\\\\\n" +
                  "Ta có\n" +
                  "$$|\\overrightarrow{a}| = \\sqrt{" + b_x + "+" + b_y + "+" + b_z + "} = " + canbachai(n1) + ".$$";
    
    var cauhoi = "\\begin{" + loai + "}\n" + debai + "\n\\choice\n{" + questionchoice[0] + "}\n{" + questionchoice[1] + "}\n{" + questionchoice[2] + "}\n{" + questionchoice[3] + "}\n\\loigiai{\n" + loigiai + "\n}\n\\end{" + loai + "}\n";
    return cauhoi;
}
