 // Câu 1
    document.getElementById("debaicau1").innerHTML = "Hằng ngày bà Oanh đều đi xe buýt từ nhà đến cơ quan. Dưới đây là bảng thống kê thời gian của những lần bà Oanh đi xe buýt từ nhà đến cơ quan. <table border='1' cellpadding='6' style='border-collapse: collapse; text-align:center; margin: 10px auto;'><tr><td style='padding:5px;'>Thời gian (phút)</td><td style='padding:5px;'>$[15; 19)$</td><td style='padding:5px;'>$[19; 23)$</td><td style='padding:5px;'>$[23; 27)$</td><td style='padding:5px;'>$[27; 31)$</td><td style='padding:5px;'>$[31; 35)$</td></tr><tr><td style='padding:5px;'>Số lần</td><td style='padding:5px;'>$12$</td><td style='padding:5px;'>$7$</td><td style='padding:5px;'>$5$</td><td style='padding:5px;'>$12$</td><td style='padding:5px;'>$3$</td></tr></table> Tứ phân vị thứ ba của mẫu số liệu ghép nhóm trên là";
    document.getElementById("PAdung1").innerHTML = "$28,75$";
    document.getElementById("PA1Cau1").innerHTML = "$29,65$";
    document.getElementById("PA2Cau1").innerHTML = "$27,85$";
    document.getElementById("PA3Cau1").innerHTML = "$27,95$";
    document.getElementById("loigiaicau1").innerHTML = "Ta có bảng <table border='1' cellpadding='6' style='border-collapse: collapse; text-align:center; margin: 10px auto;'><tr><td style='padding:5px;'>Nhóm</td><td style='padding:5px;'>$[15; 19)$</td><td style='padding:5px;'>$[19; 23)$</td><td style='padding:5px;'>$[23; 27)$</td><td style='padding:5px;'>$[27; 31)$</td><td style='padding:5px;'>$[31; 35)$</td></tr><tr><td style='padding:5px;'>Tần số</td><td style='padding:5px;'>$n_1=12$</td><td style='padding:5px;'>$n_2=7$</td><td style='padding:5px;'>$n_3=5$</td><td style='padding:5px;'>$n_4=12$</td><td style='padding:5px;'>$n_5=3$</td></tr><tr><td style='padding:5px;'>Tần số tích lũy</td><td style='padding:5px;'>$cf_1=12$</td><td style='padding:5px;'>$cf_2=19$</td><td style='padding:5px;'>$cf_3=24$</td><td style='padding:5px;'>$cf_4=36$</td><td style='padding:5px;'>$cf_5=39$</td></tr></table> Cỡ mẫu là $n=12+7+5+12+3=39$.<br/> Ta thấy $cf_3=24 < \\dfrac{3n}{4}=\\dfrac{117}{4}\\leq cf_4=36$ nên nhóm chứa tứ phân vị thứ ba là nhóm $[27; 31)$.<br/> Vậy tứ phân vị thứ ba của mẫu số liệu ghép nhóm là $$Q_3=a_4+\\dfrac{\\dfrac{3n}{4}-cf_3}{n_4}(a_5-a_4)=27+\\dfrac{\\dfrac{117}{4}-24}{12}(31-27)=28,75.$$";
    // Câu 2
    document.getElementById("debaicau2").innerHTML = "Cho hai biến cố $A$ và $B$ có $P(A)=0,6$; $P(B)=0,4$ và $P(AB)=0,3$. Xác suất $P(B|A)$ bằng";
    document.getElementById("PAdung2").innerHTML = "$\\dfrac{1}{2}$";
    document.getElementById("PA1Cau2").innerHTML = "$\\dfrac{2}{3}$";
    document.getElementById("PA2Cau2").innerHTML = "$0,4$";
    document.getElementById("PA3Cau2").innerHTML = "$\\dfrac{3}{4}$";
    document.getElementById("loigiaicau2").innerHTML = "Ta có $$P(B|A)=\\dfrac{P(AB)}{P(A)}=\\dfrac{0,3}{0,6}=\\dfrac{1}{2}.$$";
    // Câu 3
    document.getElementById("debaicau3").innerHTML = "Đề bài câu 3";
    document.getElementById("PAdung3").innerHTML = "Đáp án đúng câu 3";
    document.getElementById("PA1Cau3").innerHTML = "Đáp án sai 1 của câu 3";
    document.getElementById("PA2Cau3").innerHTML = "Đáp án sai 2 của câu 3";
    document.getElementById("PA3Cau3").innerHTML = "Đáp án sai 3 của câu 3";
    document.getElementById("loigiaicau3").innerHTML = "Bảng biến thiên\n" +
    "\\begin{tikzpicture}[thick,xscale=0.95,yscale=0.5]\n" + 
    "\\def\\a{8}\n" + 
    "\\def\\b{7}\n" + 
    "\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);\n" + 
    "\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);\n" + 
    "\\draw (-0.5,-1.5)--(\\a-0.5,-1.5);\n" + 
    "\\draw (0.5,0.5)--(0.5,-\\b+0.5);\n" + 
    "\\path\n" + 
    "(0,0) node{$"+"x"+"$}\n" + 
    "(0,-1) node{$"+"f"+"'("+"x"+")$}\n" + 
    "(0,-4) node{$"+"f"+"("+"x"+")$}\n" + 
    "(1,0) node{$-\\infty$}\n" + 
    "(1,-6) node(A){$-\\infty$}\n" + 
    "(3,0) node{$"+1+"$}\n" + 
    "(3,-1) node{$0$}\n" + 
    "(3,-3) node(B){$"+3+"$}\n" + 
    "(5,0) node{$"+2+"$}\n" + 
    "(5,-1) node{$0$}\n" + 
    "(5,-5) node(C){$"+4+"$}\n" + 
    "(7,0) node{$+\\infty$}\n" + 
    "(7,-2) node(D){$+\\infty$}\n" + 
    "(2,-1) node{$+$}\n" + 
    "(4,-1) node{$-$}\n" + 
    "(6,-1) node{$+$};\n" + 
    "\\draw[->,>=stealth] (A)--(B);\n" + 
    "\\draw[->,>=stealth] (B)--(C);\n" + 
    "\\draw[->,>=stealth] (C)--(D);\n" + 
    "\\end{tikzpicture}";

