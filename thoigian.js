let countdownTimer;

function startTimer(name, onTimeUp) {
    // File JS tự lấy dữ liệu từ HTML thông qua ID
    const inputElement = document.getElementById("timeInput");
    let totalSeconds = parseInt(inputElement.value);

    // Nếu không nhập gì thì lấy giá trị mặc định là 8
    if (isNaN(totalSeconds) || totalSeconds <= 0) {
        totalSeconds = 8;
    }

    const timerDisplay = document.getElementById("timer");

    // Xóa timer cũ để không bị chạy chồng lên nhau
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
