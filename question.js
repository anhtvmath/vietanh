// Câu 1
var m = randomchoice(2,9);
var n = randomchoice(2,9);
while (kiemtrakhacnhau(C(m,1)*C(n,1),C(m,1)+C(n,1),C(m,2),C(n,2)) === false) {
    m = randomchoice(2,9);
    n = randomchoice(2,9);
}
var mau1 = randomchoicelist(["xanh", "đỏ", "tím", "vàng", "hồng"]);
var mau2 = randomchoicelist(["xanh", "đỏ", "tím", "vàng", "hồng"]);
while (mau1 === mau2) {
    mau1 = randomchoicelist(["xanh", "đỏ", "tím", "vàng", "hồng"]);
    mau2 = randomchoicelist(["xanh", "đỏ", "tím", "vàng", "hồng"]);
}
document.getElementById("debaicau1").innerHTML = "Từ một hộp có $"+String(m+n)+"$ quả cầu gồm $"+String(m)+"$ quả cầu màu "+mau1+" và $"+String(n)+"$ quả cầu màu "+mau2+", ta lấy ngẫu nhiên ra hai quả cầu. Xác suất để lấy được hai quả cầu có màu khác nhau bằng";
document.getElementById("PAdung1").innerHTML = "$"+phanso(C(m,1)*C(n,1),C(m+n,2))+"$";
document.getElementById("PA1Cau1").innerHTML = "$"+phanso(C(m,1)+C(n,1),C(m+n,2))+"$";
document.getElementById("PA2Cau1").innerHTML = "$"+phanso(C(m,2),C(m+n,2))+"$";
document.getElementById("PA3Cau1").innerHTML = "$"+phanso(C(n,2),C(m+n,2))+"$";
document.getElementById("loigiaicau1").innerHTML = "Xác suất lấy được hai quả cầu có màu khác nhau bằng $\\dfrac{C_" + String(m) + "^1\\cdot C_" + String(n) + "^1}{C_{" + String(m + n) + "}^2}=" + phanso(C(m, 1) * C(n, 1), C(m + n, 2)) + ".$<br/>";

// Câu 2
var m = randomchoice(2,9);
var n = randomchoice(2,9);
while (kiemtrakhacnhau(C(m,2)+C(n,2),C(m,1)*C(n,1),C(m,2),C(n,2)) === false) {
    m = randomchoice(2,9);
    n = randomchoice(2,9);
}
var mau1 = randomchoicelist(["xanh", "đỏ", "tím", "vàng", "hồng"]);
var mau2 = randomchoicelist(["xanh", "đỏ", "tím", "vàng", "hồng"]);
while (mau1 === mau2) {
    mau1 = randomchoicelist(["xanh", "đỏ", "tím", "vàng", "hồng"]);
    mau2 = randomchoicelist(["xanh", "đỏ", "tím", "vàng", "hồng"]);
}
document.getElementById("debaicau2").innerHTML = "Từ một hộp có $"+String(m+n)+"$ quả cầu gồm $"+String(m)+"$ quả cầu màu "+mau1+" và $"+String(n)+"$ quả cầu màu "+mau2+", ta lấy ngẫu nhiên ra hai quả cầu. Xác suất để lấy được hai quả cầu có cùng màu bằng";
document.getElementById("PAdung2").innerHTML = "$"+phanso(C(m,2)+C(n,2),C(m+n,2))+"$";
document.getElementById("PA1Cau2").innerHTML = "$"+phanso(C(m,1)*C(n,1),C(m+n,2))+"$";
document.getElementById("PA2Cau2").innerHTML = "$"+phanso(C(m,2),C(m+n,2))+"$";
document.getElementById("PA3Cau2").innerHTML = "$"+phanso(C(n,2),C(m+n,2))+"$";
document.getElementById("loigiaicau2").innerHTML = "Xác suất lấy được hai quả cầu có cùng màu bằng $\\dfrac{C_"+String(m)+"^2+C_"+String(n)+"^2}{C_{"+String(m+n)+"}^2}="+phanso(C(m,2)+C(n,2),C(m+n,2))+".$<br/>";

