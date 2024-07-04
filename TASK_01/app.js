const next = document.getElementById('next')
const  prev = document.getElementById('prev')
const back = document.getElementById('back')
let seeMoreBtn = document.querySelectorAll('.seeMore')
const slider = document.querySelector('.slider')
const listHTML = document.querySelector('.slider .list')

next.onclick = function(){
    showSlider('next');
}
prev.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    next.style.pointerEvents = 'none';
    prev.style.pointerEvents = 'none';

    slider.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.slider .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        slider.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        slider.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        next.style.pointerEvents = 'auto';
        prev.style.pointerEvents = 'auto';
    }, 1000)
}
seeMoreBtn.forEach((button) => {
    button.onclick = function(){
        slider.classList.remove('next', 'prev');
        slider.classList.add('showDetail');
    }
});
back.onclick = function(){
    slider.classList.remove('showDetail');
}