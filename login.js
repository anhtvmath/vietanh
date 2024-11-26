document.addEventListener("DOMContentLoaded", function() {
// Danh sách tài khoản hợp lệ (username và userid)
const validAccounts = [
    { username: "student1", userid: "abc1" },
    { username: "student12", userid: "abc12" },
    { username: "student123", userid: "abc123" },
    { username: "student1234", userid: "abc1234" },
    { username: "student12345", userid: "abc12345" },
    { username: "student123456", userid: "abc123456" }
];

// Lấy các phần tử từ DOM
const usernameField = document.getElementById("username");
const userIdField = document.getElementById("userid");
const startButton = document.getElementById("startbutton");
const errorMessage = document.getElementById("error-message"); // Thẻ thông báo lỗi

// Thêm sự kiện cho các trường nhập liệu
usernameField.addEventListener("input", checkInput);
userIdField.addEventListener("input", checkInput);

function checkInput() {
    let studentName = usernameField.value;
    let studentId = userIdField.value;

    // Kiểm tra xem cả 2 trường đã được nhập
    if (studentName !== "" && studentId !== "") {
    // Kiểm tra xem thông tin đăng nhập có hợp lệ không
    const isValidAccount = validAccounts.some(account =>
        account.username === studentName && account.userid === studentId
    );

    // Bật hoặc tắt nút Start tùy theo thông tin hợp lệ
    if (isValidAccount) {
        startButton.disabled = false;
        startButton.style.backgroundColor = "#4CAF50";  // Màu xanh khi bật
        errorMessage.style.display = "none";  // Ẩn thông báo lỗi khi đúng
    } else {
        startButton.disabled = true;
        startButton.style.backgroundColor = "gray";  // Màu xám khi tắt
        errorMessage.style.display = "block";  // Hiển thị thông báo lỗi
    }
    } else {
    startButton.disabled = true;
    startButton.style.backgroundColor = "gray";  // Màu xám khi tắt
    errorMessage.style.display = "none";  // Ẩn thông báo lỗi khi chưa nhập đủ 2 trường
    }
}
});
