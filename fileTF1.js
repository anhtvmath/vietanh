// Mảng lưu vết thứ tự xáo trộn câu Đúng/Sai ngẫu nhiên
let danhSachCauTF = [];
let availableQuestions = [1, 2];

// 1. Tiến hành bốc ngẫu nhiên thứ tự câu hỏi gốc
for (let i = 1; i <= 2; i++) {
    let idx = Math.floor(Math.random() * availableQuestions.length);
    let originalId = availableQuestions[idx];
    danhSachCauTF.push(originalId);
    availableQuestions.splice(idx, 1);
}

// 2. Dựng sẵn các thẻ kho chứa ẩn chung (y[j]cauTF[i]) và tiêu đề gốc (debaiquestionTF) vào DOM trước
for (let i = 1; i <= 2; i++) {
    let parentDiv = document.createElement("div");
    parentDiv.innerHTML = "<span id='debaiquestionTF" + i + "'></span>";
    document.getElementById("bankTF").appendChild(parentDiv);
    
    for (let j = 1; j <= 4; j++) {
        let ycau = document.createElement("div");
        ycau.id = "y" + String(j) + "cauTF" + String(i); 
        document.getElementById("cacycauTF").appendChild(ycau);
    }
}

// 3. Dựng giao diện bảng câu hỏi hiển thị cố định từ 1 đến 4 ra màn hình (showTF)
document.getElementById("showTF").innerHTML = "<b>PHẦN II. Câu trắc nghiệm đúng sai</b>";
danhSachCauTF.forEach((origId, index) => {
    let currentDisplayId = index + 1; 
    
    let questiondiv = document.createElement("div");
    questiondiv.className = "box";
    
    let htmlTableContent = 
        "<span style='color: maroon'><b>Câu số " + currentDisplayId + ". </b></span>" +
        "<span id='displayDebaiTF" + currentDisplayId + "'></span>" + 
        "<center>" + 
            "<table>" + 
                "<tr>" + 
                    "<th>Phát biểu</th>" + 
                    "<th>Đúng</th>" + 
                    "<th>Sai</th>" + 
                "</tr>";
                
    for (let j = 1; j <= 4; j++) {
        let id = String(currentDisplayId) + "." + String(j);  
        htmlTableContent += 
            "<tr>" + 
                "<td class='noidungcacy'><span id='C" + id + "'></span></td>" + 
                "<td><input type='radio' name='q" + id + "' value='Đúng' id='choice" + id + "t'>" + 
                "<label class='custom-radio' for='choice" + id + "t' data-label=''></label>" +   
                "</td>" + 
                "<td><input type='radio' name='q" + id + "' value='Sai' id='choice" + id + "f'>" + 
                "<label class='custom-radio' for='choice" + id + "f' data-label=''></label>" +   
                "</td>" + 
                "<input id='keyq" + id + "' style='display: none;'>" + 
            "</tr>";
    }
    
    htmlTableContent += 
            "</table>" + 
        "</center>" + 
        "<div id='dapancauTF" + currentDisplayId + "' style='display: none;'>" + 
            "<b>Lời giải.</b>" + 
            "<div id='dapany1cauTF" + currentDisplayId + "'></div>" + 
            "<div id='dapany2cauTF" + currentDisplayId + "'></div>" + 
            "<div id='dapany3cauTF" + currentDisplayId + "'></div>" + 
            "<div id='dapany4cauTF" + currentDisplayId + "'></div>" + 
        "</div>";
        
    questiondiv.innerHTML = htmlTableContent;
    document.getElementById("showTF").appendChild(questiondiv);
});