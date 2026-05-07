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
    return "$$\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.5]\n" + 
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
    "\\end{tikzpicture}$$\n";
}

function hambacbaTCT(x, f, x1, x2, y1, y2) {
    return "$$\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.5]\n" +
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
    "(1,-2) node(A){$-\\infty$}\n" +
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
    "\\end{tikzpicture}$$\n";
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

function hesosau(a,x) {
        if (a > 1) {
            return "+" + a + x;
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
            return a + x;
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
