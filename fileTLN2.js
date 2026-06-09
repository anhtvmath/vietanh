for (let i = 1; i <= 2; i++) {
    // 1. Tạo cấu trúc câu hỏi
    // Bỏ <br/> sau span debai để input nằm cạnh hoặc ngay dưới đề bài
    let htmlContent = 
        "<span id='debaiquestionTLN" + i + "'></span>" +
        "<div class='answer-row'>" +
            "<input type='text' id='answer" + i + "' class='answer' placeholder='Nhập đáp án'>" + 
            "<input id='keyTLN" + i + "' style='display: none;'>" + 
            "<span id='feedback" + i + "' class='feedback-text'></span>" + 
            "<span id='dapancauTLN" + i + "' style='display: none; margin-left: 10px;'></span>" + 
        "</div>";
    let div = document.createElement("div");
    div.innerHTML = htmlContent;
    document.getElementById("bankTLN").appendChild(div);
}

for (let i=1; i<= 2; i++){
    let socautrongbank = document.getElementById("bankTLN").children.length; 
    let idx = Math.floor(Math.random()*socautrongbank) 
    let questiondiv = document.createElement("div");
    questiondiv.className = "box";
    let question = document.getElementById("bankTLN").children[idx];
    document.getElementById("showTLN").appendChild(questiondiv);
    document.getElementById("bankTLN").removeChild(question);
    questiondiv.innerHTML = "<span style = 'color: maroon'><b>Câu số "+String(i)+". </b></span>" + question.innerHTML;
}
for (let i = 1; i <= 2; i++) {
    if (document.getElementById("keyTLN"+String(i)) !== null) { 
        document.getElementById("debaiquestionTLN"+String(i)).innerHTML = document.getElementById("debaicauTLN"+String(i)).innerHTML;
        document.getElementById("keyTLN"+String(i)).value = document.getElementById("keycauTLN"+String(i)).innerHTML;
        document.getElementById("dapancauTLN"+String(i)).innerHTML = "<b>Lời giải. </b>" + document.getElementById("loigiaicauTLN"+String(i)).innerHTML;
    }
}