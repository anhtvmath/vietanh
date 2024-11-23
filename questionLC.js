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


// Câu 11
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
var PAdungcau11 = randomchoicelist(["(-\\infty;"+String(x1)+")","("+String(x2)+";+\\infty)"]);
document.getElementById("debaicau11").innerHTML = "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:" 
+ hambacbaCTC("x","f",x1,x2,y1,y2) + "Hàm số đã cho đồng biến trên khoảng nào dưới đây?";
document.getElementById("PAdung11").innerHTML = "$"+PAdungcau11+"$";
document.getElementById("PA1Cau11").innerHTML = randomchoicelist(["$("+String(x1)+";"+String(x2)+")$","$("+String(y2)+";"+String(y1)+")$"]);  
document.getElementById("PA2Cau11").innerHTML = "$("+String(x1)+";+\\infty)$";
document.getElementById("PA3Cau11").innerHTML = "$(-\\infty;"+String(x2)+")$";
document.getElementById("loigiaicau11").innerHTML = "Dựa vào bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in" + PAdungcau11 + "$. Do đó hàm số đã cho đồng biến trên khoảng $" + PAdungcau11 + ".$<br/>";
// Câu 12
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
document.getElementById("debaicau12").innerHTML = "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:" 
+ hambacbaCTC("x","f",x1,x2,y1,y2) + "Hàm số đã cho nghịch biến trên khoảng nào dưới đây?";
document.getElementById("PAdung12").innerHTML = "$("+String(x1)+";"+String(x2)+")$";
document.getElementById("PA1Cau12").innerHTML = randomchoicelist(["$(-\\infty;"+String(x1)+")$","$("+String(x2)+";+\\infty)$"]);
document.getElementById("PA2Cau12").innerHTML = "$("+String(x1)+";+\\infty)$";
document.getElementById("PA3Cau12").innerHTML = "$(-\\infty;"+String(x2)+")$";
document.getElementById("loigiaicau12").innerHTML = "Dựa vào bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in ("+String(x1)+";"+String(x2)+")$. Do đó hàm số đã cho nghịch biến trên khoảng $("+String(x1)+";"+String(x2)+").$<br/>";
// Câu 13
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
var PAdungcau13 = randomchoicelist(["(-\\infty;"+String(x1)+")","("+String(x2)+";+\\infty)"]);
document.getElementById("debaicau13").innerHTML = "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:" 
+ hambacbaTCT("x","f",x1,x2,y1,y2) + "Hàm số đã cho nghịch biến trên khoảng nào dưới đây?";
document.getElementById("PAdung13").innerHTML = "$"+PAdungcau13+"$";
document.getElementById("PA1Cau13").innerHTML = randomchoicelist(["$("+String(x1)+";"+String(x2)+")$","$("+String(y1)+";"+String(y2)+")$"]);  
document.getElementById("PA2Cau13").innerHTML = "$("+String(x1)+";+\\infty)$";
document.getElementById("PA3Cau13").innerHTML = "$(-\\infty;"+String(x2)+")$";
document.getElementById("loigiaicau13").innerHTML = "Dựa vào bảng biến thiên, ta thấy $f'(x)<0$ với mọi $x\\in" + PAdungcau13 + "$. Do đó hàm số đã cho nghịch biến trên khoảng $" + PAdungcau13 + ".$<br/>";
// Câu 14
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
document.getElementById("debaicau14").innerHTML = "Cho hàm số $y=f(x)$ có bảng biến thiên như sau:" 
+ hambacbaTCT("x","f",x1,x2,y1,y2) + "Hàm số đã cho đồng biến trên khoảng nào dưới đây?";
document.getElementById("PAdung14").innerHTML = "$("+String(x1)+";"+String(x2)+")$";
document.getElementById("PA1Cau14").innerHTML = randomchoicelist(["$(-\\infty;"+String(x1)+")$","$("+String(x2)+";+\\infty)$"]);
document.getElementById("PA2Cau14").innerHTML = "$("+String(x1)+";+\\infty)$";
document.getElementById("PA3Cau14").innerHTML = "$(-\\infty;"+String(x2)+")$";
document.getElementById("loigiaicau14").innerHTML = "Dựa vào bảng biến thiên, ta thấy $f'(x)>0$ với mọi $x\\in ("+String(x1)+";"+String(x2)+")$. Do đó hàm số đã cho đồng biến trên khoảng $("+String(x1)+";"+String(x2)+").$<br/>";


