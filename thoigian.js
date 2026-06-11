let countdownTimer;

// Chỉ giữ lại name và onTimeUp, duration được JS tự tìm trong HTML
function startTimer(name, onTimeUp) {
    // JS tự lấy giá trị từ ô có id="timeInput"
    const inputVal = document.getElementById("timeInput").value;
    let totalSeconds = parseInt(inputVal);

    // Kiểm tra nếu không có số thì mặc định là 8 giây
    if (isNaN(totalSeconds) || totalSeconds <= 0) totalSeconds = 8;

    const timerDisplay = document.getElementById("timer");

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
            if (onTimeUp) onTimeUp();
        }
        totalSeconds--;
    }, 1000);
}
