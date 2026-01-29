document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animation
    const tl = gsap.timeline();
    tl.to('h1', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.5
    })
        .to('.hero-img', {
            scale: 1,
            duration: 2.5,
            ease: 'power2.out'
        }, 0);

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Work Items Reveal
    gsap.utils.toArray('.work-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            delay: i * 0.1
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Interactions
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    inputs.forEach(input => {
        // Initial check for pre-filled values
        if (input.value !== '') {
            input.parentElement.classList.add('has-value');
        }

        input.addEventListener('blur', () => {
            if (input.value !== '') {
                input.parentElement.classList.add('has-value');
            } else {
                input.parentElement.classList.remove('has-value');
            }
        });
    });
});
