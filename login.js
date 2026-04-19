document.addEventListener("DOMContentLoaded", () => {

    const accounts = [
        { username: "haidang", userid: "12345" },
        { username: "abc", userid: "123" },
        { username: "admin", userid: "123" }
    ];

    const u = document.getElementById("username");
    const p = document.getElementById("userid");
    const btn = document.getElementById("btn");
    const error = document.getElementById("error");

    function check() {
        const username = u.value.trim();
        const userid = p.value.trim();

        if (!username || !userid) {
            btn.disabled = true;
            btn.classList.remove("active");
            error.style.display = "none";
            return;
        }

        const ok = accounts.some(a =>
            a.username === username && a.userid === userid
        );

        if (ok) {
            btn.disabled = false;
            btn.classList.add("active");
            error.style.display = "none";
        } else {
            btn.disabled = true;
            btn.classList.remove("active");
            error.style.display = "block";
        }
    }

    u.addEventListener("input", check);
    p.addEventListener("input", check);

    btn.addEventListener("click", () => {
        window.location.href = "home.html";
    });

});
