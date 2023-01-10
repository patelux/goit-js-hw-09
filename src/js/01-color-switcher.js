const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

const color = {
    intervalID: null,
    start() {
        this.intervalID = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
        }, 1000)
    },
    stop() {
        clearInterval(this.intervalID);
    },
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
};

startBtn.addEventListener('click', () => {
    startBtn.disabled = true,
    stopBtn.disabled = false,
    color.start()
})

stopBtn.addEventListener('click', () => {
    startBtn.disabled = false,
    stopBtn.disabled = true,
    color.stop()
})

