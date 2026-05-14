
    const choptamgiacdeu = `\\begin{tikzpicture}[scale=0.6, font=\\footnotesize,line join=round, line cap=round, >=stealth, every node/.style={scale=0.8}]
\\usetikzlibrary{calc, angles, quotes}
\\def\\ab{2} 
\\def\\ac{4} 
\\def\\h{3}
\\path (0,0) coordinate (A) ++(-60:\\ab) coordinate (B) (\\ac,0) coordinate (C) ($(B)!1/2!(C)$) coordinate (M) ($(A)!2/3!(M)$) coordinate (H) ($(H)+(0,\\h)$) coordinate (S);
\\foreach \\i in{A,B,C}{\\draw (S)--(\\i);};
\\draw (A)--(B)--(C) (S)--(M);
\\draw[dashed] (A)--(C) (A)--(M) (S)--(H);
\\pic[draw,angle eccentricity=1.8,angle radius=2mm]{right angle=C--H--S};
\\foreach \\i/\\g in {S/90,A/-180,B/-90,C/0,M/-90,H/-90} \\fill[black] (\\i) circle(1pt)+(\\g:2.6mm)node[scale=1]{$\\i$};
\\end{tikzpicture}`;
    const choptamgiaccomatbenvuongday = `\\begin{tikzpicture}[scale=0.6, font=\\footnotesize,line join=round, line cap=round, >=stealth, every node/.style={scale=0.8}]
\\usetikzlibrary{calc, angles, quotes}
\\def\\ab{2} 
\\def\\ac{5} 
\\def\\h{4}
\\path (0,0) coordinate (A) ++(-45:\\ab) coordinate (B) (\\ac,0) coordinate (C) ($(A)!1/2!(C)$) coordinate (H) ($(H)+(0,\\h)$) coordinate (S);
\\foreach \\i in {A,B,C} {\draw (S)--(\\i);}
\\draw (A)--(B)--(C);
\\draw[dashed,thin](A)--(C) (S)--(H);
\\pic[draw,thin,angle radius=2mm] {right angle = S--H--C};
\\foreach \\i/\\g in {S/90,A/180,B/-90,C/0,H/-90} \\fill[black] (\\i) circle(1pt)+(\\g:2.5mm)node[scale=1]{$\\i$};
\\end{tikzpicture}`;


    const gocbatky = `\\pic[draw, angle radius=2.5mm,"\\scriptsize $30^\\circ$"]{angle = C--B--A}`;
    const BBThambacbaCTC = `\\begin{tikzpicture}[thick,xscale=0.95,yscale=0.5]
\\def\\a{8}
\\def\\b{7}
\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);
\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);
\\draw (-0.5,-1.5)--(\\a-0.5,-1.5);
\\draw (0.5,0.5)--(0.5,-\\b+0.5);
\\path
(0,0) node{$x$}
(0,-1) node{$f'(x)$}
(0,-4) node{$f(x)$}
(1,0) node{$-\\infty$}
(1,-6) node(A){$-\\infty$}
(3,0) node{$x_1$}
(3,-1) node{$0$}
(3,-3) node(B){$y_1$}
(5,0) node{$x_2$}
(5,-1) node{$0$}
(5,-5) node(C){$y_2$}
(7,0) node{$+\\infty$}
(7,-2) node(D){$+\\infty$}
(2,-1) node{$+$}
(4,-1) node{$-$}
(6,-1) node{$+$};
\\draw[->,>=stealth] (A)--(B);
\\draw[->,>=stealth] (B)--(C);
\\draw[->,>=stealth] (C)--(D);
\\end{tikzpicture}`;
    
    const BBThambacbaTCT = `\\begin{tikzpicture}[thick,xscale=0.95,yscale=0.5]
\\def\\a{8}
\\def\\b{7}
\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);
\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);
\\draw (-0.5,-1.5)--(\\a-0.5,-1.5);
\\draw (0.5,0.5)--(0.5,-\\b+0.5);
\\path
(0,0) node{$x$}
(0,-1) node{$f'(x)$}
(0,-4) node{$f(x)$}
(1,0) node{$-\\infty$}
(1,-2) node(A){$-\\infty$}
(3,0) node{$x_1$}
(3,-1) node{$0$}
(3,-5) node(B){$y_1$}
(5,0) node{$x_2$}
(5,-1) node{$0$}
(5,-3) node(C){$y_2$}
(7,0) node{$+\\infty$}
(7,-6) node(D){$-\\infty$}
(2,-1) node{$-$}
(4,-1) node{$+$}
(6,-1) node{$-$};
\\draw[->,>=stealth] (A)--(B);
\\draw[->,>=stealth] (B)--(C);
\\draw[->,>=stealth] (C)--(D);
\\end{tikzpicture}`;

    const BBThamtrungphuongCTCT = `\\begin{tikzpicture}[thick,xscale=0.7,yscale=0.5]
\\def\\a{10}
\\def\\b{7}
\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);
\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);
\\draw (-0.5,-1.5)--(\\a-0.5,-1.5);
\\draw (0.5,0.5)--(0.5,-\\b+0.5);
\\path
(0,0) node{$x$}
(0,-1) node{$y'$}
(0,-4) node{$y$}
(1,0) node{$-\\infty$}
(1,-6) node(A){$-\\infty$}
(3,0) node{$-a$}
(3,-1) node{$0$}
(3,-2) node(B){$b$}
(5,0) node{$0$}
(5,-1) node{$0$}
(5,-5) node(C){$c$}
(7,0) node{$a$}
(7,-1) node{$0$}
(7,-2) node(D){$b$}
(9,0) node{$+\\infty$}
(9,-6) node(E){$-\\infty$}
(2,-1) node{$+$}
(4,-1) node{$-$}
(6,-1) node{$+$}
(8,-1) node{$-$};
\\draw[->,>=stealth] (A)--(B);
\\draw[->,>=stealth] (B)--(C);
\\draw[->,>=stealth] (C)--(D);
\\draw[->,>=stealth] (D)--(E);
\\end{tikzpicture}`;

    const BBThamtrungphuongTCTC = `\\begin{tikzpicture}[thick,xscale=0.7,yscale=0.5]
\\def\\a{10}
\\def\\b{7}
\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);
\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);
\\draw (-0.5,-1.5)--(\\a-0.5,-1.5);
\\draw (0.5,0.5)--(0.5,-\\b+0.5);
\\path
(0,0) node{$x$}
(0,-1) node{$y'$}
(0,-4) node{$y$}
(1,0) node{$-\\infty$}
(1,-2) node(A){$+\\infty$}
(3,0) node{$-a$}
(3,-1) node{$0$}
(3,-6) node(B){$b$}
(5,0) node{$0$}
(5,-1) node{$0$}
(5,-3) node(C){$c$}
(7,0) node{$a$}
(7,-1) node{$0$}
(7,-6) node(D){$b$}
(9,0) node{$+\\infty$}
(9,-2) node(E){$+\\infty$}
(2,-1) node{$-$}
(4,-1) node{$+$}
(6,-1) node{$-$}
(8,-1) node{$+$};
\\draw[->,>=stealth] (A)--(B);
\\draw[->,>=stealth] (B)--(C);
\\draw[->,>=stealth] (C)--(D);
\\draw[->,>=stealth] (D)--(E);
\\end{tikzpicture}`;

    const BBThamphanthucTT = `\\begin{tikzpicture}[thick,xscale=0.65,yscale=0.45]
\\draw[double distance=0.7pt] (5,-0.5)--(5,-6.5);
\\def\\a{10}
\\def\\b{7}
\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);
\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);
\\draw (-0.5,-1.5)--(\\a-0.5,-1.5);
\\draw (0.5,0.5)--(0.5,-\\b+0.5);
\\path
(0,0) node{$x$}
(0,-1) node{$y'$}
(0,-4) node{$y$}
(1.1,0) node{$-\\infty$}
(1,-3) node(A){$b$}
(3,-1) node{$-$}
(5,0) node{$a$}
(7,-1) node{$-$}
(8.9,0) node{$+\\infty$}
(9,-5) node(C){$b$}
(4.4,-6) node(B1){$-\\infty$}
(5.6,-2) node(B2){$+\\infty$};
\\draw[-stealth,thick] (A)--(B1);
\\draw[-stealth,thick] (B2)--(C);
\\end{tikzpicture}`;

    const BBThamphanthucCC = `\\begin{tikzpicture}[thick,xscale=0.65,yscale=0.45]
\\draw[double distance=0.7pt] (5,-0.5)--(5,-6.5);
\\def\\a{10}
\\def\\b{7}
\\draw (-0.5,0.5) rectangle (\\a-0.5,-\\b+0.5);
\\draw (-0.5,-0.5)--(\\a-0.5,-0.5);
\\draw (-0.5,-1.5)--(\\a-0.5,-1.5);
\\draw (0.5,0.5)--(0.5,-\\b+0.5);
\\path
(0,0) node{$x$}
(0,-1) node{$y'$}
(0,-4) node{$y$}
(1.1,0) node{$-\\infty$}
(1,-5) node(A){$b$}
(3,-1) node{$+$}
(5,0) node{$a$}
(7,-1) node{$+$}
(8.9,0) node{$+\\infty$}
(9,-3) node(C){$b$}
(4.4,-2) node(B1){$+\\infty$}
(5.6,-6) node(B2){$-\\infty$};
\\draw[-stealth,thick] (A)--(B1);
\\draw[-stealth,thick] (B2)--(C);
\\end{tikzpicture}`;
