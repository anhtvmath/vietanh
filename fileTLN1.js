for (let i = 1; i <= 2; i++) {
    let debai = document.createElement("div");
    debai.id = "debaicauTLN"+String(i);
    document.getElementById("storedebaiTLN").appendChild(debai);
    let key = document.createElement("div");
    key.id = "keycauTLN"+String(i);
    document.getElementById("storekeyTLN").appendChild(key);
    let loigiai = document.createElement("div");
    loigiai.id = "loigiaicauTLN"+String(i);
    document.getElementById("storeloigiaiTLN").appendChild(loigiai);
}