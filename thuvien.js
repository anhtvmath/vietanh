function tongcacphantu(list) {
    let tong = 0;
    for (let a of list) {
        tong += a;
    }
    return tong;
}

function tonglist(list) {
    return list.join("+");
}

function ketquatichhailist(list1,list2) {
    let a = 0;
    for (let i = 0; i < list1.length; i++) {
        a += list1[i] * list2[i];
    }
    return a;
}

function ketquatichphuongsai(list1,list2) {
    let a = 0;
    for (let i = 0; i < list1.length; i++) {
        a += list1[i] * Math.pow(list2[i],2);
    }
    return a;
}

function tichhailist(list1,list2) {
    let latexExpression = list1[0] + " \\cdot " + list2[0];  
    for (let i = 1; i < list1.length; i++) {
        latexExpression += "+" + list1[i] + " \\cdot " + list2[i];
    }
    return latexExpression;
}

function tichphuongsai(list1,list2) {
    let latexExpression = list1[0] + " \\cdot " + list2[0] + "^2";  
    for (let i = 1; i < list1.length; i++) {
        latexExpression += "+" + list1[i] + " \\cdot " + list2[i] + "^2";
    }
    return latexExpression;
}

function convertnumber(number) {
    if (Number.isInteger(number)) {
        return String(number);
    } else {
        return String(number).replace('.', '\\text{,}');
    }
}





function C(n, k) {
    if (k === 0 || k === n) {
        return 1;
    }
    else {
        return C(n-1,k-1)+C(n-1,k);
    }
}

function randomchoice(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}

function randomchoicelist(danhsach) {
    if (danhsach.length === 0) {
        return "Danh sách trống";
    } else {
        return danhsach[Math.floor(Math.random()*danhsach.length)];
    }
}