// Câu 21
var danhsach = [
    [1,-6,9,-1,1,3,3,-1,-1,4.5,-2.2,3.9,-0.1,4.05,"above left"],
    [1,0,-3,2,-1,1,4,0,-2.5,2.5,-0.8,4.7,-2.05,2.04,"below right"],
    [1,0,-3,-2,-1,1,0,-4,-2.5,2.5,-4.6,1.3,-2.03,2.1,"below right"],
    [1,3,0,0,-2,0,4,0,-3.7,1.5,-1.2,5,-3.1,1.06,"below right"],
    [1,-3,0,0,0,2,0,-4,-1.5,3.6,-4.5,1.8,-1.04,3.13,"above left"],
    [1,-3,0,2,0,2,2,-2,-1.5,3.6,-2.8,3.25,-1.04,3.05,"below right"]
];
var randomIndex = Math.floor(Math.random()*danhsach.length)
var [a, b, c, d, x1, x2, y1, y2, xmin, xmax, ymin, ymax, dmin, dmax, posO] = danhsach[randomIndex];
var PAdung = randomchoicelist(["$(-\\infty;"+String(x1)+")$","$("+String(x2)+";+\\infty)$"]);
document.getElementById("debaicau21").innerHTML = "Cho hàm số $y=f(x)$ có đồ thị là đường cong trong hình bên dưới." + dothibacbacongtrucong(a, b, c, d, x1, x2, y1, y2, xmin, xmax, ymin, ymax, dmin, dmax, posO) + "Hàm số đã cho đồng biến trên khoảng nào dưới đây?";
document.getElementById("PAdung21").innerHTML = PAdung;
document.getElementById("PA1Cau21").innerHTML = "$("+String(x1)+";+\\infty)$";  
document.getElementById("PA2Cau21").innerHTML = "$(-\\infty;"+String(x2)+")$";
document.getElementById("PA3Cau21").innerHTML = "$("+String(x1)+";"+String(x2)+")$";
document.getElementById("loigiaicau21").innerHTML = "Trên khoảng "+PAdung+" thì đồ thị có hướng đi lên. Do đó hàm số đã cho đồng biến trên khoảng "+PAdung+".<br/>";
// Câu 22
var danhsach = [
    [1,-6,9,-1,1,3,3,-1,-1,4.5,-2.2,3.9,-0.1,4.05,"above left"],
    [1,0,-3,2,-1,1,4,0,-2.5,2.5,-0.8,4.7,-2.05,2.04,"below right"],
    [1,0,-3,-2,-1,1,0,-4,-2.5,2.5,-4.6,1.3,-2.03,2.1,"below right"],
    [1,3,0,0,-2,0,4,0,-3.7,1.5,-1.2,5,-3.1,1.06,"below right"],
    [1,-3,0,0,0,2,0,-4,-1.5,3.6,-4.5,1.8,-1.04,3.13,"above left"],
    [1,-3,0,2,0,2,2,-2,-1.5,3.6,-2.8,3.25,-1.04,3.05,"below right"]
];
var randomIndex = Math.floor(Math.random()*danhsach.length)
var [a, b, c, d, x1, x2, y1, y2, xmin, xmax, ymin, ymax, dmin, dmax, posO] = danhsach[randomIndex];
document.getElementById("debaicau22").innerHTML = "Cho hàm số $y=f(x)$ có đồ thị là đường cong trong hình bên dưới." + dothibacbacongtrucong(a, b, c, d, x1, x2, y1, y2, xmin, xmax, ymin, ymax, dmin, dmax, posO) + "Hàm số đã cho nghịch biến trên khoảng nào dưới đây?";
document.getElementById("PAdung22").innerHTML = "$("+String(x1)+";"+String(x2)+")$";
document.getElementById("PA1Cau22").innerHTML = "$("+String(x1)+";+\\infty)$";  
document.getElementById("PA2Cau22").innerHTML = "$(-\\infty;"+String(x2)+")$";
document.getElementById("PA3Cau22").innerHTML = randomchoicelist(["$(-\\infty;"+String(x1)+")$","$("+String(x2)+";+\\infty)$"]);
document.getElementById("loigiaicau22").innerHTML = "Trên khoảng $("+String(x1)+";"+String(x2)+")$ thì đồ thị có hướng đi xuống. Do đó hàm số đã cho nghịch biến trên khoảng $("+String(x1)+";"+String(x2)+").$<br/>";
// Câu 31
var sokhoang = randomchoice(3,4);
var valueRange = [2,3,4,5,6,7,8,9];  
var maxRepeats = 2;    
var text1 = "Nhóm";
var text2 = "Tần số";
var a = randomchoice(5,15);  
var h = randomchoice(2,5);     
var interval = [];  
for (let i = 0; i <= sokhoang; i++) {
    interval.push(a+i*h);
}
var intervalrutgonconvert = [];  
for (let i = 1; i <= sokhoang; i++) {
    intervalrutgonconvert.push(convertnumber(a+(i-0.5)*h));
}
var intervalrutgonnguyen = [];  
for (let i = 1; i <= sokhoang; i++) {
    intervalrutgonnguyen.push(2*a+(2*i-1)*h);
}
var values = generateValues(sokhoang,valueRange,maxRepeats);
var n = tongcacphantu(values);
var kq1 = ketquatichhailist(values,intervalrutgonnguyen);
while ((100*kq1) % (2*n) !== 0 || kq1 % (2*n) === 0) {
    a = randomchoice(5,15);  
    h = randomchoice(2,5);     
    interval = [];  
    for (let i = 0; i <= sokhoang; i++) {
        interval.push(a+i*h);
    }
    intervalrutgonconvert = [];  
    for (let i = 1; i <= sokhoang; i++) {
        intervalrutgonconvert.push(convertnumber(a+(i-0.5)*h));
    }
    intervalrutgonnguyen = [];  
    for (let i = 1; i <= sokhoang; i++) {
        intervalrutgonnguyen.push(2*a+(2*i-1)*h);
    }
    values = generateValues(sokhoang,valueRange,maxRepeats);
    n = tongcacphantu(values);
    kq1 = ketquatichhailist(values,intervalrutgonnguyen);
}
var xngang = convertnumber(kq1/(2*n));
var i = randomchoice(-9,9);
var j = randomchoice(-9,9);
var k = randomchoice(-9,9);
while (i === j || j === k || i === k || i*j*k === 0) {
    i = randomchoice(-9,9);
    j = randomchoice(-9,9);
    k = randomchoice(-9,9);
}
var xi = convertnumber((5*kq1+n*i)/(10*n));
var xj = convertnumber((5*kq1+n*j)/(10*n));
var xk = convertnumber((5*kq1+n*k)/(10*n));
document.getElementById("debaicau31").innerHTML = "Cho mẫu số liệu ghép nhóm có bảng tần số ghép nhóm" + 
        generateTable(text1,text2,interval,values) + 
        "Số trung bình của mẫu số liệu ghép nhóm trên là";
