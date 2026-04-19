// --- BỘ CÂU HỎI TOÁN XÁC SUẤT (CẬP NHẬT ĐỊNH DẠNG) ---

// Câu 1
document.getElementById("debaicau1").innerHTML = "Cho hai biến cố $A$ và $B$ có $P(A)=0,6$; $P(B)=0,7$ và $P(AB)=0,5$. Xác suất $P(B|A)$ bằng";
document.getElementById("PAdung1").innerHTML = "$\\dfrac{5}{6}$";
document.getElementById("PA1Cau1").innerHTML = "$0,7$";
document.getElementById("PA2Cau1").innerHTML = "$\\dfrac{5}{7}$";
document.getElementById("PA3Cau1").innerHTML = "$\\dfrac{6}{7}$";
document.getElementById("loigiaicau1").innerHTML = "Ta có<br/>P(B|A)=\\dfrac{P(AB)}{P(A)}=\\dfrac{0,5}{0,6}=\\dfrac{5}{6}.";

// Câu 2
document.getElementById("debaicau2").innerHTML = "Cho hai biến cố $A$ và $B$ có $P(A)=\\dfrac{2}{9}$ và $P(B|A)=\\dfrac{1}{3}$. Tính $P(AB)$.";
document.getElementById("PAdung2").innerHTML = "$\\dfrac{2}{27}$";
document.getElementById("PA1Cau2").innerHTML = "$\\dfrac{1}{27}$";
document.getElementById("PA2Cau2").innerHTML = "$\\dfrac{5}{9}$";
document.getElementById("PA3Cau2").innerHTML = "$\\dfrac{2}{81}$";
document.getElementById("loigiaicau2").innerHTML = "Theo công thức nhân xác suất<br/>P(AB)=P(A)P(B|A)=\\dfrac{2}{9}\\cdot\\dfrac{1}{3}=\\dfrac{2}{27}.";

// Câu 3
document.getElementById("debaicau3").innerHTML = "Cho hai biến cố $A$ và $B$ có $P(A)=0,2$; $P(B)=0,6$ và $P(AB)=0,1$. Xác suất $P(\\overline{A}|B)$ bằng";
document.getElementById("PAdung3").innerHTML = "$\\dfrac{5}{6}$";
document.getElementById("PA1Cau3").innerHTML = "$\\dfrac{1}{2}$";
document.getElementById("PA2Cau3").innerHTML = "$\\dfrac{2}{3}$";
document.getElementById("PA3Cau3").innerHTML = "$0,8$";
document.getElementById("loigiaicau3").innerHTML = "Ta có<br/>P(\\overline{A}|B)=\\dfrac{P(\\overline{A}B)}{P(B)}=\\dfrac{P(B)-P(AB)}{P(B)}=\\dfrac{0,6-0,1}{0,6}=\\dfrac{5}{6}.";

// Câu 4
document.getElementById("debaicau4").innerHTML = "Một đội văn nghệ gồm $7$ bạn nam và $6$ bạn nữ. Chọn ra ngẫu nhiên $2$ bạn để biểu diễn một tiết mục. Gọi $A$ là biến cố: \"Có ít nhất một bạn nam trong $2$ bạn được chọn\", $B$ là biến cố: \"Hai bạn được chọn có cùng giới tính\". Xác suất $P(A|B)$ bằng";
document.getElementById("PAdung4").innerHTML = "$\\dfrac{7}{12}$";
document.getElementById("PA1Cau4").innerHTML = "$\\dfrac{19}{26}$";
document.getElementById("PA2Cau4").innerHTML = "$\\dfrac{5}{12}$";
document.getElementById("PA3Cau4").innerHTML = "$\\dfrac{1}{15}$";
document.getElementById("loigiaicau4").innerHTML = "Ta có $P(B)=\\dfrac{C_{7}^2+C_{6}^2}{C_{13}^2}=\\dfrac{6}{13}$.<br/>Vì $AB$ là biến cố: \"Hai bạn được chọn đều là nam\" nên $P(AB)=\\dfrac{C_{7}^2}{C_{13}^2}=\\dfrac{7}{26}$.<br/>Do đó<br/>P(A|B)=\\dfrac{P(AB)}{P(B)}=\\dfrac{\\dfrac{7}{26}}{\\dfrac{6}{13}}=\\dfrac{7}{12}.";

