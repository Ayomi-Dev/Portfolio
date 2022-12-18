// REVEALING SECTIONS ON PAGE SCROLL
window.addEventListener('scroll', function() {
    let reveals = document.querySelectorAll('.reveal');

    for(let i=0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
});
 

// ACTIVE NAVIGATION MENU
let list = document.querySelectorAll('.list');

function activeList() {
    list.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    })
}
list.forEach((item) => {
    item.addEventListener('click', activeList)
})




// NAVIGATION MENU FOR SMALLER SCREEN

const mobile = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');

mobile.addEventListener('click', function(){
    mobile.classList.toggle('is-active');
    menu.classList.toggle('active');
});

// HEADER TEXT ANIMATION

let texts = document.getElementsByTagName('h1');
        window.onload = function(){
            for(text of texts){
                text.classList.add("active");
            }
        }

let tabTitles = document.getElementsByClassName('tab-titles');
let tabContents = document.getElementsByClassName('tab-contents');

// TAB DISPLAY FOR THE ABOUT SECTION 
const openTab = (tabName) => {
    for(tabTitle of tabTitles){
        tabTitle.classList.remove('active-link');
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

// LOADING MORE OPTION

let loadmore = document.getElementById('seeMore');
let currentItem = 3;

loadmore.onclick = () =>{
    let boxes = [...document.querySelectorAll('.project1')];
    for(let i = currentItem; i < currentItem + 3; i++){
        boxes[i].style.display = 'inline-block'
    }
    currentItem += 3;
    if(currentItem >= boxes.length){
        loadmore.style.display = 'none';
    }
}