document.getElementById("PAdung31").innerHTML = "$"+xngang+"$";
document.getElementById("PA1Cau31").innerHTML = "$"+xi+"$";
document.getElementById("PA2Cau31").innerHTML = "$"+xj+"$";
document.getElementById("PA3Cau31").innerHTML = "$"+xk+"$";
document.getElementById("loigiaicau31").innerHTML = "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + ".$<br/>" + 
    "Số trung bình của mẫu số liệu ghép nhóm" + 
    "\\begin{align*}"+ 
    "\\overline{x}&=\\dfrac{"+tichhailist(values,intervalrutgonconvert)+"}{"+String(n)+"}\\\\" + 
    "&="+xngang+"."+
    "\\end{align*}";
// Câu 32
var sokhoang = randomchoice(3,4);
var valueRange = [2,3,4,5,6,7,8,9];  
var maxRepeats = 2;    
var text1 = "Nhóm";
var text2 = "Tần số";
var a = randomchoice(5,15);  
var h = randomchoice(2,5);     
var interval = [];  
for (let i = 0; i <= sokhoang; i++) {
    interval.push(a+i*h);
}
var intervalrutgonconvert = [];  
for (let i = 1; i <= sokhoang; i++) {
    intervalrutgonconvert.push(convertnumber(a+(i-0.5)*h));
}
var intervalrutgonnguyen = [];  
for (let i = 1; i <= sokhoang; i++) {
    intervalrutgonnguyen.push(2*a+(2*i-1)*h);
}
var values = generateValues(sokhoang,valueRange,maxRepeats);
var n = tongcacphantu(values);
var kq1 = ketquatichhailist(values,intervalrutgonnguyen);
var kq2 = n*ketquatichphuongsai(values,intervalrutgonnguyen)-Math.pow(ketquatichhailist(values,intervalrutgonnguyen),2);
while ((100*kq1) % (2*n) !== 0 || kq1 % (2*n) === 0 || (100*kq2) % (4*n*n) !== 0 || kq2 % (4*n*n) === 0) {
    a = randomchoice(5,15);  
    h = randomchoice(2,5);     
    interval = [];  
    for (let i = 0; i <= sokhoang; i++) {
        interval.push(a+i*h);
    }
    intervalrutgonconvert = [];  
    for (let i = 1; i <= sokhoang; i++) {
        intervalrutgonconvert.push(convertnumber(a+(i-0.5)*h));
    }
    intervalrutgonnguyen = [];  
    for (let i = 1; i <= sokhoang; i++) {
        intervalrutgonnguyen.push(2*a+(2*i-1)*h);
    }
    values = generateValues(sokhoang,valueRange,maxRepeats);
    n = tongcacphantu(values);
    kq1 = ketquatichhailist(values,intervalrutgonnguyen);
    kq2 = n*ketquatichphuongsai(values,intervalrutgonnguyen)-Math.pow(ketquatichhailist(values,intervalrutgonnguyen),2);
}
var xngang = convertnumber(kq1/(2*n));
var phuongsai = convertnumber(kq2/(4*n*n));
var i = randomchoice(-9,9);
var j = randomchoice(-9,9);
var k = randomchoice(-9,9);
while (i === j || j === k || i === k || i*j*k === 0) {
    i = randomchoice(-9,9);
    j = randomchoice(-9,9);
    k = randomchoice(-9,9);
}
var phuongsaii = convertnumber((5*kq2+2*n*n*i)/(20*n*n));
var phuongsaij = convertnumber((5*kq2+2*n*n*j)/(20*n*n));
var phuongsaik = convertnumber((5*kq2+2*n*n*k)/(20*n*n));
document.getElementById("debaicau32").innerHTML = "Cho mẫu số liệu ghép nhóm có bảng tần số ghép nhóm" +  
        generateTable(text1,text2,interval,values) + 
        "Phương sai của mẫu số liệu ghép nhóm trên là";
