let countdownTimer;

function startTimer(name, onTimeUp) {
    // Tự lấy số giây từ ô input có id="timeInput"
    let totalSeconds = parseInt(document.getElementById("timeInput").value);
    
    // Nếu chưa nhập hoặc nhập sai, mặc định là 8 giây
    if (isNaN(totalSeconds) || totalSeconds <= 0) {
        totalSeconds = 8;
    }

    const timerDisplay = document.getElementById("timer");

    // Xóa timer cũ để tránh chạy đè lên nhau
    clearInterval(countdownTimer);

    countdownTimer = setInterval(() => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        timerDisplay.innerHTML = 'Chào bạn ' + name + '<br/>' +
                        'Thời gian: ' + String(hours).padStart(2, '0') + ':' + 
                        String(minutes).padStart(2, '0') + ':' + 
                        String(seconds).padStart(2, '0');
        
        if (totalSeconds <= 0) {
            clearInterval(countdownTimer);
            // Gọi hàm callback khi hết giờ
            if (onTimeUp) onTimeUp();
        }
        totalSeconds--;
    }, 1000);
}
