// Add simple reveal on scroll animation
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.glass-card');
    
    // Initial state
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const revealCards = () => {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 50) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Run on load and scroll
    revealCards();
    window.addEventListener('scroll', revealCards);

    // Smooth scroll for nav links (already supported via CSS scroll-behavior: smooth, but keeping this for active state updates)
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach((a) => {
            a.classList.remove("active");
            if (a.getAttribute("href").includes(current)) {
                a.classList.add("active");
            }
        });
    });
});