document.getElementById("PAdung32").innerHTML = "$"+phuongsai+"$";
document.getElementById("PA1Cau32").innerHTML = "$"+phuongsaii+"$";
document.getElementById("PA2Cau32").innerHTML = "$"+phuongsaij+"$";
document.getElementById("PA3Cau32").innerHTML = "$"+phuongsaik+"$";
document.getElementById("loigiaicau32").innerHTML = "Cỡ mẫu là $n=" + tonglist(values) + "=" + String(n) + ".$<br/>" + 
    "Số trung bình của mẫu số liệu ghép nhóm" + 
    "\\begin{align*}"+ 
    "\\overline{x}&=\\dfrac{"+tichhailist(values,intervalrutgonconvert)+"}{"+String(n)+"}\\\\" + 
    "&="+xngang+"."+
    "\\end{align*}" +
    "Phương sai của mẫu số liệu ghép nhóm" + 
    "\\begin{align*}"+ 
    "S^2&=\\dfrac{1}{"+String(n)+"}\\left("+tichphuongsai(values,intervalrutgonconvert)+"\\right)-"+xngang+"^2\\\\" + 
    "&="+phuongsai+"."+
    "\\end{align*}";
// Câu 41
var a = randomchoice(-5,6);
var b = randomchoice(-5,6);
var c = randomchoice(-5,6);
var d = randomchoice(-5,6);
while (a*b*c*d == 0 || c === d || c === -d || uclnmany(Math.abs(a),Math.abs(b),Math.abs(c)) > 1 || (a < 0 && b < 0 && c < 0 && d < 0) || (a < 0 && b < 0 && c < 0)) {
    a = randomchoice(-5,6);
    b = randomchoice(-5,6);
    c = randomchoice(-5,6);
    d = randomchoice(-5,6);
}
var ds = [1,2,3,4];
var newds = permu(ds);
document.getElementById("debaicau41").innerHTML = "Trong không gian với hệ trục tọa độ $Oxyz$, cho mặt phẳng $(P)$ có phương trình $"+hesodau(a,'x')+hesosau(b,'y')+hesosau(c,'z')+sodungsau(d)+"=0$. Vectơ nào dưới đây là một vectơ pháp tuyến của $(P)$?";
document.getElementById("PAdung41").innerHTML = "$\\overrightarrow{n_"+newds[0]+"}=("+String(a)+";"+String(b)+";"+String(c)+")$";
document.getElementById("PA1Cau41").innerHTML = "$\\overrightarrow{n_"+newds[1]+"}=("+String(a)+";"+String(b)+";"+String(-c)+")$";
document.getElementById("PA2Cau41").innerHTML = "$\\overrightarrow{n_"+newds[2]+"}=("+String(a)+";"+String(b)+";"+String(d)+")$";
document.getElementById("PA3Cau41").innerHTML = "$\\overrightarrow{n_"+newds[3]+"}=("+String(a)+";"+String(-b)+";"+String(d)+")$";
document.getElementById("loigiaicau41").innerHTML = "Mặt phẳng $(P)$ có vectơ pháp tuyến là $\\overrightarrow{n_"+newds[0]+"}=("+String(a)+";"+String(b)+";"+String(c)+").$<br/>";
// Câu 51
var a = randomchoice(1,6);
var b = randomchoice(-5,6);
var m = randomchoice(2,5);
var n = randomchoice(2,5);
while (Math.pow(m,n) === m*n || Math.pow(n,m) === m*n || Math.pow(m,n) === Math.pow(n,m) || b === 0 || ucln(a,Math.abs(b)) > 1) {
    a = randomchoice(1,6);
    b = randomchoice(-5,6);
    m = randomchoice(2,5);
    n = randomchoice(2,5);
}
document.getElementById("debaicau51").innerHTML = randomchoicelist(["Tập nghiệm của bất phương trình $\\log_"+String(m)+"("+hesodau(a,'x')+sodungsau(b)+")<"+String(n)+"$ là", "Bất phương trình $\\log_"+String(m)+"("+hesodau(a,'x')+sodungsau(b)+")<"+String(n)+"$ có tập nghiệm là"]); 
document.getElementById("PAdung51").innerHTML = "$\\left("+phanso(-b,a)+";"+phanso(Math.pow(m,n)-b,a)+"\\right)$";
document.getElementById("PA1Cau51").innerHTML = "$\\left(-\\infty;"+phanso(Math.pow(m,n)-b,a)+"\\right)$";
document.getElementById("PA2Cau51").innerHTML = "$\\left("+phanso(-b,a)+";"+phanso(m*n-b,a)+"\\right)$";
document.getElementById("PA3Cau51").innerHTML = "$\\left("+phanso(-b,a)+";"+phanso(Math.pow(n,m)-b,a)+"\\right)$";
document.getElementById("loigiaicau51").innerHTML = "Ta có" + 
"\\begin{eqnarray*}" + 
"&&\\log_"+String(m)+"("+hesodau(a,'x')+sodungsau(b)+")<"+String(n)+"\\\\" + 
"&\\Leftrightarrow& 0< "+hesodau(a,'x')+sodungsau(b)+"<"+String(m)+"^"+String(n)+"\\\\" + 
"&\\Leftrightarrow& "+phanso(-b,a)+" < x < "+phanso(Math.pow(m,n)-b,a)+"."+
"\\end{eqnarray*}" + 
"Vậy tập nghiệm của bất phương trình là $\\left("+phanso(-b,a)+";"+phanso(Math.pow(m,n)-b,a)+"\\right).$<br/>";
// Câu 61
var m = randomchoice(-5,6);
var n = randomchoice(-5,6);
var p = randomchoice(-5,6);
var a = randomchoice(-5,6);
var b = randomchoice(-5,6);
var c = randomchoice(-5,6);
while (a*b*c*m*n*p == 0 || uclnmany(Math.abs(a),Math.abs(b),Math.abs(c)) > 1 || uclnmany(Math.abs(m),Math.abs(n),Math.abs(p)) > 1 || (a < 0 && b < 0 && c < 0) || (m < 0 && n < 0 && p < 0) || (a*n === b*m && a*p === c*m)) {
    m = randomchoice(-5,6);
    n = randomchoice(-5,6);
    p = randomchoice(-5,6);
    a = randomchoice(-5,6);
    b = randomchoice(-5,6);
    c = randomchoice(-5,6);
}
document.getElementById("debaicau61").innerHTML = randomchoicelist(["Trong không gian với hệ trục tọa độ $Oxyz$, phương trình của đường thẳng đi qua điểm $M("+String(m)+";"+String(n)+";"+String(p)+")$ và có một vectơ chỉ phương $\\overrightarrow{u}=("+String(a)+";"+String(b)+";"+String(c)+")$ là", "Trong không gian với hệ trục tọa độ $Oxyz$, đường thẳng đi qua điểm $M("+String(m)+";"+String(n)+";"+String(p)+")$ và có một vectơ chỉ phương $\\overrightarrow{u}=("+String(a)+";"+String(b)+";"+String(c)+")$ có phương trình là"]); 
document.getElementById("PAdung61").innerHTML = "$\\dfrac{x"+sodungsau(-m)+"}{"+String(a)+"}=\\dfrac{y"+sodungsau(-n)+"}{"+String(b)+"}=\\dfrac{z"+sodungsau(-p)+"}{"+String(c)+"}$";
document.getElementById("PA1Cau61").innerHTML = "$\\dfrac{x"+sodungsau(-a)+"}{"+String(m)+"}=\\dfrac{y"+sodungsau(-b)+"}{"+String(n)+"}=\\dfrac{z"+sodungsau(-c)+"}{"+String(p)+"}$";
document.getElementById("PA2Cau61").innerHTML = "$\\dfrac{x"+sodungsau(m)+"}{"+String(a)+"}=\\dfrac{y"+sodungsau(n)+"}{"+String(b)+"}=\\dfrac{z"+sodungsau(p)+"}{"+String(c)+"}$";
var PA3Cau61a = "$\\dfrac{x"+sodungsau(-m)+"}{"+String(a)+"}=\\dfrac{y"+sodungsau(-n)+"}{"+String(b)+"}=\\dfrac{z"+sodungsau(p)+"}{"+String(c)+"}$";
var PA3Cau61b = "$\\dfrac{x"+sodungsau(-m)+"}{"+String(a)+"}=\\dfrac{y"+sodungsau(n)+"}{"+String(b)+"}=\\dfrac{z"+sodungsau(-p)+"}{"+String(c)+"}$";
var PA3Cau61c = "$\\dfrac{x"+sodungsau(m)+"}{"+String(a)+"}=\\dfrac{y"+sodungsau(-n)+"}{"+String(b)+"}=\\dfrac{z"+sodungsau(-p)+"}{"+String(c)+"}$";
document.getElementById("PA3Cau61").innerHTML = randomchoicelist([PA3Cau61a, PA3Cau61b, PA3Cau61c]);
document.getElementById("loigiaicau61").innerHTML = "Đường thẳng đi qua điểm $M("+String(m)+";"+String(n)+";"+String(p)+")$ và có một vectơ chỉ phương $\\overrightarrow{u}=("+String(a)+";"+String(b)+";"+String(c)+")$ có phương trình là $\\dfrac{x"+sodungsau(-m)+"}{"+String(a)+"}=\\dfrac{y"+sodungsau(-n)+"}{"+String(b)+"}=\\dfrac{z"+sodungsau(-p)+"}{"+String(c)+"}.$<br/>";
// Câu 71
var a = randomchoice(-6,7);
var b = randomchoice(-6,7);
var m = randomchoice(2,9);
var n = randomchoice(2,9);
while (m === n || m == n-1 || a === b || a*b == 0) {
    a = randomchoice(-6,7);
    b = randomchoice(-6,7);
    m = randomchoice(2,9);
    n = randomchoice(2,9);
}
document.getElementById("debaicau71").innerHTML = "Cấp số cộng $(u_n)$ có $u_1="+String(a)+"$ và $u_"+String(m)+"="+String(b)+"$. Số hạng $u_"+String(n)+"$ của cấp số cộng bằng"; 
document.getElementById("PAdung71").innerHTML = "$"+phanso((m-1)*a+(n-1)*(b-a),m-1)+"$"; 
document.getElementById("PA1Cau71").innerHTML = "$"+phanso((m-1)*a+(n-2)*(b-a),m-1)+"$"; 
document.getElementById("PA2Cau71").innerHTML = "$"+phanso((m-1)*a+n*(b-a),m-1)+"$"; 
document.getElementById("PA3Cau71").innerHTML = "$"+phanso((m-1)*a+(n+1)*(b-a),m-1)+"$"; 
document.getElementById("loigiaicau71").innerHTML = "Sử dụng công thức $u_n=u_1+(n-1)d,$ ta có" + 
"\\begin{align*}"+ 
"u_"+String(m)+"&=u_1"+hesosau(m-1,"d")+"\\Rightarrow d="+phanso(b-a,m-1)+"."+
"\\end{align*}" + 
"Do đó" +
"\\begin{align*}"+ 
"u_"+String(n)+"&=u_1"+hesosau(n-1,"d")+"="+phanso((m-1)*a+(n-1)*(b-a),m-1)+"."+
"\\end{align*}";

