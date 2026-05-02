  const tikzLibrary = [
        {
id: "code1",
code: String.raw`\begin{tikzpicture}[scale=0.6, font=\footnotesize,line join=round, line cap=round, >=stealth, every node/.style={scale=0.8}]
\usetikzlibrary{calc, angles, quotes}
\def\ab{2} \def\ac{5} \def\h{4}
\path (0,0) coordinate (A) ++(-45:\ab) coordinate (B) (\ac,0) coordinate (C) ($(A)!1/2!(C)$) coordinate (H) ($(H)+(0,\h)$) coordinate (S);
\foreach \i in {A,B,C}{\draw (S)--(\i);}
\draw (A)--(B)--(C);
\draw[dashed,thin](A)--(C) (S)--(H);
\pic[draw,thin,angle radius=2mm] {right angle = S--H--C};
\foreach \i/\g in {S/90,A/180,B/-90,C/0,H/-90} \fill[black] (\i) circle(1pt)+(\g:2.5mm)node[scale=1]{$\i$};
\end{tikzpicture}`
        },
        {
id: "code2",
code: String.raw`\begin{tikzpicture}[scale=0.6, font=\footnotesize,line join=round, line cap=round, >=stealth, every node/.style={scale=0.8}]
\usetikzlibrary{calc, angles, quotes}
\def\ab{2} \def\ac{4} \def\h{3}
\path (0,0) coordinate (A) ++(-60:\ab) coordinate (B) (\ac,0) coordinate (C) ($(B)!1/2!(C)$) coordinate (M) ($(A)!2/3!(M)$) coordinate (H) ($(H)+(0,\h)$) coordinate (S);
\foreach \i in{A,B,C}{\draw (S)--(\i);};
\draw (A)--(B)--(C) (S)--(M);
\draw[dashed] (A)--(C) (A)--(M) (S)--(H);
\pic[draw,angle eccentricity=1.8,angle radius=2mm]{right angle=C--H--S};
\foreach \i/\g in {S/90,A/-180,B/-90,C/0,M/-90,H/-90} \fill[black] (\i) circle(1pt)+(\g:2.6mm)node[scale=1]{$\i$};
\end{tikzpicture}`
        },
        { 
id: "code3", 
code: String.raw`\begin{tikzpicture}[scale=0.8, font=\footnotesize,line join=round, line cap=round, >=stealth, every node/.style={scale=0.8}]
\usetikzlibrary{calc,angles,quotes}
\def\ab{2}
\def\ac{5}
\def\h{3}
\path
(0,0) coordinate (A)
++(-60:\ab) coordinate (B)
(\ac,0) coordinate (C)
($(A)+(0,\h)$) coordinate (S)
;
\foreach \i in {A,B,C}{\draw (S)--(\i);}
\draw (A)--(B)--(C);
\draw[dashed,thin](A)--(C);
\pic[draw,thin,angle radius=2mm] {right angle = S--A--C};
\foreach \i/\g in {S/90,A/180,B/-90,C/0}
\fill[black] (\i) circle(1pt)+(\g:2.5mm)node[scale=1]{$\i$};
\end{tikzpicture}`
        },
        { id: "code4", code: "" },
        { id: "code5", code: "" },
        { id: "code6", code: "" },
        { id: "code7", code: "" },
        { id: "code8", code: "" },
        { id: "code9", code: "" },
        { id: "code10", code: "" }
    ];

    function initLibrary() {
        const grid = document.getElementById('tikz-grid');
        grid.innerHTML = tikzLibrary.map(item => `
            <div class="card">
                <div class="preview-box">
                    ${item.code.trim() ? '$$' + item.code + '$$' : '<p style="color:#ccc">Mã trống</p>'}
                </div>
                <button class="copy-btn" onclick="copyTikz('${item.id}')">
                    <i data-lucide="copy" size="16"></i> Copy Mã TikZ
                </button>
                <pre id="${item.id}">${item.code}</pre>
            </div>
        `).join('');

        lucide.createIcons();

        // Load Upmath
        const oldScript = document.querySelector('script[src*="upmath.me/latex.js"]');
        if (oldScript) oldScript.remove();
        const newScript = document.createElement('script');
        newScript.src = "https://i.upmath.me/latex.js";
        document.head.appendChild(newScript);
    }

    function copyTikz(id) {
        const code = document.getElementById(id).innerText;
        if(!code) return;
        navigator.clipboard.writeText(code).then(() => {
            Swal.fire({
                icon: 'success', title: 'Đã copy!', toast: true, position: 'top-end', showConfirmButton: false, timer: 1000
            });
        });
    }

    document.addEventListener('DOMContentLoaded', initLibrary);
