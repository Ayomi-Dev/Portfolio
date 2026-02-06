
// REVEALING SECTIONS ON PAGE SCROLL
window.addEventListener('scroll', function() { 
    let reveals = document.querySelectorAll('.reveal'); //targeting all elements with the reveal class

    for(let i=0; i < reveals.length; i++){ //looping through all the reveal element
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;//getting the distance of the reveal element from the top of the viewport
        let revealPoint = 100;//the point at which the reveal element will be revealed

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
});


//HEADER TEXTS ANIMATION FUNCTION
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("#header .text > *");
  const revealSpans = document.querySelectorAll(".name span, .role span");

  const STAGGER = 1200; //time delay between each child element to reveal
  const TRANSITION_TIME = 100; //time for animation of spans to complete

  requestAnimationFrame(() => {//ensures that the animation only runs after the initial page load
    items.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("active"); //adds the active class to each child element to reveal them one by one

        setTimeout(() => {
            revealSpans.forEach((span, i) => {
              setTimeout(() => span.classList.add("reveal"), i *3000);
            });
        }, TRANSITION_TIME);
      }, index * STAGGER);
    });
  }); 
});





 
// ACTIVE NAVIGATION MENU
let list = document.querySelectorAll('.link');

function activeList() { //adds active class on each nav link
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
        tabTitle.classList.remove('active');
    }
    for(const tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active-tab');
}



