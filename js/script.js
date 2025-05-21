// Interactive Demos
document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ Light Mode';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        themeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Text Animation with gradient effect
    const animatedText = document.getElementById('animated-text');
    if (animatedText) {
        let isAnimating = false;
        
        animatedText.addEventListener('mouseenter', function() {
            if (!isAnimating) {
                isAnimating = true;
                this.style.animation = 'textEffect 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
            }
        });
        
        animatedText.addEventListener('animationend', function() {
            isAnimating = false;
            this.style.animation = '';
        });
    }

    // Enhanced Color Block Animation - Ultra Smooth with Rich Colors
    const colorBlock = document.getElementById('color-block');
    if (colorBlock) {
        let isAnimating = false;
        
        colorBlock.addEventListener('click', function() {
            if (!isAnimating) {
                isAnimating = true;
                
                // Add animating class for smooth transition
                this.classList.add('animating');
                
                // Update the text while color changes
                const span = this.querySelector('span');
                if (span) {
                    span.textContent = 'Transitioning...';
                    
                    // Keep updating the text while the animation is running
                    let dots = 0;
                    const textInterval = setInterval(() => {
                        dots = (dots + 1) % 4;
                        span.textContent = 'Transitioning' + '.'.repeat(dots);
                    }, 500);
                    
                    setTimeout(() => {
                        clearInterval(textInterval);
                        span.textContent = 'Click me!';
                    }, 8000);
                }
                
                // Reset after animation completes
                setTimeout(() => {
                    this.classList.remove('animating');
                    isAnimating = false;
                }, 8000);
            }
        });
    }

    // Typing Animation
    const typed = new Typed('.title', {
        strings: ['IT STUDENT', 'ASPIRING WEB DEVELOPER'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        backDelay: 2000
    });

    // Interactive Demo Animation
    const animateButton = document.querySelector('.demo-box button');

    if (animatedText && animateButton) {
        animateButton.addEventListener('click', function() {
            // Remove the class to reset animation
            animatedText.classList.remove('animate');
            
            // Force a reflow to restart the animation
            void animatedText.offsetWidth;
            
            // Add the class back to start the animation
            animatedText.classList.add('animate');
        });
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skills Progress Bars Animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';
    });
}

// Animate progress bars when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
        }
    });
});

document.querySelectorAll('.skills-content').forEach((el) => observer.observe(el));

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // You can add your form submission logic here
        // For now, we'll just show an alert
        alert(`Thank you ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
        
        // Clear the form
        contactForm.reset();
    });
} 