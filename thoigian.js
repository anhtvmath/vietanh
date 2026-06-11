let countdownTimer;

function startTimer(name, onTimeUp) {
    let totalSeconds = parseInt(document.getElementById("timeInput").value);
    const timerDisplay = document.getElementById("timer");

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
            // Gọi hàm callback khi hết giờ (ví dụ: myfunction)
            if (onTimeUp) onTimeUp();
        }
        totalSeconds--;
    }, 1000);
}