// [LỰA CHỌN] Câu 4
document.getElementById("debaicau4").innerHTML = "Cho hai biến cố $A$ và $B$ có $P(A)=0,6$; $P(B)=0,4$ và $P(AB)=0,3$. Xác suất $P(B|A)$ bằng";
document.getElementById("PAdung4").innerHTML = "$\\dfrac{1}{2}$";
document.getElementById("PA1Cau4").innerHTML = "$\\dfrac{2}{3}$";
document.getElementById("PA2Cau4").innerHTML = "$0,4$";
document.getElementById("PA3Cau4").innerHTML = "$\\dfrac{3}{4}$";
document.getElementById("loigiaicau4").innerHTML = "Ta có<br/>$$P(B|A)=\\dfrac{P(AB)}{P(A)}=\\dfrac{0,3}{0,6}=\\dfrac{1}{2}.$$";

// Câu 5
document.getElementById("debaicau5").innerHTML = "Đề bài câu 5 nhé nhé nhé nhé";
document.getElementById("PAdung5").innerHTML = "Đáp án đúng câu 5";
document.getElementById("PA1Cau5").innerHTML = "Đáp án sai 1 của câu 5";
document.getElementById("PA2Cau5").innerHTML = "Đáp án sai 2 của câu 5";
document.getElementById("PA3Cau5").innerHTML = "Đáp án sai 3 của câu 5";
document.getElementById("loigiaicau5").innerHTML = "Lời giải câu 5.<br/>";

// Câu 6
document.getElementById("debaicau6").innerHTML = "Đề bài câu 6 nhé nhé nhé";
document.getElementById("PAdung6").innerHTML = "Đáp án đúng câu 6";
document.getElementById("PA1Cau6").innerHTML = "Đáp án sai 1 của câu 6";
document.getElementById("PA2Cau6").innerHTML = "Đáp án sai 2 của câu 6";
document.getElementById("PA3Cau6").innerHTML = "Đáp án sai 3 của câu 6";
document.getElementById("loigiaicau6").innerHTML = "Lời giải câu 6.<br/>";

