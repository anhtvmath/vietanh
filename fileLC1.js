for (let i = 1; i <= 5; i++) {
    let debai = document.createElement("div");
    debai.id = "debaicau"+String(i);
    document.getElementById("storedebai").appendChild(debai);
    let PAdung = document.createElement("div");
    PAdung.id = "PAdung"+String(i);
    document.getElementById("storePAdung").appendChild(PAdung);
    let loigiai = document.createElement("div");
    loigiai.id = "loigiaicau"+String(i);
    document.getElementById("storeLoigiai").appendChild(loigiai);
    for (let j = 1; j <= 3; j++) {
        let PAcau = document.createElement("div");
        PAcau.id = "PA"+String(j)+"Cau"+String(i);
        document.getElementById("PAchon").appendChild(PAcau);
    }  
}