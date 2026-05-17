function taobanglatex(text1, intervals, text2, values) {
    const num_intervals = intervals.length - 1;
    const num_values = values.length;

    // Kiểm tra tính hợp lệ của dữ liệu đầu vào
    if (num_intervals !== num_values) {
        throw new Error("Số khoảng thời gian phải khớp với số giá trị.");
    }

    // Tạo mảng các chuỗi khoảng (intervals)
    const interval_strings_arr = [];
    for (let i = 0; i < num_intervals; i++) {
        interval_strings_arr.push(`$[${intervals[i]}; ${intervals[i+1]})$`);
    }

    const interval_strings = interval_strings_arr.join(" & ");
    
    // Biến đổi các giá trị thành dạng $value$ và nối lại bằng &
    const values_str = values.map(value => `$${value}$`).join(" & ");

    // Tạo phần định dạng cột (c|c|c...)
    const column_format = Array(num_intervals).fill("c").join("|");

    // Dựng chuỗi LaTeX hoàn chỉnh
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





function ngaunhien(mang) {
    return mang[Math.floor(Math.random() * mang.length)];
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
            result = "$$\\begin{tikzpicture}[>=stealth,thick,scale=0.9]\n" +
                "\\draw[->,line width = 1pt] (-2.3,0) -- (2.5,0) node[below, pos = 0.98]{$x$};\n" +
                "\\draw[->,line width = 1pt] (0," + c1.yMin + ") -- (0," + c1.yMax + ") node[right, pos = 0.97]{$y$};\n" +
                "\\draw (0,0) node[" + c1.nO + "]{\\footnotesize $O$} circle (1.2pt);\n" +
                "\\draw (-1,0) node[" + c1.n1 + "]{$-1$} circle (1pt);\n" +
                "\\draw (1,0) node[" + c1.n2 + "]{$1$} circle (1pt);\n" +
                c1.yNodes + "\n" +
                "\\draw[dashed] (-1,0) -- " + c1.d1 + ";\n" +
                "\\draw[dashed] (1,0) -- " + c1.d2 + ";\n" +
                "\\draw[thick,samples=200,domain=" + c1.dom + "] plot(\\x,{(\\x)^3-3*(\\x)" + (d >= 0 ? (d === 0 ? "" : "+" + d) : d) + "});\n" +
                "\\end{tikzpicture}$$";
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
            result = "$$\\begin{tikzpicture}[>=stealth,thick,yscale=" + c2.ysc + "]\n" +
                "\\draw[->,line width = 1pt] (" + c2.xMin + ",0) -- (" + c2.xMax + ",0) node[below, pos = 0.98]{$x$};\n" +
                "\\draw[->,line width = 1pt] (0," + c2.yMin + ") -- (0," + c2.yMax + ") node[right, pos = 0.97]{$y$};\n" +
                "\\draw (0,0) node[" + c2.nO + "]{\\footnotesize $O$} circle (1.2pt);\n" +
                "\\draw (2,0) node[" + c2.n2 + "]{$2$} circle (1pt);\n" +
                c2.yNodes + "\n" +
                "\\draw[dashed] (2,0) -- " + c2.dash + ";\n" +
                "\\draw[thick,samples=200,domain=" + c2.dom + "] plot(\\x,{(\\x)^3-3*(\\x)^2" + (d >= 0 ? (d === 0 ? "" : "+" + d) : d) + "});\n" +
                "\\end{tikzpicture}$$";
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
            result = "$$\\begin{tikzpicture}[>=stealth,thick,yscale=" + c3.ysc + "]\n" +
                "\\draw[->,line width = 1pt] (" + c3.xMin + ",0) -- (" + c3.xMax + ",0) node[below, pos = 0.98]{$x$};\n" +
                "\\draw[->,line width = 1pt] (0," + c3.yMin + ") -- (0," + c3.yMax + ") node[right, pos = 0.97]{$y$};\n" +
                "\\draw (0,0) node[" + c3.nO + "]{\\footnotesize $O$} circle (1.2pt);\n" +
                "\\draw (-2,0) node[" + c3.n2 + "]{$-2$} circle (1pt);\n" +
                c3.yNodes + "\n" +
                "\\draw[dashed] (-2,0) -- " + c3.dash + ";\n" +
                "\\draw[thick,samples=200,domain=" + c3.dom + "] plot(\\x,{(\\x)^3+3*(\\x)^2" + (d >= 0 ? (d === 0 ? "" : "+" + d) : d) + "});\n" +
                "\\end{tikzpicture}$$";
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
            result = "$$\\begin{tikzpicture}[>=stealth,thick,scale=0.9]\n" +
                "\\draw[->,>=stealth, line width = 1pt] (-2.5,0)--node[below, pos = 0.98]{$x$}(2.5,0);\n" +
                "\\draw[->,>=stealth, line width = 1pt] (0," + c1.yMin + ")--node[right, pos = 0.97]{$y$}(0," + c1.yMax + ");\n" +
                "\\draw (0,0) node[" + c1.nO + "]{\\footnotesize $O$} circle (1.2pt);\n" +
                "\\draw (-1,0) node[" + c1.n1 + "]{$-1$} circle (1pt);\n" +
                "\\draw (1,0) node[" + c1.n2 + "]{$1$} circle (1pt);\n" +
                c1.yNodes + "\n" +
                "\\draw[dashed] (-1,0) -- " + c1.d1 + ";\n" +
                "\\draw[dashed] (1,0) -- " + c1.d2 + ";\n" +
                "\\draw[thick,samples=200,domain=-2.06:2.03] plot(\\x,{-(\\x)^3+3*(\\x)" + (d >= 0 ? (d === 0 ? "" : "+" + d) : d) + "});\n" +
                "\\end{tikzpicture}$$";
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
            result = "$$\\begin{tikzpicture}[>=stealth,thick,scale=0.9]\n" +
                "\\draw[->,>=stealth, line width = 1pt] (-1.6,0)--node[below, pos = 0.98]{$x$}(3.7,0);\n" +
                "\\draw[->,>=stealth, line width = 1pt] (0," + c2.yMin + ")--node[right, pos = 0.97]{$y$}(0," + c2.yMax + ");\n" +
                "\\draw (0,0) node[" + c2.nO + "]{\\footnotesize $O$} circle (1.2pt);\n" +
                "\\draw (2,0) node[below]{$2$} circle (1pt);\n" +
                c2.yNodes + "\n" +
                "\\draw[dashed] (2,0) -- " + c2.dash + ";\n" +
                "\\draw[thick,samples=200,domain=-1.04:" + c2.dom + "] plot(\\x,{-(\\x)^3+3*(\\x)^2" + (d >= 0 ? (d === 0 ? "" : "+" + d) : d) + "});\n" +
                "\\end{tikzpicture}$$";
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
            result = "$$\\begin{tikzpicture}[>=stealth,thick,scale=0.9]\n" +
                "\\draw[->,>=stealth, line width = 1pt] (-3.5,0)--node[below, pos = 0.98]{$x$}(1.6,0);\n" +
                "\\draw[->,>=stealth, line width = 1pt] (0," + c3.yMin + ")--node[right, pos = 0.97]{$y$}(0," + c3.yMax + ");\n" +
                "\\draw (0,0) node[" + c3.nO + "]{\\footnotesize $O$} circle (1.2pt);\n" +
                "\\draw (-2,0) node[" + c3.n2B + "]{$-2$} circle (1pt);\n" +
                c3.yNodes + "\n" +
                "\\draw[dashed] (-2,0) -- " + c3.d1 + ";\n" +
                "\\draw[thick,samples=200,domain=" + c3.dom + "] plot(\\x,{-(\\x)^3-3*(\\x)^2" + (d >= 0 ? (d === 0 ? "" : "+" + d) : d) + "});\n" +
                "\\end{tikzpicture}$$";
        }
    }

    return result;
}

function hamtrungphuongCTCT(a, b, c) {
    return "$$\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.6]\n" +
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
    "\\end{tikzpicture}$$\n";
}

function hamtrungphuongTCTC(a, b, c) {
    return "$$\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.6]\n" +
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
    "\\end{tikzpicture}$$\n";
}

function bangxetdauCTC(x, f, x1, x2) {
    return "$$\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.7]\n" +
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
    "\\end{tikzpicture}$$\n";
}

function bangxetdauTCT(x, f, x1, x2) {
    return "$$\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.7]\n" +
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
    "\\end{tikzpicture}$$\n";
}

function bangxetdauCTCT(x, f, x1, x2, x3) {
    return "$$\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.7]\n" +
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
    "\\end{tikzpicture}$$\n";
}

function bangxetdauCTTC(x, f, x1, x2, x3) {
    return "$$\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.7]\n" +
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
    "\\end{tikzpicture}$$\n";
}

function bangxetdauTCTCT(x, f, x1, x2, x3, x4) {
    return "$$\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.7]\n" +
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
    "\\end{tikzpicture}$$\n";
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
    return "$$\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.6]\n" + 
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
    return "$$\\begin{tikzpicture}[thick,xscale=1.1,yscale=0.6]\n" +
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
