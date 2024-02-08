const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener("click", () =>{
    question.innerHTML = "gusto papud taka!";
    gif.src =
    "https://i.pinimg.com/originals/56/55/37/565537cf632818d34f1ac15d2bddb0f8.gif"
});
    
    noBtn.addEventListener('mouseover', () => {

    const i = Math.floor(Math.random() * (wrapperRect.width
    - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height
    - noBtnRect.height)) + 1;

    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
});