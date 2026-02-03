const stacks = [
    {
        id: 1,
        name: "HTML5",
        img: "./assets/tools/html.jpeg"
    },
    {
        id: 2,
        name: "CSS",
        img: "./assets/tools/css.jpeg"
    },
    {
        id: 3,
        name: "JavaScript",
        img: "./assets/tools/js.png"
    },
    {
        id: 4,
        name: "TypeScript",
        img: "./assets/tools/ts.jpeg"
    },
    {
        id: 5,
        name: "ReactJS",
        img: "./assets/tools/react.png"
    },
    {
        id: 6,
        name: "NextJS",
        img: "./assets/tools/nextjs.png"
    },
    {
        id: 7,
        name: "TialwindCSS",
        img: "./assets/tools/tailwind.png"
    },
    {
        id: 8,
        name: "Chakra-UI",
        img: "./assets/tools/chakra.jpeg"
    },
    {
        id: 9,
        name: "Supabase",
        img: "./assets/tools/supabase.jpeg"
    },
    {
        id: 10,
        name: "ExpressJS",
        img: "./assets/tools/expressjs.jpg"
    },
    {
        id: 11,
        name: "Mongoose",
        img: "./assets/tools/mongoose.jpeg"
    },
    {
        id: 12,
        name: "Prisma",
        img: "./assets/tools/prisma.png"
    },
]


document.querySelector(".stacks-container").innerHTML = stacks.map( (stack, index) => {
    return `
    <div class="stack-item" title="${stack.name}">
        <img src="${stack.img}" alt="${stack.name}">
    </div>
    `
}).join(" ");