// Câu 5
document.getElementById("debaicau5").innerHTML = "Một nhà máy có hai phân xưởng $I$ và $II$. Phân xưởng $I$ sản xuất $46\\%$ số sản phẩm và phân xưởng $II$ sản xuất $54\\%$ số sản phẩm. Tỉ lệ sản phẩm bị lỗi của phân xưởng $I$ là $6\\%$ và của phân xưởng $II$ là $5\\%$. Kiểm tra ngẫu nhiên một sản phẩm của nhà máy. Xác suất để sản phẩm đó bị lỗi bằng";
document.getElementById("PAdung5").innerHTML = "$0,0546$";
document.getElementById("PA1Cau5").innerHTML = "$0,0506$";
document.getElementById("PA2Cau5").innerHTML = "$0,0554$";
document.getElementById("PA3Cau5").innerHTML = "$0,0776$";
document.getElementById("loigiaicau5").innerHTML = "Gọi $A$ là biến cố: \"Sản phẩm được kiểm tra bị lỗi\" và $B$ là biến cố: \"Sản phẩm được kiểm tra do phân xưởng $I$ sản xuất\".<br/>Vì phân xưởng $I$ sản xuất $46\\%$ số sản phẩm và phân xưởng $II$ sản xuất $54\\%$ số sản phẩm nên $P(B)=0,46$ và $P(\\overline{B})=0,54$.<br/>Vì tỉ lệ sản phẩm bị lỗi của phân xưởng $I$ là $6\\%$ và của phân xưởng $II$ là $5\\%$ nên $P(A|B)=0,06$ và $P(A|\\overline{B})=0,05$.<br/>Theo công thức xác suất toàn phần<br/>P(A)=P(B)P(A|B)+P(\\overline{B})P(A|\\overline{B})=0,46\\cdot 0,06+0,54\\cdot 0,05=0,0546.";

// Câu 6
document.getElementById("debaicau6").innerHTML = "Một nhà máy có hai phân xưởng $I$ và $II$. Phân xưởng $I$ sản xuất $46\\%$ số sản phẩm và phân xưởng $II$ sản xuất $54\\%$ số sản phẩm. Tỉ lệ sản phẩm bị lỗi của phân xưởng $I$ là $2\\%$ và của phân xưởng $II$ là $1\\%$. Kiểm tra ngẫu nhiên một sản phẩm của nhà máy. Biết rằng sản phẩm được kiểm tra bị lỗi. Xác suất để sản phẩm đó do phân xưởng $I$ sản xuất bằng";
document.getElementById("PAdung6").innerHTML = "$\\dfrac{46}{73}$";
document.getElementById("PA1Cau6").innerHTML = "$\\dfrac{22}{73}$";
document.getElementById("PA2Cau6").innerHTML = "$\\dfrac{51}{73}$";
document.getElementById("PA3Cau6").innerHTML = "$\\dfrac{27}{73}$";
document.getElementById("loigiaicau6").innerHTML = "Gọi $A$ là biến cố: \"Sản phẩm được kiểm tra bị lỗi\" và $B$ là biến cố: \"Sản phẩm được kiểm tra do phân xưởng $I$ sản xuất\".<br/>Vì phân xưởng $I$ sản xuất $46\\%$ số sản phẩm và phân xưởng $II$ sản xuất $54\\%$ số sản phẩm nên $P(B)=0,46$ và $P(\\overline{B})=0,54$.<br/>Vì tỉ lệ sản phẩm bị lỗi của phân xưởng $I$ là $2\\%$ và của phân xưởng $II$ là $1\\%$ nên $P(A|B)=0,02$ và $P(A|\\overline{B})=0,01$.<br/>Theo công thức Bayes<br/>P(B|A)=\\dfrac{P(B)P(A|B)}{P(B)P(A|B)+P(\\overline{B})P(A|\\overline{B})}=\\dfrac{0,46\\cdot 0,02}{0,46\\cdot 0,02+0,54\\cdot 0,01}=\\dfrac{46}{73}.";

// Câu 7
document.getElementById("debaicau7").innerHTML = "Tỉ lệ người dân đã tiêm vắc xin phòng bệnh $X$ ở một địa phương là $72\\%$. Trong số những người đã tiêm phòng, tỉ lệ mắc bệnh $X$ là $8\\%$; trong số những người chưa tiêm phòng, tỉ lệ mắc bệnh $X$ là $37\\%$. Chọn ngẫu nhiên một người ở địa phương đó. Biết rằng người được chọn mắc bệnh $X$. Xác suất người đó chưa tiêm vắc xin phòng bệnh $X$ bằng";
document.getElementById("PAdung7").innerHTML = "$\\dfrac{259}{403}$";
document.getElementById("PA1Cau7").innerHTML = "$\\dfrac{185}{806}$";
document.getElementById("PA2Cau7").innerHTML = "$\\dfrac{144}{403}$";
document.getElementById("PA3Cau7").innerHTML = "$\\dfrac{621}{806}$";
document.getElementById("loigiaicau7").innerHTML = "Gọi $A$ là biến cố: \"Người được chọn đã tiêm vắc xin phòng bệnh\" và $B$ là biến cố: \"Người được chọn mắc bệnh $X$\".<br/>Vì tỉ lệ người dân đã tiêm vắc xin phòng bệnh $X$ ở địa phương là $72\\%$ nên $P(A)=0,72$ và $P(\\overline{A})=0,28$.<br/>Vì tỉ lệ mắc bệnh $X$ trong số những người đã tiêm phòng là $8\\%$ và trong số những người chưa tiêm phòng là $37\\%$ nên $P(B|A)=0,08$ và $P(B|\\overline{A})=0,37$.<br/>Theo công thức Bayes<br/>P(\\overline{A}|B)=\\dfrac{P(\\overline{A})P(B|\\overline{A})}{P(A)P(B|A)+P(\\overline{A})P(B|\\overline{A})}=\\dfrac{0,28\\cdot 0,37}{0,72\\cdot 0,08+0,28\\cdot 0,37}=\\dfrac{259}{403}.";