// Câu 72
var a = randomchoice(-9,9);
var b = randomchoice(-9,9);
while (a*b === 0 || kiemtrakhacnhau(a+b,a-b,a*b,a/b) === false) {
    a = randomchoice(-9,9);
    b = randomchoice(-9,9);
}
document.getElementById("debaicau72").innerHTML = "Cho cấp số cộng $(u_n)$ với $u_1="+String(a)+"$ và công sai $d="+String(b)+"$. Giá trị của $u_2$ bằng"; 
document.getElementById("PAdung72").innerHTML = "$"+String(a+b)+"$"; 
document.getElementById("PA1Cau72").innerHTML = "$"+String(a-b)+"$"; 
document.getElementById("PA2Cau72").innerHTML = "$"+String(a*b)+"$"; 
document.getElementById("PA3Cau72").innerHTML = "$"+phanso(a,b)+"$";
document.getElementById("loigiaicau72").innerHTML = "Ta có $u_2=u_1+d="+String(a+b)+".$<br/>";
// Câu 81
var a = randomchoice(2,9);
var b = randomchoice(3, 20);
while (b <= a || b === Math.pow(a,2) || b === Math.pow(a,3) || b === Math.pow(a,4) || kiemtrakhacnhau(Math.log(b)/Math.log(a),Math.log(a)/Math.log(b),b/a,a/b) === false) {
    a = randomchoice(2,9);
    b = randomchoice(3,20);
}
var debai1cau81 = "Nghiệm của phương trình $"+String(a)+"^x="+String(b)+"$ là";
var debai2cau81 = "Phương trình $"+String(a)+"^x="+String(b)+"$ có nghiệm là";
document.getElementById("debaicau81").innerHTML = randomchoicelist([debai1cau81,debai2cau81]); 
document.getElementById("PAdung81").innerHTML = "$x=\\log_{"+String(a)+"}"+String(b)+"$"; 
document.getElementById("PA1Cau81").innerHTML = "$x=\\log_{"+String(b)+"}"+String(a)+"$";
document.getElementById("PA2Cau81").innerHTML = "$x="+phanso(b,a)+"$"; 
document.getElementById("PA3Cau81").innerHTML = "$x="+phanso(a,b)+"$";
document.getElementById("loigiaicau81").innerHTML = "Ta có" + 
"\\begin{align*}" +
String(a)+"^x="+String(b)+"&\\Leftrightarrow x=\\log_{"+String(a)+"}"+String(b)+ "." +
"\\end{align*}";

