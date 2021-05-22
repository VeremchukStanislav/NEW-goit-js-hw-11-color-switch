const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervaId = null;

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener('click', () => {
    intervaId = setInterval(() => {
        ChangeBodyBgCol();
    }, 1000)
    startBtn.setAttribute('disabled','disabled');
});
console.log(startBtn);

stopBtn.addEventListener('click', () => {
    clearInterval(intervaId)
    startBtn.removeAttribute('disabled');
});
console.log(stopBtn);

const randomColors = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const ChangeBodyBgCol = () => {
    body.style.backgroundColor = colors[randomColors(0, colors.length - 1)];
}
