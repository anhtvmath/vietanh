document.addEventListener('DOMContentLoaded', function() {
    // Trỏ vào cái ID riêng để không ghi đè phần Hệ thống
    const contentContainer = document.getElementById('dynamic-content');

    if (contentContainer) {
        const menuContent = `
            <span class="menu-label">Cơ bản</span>
            <div class="submenu">
                <button class="btn-math" onclick="insertAtCursor('\\\\forall')">$\\forall$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\exists')">$\\exists$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\in')">$\\in$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\notin')">$\\notin$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\Rightarrow')">$\\Rightarrow$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\Leftrightarrow')">$\\Leftrightarrow$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\sqrt{a}')">$\\sqrt{a}$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\sqrt[n]{a}')">$\\sqrt[n]{a}$</button>
                <button class="btn-math" onclick="insertAtCursor('a^{b}')">$a^b$</button>
                <button class="btn-math" onclick="insertAtCursor('a_{b}')">$a_b$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\underline{AB}')">$\\underline{AB}$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\overrightarrow{AB}')">$\\overrightarrow{AB}$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\pm')">$\\pm$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\times ')">$\\times$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\approx ')">$\\approx$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\infty ')">$\\infty$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\geq')">$\\geq$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\leq')">$\\leq$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\cap')">$\\cap$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\cup')">$\\cup$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\displaystyle\\\\int\\\\mathrm{d}x')">$\\int$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\displaystyle\\\\int\\\\limits_{a}^{b}\\\\mathrm{d}x')">$\\displaystyle\\int_{a}^{b}$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\displaystyle\\\\lim\\\\limits_{x \\\\to x_0}')">$\\lim$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\dfrac{a}{b}')">$\\dfrac{a}{b}$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\parallel')">$\\parallel$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\perp')">$\\perp$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\sim')">$\\sim$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\widehat{ABC}')">$\\widehat{ABC}$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\triangle')">$\\triangle$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\cdot')">$\\cdot$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\subset')">$\\subset$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\supset')">$\\supset$</button>
            </div>

            <span class="menu-label">Biến đổi</span>
            <div class="submenu" style="grid-template-columns: 1fr;">
                <button class="btn-math" onclick="insertAtCursor('\\\\begin{align*}\\na &= b \\\\\\\\\\n  &= c\\n\\\\end{align*}')">
                \\begin{align*}
                a &= b \\\\
                &= c
                \\end{align*}
                </button>
                
                <button class="btn-math" onclick="insertAtCursor('\\\\begin{cases}\\na=b\\\\\\\\\\nc=d\\n\\\\end{cases}')">
                \\begin{cases}
                a=b\\\\
                c=d
                \\end{cases}
                </button>
                
                <button class="btn-math" onclick="insertAtCursor('$\\\\left[\\\\begin{array}{l}\\na=b\\\\\\\\\\nc=d\\n\\\\end{array}\\\\right.$')">
                $\\left[\\begin{array}{l}
                a=b\\\\
                c=d
                \\end{array}\\right.$
                </button>
                
                <button class="btn-math" onclick="insertAtCursor('\\\\begin{eqnarray*}\\n&& a\\\\\\\\\\n&\\\\Leftrightarrow& b\\\\\\\\\\n&\\\\Leftrightarrow& c\\n\\\\end{eqnarray*}')">
                \\begin{eqnarray*}
                && a\\\\
                &\\Leftrightarrow& b\\\\
                &\\Leftrightarrow& c
                \\end{eqnarray*}
                </button>
                
                <button class="btn-math" onclick="insertAtCursor('\\\\begin{equation}\\\\tag{1}\\na=b\\n\\\\end{equation}')">
                \\begin{equation}\\tag{1}
                a=b
                \\end{equation}
                </button>
            </div>

            <span class="menu-label">Bảng biến thiên</span>
            <div class="submenu">
                <button class="btn-math" onclick="insertAtCursor(BBThambacbaCTC)">Hàm bậc 3 + - +</button>
                <button class="btn-math" onclick="insertAtCursor(BBThambacbaTCT)">Hàm bậc 3 - + -</button>
                <button class="btn-math" onclick="insertAtCursor(BBThamtrungphuongCTCT)">Hàm trùng phương + - + - </button>
                <button class="btn-math" onclick="insertAtCursor(BBThamtrungphuongTCTC)">Hàm trùng phương - + - + </button>
                <button class="btn-math" onclick="insertAtCursor(BBThamphanthucTT)">Hàm phân thức - - </button>
                <button class="btn-math" onclick="insertAtCursor(BBThamphanthucTT)">Hàm phân thức + + </button>
            </div>

            <span class="menu-label">TikZ</span>
            <div class="submenu">
                <button class="btn-math" onclick="insertAtCursor('\\\\begin{tikzpicture}\\n\\\\usetikzlibrary{calc, positioning, arrows.meta, shapes.geometric, intersections, quotes, angles}\\n\\n\\\\end{tikzpicture}')">Khởi tạo Tikz</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\coordinate (A) at (?,?);\\n\\\\draw[fill=black] (A) node[left,right,above,below]{$A$} circle(1.2pt);')">Vẽ điểm</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\draw (0,0) circle(2);')">Vẽ đường tròn</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\draw[->,>=stealth, line width = 1.2pt] (-4,0)--node[below, pos = 0.99]{$x$}(4,0);')">Trục hoành</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\draw[->,>=stealth, line width = 1.2pt] (0,-4)--node[right, pos = 0.99]{$y$}(0,4);')">Trục tung</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\coordinate (M) at ($(A)!0.5!(B)$);\\n\\\\draw[fill=black] (M) node[left,right,above,below]{$M$} circle(1.2pt);')">Trung điểm</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\draw (A)--(B);')">Nối điểm</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\pic[draw, angle radius = 2.5mm]{right angle = A--H--B};')">Góc vuông</button>
                <button class="btn-math" onclick="insertAtCursor(gocbatky)">Góc bất kỳ</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\coordinate (M) at (intersection of A--B and C--D);')">Giao điểm</button>
            </div>

            <span class="menu-label">Đồ thị hàm số</span>
            <div class="submenu">
                <button class="btn-math" onclick="insertAtCursor(hambacba1)">$y=-x^3+3x-2$</button> 
                <button class="btn-math" onclick="insertAtCursor(hambacba2)">$y=-x^3+3x-1$</button> 
                <button class="btn-math" onclick="insertAtCursor(hambacba3)">$y=-x^3+3x$</button> 
                <button class="btn-math" onclick="insertAtCursor(hambacba4)">$y=-x^3+3x+1$</button> 
            </div>

        

            <span class="menu-label">Hình học không gian</span>
            <div class="submenu">
                <button class="btn-math" onclick="insertAtCursor(choptamgiacdeu)">Hình chóp tam giác đều</button>
                <button class="btn-math" onclick="insertAtCursor(choptamgiaccomatbenvuongday)">Hình chóp tam giác có mặt bên vuông góc với đáy</button>
            </div>

            <span class="menu-label">Tập hợp số</span>
            <div class="submenu">
                <button class="btn-math" onclick="insertAtCursor('\\\\mathbb{R}')">$\\mathbb{R}$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\mathbb{N}')">$\\mathbb{N}$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\mathbb{N}^*')">$\\mathbb{N}^*$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\mathbb{Z}')">$\\mathbb{Z}$</button>
            </div>

            <span class="menu-label">Ký tự Hy Lạp</span>
            <div class="submenu">
                <button class="btn-math" onclick="insertAtCursor('\\\\alpha')">$\\alpha$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\beta')">$\\beta$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\gamma')">$\\gamma$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\Delta')">$\\Delta$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\epsilon')">$\\epsilon$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\theta')">$\\theta$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\lambda')">$\\lambda$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\mu')">$\\mu$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\pi')">$\\pi$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\phi')">$\\phi$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\omega')">$\\omega$</button>
                <button class="btn-math" onclick="insertAtCursor('\\\\Omega')">$\\Omega$</button>
            </div>
        `;

        // Đổ dữ liệu vào đúng vị trí "giữa"
        contentContainer.innerHTML = menuContent;

        // Vẽ lại công thức MathJax
        if (window.MathJax && window.MathJax.typeset) {
            window.MathJax.typeset();
        }
    }
});