/* Câu số 91 */
var a = randomchoice(-5,6);
var b = randomchoice(-5,6);
var m = randomchoice(-5,6);
var n = randomchoice(-5,6);
while (kiemtrakhacnhau(m*a+n*b,m*a-n*b,n*b-m*a,a+b) === false || a*b*(a-b)*m*n*(m-n)*(m+n) === 0 || (m < 0 && n < 0)) {
    a = randomchoice(-5,6);
    b = randomchoice(-5,6);
    m = randomchoice(-5,6);
    n = randomchoice(-5,6);
}
var duoi = randomchoice(-5,2);
var tren = randomchoice(3,7);
document.getElementById("debaicau91").innerHTML = "Nếu $"+tp(duoi,tren,"f(x)")+"="+String(a)+"$" 
+" và $"+tp(duoi,tren,"g(x)")+"="+String(b)+"$" 
+" thì tích phân $I="+tp(duoi,tren,"\\left["+hesodau(m,"f(x)")+hesosau(n,"g(x)")+"\\right]")+"$ bằng";
document.getElementById("PAdung91").innerHTML = "$"+String(m*a+n*b)+"$";
document.getElementById("PA1Cau91").innerHTML = "$"+String(m*a-n*b)+"$";
document.getElementById("PA2Cau91").innerHTML = "$"+String(n*b-m*a)+"$";
document.getElementById("PA3Cau91").innerHTML = "$"+String(a+b)+"$";
document.getElementById("loigiaicau91").innerHTML = "Ta có" +
"\\begin{align*}" + 
"I&="+tp(duoi,tren,"\\left["+hesodau(m,"f(x)")+hesosau(n,"g(x)")+"\\right]")+"\\\\" +
"&="+hesodau(m,tp(duoi,tren,"f(x)"))+hesosau(n,tp(duoi,tren,"g(x)"))+"\\\\" + 
"&="+String(m*a)+sodungsau(n*b)+"\\\\" + 
"&="+String(m*a+n*b)+"." + 
"\\end{align*}";

