let countdownTimer;

function startTimer(name, duration, onTimeUp) {
    let totalSeconds = duration;
    const timerDisplay = document.getElementById("timer");

    // Xóa timer cũ để tránh lỗi hiển thị khi bấm nhiều lần
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