// Câu 7
document.getElementById("debaicau7").innerHTML = "Đề bài câu 7 nhé nhé nhé";
document.getElementById("PAdung7").innerHTML = "Đáp án đúng câu 7";
document.getElementById("PA1Cau7").innerHTML = "Đáp án sai 1 của câu 7";
document.getElementById("PA2Cau7").innerHTML = "Đáp án sai 2 của câu 7";
document.getElementById("PA3Cau7").innerHTML = "Đáp án sai 3 của câu 7";
document.getElementById("loigiaicau7").innerHTML = "Lời giải câu 7.<br/>";

// Câu 8
document.getElementById("debaicau8").innerHTML = "Đề bài câu 8 nhé nhé nhé nhé";
document.getElementById("PAdung8").innerHTML = "Đáp án đúng câu 8";
document.getElementById("PA1Cau8").innerHTML = "Đáp án sai 1 của câu 8";
document.getElementById("PA2Cau8").innerHTML = "Đáp án sai 2 của câu 8";
document.getElementById("PA3Cau8").innerHTML = "Đáp án sai 3 của câu 8";
document.getElementById("loigiaicau8").innerHTML = "Lời giải câu 8.<br/>";

// Câu 9
document.getElementById("debaicau9").innerHTML = "Đề bài câu 9";
document.getElementById("PAdung9").innerHTML = "Đáp án đúng câu 9";
document.getElementById("PA1Cau9").innerHTML = "Đáp án sai 1 của câu 9";
document.getElementById("PA2Cau9").innerHTML = "Đáp án sai 2 của câu 9";
document.getElementById("PA3Cau9").innerHTML = "Đáp án sai 3 của câu 9";
document.getElementById("loigiaicau9").innerHTML = "Lời giải câu 9.<br/>";

// Câu 10
// [LỰA CHỌN] Câu 10
document.getElementById("debaicau10").innerHTML = "Họ nguyên hàm của hàm số $f(x) = -6\\sin x+5\\cos x$ là";
document.getElementById("PAdung10").innerHTML = "$6\\cos x+5\\sin x+C$";
document.getElementById("PA1Cau10").innerHTML = "$-6\\cos x-5\\sin x+C$";
document.getElementById("PA2Cau10").innerHTML = "$6\\cos x-5\\sin x+C$";
document.getElementById("PA3Cau10").innerHTML = "$-6\\cos x+5\\sin x+C$";
document.getElementById("loigiaicau10").innerHTML = "Ta có<br/>\\begin{equation*}<br/>\\displaystyle\\int f(x)\\mathrm{d}x=\\displaystyle\\int (-6\\sin x+5\\cos x)\\mathrm{d}x=6\\cos x+5\\sin x+C.<br/>\\end{equation*}";

// Câu 11
document.getElementById("debaicau11").innerHTML = "Đề bài câu 11";
document.getElementById("PAdung11").innerHTML = "Đáp án đúng câu 11";
document.getElementById("PA1Cau11").innerHTML = "Đáp án sai 1 của câu 11";
document.getElementById("PA2Cau11").innerHTML = "Đáp án sai 2 của câu 11";
document.getElementById("PA3Cau11").innerHTML = "Đáp án sai 3 của câu 11";
document.getElementById("loigiaicau11").innerHTML = "Lời giải câu 11.<br/>";

// Câu 12
document.getElementById("debaicau12").innerHTML = "Đề bài câu 12";
document.getElementById("PAdung12").innerHTML = "Đáp án đúng câu 12";
document.getElementById("PA1Cau12").innerHTML = "Đáp án sai 1 của câu 12";
document.getElementById("PA2Cau12").innerHTML = "Đáp án sai 2 của câu 12";
document.getElementById("PA3Cau12").innerHTML = "Đáp án sai 3 của câu 12";
document.getElementById("loigiaicau12").innerHTML = "Lời giải câu 12.<br/>";