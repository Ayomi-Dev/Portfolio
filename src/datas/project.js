const react = "../assets/tools/react.png";
const nextjs = "../assets/tools/nextjs.png";
const express = "../assets/tools/expressjs.jpg";
const supabase = "../assets/tools/supabase.jpeg";
const chakra = "../assets/tools/chakra.jpeg";
const tailwind = "../assets/tools/tailwind.png";
const mongoose = "../assets/tools/mongoose.jpeg";
const prisma = "../assets/tools/prisma.png";
const projects = [
    {
        id: 1,
        title: "Reward System",
        image: "../assets/projects/flowva.png",
        desc: `Built a full-stack rewards system using React and\n 
                Supabase, featuring a secure backend with real-time profile\n 
                updates, daily streak tracking, and dynamic reward unlocking.\n 
                The system allows users to accumulate points, track progress, \n
                and receive instant feedback.
                `,
        link: "https://reward-system-chi.vercel.app/",
        tools: [
            {name: "ReactJs", logo: react},
            {name: "Supabase", logo: supabase},
            {name: "TailwindCSS", logo: tailwind} 
        ]
    },
    {
        id: 2,
        title: "Bookmark Manager",
        image: "../assets/projects/bookmark.png",
        desc: `
            A responsive bookmark management app built with React, 
            TypeScript, and Next.js, allowing users to save, organize, 
            and search bookmarks with automatic metadata fetching, tag-based filtering, 
            and smooth interactive UI features.
            `,
        link: "",
        tools: [
            {name: "NextJS", logo: nextjs},
            {name: "ReactJs", logo: react},
            {name: "Chakra-UI", logo: chakra},
            {name: "Prisma", logo: prisma}
        ]
    },
    {
        id: 3,
        title: "Task UI Dashboard",
        image: "../assets/projects/task-ui.png",
        desc: `
            A dynamic task management feature that allows users to add tasks with 
            assigned priority levels. Users can select from multiple priorities
             (High, Medium, Low), dynamically changing the color of the flag icon corresponding to the 
            chosen priority.
        `,
        link: "https://todo-ui-tawny.vercel.app/",
        tools: [
            {name: "NextJS", logo: nextjs},
            {name: "ReactJS", logo: react},
            {name: "Chakra", logo: chakra}
        ]
    },
    {
        id: 4,
        title: "Ecommerce Platform",
        image: "../assets/projects/istore.png",
        desc: `
            A full-stack e-commerce web application built with React, 
            TypeScript, Redux, Tailwind CSS, Node.js, Express, and MongoDB.
             Features include user authentication, admin product management, 
             shopping cart, dynamic search and filtering, and secure Stripe 
             checkout.
        `,
        link: "https://i-store-xi-lime.vercel.app/",
        tools: [
            {name: "ReactJS", logo: react},
            {name: "ExpressJS", logo: express},
            {name: "TailwindCSS", logo: tailwind},
            {name: "Mongoose", logo: mongoose}
        ]
    },
    {
        id: 5,
        title: "Mind App",
        image: "../assets/projects/mindapp.png",
        desc: `
            A React + TypeScript note-taking app with folder organization, live search, dark mode, 
            and customizable note colors. It allows users to create, edit,
             and delete notes, organize them under specific folders, and
              persist data in the browser for a seamless, intuitive 
              experience
        `,
        link: "https://mind-app-nine.vercel.app/",
        tools: [
            {name: "ReactJS", logo: react},
            {name: "TailwindCSS", logo: tailwind}
        ]
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
                        ${project.tools.map(tool => (
                            `
                                <div class="tool px-2" title=${tool.name}>
                                    <img src=${tool.logo} alt="">
                                </div>
                            `
                        )).join(" ")}
                        </div>
                    </div>
                    <a target='_blank' href=${project.link}><i class="icon-link bold"></i></a>
                </div>
            </div>
        </div>
        `
    )
}).join(" ")
