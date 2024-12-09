const wraper = document.querySelector('.wrapper')
const question = document.querySelector('.question')
const yesBtn = document.querySelector('.yes-btn')
const noBtn = document.querySelector('.no-btn')
const gif = document.querySelector('.lovegif')
const video = document.querySelector('#crush-video')



yesBtn.addEventListener('click', () => {
    question.innerHTML = "YIEEEEEEE♥♥♥♥"
    document.querySelector(".button-group").style.display="none"
    gif.style.display = "block" // Show the GIF
    video.style.display = "block" // Show the video
    video.play()
})

noBtn.addEventListener("mouseover",movehover)
noBtn.addEventListener("click",movehover)
function movehover(){
    const i=Math.floor(Math.random()*500)+1
    const j=Math.floor(Math.random()*500)+1

    noBtn.style.left=i+"px"
    noBtn.style.top=j+"px"
}