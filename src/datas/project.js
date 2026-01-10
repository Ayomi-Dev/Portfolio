const projects = [
    {
        id: 1,
        title: "Reward System",
        image: "../assets/projects/flowva.png",
        desc: "",
        link: "",
        tools: []
    },
    {
        id: 2,
        title: "Bookmark Manager",
        image: "../assets/projects/bookmark.png",
        desc: "",
        link: "",
        tools: []
    },
    {
        id: 3,
        title: "Task UI Dashboard",
        image: "../assets/projects/task-ui.png",
        desc: "",
        link: "",
        tools: []
    },
    {
        id: 4,
        title: "Ecommerce Platform",
        image: "../assets/projects/istore.png",
        desc: "",
        link: "",
        tools: []
    },
    {
        id: 5,
        title: "Mind App",
        image: "../assets/projects/mindapp.png",
        desc: "",
        link: "",
        tools: []
    },
    

]

// POPULATING PROJECT SECTION
document.querySelector(".project-content").innerHTML = projects.map((project) => {
    return (
        `
        <div class="project one">
            <img src=${project.image} alt="">
            <div class="project-layer-wrapper">
                <div class="project-layer">
                    <h2>${project.title}</h2>
                    <p>${project.desc}</p>
                    <div class="tools">
                        <h3>Stack</h3> 
                        <div class="tool-img">
                            <img src="react.png" alt="">
                            <img src="css.jpeg" alt="">
                        </div>
                    </div>
                    <a target='_blank' href="https://my-realestate-app.netlify.app/"><i class="fas fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
        `
    )
}).join(" ")
console.log(projects)