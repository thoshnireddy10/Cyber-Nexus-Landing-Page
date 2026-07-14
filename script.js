/*==========================================
    PRELOADER
==========================================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1500);

});

/*==========================================
    TYPING EFFECT
==========================================*/

const typingText = document.getElementById("typing-text");

const words = [

    "Artificial Intelligence",
    "Cyber Security",
    "Smart Robotics",
    "Machine Learning",
    "Future Technology"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    }

    else {

        typingText.textContent = currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 70 : 120);

}

typeEffect();

/*==========================================
    MOBILE MENU
==========================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    }

    else {

        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.right = "20px";
        navLinks.style.background = "#08111f";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "10px";

    }

});

/*==========================================
    SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*==========================================
    ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==========================================
    COUNTER ANIMATION
==========================================*/

const counters = document.querySelectorAll(".stat-box h2");

let started = false;

function startCounter() {

    if (started) return;

    const stats = document.querySelector(".stats");

    const trigger = stats.offsetTop - window.innerHeight;

    if (window.scrollY > trigger) {

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            if (isNaN(target)) return;

            let count = 0;

            const speed = target / 100;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                }

                else {

                    counter.innerText = target;

                }

            };

            update();

        });

        started = true;

    }

}

window.addEventListener("scroll", startCounter);

/*==========================================
    CONTACT FORM
==========================================*/

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});

/*==========================================
    SCROLL REVEAL
==========================================*/

const revealElements = document.querySelectorAll(

    ".card, .service-box, .about-content, .about-image, .stat-box"

);

function reveal() {

    revealElements.forEach(item => {

        const position = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0px)";

        }

    });

}

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", reveal);

/*==========================================
    END OF SCRIPT
==========================================*/