// Câu 3
var a = randomchoice(1,7);
var b = randomchoice(1,7);
while (a === b) {
    a = randomchoice(1,7);
    b = randomchoice(1,7);
}
var x1 = randomchoice(0,7);
var x2 = randomchoice(0,7);
while (x1 >= x2) {
    x1 = randomchoice(0,7);
    x2 = randomchoice(0,7);
}
var y1 = randomchoice(0,7);
var y2 = randomchoice(0,7);
var y3 = randomchoice(0,7);
while (y1 >= y2 || y2 >= y3) {
    y1 = randomchoice(0,7);
    y2 = randomchoice(0,7);
    y3 = randomchoice(0,7);
}
var kq = 3*a*(x1+x2)+2*b*(y1+y2+y3);
document.getElementById("debaicau3").innerHTML = 
"Cho biến ngẫu nhiên rời rạc hai chiều $(X,Y)$ có hàm khối lượng xác suất:" + 
"<div style='text-align:center; margin: 40px 0; transform: scale(2); transform-origin: center;'>$$p_{X,Y}(x_i,y_j)=" + 
"\\begin{cases}" +
"k(" + hesodau(a,"x_i") + hesosau(b,"y_j") + ") & \\text{ khi } x_i\\in\\{"+x1+";"+x2+"\\}, y_j\\in\\{"+y1+";"+y2+";"+y3+"\\}\\\\" + 
"0 & \\text{ khi khác}\\\\" + 
"\\end{cases}$$</div>" + 
"Tìm hằng số $k$.";
document.getElementById("PAdung3").innerHTML = "$k="+phanso(1,kq)+"$";
document.getElementById("PA1Cau3").innerHTML = "$k="+phanso(1,2*kq)+"$";
document.getElementById("PA2Cau3").innerHTML = "$k="+phanso(2,3*kq)+"$";
document.getElementById("PA3Cau3").innerHTML = "$k="+phanso(2,kq)+"$";
document.getElementById("loigiaicau3").innerHTML = "";

// Câu 4
var a = randomchoice(1,7);
var b = randomchoice(1,7);
while (a === b) {
    a = randomchoice(1,7);
    b = randomchoice(1,7);
}
var x1 = randomchoice(0,7);
var x2 = randomchoice(0,7);
while (x1 >= x2) {
    x1 = randomchoice(0,7);
    x2 = randomchoice(0,7);
}
var y1 = randomchoice(0,7);
var y2 = randomchoice(0,7);
var y3 = randomchoice(0,7);
while (y1 >= y2 || y2 >= y3) {
    y1 = randomchoice(0,7);
    y2 = randomchoice(0,7);
    y3 = randomchoice(0,7);
}
var kq = 3*a*(x1+x2)+2*b*(y1+y2+y3);
document.getElementById("debaicau4").innerHTML = 
"Cho biến ngẫu nhiên rời rạc hai chiều $(X,Y)$ có hàm khối lượng xác suất:" + 
"<div style='text-align:center; margin: 40px 0; transform: scale(2); transform-origin: center;'>$$p_{X,Y}(x_i,y_j)=" + 
"\\begin{cases}" +
"k(" + hesodau(a,"x_i") + hesosau(b,"y_j") + ") & \\text{ khi } x_i\\in\\{"+x1+";"+x2+"\\}, y_j\\in\\{"+y1+";"+y2+";"+y3+"\\}\\\\" + 
"0 & \\text{ khi khác}\\\\" + 
"\\end{cases}$$</div>" + 
"Tìm hàm khối lượng xác suất của biến ngẫu nhiên $X$.";
document.getElementById("PAdung4").innerHTML = "$p_X(x)="+phanso(3*a,kq)+"x+"+phanso(b*(y1+y2+y3),kq)+"$ nếu $x\\in\\{"+x1+";"+x2+"\\}$ và $p_X(x)=0$ nếu $x\\notin\\{"+x1+";"+x2+"\\}$";
document.getElementById("PA1Cau4").innerHTML = "$p_X(x)="+phanso(2*a,kq)+"x+"+phanso(b*(y1+y2+y3),2*kq)+"$ nếu $x\\in\\{"+x1+";"+x2+"\\}$ và $p_X(x)=0$ nếu $x\\notin\\{"+x1+";"+x2+"\\}$";
document.getElementById("PA2Cau4").innerHTML = "$p_X(x)="+phanso(3*a,kq)+"x+"+phanso(b*(y1+y2+y3),2*kq)+"$ nếu $x\\in\\{"+x1+";"+x2+"\\}$ và $p_X(x)=0$ nếu $x\\notin\\{"+x1+";"+x2+"\\}$";
document.getElementById("PA3Cau4").innerHTML = "$p_X(x)="+phanso(2*a,kq)+"x+"+phanso(b*(y1+y2+y3),kq)+"$ nếu $x\\in\\{"+x1+";"+x2+"\\}$ và $p_X(x)=0$ nếu $x\\notin\\{"+x1+";"+x2+"\\}$";
document.getElementById("loigiaicau4").innerHTML = "";

