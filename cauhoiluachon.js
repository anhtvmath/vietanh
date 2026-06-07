// Câu 1
var a, b;
    while (true) {
        a = randomchoice(-6, 6);
        b = randomchoice(-6, 6);
    if (a !== b && a !== -b && a * b !== 0 && (a > 0 || b > 0)) break;
    }
document.getElementById("debaicau1").innerHTML = "Họ nguyên hàm của hàm số $f(x) = "+hesodau(a,"\\sin x")+hesosau(b,"\\cos x")+"$ là";
document.getElementById("PAdung1").innerHTML = "$"+hesodau(-a,"\\cos x")+hesosau(b,"\\sin x")+"+C$";
document.getElementById("PA1Cau1").innerHTML = "$"+hesodau(a,"\\cos x")+hesosau(-b,"\\sin x")+"+C$";
document.getElementById("PA2Cau1").innerHTML = "$"+hesodau(-a,"\\cos x")+hesosau(-b,"\\sin x")+"+C$";
document.getElementById("PA3Cau1").innerHTML = "$"+hesodau(a,"\\cos x")+hesosau(b,"\\sin x")+"+C$";
document.getElementById("loigiaicau1").innerHTML = "Ta có\n" + 
                "\\begin{equation*}\n" + 
                "\\displaystyle\\int f(x)\\mathrm{d}x=\\displaystyle\\int ("+hesodau(a,"\\sin x")+hesosau(b,"\\cos x")+")\\mathrm{d}x="+hesodau(-a,"\\cos x")+hesosau(b,"\\sin x")+"+C.\n" + 
                "\\end{equation*}";
// Câu 2
var a, b, m, n, canduoi, cantren;
var res1, res2, res3, res4;
while (true) {
    a = randomchoice(-5, 6);
    b = randomchoice(-5, 6);
    m = randomchoice(-4, 5);
    n = randomchoice(-4, 5);
    if (a !== 0 && b !== 0 && m !== 0 && n !== 0 && m !== n && m !== -n && !(m < 0 && n < 0)) {
        res1 = m * a + n * b;
        res2 = m * a - n * b;
        res3 = m * b + n * a;
        res4 = m * a + b;
        if (res1 !== res2 && res1 !== res3 && res1 !== res4 &&
            res2 !== res3 && res2 !== res4 && res3 !== res4) {
            break;
        }
    }
}
canduoi = randomchoice(-4, 2);
cantren = randomchoice(3, 6);
var tichphan = "\\displaystyle\\int\\limits" + format_canduoi(canduoi) + format_cantren(cantren);
var dx = "\\mathrm{d}x";
var bieu_thuc = hesodau(m, "f(x)") + hesosau(n, "g(x)");
document.getElementById("debaicau2").innerHTML = "Nếu $" + tichphan + " f(x)" + dx + "=" + a + "$ và $" + tichphan + " g(x)" + dx + "=" + b + "$ thì $" + tichphan + "\\big[" + bieu_thuc + "\\big]" + dx + "$ bằng";
document.getElementById("PAdung2").innerHTML = "$" + res1 + "$";
document.getElementById("PA1Cau2").innerHTML = "$" + res2 + "$";
document.getElementById("PA2Cau2").innerHTML = "$" + res3 + "$";
document.getElementById("PA3Cau2").innerHTML = "$" + res4 + "$";
document.getElementById("loigiaicau2").innerHTML = "Ta có\n" +
"\\begin{align*}\n" +
tichphan + "\\big[" + bieu_thuc + "\\big]" + dx +
"&=" + hesodau(m, tichphan + " f(x)" + dx) + hesosau(n, tichphan + " g(x)" + dx) + "\\\\\n" +
"&=" + m * a + sodungsau(n * b) + "\\\\\n" +
"&=" + res1 + ".\n" +
"\\end{align*}";
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

// Câu 4
document.getElementById("debaicau4").innerHTML = "Cho hai biến cố $A$ và $B$ có $P(A)=0,6$; $P(B)=0,4$ và $P(AB)=0,3$. Xác suất $P(B|A)$ bằng";
document.getElementById("PAdung4").innerHTML = "$\\dfrac{1}{2}$";
document.getElementById("PA1Cau4").innerHTML = "$\\dfrac{2}{3}$";
document.getElementById("PA2Cau4").innerHTML = "$0,4$";
document.getElementById("PA3Cau4").innerHTML = "$\\dfrac{3}{4}$";
document.getElementById("loigiaicau4").innerHTML = "Ta có \\begin{equation*}P(B|A)=\\dfrac{P(AB)}{P(A)}=\\dfrac{0,3}{0,6}=\\dfrac{1}{2}.\\end{equation*}";
// Câu 5
var a, b, c;
while (true) {
    a = randomchoice(1, 6);
    b = randomchoice(-6, 7);
    c = randomchoice(-6, 7);
    if (b > c) break;
}
var PAtrue_options = ["(" + (-a) + ";0)", "(" + a + ";+\\infty)"];
var PAtrue = PAtrue_options[randomchoice(0, 1)];
var PA1 = "$" + PAtrue + "$";
var PA2 = "$(" + 0 + ";" + a + ")$";
var PA3 = "$(-\\infty;" + (-a) + ")$";
var PA4_options = ["(" + (-a) + ";" + a + ")", "(-\\infty;" + a + ")", "(" + (-a) + ";+\\infty)"];
var PA4 = "$" + PA4_options[randomchoice(0, 2)] + "$";
var cumtuArr = ["Dựa vào ", "Từ "];
var ketluanArr = [" Do đó ", " Vậy "];
var cumtu = cumtuArr[randomchoice(0, 1)];
var ketluan = ketluanArr[randomchoice(0, 1)];
var debai = "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:\n" +
            "\\begin{tikzpicture}[thick,xscale=0.75,yscale=0.3]\n" +
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
            "\\end{tikzpicture}\n" +
            "Hàm số đã cho nghịch biến trên khoảng nào dưới đây?";
var loigiai = cumtu + "bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in " + PAtrue + "$." + ketluan + "hàm số đã cho nghịch biến trên khoảng $" + PAtrue + ".$";
var options = [PA2, PA3, PA4];
shuffle(options);
document.getElementById("debaicau5").innerHTML = debai;
document.getElementById("PAdung5").innerHTML = PA1;
document.getElementById("PA1Cau5").innerHTML = options[0];
document.getElementById("PA2Cau5").innerHTML = options[1];
document.getElementById("PA3Cau5").innerHTML = options[2];
document.getElementById("loigiaicau5").innerHTML = loigiai + "<br/>";
