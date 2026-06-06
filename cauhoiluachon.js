// [LỰA CHỌN] Câu 1
document.getElementById("debaicau1").innerHTML = "Một công ty cung cấp nước sạch thống kê lượng nước sạch mỗi hộ gia đình ở một khu vực sử dụng trong tháng 09/2023 ở bảng sau (đơn vị: $\\text{m}^3$).<br/><table border=\"1\" cellpadding=\"6\" style=\"border-collapse: collapse; text-align:center; margin: 15px auto; font-size: inherit; line-height: 1.3; vertical-align: middle;\"><tr><td style=\"vertical-align: middle;\">Lượng nước ($\\text{m}^3$)</td><td style=\"vertical-align: middle;\">$[9; 11)$</td><td style=\"vertical-align: middle;\">$[11; 13)$</td><td style=\"vertical-align: middle;\">$[13; 15)$</td><td style=\"vertical-align: middle;\">$[15; 17)$</td><td style=\"vertical-align: middle;\">$[17; 19)$</td></tr><tr><td style=\"vertical-align: middle;\">Số hộ gia đình</td><td style=\"vertical-align: middle;\">$1$</td><td style=\"vertical-align: middle;\">$5$</td><td style=\"vertical-align: middle;\">$10$</td><td style=\"vertical-align: middle;\">$12$</td><td style=\"vertical-align: middle;\">$9$</td></tr></table><br/>Tứ phân vị thứ nhất của mẫu số liệu ghép nhóm trên là";
document.getElementById("PAdung1").innerHTML = "$13,65$";
document.getElementById("PA1Cau1").innerHTML = "$12,85$";
document.getElementById("PA2Cau1").innerHTML = "$13,45$";
document.getElementById("PA3Cau1").innerHTML = "$13,85$";
document.getElementById("loigiaicau1").innerHTML = "Ta có bảng<br/><table border=\"1\" cellpadding=\"6\" style=\"border-collapse: collapse; text-align:center; margin: 15px auto; font-size: inherit; line-height: 1.3; vertical-align: middle;\"><tr><td style=\"vertical-align: middle;\">Nhóm</td><td style=\"vertical-align: middle;\">$[9; 11)$</td><td style=\"vertical-align: middle;\">$[11; 13)$</td><td style=\"vertical-align: middle;\">$[13; 15)$</td><td style=\"vertical-align: middle;\">$[15; 17)$</td><td style=\"vertical-align: middle;\">$[17; 19)$</td></tr><tr><td style=\"vertical-align: middle;\">Tần số</td><td style=\"vertical-align: middle;\">$n_1=1$</td><td style=\"vertical-align: middle;\">$n_2=5$</td><td style=\"vertical-align: middle;\">$n_3=10$</td><td style=\"vertical-align: middle;\">$n_4=12$</td><td style=\"vertical-align: middle;\">$n_5=9$</td></tr><tr><td style=\"vertical-align: middle;\">Tần số tích lũy</td><td style=\"vertical-align: middle;\">$cf_1=1$</td><td style=\"vertical-align: middle;\">$cf_2=6$</td><td style=\"vertical-align: middle;\">$cf_3=16$</td><td style=\"vertical-align: middle;\">$cf_4=28$</td><td style=\"vertical-align: middle;\">$cf_5=37$</td></tr></table><br/>Cỡ mẫu là $n=1+5+10+12+9=37$.\\\\<br/>Ta thấy $cf_2=6 < \\dfrac{n}{4}=\\dfrac{37}{4}\\leq cf_3=16$ nên nhóm chứa tứ phân vị thứ nhất là nhóm $[13; 15)$.\\\\<br/>Vậy tứ phân vị thứ nhất của mẫu số liệu ghép nhóm là<br/>$$Q_1=a_3+\\dfrac{\\dfrac{n}{4}-cf_2}{n_3}(a_4-a_3)=13+\\dfrac{\\dfrac{37}{4}-6}{10}(15-13)=13,65.$$";