// Câu 5
var a = randomchoice(1,7);
var b = randomchoice(1,7);
while (a === b) {
    a = randomchoice(1,7);
    b = randomchoice(1,7);
}
var x1 = randomchoice(0,7);
var x2 = randomchoice(0,7);
while (x1 >= x2) {
    x1 = randomchoice(0,7);
    x2 = randomchoice(0,7);
}
var y1 = randomchoice(0,7);
var y2 = randomchoice(0,7);
var y3 = randomchoice(0,7);
while (y1 >= y2 || y2 >= y3) {
    y1 = randomchoice(0,7);
    y2 = randomchoice(0,7);
    y3 = randomchoice(0,7);
}
var kq = 3*a*(x1+x2)+2*b*(y1+y2+y3);
document.getElementById("debaicau5").innerHTML = 
"Cho biến ngẫu nhiên rời rạc hai chiều $(X,Y)$ có hàm khối lượng xác suất:" + 
"<div style='text-align:center; margin: 40px 0; transform: scale(2); transform-origin: center;'>$$p_{X,Y}(x_i,y_j)=" + 
"\\begin{cases}" +
"k(" + hesodau(a,"x_i") + hesosau(b,"y_j") + ") & \\text{ khi } x_i\\in\\{"+x1+";"+x2+"\\}, y_j\\in\\{"+y1+";"+y2+";"+y3+"\\}\\\\" + 
"0 & \\text{ khi khác}\\\\" + 
"\\end{cases}$$</div>" + 
"Tính kỳ vọng của biến ngẫu nhiên $X$.";
document.getElementById("PAdung5").innerHTML = "$\\Bbb E(X)="+phanso(3*a*(x1*x1+x2*x2)+b*(y1+y2+y3)*(x1+x2),kq)+"$";
document.getElementById("PA1Cau5").innerHTML = "$\\Bbb E(X)="+phanso(2*a*(x1*x1+x2*x2)+b*(y1+y2+y3)*(x1+x2),kq)+"$";
document.getElementById("PA2Cau5").innerHTML = randomchoicelist(["$\\Bbb E(X)="+phanso(4*a*(x1*x1+x2*x2)+b*(y1+y2+y3)*(x1+x2),kq)+"$", "$\\Bbb E(X)="+phanso(a*(x1*x1+x2*x2)+b*(y1+y2+y3)*(x1+x2),2*kq)+"$"]);
document.getElementById("PA3Cau5").innerHTML = "$\\Bbb E(X)="+phanso(a*(x1*x1+x2*x2)+b*(y1+y2+y3)*(x1+x2),kq)+"$";
document.getElementById("loigiaicau5").innerHTML = "";

// Câu 6
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
document.getElementById("debaicau6").innerHTML = "Cho biến ngẫu nhiên rời rạc hai chiều $(X,Y)$ có bảng phân bố xác suất"
+ vectohaiba(x1,x2,y1,y2,y3,p11,p12,p13,p21,p22,p23) + "Hiệp phương sai của hai biến ngẫu nhiên $X,Y$ bằng";
document.getElementById("PAdung6").innerHTML = "$"+convert(cov/10000)+"$";
document.getElementById("PA1Cau6").innerHTML = randomchoicelist(["$"+convert((cov+2)/10000)+"$","$"+convert((cov-8)/10000)+"$"]);    
document.getElementById("PA2Cau6").innerHTML = randomchoicelist(["$"+convert((cov-2)/10000)+"$","$"+convert((cov+8)/10000)+"$"]);   
document.getElementById("PA3Cau6").innerHTML = randomchoicelist(["$"+convert((cov+4)/10000)+"$","$"+convert((cov-4)/10000)+"$","$"+convert((cov+6)/10000)+"$","$"+convert((cov-6)/10000)+"$"]);  
document.getElementById("loigiaicau6").innerHTML = "";

