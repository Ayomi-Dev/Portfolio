
// REVEALING SECTIONS ON PAGE SCROLL
// window.addEventListener('scroll', function() { 
//     let reveals = document.querySelectorAll('.reveal'); //targeting all elements with the reveal class

//     for(let i=0; i < reveals.length; i++){ //looping through all the reveal element
//         let windowHeight = window.innerHeight;
//         let revealTop = reveals[i].getBoundingClientRect().top;
//         let revealPoint = 100;

//         if(revealTop < windowHeight - revealPoint){
//             reveals[i].classList.add('active');
//         }
//         else{
//             reveals[i].classList.remove('active');
//         }
//     }
// });


 // Revealing header text animation once page loads
// const observer = new IntersectionObserver(//reveals all entries at once
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("active");
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   { threshold: 0.2 }
// );


document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("#header .text > *");
  const revealSpans = document.querySelectorAll(".name span, .role span");

  const STAGGER = 1200; //time delay between each child element to reveal
  const TRANSITION_TIME = 100; //time for animation of spans to complete

  requestAnimationFrame(() => {
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
        tabTitle.classList.remove('active');
    }
    for(const tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active-tab');
}



// SCROLL REVEAL ANIMATION
ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 1500,
    delay: 200

});
ScrollReveal().reveal(`.service`, { delay: 300, origin: "left"})


ScrollReveal()
.reveal(`
    .content1 .tab-titles, 
    .col-2,
    .tab-contents,
    .service-content,
    .project-content
`, 
    { 
        delay: 300, 
        origin: 'bottom', 
        interval: 200 
    }
);
ScrollReveal()
.reveal(` ,  
    .service-card four,
`,
    { 
        delay: 300, 
        origin: 'right'
    }
);
ScrollReveal()
.reveal(`
    .service-title, 
    .col-1,
    .service-card one,
    .service-card two,
    .service-card three,
    .service-card four,
    .content1 h1,
    #projects h1,
    .project-content .project
`, 
    { 
        delay: 300, 
        origin: 'top' 
    }
);  