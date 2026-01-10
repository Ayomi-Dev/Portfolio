// import { projects } from "./datas/project";
// import { services } from "./datas/services";

// REVEALING SECTIONS ON PAGE SCROLL
window.addEventListener('scroll', function() { 
    let reveals = document.querySelectorAll('.reveal'); //targeting all elements with the reveal class

    for(let i=0; i < reveals.length; i++){ //looping through all the reveal element
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


 // Revealing header text animation once page loads
let texts = document.getElementsByTagName('h1');
 window.onload = function(){
     for(const text of texts){
     text.classList.add("active");
     }
}
 
// ACTIVE NAVIGATION MENU
let list = document.querySelectorAll('.list');

function activeList() { //function to add active class on each nav link
    list.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    });
}
list.forEach((item) => {
    item.addEventListener('click', activeList)
});


// NAVIGATION MENU FOR SMALLER SCREEN
const mobile = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');

mobile.addEventListener('click', () => {
    mobile.classList.toggle('is-active');
    menu.classList.toggle('active');
});

let tabTitles = document.getElementsByClassName('tab-titles');
let tabContents = document.getElementsByClassName('tab-contents'); 

//TAB DISPLAY FOR THE ABOUT SECTION 
const openTab = (tabName) => { //adding corresponding tab to their title
    for(const tabTitle of tabTitles){
        tabTitle.classList.remove('active-link');
    }
    for(const tabContent of tabContents){
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
    for(let i = currentItem; i < currentItem + 3; i++){ //looping through all element containing project1
        boxes[i].style.display = 'inline-block'
    }
    currentItem += 3;
    if(currentItem >= boxes.length){  //condition for removing load more button
        loadmore.style.display = 'none';
    }
}
















ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 2500,
    delay: 200

});
ScrollReveal().reveal('.content1 h1, .project-container h2, .project.two, .service-card.one, .service-card.three',
 { delay: 200, origin: 'left' });
ScrollReveal().reveal('.content1 .tab-titles, .col-2', { delay: 300, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.content1 .p1, .content2, .project.one, .project.three, .service-card.two, .service-card.four',
 { delay: 300, origin: 'right'});
ScrollReveal().reveal('.service-title, .col-1', { delay: 300, origin: 'top' });