/* Câu số 92 */
var a = randomchoice(-4,5);
var b = randomchoice(-4,5);
var c = randomchoice(-4,5);
while (a >= b || b >= c) {
    a = randomchoice(-4,5);
    b = randomchoice(-4,5);
    c = randomchoice(-4,5);
}
var m = randomchoice(-4,5);
var n = randomchoice(-4,5);
while (kiemtrakhacnhau(m+n,m-n,n-m,m*n) === false) {
    m = randomchoice(-4,5);
    n = randomchoice(-4,5);
}
document.getElementById("debaicau92").innerHTML = "Nếu $"+tp(a,b,"f(x)")+"="+String(m)+"$ và $"+tp(b,c,"f(x)")+"="+String(n)+"$ thì $"+tp(a,c,"f(x)")+"$ bằng";
document.getElementById("PAdung92").innerHTML = "$"+String(m+n)+"$";
document.getElementById("PA1Cau92").innerHTML = "$"+String(m-n)+"$";
document.getElementById("PA2Cau92").innerHTML = "$"+String(n-m)+"$";
document.getElementById("PA3Cau92").innerHTML = "$"+String(m*n)+"$";
document.getElementById("loigiaicau92").innerHTML = "Ta có" + 
"\\begin{align*}"+ 
tp(a,c,"f(x)")+"&="+tp(a,b,"f(x)")+"+"+tp(b,c,"f(x)")+"\\\\"+
"&="+String(m)+"+"+ngoac(n)+"\\\\"+
"&="+String(m+n)+"."+ 
"\\end{align*}";