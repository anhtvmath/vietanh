// Câu 1
diencauhoi(1, {
debai: `Nghiệm của phương trình $2^{2x+1}=8$ là`,
dung: `$x=1$`,
sai1: `$x=3$`,
sai2: `$x=\\dfrac{3}{2}$`,
sai3: `$x=\\dfrac{5}{2}$`,
loigiai: `Ta có
\\begin{equation*}
2^{2x+1}=8\\Leftrightarrow 2x+1=3\\Leftrightarrow x=1.
\\end{equation*}`
});
// Câu 2
diencauhoi(2, {
debai: `Cho hàm số $y=f(x)$ có đồ thị là đường cong trong hình bên.
\\begin{tikzpicture}[>=stealth,thick,yscale=0.8]
\\draw[->,line width = 1pt] (-3.3,0) -- (1.4,0) node[below, pos = 0.98]{$x$};
\\draw[->,line width = 1pt] (0,-0.8) -- (0,4.8) node[right, pos = 0.97]{$y$};
\\draw (0,0) node[below left = -1px]{\\footnotesize $O$} circle (1.2pt);
\\draw (-2,0) node[below]{$-2$} circle (1pt);
\\draw (0,4) node[right]{$4$} circle (1pt);
\\draw[dashed] (-2,0) -- (-2,4) -- (0,4);
\\draw[thick,samples=200,domain=-3.07:1.05] plot(\\x,{(\\x)^3+3*(\\x)^2});
\\end{tikzpicture}
Hàm số đã cho đồng biến trên khoảng nào dưới đây?`,
dung: `$(-\\infty;-2)$`,
sai1: `$(-2;0)$`,
sai2: `$(-2;+\\infty)$`,
sai3: `$(-\\infty;0)$`,
loigiai: `Dựa vào đồ thị, ta thấy đồ thị hàm số đi lên từ trái sang phải trên các khoảng $(-\\infty;-2)$ và $(0;+\\infty)$. 
Trong các phương án đã cho thì chỉ có khoảng $(-\\infty;-2)$ là thỏa mãn.`
});
// Câu 3
diencauhoi(3, {
debai: `Nếu $\\displaystyle\\int\\limits_{-2}^5 f(x)\\mathrm{d}x=18$ thì $\\displaystyle\\int\\limits_{-2}^5\\left[\\dfrac{1}{3}f(x)-4\\right]\\mathrm{d}x$ bằng`,
dung: `$-22$`,
sai1: `$6$`,
sai2: `$-28$`,
sai3: `$2$`,
loigiai: `Ta có
\\begin{align*}
\\displaystyle\\int\\limits_{-2}^5\\left[\\dfrac{1}{3}f(x)-4\\right]\\mathrm{d}x&=\\dfrac{1}{3}\\displaystyle\\int\\limits_{-2}^5 f(x)\\mathrm{d}x-4\\displaystyle\\int\\limits_{-2}^5\\mathrm{d}x\\\\
&=6-28\\\\
&=-22.
\\end{align*}`
});
// Câu 4
diencauhoi(4, {
debai: `Cho hàm số bậc ba $y=f(x)$ có đồ thị là đường cong trong hình bên.
        ${dothibacba_a_am(-1, 3, 0, -3)}
        Giá trị cực đại của hàm số đã cho bằng`,
dung: `$1$`,
sai1: `$2$`,
sai2: `$-3$`,
sai3: `$0$`,
loigiai: `Dựa vào đồ thị, ta thấy tung độ điểm cực đại của đồ thị hàm số là $1$. Vậy giá trị cực đại của hàm số là $y_{\\mathrm{CĐ}}=1.$`
});
// Câu 5
diencauhoi(5, {
debai: `Cho hàm số $f(x)=-\\dfrac{1}{3}x^3-\\dfrac{9}{2}x^2-20x-4$ với mọi $x\\in\\Bbb R$. Hàm số đã cho đạt cực tiểu tại`,
dung: `$-5$`,
sai1: `$-4$`,
sai2: `$\\dfrac{151}{6}$`,
sai3: `$\\dfrac{76}{3}$`,
loigiai: `Ta có $f'(x)=-x^2-9x-20$.
Do đó
\\begin{equation*}
f'(x)=0\\Leftrightarrow\\left[\\begin{array}{l}x=-5\\x=-4\\end{array}\\right.
\\end{equation*}
Bảng biến thiên
${hambacbaTCT("x","f","-5","-4","\\dfrac{151}{6}","\\dfrac{76}{3}")}
Quan sát bảng biến thiên, ta thấy hàm số đã cho đạt cực tiểu tại $x=-5.$`
});

// Câu 6
diencauhoi(6, {
debai: `Đề bài câu 6`,
dung: `Đáp án đúng 6`,
sai1: `Sai 1`,
sai2: `Sai 2`,
sai3: `Sai 3`,
loigiai: `Lời giải chi tiết câu 6.`
});


// Câu 7
diencauhoi(7, {
debai: `Đề bài câu 7`,
dung: `Đáp án đúng 7`,
sai1: `Sai 1`,
sai2: `Sai 2`,
sai3: `Sai 3`,
loigiai: `Lời giải chi tiết câu 7.`
});