/* Câu số 7 */
var x1 = randomchoice(-5,5);
var x2 = randomchoice(-5,5);
var x3 = randomchoice(-5,5);
while (x1 >= x2 || x2 >= x3 || x1*x2*x3 === 0) {
    x1 = randomchoice(-5,5);
    x2 = randomchoice(-5,5);
    x3 = randomchoice(-5,5);
}
var a1 = randomchoice(1,99);
var a2 = randomchoice(1,99);
var a3 = 100 - a1 - a2;
while (a1 + a2 >= 100) {
    a1 = randomchoice(1,99);
    a2 = randomchoice(1,99);
    a3 = 100 - a1 - a2;
}
var p1 = convert(a1/100);
var p2 = convert(a2/100);
var p3 = convert(a3/100);
var ex = x1*a1+x2*a2+x3*a3;
document.getElementById("debaicau7").innerHTML = "Cho biến ngẫu nhiên rời rạc $X$ có bảng phân bố xác suất"
+ bangphanbo3(x1,x2,x3,p1,p2,p3) + "Tính kỳ vọng $\\Bbb E(X).$";
document.getElementById("PAdung7").innerHTML = "$\\Bbb E(X)="+convert(ex/100)+"$";
document.getElementById("PA1Cau7").innerHTML = randomchoicelist(["$\\Bbb E(X)="+convert((ex+2)/100)+"$","$\\Bbb E(X)="+convert((ex-8)/100)+"$"]);    
document.getElementById("PA2Cau7").innerHTML = randomchoicelist(["$\\Bbb E(X)="+convert((ex-2)/100)+"$","$\\Bbb E(X)="+convert((ex+8)/100)+"$"]);   
document.getElementById("PA3Cau7").innerHTML = randomchoicelist(["$\\Bbb E(X)="+convert((ex+4)/100)+"$","$\\Bbb E(X)="+convert((ex-4)/100)+"$","$\\Bbb E(X)="+convert((ex+6)/100)+"$","$\\Bbb E(X)="+convert((ex-6)/100)+"$"]);
document.getElementById("loigiaicau7").innerHTML = "";

