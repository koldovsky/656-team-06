(function () {
    function updateClock() {
        const clockContainer = document.querySelector('.clock');
        clockContainer.innerText = new Date().toLocaleTimeString();
    }
    updateClock();
    setInterval(updateClock, 1000);
})(); 