// [LỰA CHỌN] Câu 2
document.getElementById("debaicau2").innerHTML = "Họ nguyên hàm của hàm số $f(x) = -4\\cos x+2x^7$ là";
document.getElementById("PAdung2").innerHTML = "$-4\\sin x+\\dfrac{1}{4}x^8+C$";
document.getElementById("PA1Cau2").innerHTML = "$-4\\sin x+14x^6+C$";
document.getElementById("PA2Cau2").innerHTML = "$4\\sin x+\\dfrac{1}{4}x^8+C$";
document.getElementById("PA3Cau2").innerHTML = "$4\\sin x+14x^6+C$";
document.getElementById("loigiaicau2").innerHTML = "Ta có<br/>\\begin{equation*}\\displaystyle\\int f(x)\\mathrm{d}x=\\displaystyle\\int (-4\\cos x+2x^7)\\mathrm{d}x=-4\\sin x+\\dfrac{1}{4}x^8+C.\\end{equation*}";

// [LỰA CHỌN] Câu 3
document.getElementById("debaicau3").innerHTML = "Họ nguyên hàm của hàm số $f(x) = 3\\sin x-6\\mathrm{e}^x$ là";
document.getElementById("PAdung3").innerHTML = "$-3\\cos x-6\\mathrm{e}^x+C$";
document.getElementById("PA1Cau3").innerHTML = "$-3\\cos x+6\\mathrm{e}^x+C$";
document.getElementById("PA2Cau3").innerHTML = "$3\\cos x-6\\mathrm{e}^x+C$";
document.getElementById("PA3Cau3").innerHTML = "$3\\cos x+6\\mathrm{e}^x+C$";
document.getElementById("loigiaicau3").innerHTML = "Ta có<br/>$$\\displaystyle\\int f(x)\\mathrm{d}x=\\displaystyle\\int (3\\sin x-6\\mathrm{e}^x)\\mathrm{d}x=-3\\cos x-6\\mathrm{e}^x+C.$$";

// [LỰA CHỌN] Câu 4
document.getElementById("debaicau4").innerHTML = "Cho hai biến cố $A$ và $B$ có $P(A)=0,6$; $P(B)=0,4$ và $P(AB)=0,3$. Xác suất $P(B|A)$ bằng";
document.getElementById("PAdung4").innerHTML = "$\\dfrac{1}{2}$";
document.getElementById("PA1Cau4").innerHTML = "$\\dfrac{2}{3}$";
document.getElementById("PA2Cau4").innerHTML = "$0,4$";
document.getElementById("PA3Cau4").innerHTML = "$\\dfrac{3}{4}$";
document.getElementById("loigiaicau4").innerHTML = "Ta có<br/>$$P(B|A)=\\dfrac{P(AB)}{P(A)}=\\dfrac{0,3}{0,6}=\\dfrac{1}{2}.$$";

// Câu 5
document.getElementById("debaicau5").innerHTML = "Đề bài câu 5 nhé nhé nhé nhé";
document.getElementById("PAdung5").innerHTML = "Đáp án đúng câu 5";
document.getElementById("PA1Cau5").innerHTML = "Đáp án sai 1 của câu 5";
document.getElementById("PA2Cau5").innerHTML = "Đáp án sai 2 của câu 5";
document.getElementById("PA3Cau5").innerHTML = "Đáp án sai 3 của câu 5";
document.getElementById("loigiaicau5").innerHTML = "Lời giải câu 5.<br/>";

// Câu 6
document.getElementById("debaicau6").innerHTML = "Đề bài câu 6 nhé nhé nhé";
document.getElementById("PAdung6").innerHTML = "Đáp án đúng câu 6";
document.getElementById("PA1Cau6").innerHTML = "Đáp án sai 1 của câu 6";
document.getElementById("PA2Cau6").innerHTML = "Đáp án sai 2 của câu 6";
document.getElementById("PA3Cau6").innerHTML = "Đáp án sai 3 của câu 6";
document.getElementById("loigiaicau6").innerHTML = "Lời giải câu 6.<br/>";

