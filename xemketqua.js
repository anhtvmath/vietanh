function myfunction() {
    let socaudung = 0;
    let tongsocau = document.getElementById("showLC").children.length;
    for (let i=1; i<=2000; i++) {
        let keycauso = document.getElementById("key"+String(i));
        let causoA = document.getElementById("choice"+String(i)+"A");
        let causoB = document.getElementById("choice"+String(i)+"B");
        let causoC = document.getElementById("choice"+String(i)+"C");
        let causoD = document.getElementById("choice"+String(i)+"D");
        if (keycauso !== null) {
            if (causoA.value === keycauso.value && causoA.checked === true) socaudung++;
            if (causoB.value === keycauso.value && causoB.checked === true) socaudung++;
            if (causoC.value === keycauso.value && causoC.checked === true) socaudung++;
            if (causoD.value === keycauso.value && causoD.checked === true) socaudung++;
            if (causoA.value === keycauso.value) {
                document.getElementById("C" + String(i) + "A").style.color = "green";
                document.getElementById("C" + String(i) + "A").innerHTML += ' <span class="tick">&#10003;</span>'
            } else {
                document.getElementById("C" + String(i) + "A").style.color = "red";
                document.getElementById("C" + String(i) + "A").innerHTML += ' <span class="cross">&#10008;</span>'
            }
            if (causoB.value === keycauso.value) {
                document.getElementById("C" + String(i) + "B").style.color = "green";
                document.getElementById("C" + String(i) + "B").innerHTML += ' <span class="tick">&#10003;</span>';
            } else {
                document.getElementById("C" + String(i) + "B").style.color = "red";
                document.getElementById("C" + String(i) + "B").innerHTML += ' <span class="cross">&#10008;</span>';
            }
            if (causoC.value === keycauso.value) {
                document.getElementById("C" + String(i) + "C").style.color = "green";
                document.getElementById("C" + String(i) + "C").innerHTML += ' <span class="tick">&#10003;</span>';
            } else {
                document.getElementById("C" + String(i) + "C").style.color = "red";
                document.getElementById("C" + String(i) + "C").innerHTML += ' <span class="cross">&#10008;</span>';
            }
            if (causoD.value === keycauso.value) {
                document.getElementById("C" + String(i) + "D").style.color = "green";
                document.getElementById("C" + String(i) + "D").innerHTML += ' <span class="tick">&#10003;</span>';
            } else {
                document.getElementById("C" + String(i) + "D").style.color = "red";
                document.getElementById("C" + String(i) + "D").innerHTML += ' <span class="cross">&#10008;</span>';
            }
            causoA.disabled = true;
            causoB.disabled = true;
            causoC.disabled = true;
            causoD.disabled = true;
            document.getElementById("dapancau" + String(i)).style.display = "block";
        }
    }
    document.getElementById("xemketqua").style.display = "none";
    document.getElementById("ketqua").style.display = "block";
    document.getElementById("ketqua").innerHTML = "Bạn trả lời đúng " + String(socaudung) + " câu trên " + String(tongsocau) + " câu!";
    document.getElementById("lamlai").style.display = "block";
}
