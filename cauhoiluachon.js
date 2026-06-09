document.getElementById("debaicau1").innerHTML =
"Khối lượng của một số quả trứng gà trong một trang trại được thống kê lại ở bảng sau: " +
"<table class='quiz-table'>" +
"<tr>" +
"<td>Khối lượng (gam)</td>" +
"<td>$[39; 42)$</td>" +
"<td>$[42; 45)$</td>" +
"<td>$[45; 48)$</td>" +
"<td>$[48; 51)$</td>" +
"<td>$[51; 54)$</td>" +
"</tr>" +
"<tr>" +
"<td>Số quả trứng</td>" +
"<td>$7$</td>" +
"<td>$6$</td>" +
"<td>$2$</td>" +
"<td>$3$</td>" +
"<td>$7$</td>" +
"</tr>" +
"</table> Số trung bình của mẫu số liệu ghép nhóm trên là";

document.getElementById("PAdung1").innerHTML = "$46,14$";
document.getElementById("PA1Cau1").innerHTML = "$45,74$";
document.getElementById("PA2Cau1").innerHTML = "$46,94$";
document.getElementById("PA3Cau1").innerHTML = "$45,34$";

document.getElementById("loigiaicau1").innerHTML =
"Ta có bảng thống kê theo giá trị đại diện " +
"<table class='quiz-table'>" +
"<tr>" +
"<td>Giá trị đại diện</td>" +
"<td>$40,5$</td>" +
"<td>$43,5$</td>" +
"<td>$46,5$</td>" +
"<td>$49,5$</td>" +
"<td>$52,5$</td>" +
"</tr>" +
"<tr>" +
"<td>Tần số</td>" +
"<td>$7$</td>" +
"<td>$6$</td>" +
"<td>$2$</td>" +
"<td>$3$</td>" +
"<td>$7$</td>" +
"</tr>" +
"</table>" +
"Cỡ mẫu là $n=25$.<br/>" +
"Số trung bình là \\(\\overline{x} = 46,14\\).";


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
    PA1 = "$" + khoangDung + "$";
    // Nhiễu bằng tung độ cực trị: vì a > 0 nên y2 < y1, viết (y2; y1) cho đúng quy tắc khoảng
    PA2 = "$(" + y2 + ";" + y1 + ")$"; 
    PA3 = "$(-\\infty;" + x1 + ")$";
    PA4 = "$(" + x2 + ";+\\infty)$";
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
    PA1 = "$" + khoangDung + "$";
    PA2 = "$(" + x1 + ";" + x2 + ")$"; 
    var nhieuQuocDan = [
        "$(-\\infty;" + x2 + ")$",
        "$(" + x1 + ";+\\infty)$",
        "$(-\\infty;+\\infty)$"
    ];
    shuffle(nhieuQuocDan);
    PA3 = nhieuQuocDan[0];
    PA4 = nhieuQuocDan[1];
    loigiaiTxt = "Dựa vào đồ thị, ta thấy đồ thị hàm số đi lên từ trái sang phải trên các khoảng $(-\\infty;" + x1 + ")$ và $(" + x2 + ";+\\infty)$. " + 
                    "Trong các phương án đã cho, có khoảng $" + khoangDung + "$ là thỏa mãn.";
}
var options = [PA2, PA3, PA4];
shuffle(options);
document.getElementById("debaicau3").innerHTML = "Cho hàm số $y=f(x)$ có đồ thị là đường cong trong hình bên nha nha nha nha.\n" +
           dothibacba_a_duong(a, b, c, d) + cauHoiTxt;
document.getElementById("PAdung3").innerHTML = PA1;
document.getElementById("PA1Cau3").innerHTML = options[0];
document.getElementById("PA2Cau3").innerHTML = options[1];
document.getElementById("PA3Cau3").innerHTML = options[2];
document.getElementById("loigiaicau3").innerHTML = loigiaiTxt + "<br/>";

// Câu 4
document.getElementById("debaicau4").innerHTML = "Cho hàm số bậc ba $y=f(x)$ có đồ thị là đường cong trong hình bên." + 
dothibacba_a_am(-1, 0, 3, 1) +
"Điểm cực tiểu của hàm số đã cho bằng nha nha";
document.getElementById("PAdung4").innerHTML = "$-1$";
document.getElementById("PA1Cau4").innerHTML = "$3$";
document.getElementById("PA2Cau4").innerHTML = "$0$";
document.getElementById("PA3Cau4").innerHTML = "$1$";
document.getElementById("loigiaicau4").innerHTML = "Dựa vào đồ thị, ta thấy hoành độ điểm cực tiểu của đồ thị hàm số là $-1$. Vậy điểm cực tiểu của hàm số là $x_{\\mathrm{CT}}=-1.$<br/>";

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
var debai = "Cho hàm số $y=f(x)$ có bảng biến thiên như sau NHÉ NHÉ:\n" +
            hamtrungphuongCTCT(a, b, c) +
            hambacbaCTC("x","f",1,2,6,4) + 
            hambacbaTCT("x","f",1,2,"\\dfrac{1}{2}","\\dfrac{4}{3}") + 
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