function hesodau(a,x) {
    // ax đứng đầu với a là số nguyên và x là xâu
    if (a > 1 || a < -1) {
        return String(a) + x;
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

function hesosau(a,x) {
    // ax đứng sau với a là số nguyên và x là xâu
    if (a > 1) {
        return "+" + String(a) + x;
    }
    if (a === 1) {
        return "+" + x;
    }
    if (a === -1) {
        return "-" + x;
    }
    if (a === 0) {
        return "";
    }
    if (a < -1) {
        return String(a) + x;
    }
}

function sodungsau(a) {
    if (a > 0) {
        return "+" + String(a);
    }
    if (a === 0) {
        return "";
    }
    if (a < 0) {
        return String(a);
    }
}

function tp(a,b,c) {
    return "\\displaystyle\\int\\limits_{"+String(a)+"}^{"+String(b)+"}"+c+"\\mathrm{d}x";
}

function ngoac(n) {
    if (n >= 0) {
        return String(n);
    }
    else {
        return "("+String(n)+")";
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

function uclnmany(...arr) {
let result = arr[0];
for (let i = 1; i < arr.length; i++) {
result = ucln(result, arr[i]);
}
return result;
}

function phansoduong(m,n) {
    let a = m/ucln(m,n);
    let b = n/ucln(m,n);
    if (b === 1) {
        return String(a);
    } else {
        return "\\dfrac{"+String(a)+"}{"+String(b)+"}";
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

function kiemtrakhacnhau(a, b, c, d) {
    return (a !== b && a !== c && a !== d && b !== c && b !== d && c !== d);
}

function hambacbaCTC(x,f,x1,x2,y1,y2) {
    return "<center>$$" + 
    "\\begin{tikzpicture}[thick,xscale=0.95,yscale=0.5]" + 
    "\\def\\a{8}" + 
    "\\def\\b{7}" + 
    "\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);" + 
    "\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);" + 
    "\\draw (-0.5,-1.5)--(\\a-0.5,-1.5);" + 
    "\\draw (0.5,0.5)--(0.5,-\\b+0.5);" + 
    "\\path" + 
    "(0,0) node{$"+x+"$}" + 
    "(0,-1) node{$"+f+"'("+x+")$}" + 
    "(0,-4) node{$"+f+"("+x+")$}" + 
    "(1,0) node{$-\\infty$}" + 
    "(1,-6) node(A){$-\\infty$}" + 
    "(3,0) node{$"+String(x1)+"$}" + 
    "(3,-1) node{$0$}" + 
    "(3,-3) node(B){$"+String(y1)+"$}" + 
    "(5,0) node{$"+String(x2)+"$}" + 
    "(5,-1) node{$0$}" + 
    "(5,-5) node(C){$"+String(y2)+"$}" + 
    "(7,0) node{$+\\infty$}" + 
    "(7,-2) node(D){$+\\infty$}" + 
    "(2,-1) node{$+$}" + 
    "(4,-1) node{$-$}" + 
    "(6,-1) node{$+$};" + 
    "\\draw[->,>=stealth] (A)--(B);" + 
    "\\draw[->,>=stealth] (B)--(C);" + 
    "\\draw[->,>=stealth] (C)--(D);" + 
    "\\end{tikzpicture}$$</center>";
}



function hambacbaTCT(x,f,x1,x2,y1,y2) {
    return "<center>$$" + 
    "\\begin{tikzpicture}[thick,xscale=0.95,yscale=0.5]" + 
    "\\def\\a{8}" + 
    "\\def\\b{7}" + 
    "\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);" + 
    "\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);" + 
    "\\draw (-0.5,-1.5)--(\\a-0.5,-1.5);" + 
    "\\draw (0.5,0.5)--(0.5,-\\b+0.5);" + 
    "\\path" + 
    "(0,0) node{$"+x+"$}" + 
    "(0,-1) node{$"+f+"'("+x+")$}" + 
    "(0,-4) node{$"+f+"("+x+")$}" + 
    "(1,0) node{$-\\infty$}" + 
    "(1,-2) node(A){$+\\infty$}" + 
    "(3,0) node{$"+String(x1)+"$}" + 
    "(3,-1) node{$0$}" + 
    "(3,-5) node(B){$"+String(y1)+"$}" + 
    "(5,0) node{$"+String(x2)+"$}" + 
    "(5,-1) node{$0$}" + 
    "(5,-3) node(C){$"+String(y2)+"$}" + 
    "(7,0) node{$+\\infty$}" + 
    "(7,-6) node(D){$-\\infty$}" + 
    "(2,-1) node{$-$}" + 
    "(4,-1) node{$+$}" + 
    "(6,-1) node{$-$};" + 
    "\\draw[->,>=stealth] (A)--(B);" + 
    "\\draw[->,>=stealth] (B)--(C);" + 
    "\\draw[->,>=stealth] (C)--(D);" + 
    "\\end{tikzpicture}$$</center>";
}










function positionx(x,y) {
    if (x === 0) {
        return "";
    } else {
        if (y > 0) {
            return "\\draw (" + x + ",0) node[below]{$" + x + "$} circle (1.2pt);";
        } 
        if (y <= 0) {
            return "\\draw (" + x + ",0) node[above]{$" + x + "$} circle (1.2pt);";
        }
    }
}

function positiony(x,y) {
    if (y === 0) {
        return "";
    } else {
        if (x > 0) {
            return "\\draw (0," + y + ") node[left]{$" + y + "$} circle (1.2pt);";
        } 
        if (x <= 0) {
            return "\\draw (0," + y + ") node[right]{$" + y + "$} circle (1.2pt);";
        }
    }
}

function dothibacbacongtrucong(a, b, c, d, x1, x2, y1, y2, xmin, xmax, ymin, ymax, dmin, dmax, posO) {
    return "<center>"+
        "$$\\begin{tikzpicture}[>=stealth,thick,xscale=0.8,yscale=0.7]"+
        "\\draw[->,line width = 1.2pt] ("+ xmin +",0)--("+ xmax +",0) node[below,pos=0.97]{$x$};" +
        "\\draw[->,line width = 1.2pt] (0,"+ ymin +")--(0,"+ ymax +") node[right,pos=0.97]{$y$};" +
        "\\draw (0,0) node[" + posO + "]{\\footnotesize $O$} circle (1.2pt);" +
        positionx(x1,y1) + 
        positionx(x2,y2) + 
        positiony(x1,y1) + 
        positiony(x2,y2) +
        "\\draw[dashed] (" + x1 + ",0)--(" + x1 + "," + y1 + ")--(0," + y1 + ");" +
        "\\draw[dashed] (" + x2 + ",0)--(" + x2 + "," + y2 + ")--(0," + y2 + ");" +
        "\\draw[thick,samples=200,domain="+ dmin +":"+ dmax +"] plot(\\x,{" + a + "*(\\x)^3+" + b + "*(\\x)^2+" + c + "*(\\x)+" + d + "});" +
        "\\end{tikzpicture}$$"+
        "</center>";
}





function generateValues(size, valueRange, maxRepeats) {
    let values = []; 
    while (values.length < size) {
        let randomIndex = Math.floor(Math.random() * valueRange.length);
        let value = valueRange[randomIndex];
        let count = 0;
        for (let i = 0; i < values.length; i++) {
            if (values[i] === value) {
                count++;  
            }
        }
        if (count < maxRepeats) {
            values.push(value);
        }
    }
    return values;
}

function generateTable(text1, text2, interval, values) {
    let n = interval.length - 1;  
    let tableHtml = "<center>" +
                    "<table>" +
                    "<tr>" +
                    "<td>" + text1 + "</td>";
    for (let i = 0; i < n; i++) {
        tableHtml += "<td>$[" + interval[i] + ";" + interval[i + 1] + ")$</td>";
    }
    tableHtml += "</tr>" +
                    "<tr>" +
                    "<td>" + text2 + "</td>";
    for (let i = 0; i < n; i++) {
        tableHtml += "<td>$" + values[i] + "$</td>";
    }
    tableHtml += "</tr>" +
                    "</table>" +
                    "</center>";
    return tableHtml;
}

function permu(arr) {
    let newArray = []; 
    while (arr.length > 0) {
        let randomIndex = Math.floor(Math.random()*arr.length);  
        let selectedElement = arr[randomIndex];  
        newArray.push(selectedElement);
        arr.splice(randomIndex,1); 
    }
    return newArray;
}