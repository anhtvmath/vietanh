const songanhangLC = 51;
for (let j=1; j<= songanhangLC; j++) {
    let divbankLC = document.createElement("div");
    divbankLC.id = "bankLC"+String(j);
    divbankLC.style.display="none";
    document.getElementById("bankLC").appendChild(divbankLC);
}

(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        .answer-grid {
            display: flex;
            flex-wrap: wrap;       /* Cho phép nhảy hàng khi hết chỗ */
            gap: 20px;             /* Khoảng cách giữa các khối A, B, C, D */
            margin: 15px 0;
            align-items: center;
        }

        .answer-item {
            display: flex;
            align-items: center;
            white-space: nowrap;   /* TUYỆT ĐỐI KHÔNG CHO CHỮ XUỐNG DÒNG */
            flex: 0 0 auto;        /* Độ rộng tự co giãn theo nội dung chữ */
            min-width: fit-content;
        }

        .answer-item span {
            margin-left: 8px;
            display: inline-block;
        }

        /* Tự động căn chỉnh dựa trên độ rộng màn hình bằng Media Queries */
        
        /* Nếu muốn ép 2 hàng (mỗi hàng 2 câu) khi màn hình đủ rộng */
        @media (max-width: 992px) and (min-width: 601px) {
            .answer-item {
                flex: 0 0 45%;    /* Chiếm gần nửa màn hình để ra 2 cột */
            }
        }

        /* Nếu màn hình hẹp (Mobile), mỗi phương án chiếm 1 hàng */
        @media (max-width: 600px) {
            .answer-item {
                flex: 0 0 100%;   /* Chiếm toàn bộ chiều rộng hàng */
            }
        }
    `;
    document.head.appendChild(style);
})();

// ================================================================
// 2. HÀM TẠO CẤU TRÚC HTML (Giữ nguyên cấu trúc ID của bạn)
// ================================================================
function formcauhoi(i) {
    return "<span id='debaiquestion" + String(i) + "'></span><br/>" + 
        "<input id='key" + String(i) + "' style='display: none;'>" + 
        "<div class='answer-grid'>" +
            "<div class='answer-item'>" +
                "<input id='choice" + String(i) + "A' name='name" + String(i) + "' type='radio' value='A'>" + 
                "<label class='custom-radio' for='choice" + String(i) + "A' data-label='A'></label>" +
                "<span id='C" + String(i) + "A'></span>" +
            "</div>" +
            "<div class='answer-item'>" +
                "<input id='choice" + String(i) + "B' name='name" + String(i) + "' type='radio' value='B'>" + 
                "<label class='custom-radio' for='choice" + String(i) + "B' data-label='B'></label>" +
                "<span id='C" + String(i) + "B'></span>" +
            "</div>" +
            "<div class='answer-item'>" +
                "<input id='choice" + String(i) + "C' name='name" + String(i) + "' type='radio' value='C'>" + 
                "<label class='custom-radio' for='choice" + String(i) + "C' data-label='C'></label>" +
                "<span id='C" + String(i) + "C'></span>" +
            "</div>" +
            "<div class='answer-item'>" +
                "<input id='choice" + String(i) + "D' name='name" + String(i) + "' type='radio' value='D'>" + 
                "<label class='custom-radio' for='choice" + String(i) + "D' data-label='D'></label>" +
                "<span id='C" + String(i) + "D'></span>" +
            "</div>" +
        "</div>" +
        "<span id='dapancau" + String(i) + "' style='display: none;'><b>Lời giải.</b></span>";
}

for (let j = 1; j <= songanhangLC; j++) {
    for (let i = j; i <= j; i++) {
        if (document.getElementById("debaicau"+String(i)).innerHTML !== "") {
        let divquestion = document.createElement("div");
        divquestion.innerHTML = formcauhoi(i);
        document.getElementById("bankLC"+String(j)).appendChild(divquestion);
        }
    }
}
let socauchonra = 10;
for (let i=1; i<=socauchonra; i++) {
    let bankLCidx = Math.floor(Math.random()*document.getElementById("bankLC").children.length);
    let bank = document.getElementById("bankLC").children[bankLCidx];
    document.getElementById("bankLC").removeChild(bank);
    let cauhoiidx = Math.floor(Math.random()*bank.children.length);
    let cauhoi = bank.children[cauhoiidx];
    let questionshow = document.createElement("div");
    questionshow.className = "box";
    questionshow.innerHTML = "<span style='color: maroon;'><b>Câu số </b></span>"+(String(i)+". ").bold().fontcolor("maroon") + cauhoi.innerHTML;
    document.getElementById("showLC").appendChild(questionshow);
    }
for (let i=1; i<=2000; i++) {
    if (document.getElementById("key"+String(i)) !== null) { 
        document.getElementById("debaiquestion"+String(i)).innerHTML = "&nbsp;" + document.getElementById("debaicau"+String(i)).innerHTML;
        let storePA = ["A","B","C","D"];   
        let idxPAdung = Math.floor(Math.random()*storePA.length);
        let phuongandung = storePA[idxPAdung];
        document.getElementById("key"+String(i)).value = phuongandung;
        document.getElementById("C"+String(i)+phuongandung).innerHTML = "&nbsp;" + document.getElementById("PAdung"+String(i)).innerHTML;
        storePA.splice(idxPAdung,1);
        for (let k = 1; k <= 3; k++) {
            let idxPA = Math.floor(Math.random()*storePA.length);
            document.getElementById("C"+String(i)+storePA[idxPA]).innerHTML = "&nbsp;" + document.getElementById("PA"+String(k)+"Cau"+String(i)).innerHTML;             
            storePA.splice(idxPA,1);
        }
        document.getElementById("dapancau"+String(i)).innerHTML = "<b>Lời giải. </b>" + document.getElementById("loigiaicau"+String(i)).innerHTML + "Ta chọn đáp án <label class='custom-radio' data-label = '"+ phuongandung + "'></label>";
    }
}
