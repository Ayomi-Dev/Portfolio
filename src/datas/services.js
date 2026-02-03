const services = [
    {
        id: 1,
        class: "service-card one",
        title: "Web Application Development (Frontend & Backend)",
        icon: "icon-code bold",
        desc: `Need a powerful web app? I specialize in developing scalable and high-performance \n
            applications using latest technologies. From dashboards to interactive tools, I create \n
            solutions tailored to your needs.`
    },
    {
        id: 2,
        class: "service-card two",
        title: "E-Commerce Development",
        icon: "icon-shopping-cart bold",
        desc: `Turn your business into an online success! I develop E-commerce platforms that are secure, \n
                user-friendly, and optimised for sales. Let's build an online stire that keeps your customers coming back.`
    },
    {
        id: 3,
        class: "service-card three",
        title: "UI/UX Design Implementation",
        icon: "icon-mouse-square bold",
        desc: `Design meets functionality! I transform UI/UX designs into fast, interactive, and pixel-perfect 
                websites. If you  have a figma or Adobe XD design, I'll make a reality with smooth animations and responsiveness.`
    },
    {
        id: 4,
        title: "SEO And Performance Optimization",
        class: "service-card four",
        icon: "icon-search-status bold",
        desc: `A slow website costs you visitors! I optimize websites for speed, performance, and 
                SEO to improve rankings and user experience. Let's boost your side's visibility 
                and engagement.`
        
    }
    
]
// POPULATING SERVICES SECTION
document.querySelector(".service-content").innerHTML = services.map((service) => {
    return (
        `<div class="${service.class}">
            <div class="service-front">
                <i class="icon ${service.icon}"></i>
                <h2>${service.title}</h2>
                <p style="font-style: .7rem">See more...</p>
            </div> 
            <div class="service-back">
                <p>${service.desc}
                </p>
                <a href="#contact">Contact Me</a>
            </div> 
        </div>`
    ) 
})
.join(' ')