// Câu 7
document.getElementById("debaicau7").innerHTML = "Đề bài câu 7 nhé nhé nhé";
document.getElementById("PAdung7").innerHTML = "Đáp án đúng câu 7";
document.getElementById("PA1Cau7").innerHTML = "Đáp án sai 1 của câu 7";
document.getElementById("PA2Cau7").innerHTML = "Đáp án sai 2 của câu 7";
document.getElementById("PA3Cau7").innerHTML = "Đáp án sai 3 của câu 7";
document.getElementById("loigiaicau7").innerHTML = "Lời giải câu 7.<br/>";

// Câu 8
document.getElementById("debaicau8").innerHTML = "Đề bài câu 8 nhé nhé nhé nhé";
document.getElementById("PAdung8").innerHTML = "Đáp án đúng câu 8";
document.getElementById("PA1Cau8").innerHTML = "Đáp án sai 1 của câu 8";
document.getElementById("PA2Cau8").innerHTML = "Đáp án sai 2 của câu 8";
document.getElementById("PA3Cau8").innerHTML = "Đáp án sai 3 của câu 8";
document.getElementById("loigiaicau8").innerHTML = "Lời giải câu 8.<br/>";

// Câu 9
document.getElementById("debaicau9").innerHTML = "Đề bài câu 9";
document.getElementById("PAdung9").innerHTML = "Đáp án đúng câu 9";
document.getElementById("PA1Cau9").innerHTML = "Đáp án sai 1 của câu 9";
document.getElementById("PA2Cau9").innerHTML = "Đáp án sai 2 của câu 9";
document.getElementById("PA3Cau9").innerHTML = "Đáp án sai 3 của câu 9";
document.getElementById("loigiaicau9").innerHTML = "Lời giải câu 9.<br/>";

// Câu 10
// [LỰA CHỌN] Câu 10
document.getElementById("debaicau10").innerHTML = "Họ nguyên hàm của hàm số $f(x) = -6\\sin x+5\\cos x$ là";
document.getElementById("PAdung10").innerHTML = "$6\\cos x+5\\sin x+C$";
document.getElementById("PA1Cau10").innerHTML = "$-6\\cos x-5\\sin x+C$";
document.getElementById("PA2Cau10").innerHTML = "$6\\cos x-5\\sin x+C$";
document.getElementById("PA3Cau10").innerHTML = "$-6\\cos x+5\\sin x+C$";
document.getElementById("loigiaicau10").innerHTML = "Ta có<br/>\\begin{equation*}<br/>\\displaystyle\\int f(x)\\mathrm{d}x=\\displaystyle\\int (-6\\sin x+5\\cos x)\\mathrm{d}x=6\\cos x+5\\sin x+C.<br/>\\end{equation*}";

// Câu 11
document.getElementById("debaicau11").innerHTML = "Đề bài câu 11";
document.getElementById("PAdung11").innerHTML = "Đáp án đúng câu 11";
document.getElementById("PA1Cau11").innerHTML = "Đáp án sai 1 của câu 11";
document.getElementById("PA2Cau11").innerHTML = "Đáp án sai 2 của câu 11";
document.getElementById("PA3Cau11").innerHTML = "Đáp án sai 3 của câu 11";
document.getElementById("loigiaicau11").innerHTML = "Lời giải câu 11.<br/>";

// Câu 12
document.getElementById("debaicau12").innerHTML = "Đề bài câu 12";
document.getElementById("PAdung12").innerHTML = "Đáp án đúng câu 12";
document.getElementById("PA1Cau12").innerHTML = "Đáp án sai 1 của câu 12";
document.getElementById("PA2Cau12").innerHTML = "Đáp án sai 2 của câu 12";
document.getElementById("PA3Cau12").innerHTML = "Đáp án sai 3 của câu 12";
document.getElementById("loigiaicau12").innerHTML = "Lời giải câu 12.<br/>";