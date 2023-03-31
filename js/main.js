emailjs.init("PimOfzIeuUt1zrMKT");

function sendEmail(e) {
  e.preventDefault();

  const contactForm = document.getElementById("contact-form");
  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const message = contactForm.message.value;

  emailjs
    .send("service_6lrcaeb", "template_yumq5i8", {
      from_name: name,
      to_name: "Konrad",
      from_email: email,
      to_email: "konradbinko@gmail.com",
      message: message,
    })
    .then(
      () => {
        alert("Thank you for your message! I will get back to you as soon as possible.");
        contactForm.reset();
      },
      (error) => {
        console.log(error);
        alert("Something went wrong. Please try again later.");
      }
    );
}

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", sendEmail);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollToTop");
  const animatedElements = document.querySelectorAll(".fadeInUp, .slideIn");
  const headerLinks = document.querySelectorAll('nav a[href^="#"]');
  const burgerMenu = document.getElementById("burger-menu");
  const navList = document.getElementById("nav-list");

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

  function toggleNav() {
    if (navList.classList.contains("open")) {
      navList.classList.remove("open");
    } else {
      navList.classList.add("open");
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

  burgerMenu.addEventListener("click", toggleNav);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
    animateOnScroll();
});
