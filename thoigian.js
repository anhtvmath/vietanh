let countdownTimer;

function startTimer(name, onTimeUp) {
    // Tự động lấy giá trị từ ô input id="timeInput" của app khác
    const inputElement = document.getElementById("timeInput");
    let totalSeconds = inputElement ? parseInt(inputElement.value) : 8;
    
    // Đảm bảo có giá trị hợp lệ
    if (isNaN(totalSeconds) || totalSeconds <= 0) totalSeconds = 8;

    const timerDisplay = document.getElementById("timer");

    // Xóa timer cũ để tránh xung đột
    clearInterval(countdownTimer);

    countdownTimer = setInterval(() => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        // Cập nhật hiển thị
        if (timerDisplay) {
            timerDisplay.innerHTML = 'Chào bạn ' + name + '<br/>' +
                            'Thời gian: ' + String(hours).padStart(2, '0') + ':' + 
                            String(minutes).padStart(2, '0') + ':' + 
                            String(seconds).padStart(2, '0');
        }
        
        if (totalSeconds <= 0) {
            clearInterval(countdownTimer);
            if (onTimeUp) onTimeUp();
        }
        totalSeconds--;
    }, 1000);
}
