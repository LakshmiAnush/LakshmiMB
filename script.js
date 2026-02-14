document.addEventListener("DOMContentLoaded", function () {

    /* ================= Typing Effect ================= */

    const texts = ["Hi! My name is Lakshmi M B", "Lakshmi Anush"];
    const typingElement = document.querySelector(".typing-text");

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];

        if (!isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex++);
            if (charIndex > currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 500);
                return;
            }
        } else {
            typingElement.textContent = currentText.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();


    /* ================= Section Click Highlight ================= */

    const subsections = document.querySelectorAll(".subsection");

    subsections.forEach(subsection => {
        subsection.addEventListener("click", function () {
            subsections.forEach(sec => sec.classList.remove("selected"));
            this.classList.add("selected");
        });
    });


    /* ================= Smooth Scrolling ================= */

    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });


    /* ================= Fade-In on Scroll ================= */

    const fadeElements = document.querySelectorAll(".fade-in, .slide-up");

    function checkFade() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkFade);
    checkFade();

});