/* Câu số 12 */
var y1 = randomchoice(-4,4);
var y2 = randomchoice(-4,4);
var y3 = randomchoice(-4,4);
while (y1 >= y2 || y2 >= y3) {
    y1 = randomchoice(-4,4);
    y2 = randomchoice(-4,4);
    y3 = randomchoice(-4,4);
}
var x1 = randomchoice(-4,4);
var x2 = randomchoice(-4,4);
while (x1 >= x2) {
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
var x = randomchoicelist([x1, x2]);
var y = randomchoicelist([y1, y2, y3]);
document.getElementById("debaicau8").innerHTML = "Cho biến ngẫu nhiên rời rạc hai chiều $(X,Y)$ có bảng phân bố xác suất"
+ vectohaiba(x1,x2,y1,y2,y3,p11,p12,p13,p21,p22,p23) + "Xác suất $\\Bbb P(X="+String(x)+"|Y="+String(y)+")$ bằng";
if (x === x1 && y === y1) {
    document.getElementById("PAdung8").innerHTML = "$"+phanso(a11,a11+a21)+"$";
    document.getElementById("PA1Cau8").innerHTML = randomchoicelist(["$"+phanso(a11,a11+a21+1)+"$","$"+phanso(a11,2*(a11+a21))+"$"]);   
    document.getElementById("PA2Cau8").innerHTML = "$"+phanso(a11,2*(a11+a21)+1)+"$"
    document.getElementById("PA3Cau8").innerHTML = "$"+phanso(a11,2*(a11+a21)+2)+"$";
    document.getElementById("loigiaicau8").innerHTML = "";
}
if (x === x1 && y === y2) {
    document.getElementById("PAdung8").innerHTML = "$"+phanso(a12,a12+a22)+"$";
    document.getElementById("PA1Cau8").innerHTML = randomchoicelist(["$"+phanso(a12,a12+a22+1)+"$","$"+phanso(a12,2*(a12+a22))+"$"]);   
    document.getElementById("PA2Cau8").innerHTML = "$"+phanso(a12,2*(a12+a22)+1)+"$"
    document.getElementById("PA3Cau8").innerHTML = "$"+phanso(a12,2*(a12+a22)+2)+"$";
    document.getElementById("loigiaicau8").innerHTML = "";
}
if (x === x1 && y === y3) {
    document.getElementById("PAdung8").innerHTML = "$"+phanso(a13,a13+a23)+"$";
    document.getElementById("PA1Cau8").innerHTML = randomchoicelist(["$"+phanso(a13,a13+a23+1)+"$","$"+phanso(a13,2*(a13+a23))+"$"]);   
    document.getElementById("PA2Cau8").innerHTML = "$"+phanso(a13,2*(a13+a23)+1)+"$"
    document.getElementById("PA3Cau8").innerHTML = "$"+phanso(a13,2*(a13+a23)+2)+"$";
    document.getElementById("loigiaicau8").innerHTML = "";
}
if (x === x2 && y === y1) {
    document.getElementById("PAdung8").innerHTML = "$"+phanso(a21,a11+a21)+"$";
    document.getElementById("PA1Cau8").innerHTML = randomchoicelist(["$"+phanso(a21,a11+a21+1)+"$","$"+phanso(a21,2*(a11+a21))+"$"]);   
    document.getElementById("PA2Cau8").innerHTML = "$"+phanso(a21,2*(a11+a21)+1)+"$"
    document.getElementById("PA3Cau8").innerHTML = "$"+phanso(a21,2*(a11+a21)+2)+"$";
    document.getElementById("loigiaicau8").innerHTML = "";
}
if (x === x2 && y === y2) {
    document.getElementById("PAdung8").innerHTML = "$"+phanso(a22,a12+a22)+"$";
    document.getElementById("PA1Cau8").innerHTML = randomchoicelist(["$"+phanso(a22,a12+a22+1)+"$","$"+phanso(a22,2*(a12+a22))+"$"]);   
    document.getElementById("PA2Cau8").innerHTML = "$"+phanso(a22,2*(a12+a22)+1)+"$"
    document.getElementById("PA3Cau8").innerHTML = "$"+phanso(a22,2*(a12+a22)+2)+"$";
    document.getElementById("loigiaicau8").innerHTML = "";
}
if (x === x2 && y === y3) {
    document.getElementById("PAdung8").innerHTML = "$"+phanso(a23,a13+a23)+"$";
    document.getElementById("PA1Cau8").innerHTML = randomchoicelist(["$"+phanso(a23,a13+a23+1)+"$","$"+phanso(a23,2*(a13+a23))+"$"]);   
    document.getElementById("PA2Cau8").innerHTML = "$"+phanso(a23,2*(a13+a23)+1)+"$"
    document.getElementById("PA3Cau8").innerHTML = "$"+phanso(a23,2*(a13+a23)+2)+"$";
    document.getElementById("loigiaicau8").innerHTML = "";
}

/* Câu số 9 */
var x1 = randomchoice(-5,5);
var x2 = randomchoice(-5,5);
var x3 = randomchoice(-5,5);
while (x1 >= x2 || x2 >= x3 || x1*x2*x3 === 0) {
    x1 = randomchoice(-5,5);
    x2 = randomchoice(-5,5);
    x3 = randomchoice(-5,5);
}
var a1 = randomchoice(1,9);
var a2 = randomchoice(1,9);
var a3 = 10 - a1 - a2;
while (a1 + a2 >= 10) {
    a1 = randomchoice(1,9);
    a2 = randomchoice(1,9);
    a3 = 10 - a1 - a2;
}
var p1 = convert(a1/10);
var p2 = convert(a2/10);
var p3 = convert(a3/10);
var exbp = (x1*a1+x2*a2+x3*a3)**2;
var ex2 = x1*x1*a1+x2*x2*a2+x3*x3*a3;
document.getElementById("debaicau9").innerHTML = "Cho biến ngẫu nhiên rời rạc $X$ có bảng phân bố xác suất"
+ bangphanbo3(x1,x2,x3,p1,p2,p3) + "Tính phương sai $\\Bbb D(X).$";
document.getElementById("PAdung9").innerHTML = "$\\Bbb D(X)="+convert((10*ex2-exbp)/100)+"$";
document.getElementById("PA1Cau9").innerHTML = randomchoicelist(["$\\Bbb D(X)="+convert((10*ex2-exbp+2)/100)+"$","$\\Bbb D(X)="+convert((10*ex2-exbp-8)/100)+"$"]);
document.getElementById("PA2Cau9").innerHTML = randomchoicelist(["$\\Bbb D(X)="+convert((10*ex2-exbp-2)/100)+"$","$\\Bbb D(X)="+convert((10*ex2-exbp+8)/100)+"$"]);
document.getElementById("PA3Cau9").innerHTML = randomchoicelist(["$\\Bbb D(X)="+convert((10*ex2-exbp+4)/100)+"$","$\\Bbb D(X)="+convert((10*ex2-exbp-4)/100)+"$","$\\Bbb D(X)="+convert((10*ex2-exbp+6)/100)+"$","$\\Bbb D(X)="+convert((10*ex2-exbp-6)/100)+"$"]);
document.getElementById("loigiaicau9").innerHTML = "";

/* Câu số 10 */
var y1 = randomchoice(-4,4);
var y2 = randomchoice(-4,4);
var y3 = randomchoice(-4,4);
while (y1 >= y2 || y2 >= y3) {
    y1 = randomchoice(-4,4);
    y2 = randomchoice(-4,4);
    y3 = randomchoice(-4,4);
}
var x1 = randomchoice(-4,4);
var x2 = randomchoice(-4,4);
while (x1 >= x2) {
    x1 = randomchoice(-4,4);
    x2 = randomchoice(-4,4);
}
var a11 = randomchoice(1,99);
var a12 = randomchoice(1,99);
var a13 = randomchoice(1,99);
var a21 = randomchoice(1,99);
var a22 = randomchoice(1,99);
var a23 = 100 - a11 - a12 - a13 - a21 - a22;
while (a11 + a12 + a13 + a21 + a22 >= 100 || checkkhacnhau(a11+a21,a12+a22,a13+a23,a11+a12+a13,a21+a22+a23) === false) {
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
var de1 = "Xác suất $\\Bbb P(Y=" + String(y1) + ")$ bằng";
var de2 = "Xác suất $\\Bbb P(Y=" + String(y2) + ")$ bằng";
var de3 = "Xác suất $\\Bbb P(Y=" + String(y3) + ")$ bằng";
var de4 = "Xác suất $\\Bbb P(X=" + String(x1) + ")$ bằng";
var de5 = "Xác suất $\\Bbb P(X=" + String(x2) + ")$ bằng";
var decauhoi = randomchoicelist([de1,de2,de3,de4,de5]);
document.getElementById("debaicau10").innerHTML = "Cho biến ngẫu nhiên rời rạc hai chiều $(X,Y)$ có bảng phân bố xác suất"
+ vectohaiba(x1,x2,y1,y2,y3,p11,p12,p13,p21,p22,p23) + decauhoi;
if (decauhoi === de1) {
    document.getElementById("PAdung10").innerHTML = "$"+convert((a11+a21)/100)+"$";
    document.getElementById("PA1Cau10").innerHTML = "$"+convert((a12+a22)/100)+"$";
    document.getElementById("PA2Cau10").innerHTML = "$"+convert((a13+a23)/100)+"$";
    document.getElementById("PA3Cau10").innerHTML = randomchoicelist(["$"+convert((a11+a12+a13)/100)+"$","$"+convert((a21+a22+a23)/100)+"$"]);
}
if (decauhoi === de2) {
    document.getElementById("PAdung10").innerHTML = "$"+convert((a12+a22)/100)+"$";
    document.getElementById("PA1Cau10").innerHTML = "$"+convert((a11+a21)/100)+"$";
    document.getElementById("PA2Cau10").innerHTML = "$"+convert((a13+a23)/100)+"$";
    document.getElementById("PA3Cau10").innerHTML = randomchoicelist(["$"+convert((a11+a12+a13)/100)+"$","$"+convert((a21+a22+a23)/100)+"$"]); 
}
if (decauhoi === de3) {
    document.getElementById("PAdung10").innerHTML = "$"+convert((a13+a23)/100)+"$";
    document.getElementById("PA1Cau10").innerHTML = "$"+convert((a11+a21)/100)+"$";
    document.getElementById("PA2Cau10").innerHTML = "$"+convert((a12+a22)/100)+"$";
    document.getElementById("PA3Cau10").innerHTML = randomchoicelist(["$"+convert((a11+a12+a13)/100)+"$","$"+convert((a21+a22+a23)/100)+"$"]); 
}  
if (decauhoi === de4) {
    document.getElementById("PAdung10").innerHTML = "$"+convert((a11+a12+a13)/100)+"$";
    document.getElementById("PA1Cau10").innerHTML = randomchoicelist(["$"+convert((a12+a22)/100)+"$","$"+convert((a21+a22+a23)/100)+"$"]);
    document.getElementById("PA2Cau10").innerHTML = "$"+convert((a13+a23)/100)+"$";
    document.getElementById("PA3Cau10").innerHTML = "$"+convert((a11+a21)/100)+"$";
}  
if (decauhoi === de5) {
    document.getElementById("PAdung10").innerHTML = "$"+convert((a21+a22+a23)/100)+"$";
    document.getElementById("PA1Cau10").innerHTML = "$"+convert((a12+a22)/100)+"$";
    document.getElementById("PA2Cau10").innerHTML = randomchoicelist(["$"+convert((a13+a23)/100)+"$","$"+convert((a11+a12+a13)/100)+"$"]);
    document.getElementById("PA3Cau10").innerHTML = "$"+convert((a11+a21)/100)+"$";
}  
document.getElementById("loigiaicau10").innerHTML = "";

/* Câu số 11 */
var y1 = randomchoice(-4,4);
var y2 = randomchoice(-4,4);
var y3 = randomchoice(-4,4);
while (y1 >= y2 || y2 >= y3) {
    y1 = randomchoice(-4,4);
    y2 = randomchoice(-4,4);
    y3 = randomchoice(-4,4);
}
var x1 = randomchoice(-4,4);
var x2 = randomchoice(-4,4);
while (x1 >= x2) {
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
var de1 = "Kỳ vọng $\\Bbb E(X)$ bằng";
var de2 = "Kỳ vọng $\\Bbb E(Y)$ bằng";
var decauhoi = randomchoicelist([de1,de2]);
document.getElementById("debaicau11").innerHTML = "Cho biến ngẫu nhiên rời rạc hai chiều $(X,Y)$ có bảng phân bố xác suất"
+ vectohaiba(x1,x2,y1,y2,y3,p11,p12,p13,p21,p22,p23) + decauhoi;
if (decauhoi === de1) {
    document.getElementById("PAdung11").innerHTML = "$"+convert(ex/100)+"$";
    document.getElementById("PA1Cau11").innerHTML = randomchoicelist(["$"+convert((ex+2)/100)+"$","$"+convert((ex-8)/100)+"$"]);    
    document.getElementById("PA2Cau11").innerHTML = randomchoicelist(["$"+convert((ex-2)/100)+"$","$"+convert((ex+8)/100)+"$"]);   
    document.getElementById("PA3Cau11").innerHTML = randomchoicelist(["$"+convert((ex+4)/100)+"$","$"+convert((ex-4)/100)+"$","$"+convert((ex+6)/100)+"$","$"+convert((ex-6)/100)+"$"]);  
}
if (decauhoi === de2) {
    document.getElementById("PAdung11").innerHTML = "$"+convert(ey/100)+"$";
    document.getElementById("PA1Cau11").innerHTML = randomchoicelist(["$"+convert((ey+2)/100)+"$","$"+convert((ey-8)/100)+"$"]); 
    document.getElementById("PA2Cau11").innerHTML = randomchoicelist(["$"+convert((ey-2)/100)+"$","$"+convert((ey+8)/100)+"$"]);
    document.getElementById("PA3Cau11").innerHTML = randomchoicelist(["$"+convert((ey+4)/100)+"$","$"+convert((ey-4)/100)+"$","$"+convert((ey+6)/100)+"$","$"+convert((ey-6)/100)+"$"]);  
}
document.getElementById("loigiaicau11").innerHTML = "";