const question = document.querySelector('.question')
const yesBtn = document.querySelector('.yes-btn')
const noBtn = document.querySelector('.no-btn')
const gif = document.querySelector('.lovegif')
const video = document.querySelector('#crush-video')
const startBtn = document.querySelector('.start-btn')
video.volume = 0.2;

startBtn.addEventListener('click', () => {
    document.querySelector('.opening').style.display = 'none';
    document.querySelector('.main').style.display = 'block';
})


yesBtn.addEventListener('click', () => {
    question.innerHTML = "YIEEEEEEE♥♥♥♥"
    document.querySelector(".button-group").style.display="none"
    gif.style.display = "block" 
    video.style.display = "block" 
    video.play()
})

let padding = 15;
let fontSize = 16;

noBtn.style.padding = "15px 25px";
yesBtn.style.padding = `${padding}px ${padding + 10}px`;
yesBtn.style.fontSize = `${fontSize}px`;


noBtn.addEventListener("click", () => {
  padding += 20;
  fontSize += 14;
  yesBtn.style.padding = `${padding}px ${padding + 10}px`;
  yesBtn.style.fontSize = `${fontSize}px`;
});
