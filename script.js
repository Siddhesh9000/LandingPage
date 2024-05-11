document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power4.out'
    });

    // GSAP animations for text elements
    animateText('.hero h1', 1); // Start immediately
    animateText('.hero p', 2); // Start after 1 second

    // Set up ScrollTrigger for Smooth Animations
    gsap.utils.toArray('.feature').forEach((feature, index) => {
        gsap.from(feature, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: feature,
                start: 'top 90%',
                end: 'bottom 60%', // Adjust end position for smoother animation triggering
                scrub: true // Animation follows the scroll smoothly
            }
        });
    });

    // Set up ScrollTrigger for Cards section
    gsap.utils.toArray('.card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                end: 'bottom 60%', // Adjust end position for smoother animation triggering
                scrub: true // Animation follows the scroll smoothly
            }
        });
    });
});

function animateText(selector, delay) {
    const text = document.querySelector(selector);
    const words = text.textContent.split(' ');
    const letters = words.map(word => word.split(''));

    // Clear original text content
    text.innerHTML = '';

    // Append spans for each letter
    letters.forEach((word, wordIndex) => {
        word.forEach((letter, letterIndex) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.opacity = 0;
            text.appendChild(span);

            // Animate each letter
            gsap.to(span, {
                opacity: 1,
                duration: 1, // Adjust duration to slow down the animation
                delay: delay + 0.1 * (wordIndex),
                repeat: -1,
                yoyo: true,
                ease: 'power4.out'
            });            
        });

        // Add space between words
        if (wordIndex < words.length - 1) {
            const space = document.createTextNode(' ');
            text.appendChild(space);
        }
    });
}
