let danhSachCau = [];
for (let i = 1; i <= 5; i++) {
    danhSachCau.push(i);
}
// Thuật toán hoán vị (trộn ngẫu nhiên) thứ tự các câu hỏi trong mảng (Fisher-Yates)
for (let i = danhSachCau.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [danhSachCau[i], danhSachCau[j]] = [danhSachCau[j], danhSachCau[i]];
}

// Hàm template tạo cấu trúc HTML cho từng câu hỏi
function formcauhoi(i) {
    return "<span id='debaiquestion" + String(i) + "'></span><br/>" + 
        "<input id='key" + String(i) + "' style='display: none;'>" + 
        "<input id='choice" + String(i) + "A' name='name" + String(i) + "' type='radio' value='A'>" + 
        "<label class='custom-radio' for='choice" + String(i) + "A' data-label='A'></label><span id='C" + String(i) + "A'></span><br/>" +
        "<input id='choice" + String(i) + "B' name='name" + String(i) + "' type='radio' value='B'>" + 
        "<label class='custom-radio' for='choice" + String(i) + "B' data-label='B'></label><span id='C" + String(i) + "B'></span><br/>" + 
        "<input id='choice" + String(i) + "C' name='name" + String(i) + "' type='radio' value='C'>" + 
        "<label class='custom-radio' for='choice" + String(i) + "C' data-label='C'></label><span id='C" + String(i) + "C'></span><br/>" +
        "<input id='choice" + String(i) + "D' name='name" + String(i) + "' type='radio' value='D'>" + 
        "<label class='custom-radio' for='choice" + String(i) + "D' data-label='D'></label><span id='C" + String(i) + "D'></span><br/>" +
        "<span id='dapancau" + String(i) + "' style='display: none;'></span>";
}

// Duyệt qua mảng đã hoán vị để dựng đề thi ra màn hình
danhSachCau.forEach((i, index) => {
    let storeDebai = document.getElementById("debaicau" + String(i));
    let sttHienThi = index + 1; 
    
    if (storeDebai && storeDebai.innerHTML !== "") {
        let questionshow = document.createElement("div");
        questionshow.className = "box";
        questionshow.innerHTML = "<span style='color: maroon;'><b>Câu số </b></span>" + (String(sttHienThi) + ". ").bold().fontcolor("maroon") + formcauhoi(i);
        document.getElementById("showLC").appendChild(questionshow);

        document.getElementById("debaiquestion" + String(i)).innerHTML = "&nbsp;" + storeDebai.innerHTML;

        let storePA = ["A", "B", "C", "D"];   
        let idxPAdung = Math.floor(Math.random() * storePA.length);
        let phuongandung = storePA[idxPAdung];

        document.getElementById("key" + String(i)).value = phuongandung;
        document.getElementById("C" + String(i) + phuongandung).innerHTML = "&nbsp;" + document.getElementById("PAdung" + String(i)).innerHTML;
        storePA.splice(idxPAdung, 1);

        for (let k = 1; k <= 3; k++) {
            let idxPA = Math.floor(Math.random() * storePA.length);
            document.getElementById("C" + String(i) + storePA[idxPA]).innerHTML = "&nbsp;" + document.getElementById("PA" + String(k) + "Cau" + String(i)).innerHTML;             
            storePA.splice(idxPA, 1);
        }
        document.getElementById("dapancau" + String(i)).innerHTML = "<b>Lời giải. </b>" + document.getElementById("loigiaicau" + String(i)).innerHTML + " Ta chọn đáp án <label class='custom-radio' data-label='" + phuongandung + "'></label>";
    }
});