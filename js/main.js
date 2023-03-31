const header = document.querySelector("header");
const nav = document.querySelector("nav");

document.addEventListener("DOMContentLoaded", function() {
    const scrollBtn = document.getElementById("scrollToTop");
    const animatedElements = document.querySelectorAll(".fadeInUp, .slideIn");
    const headerLinks = document.querySelectorAll('nav a[href^="#"]');
    const navList = document.getElementById('nav-list');
    const burgerMenu = document.getElementById('burger-menu');
    let isOpen = false;

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    function toggleScrollBtnVisibility() {
        if (window.scrollY > 200) {
            scrollBtn.classList.add("visible");
        } else {
            scrollBtn.classList.remove("visible");
        }
    }

    function toggleStickyNav() {
        if (window.scrollY > nav.offsetHeight) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    }

    function animateOnScroll() {
        animatedElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementPosition < windowHeight - windowHeight / 5) {
                element.classList.add("visible");
            }
        });
    }



    function toggleNavList() {
        if (!isOpen) {
            navList.classList.add('open');
            isOpen = true;
        } else {
            navList.classList.remove('open');
            isOpen = false;
        }
    }

    function scrollToSection(e) {
        e.preventDefault();
        const targetID = e.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetID);

        window.scrollTo({
            top: targetElement.offsetTop - nav.offsetHeight,
            behavior: "smooth",
        });
    }

    scrollBtn.addEventListener("click", scrollToTop);
    window.addEventListener("scroll", toggleScrollBtnVisibility);
    window.addEventListener("scroll", toggleStickyNav);
    window.addEventListener("scroll", animateOnScroll);

    headerLinks.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });

    burgerMenu.addEventListener('click', toggleNavList);
    toggleStickyNav();
    animateOnScroll();
});