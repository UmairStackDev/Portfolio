document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Umair's Web Dev Portfolio";
        $("#favicon").attr("href", "./img/fave.png"); // Ensure the path is correct
    } else {
        document.title = "Come Back To Portfolio";  
        $("#favicon").attr("href", "./img/favhand.png"); // Ensure this path is also correct
    }
});
 // Disable right-click
 document.addEventListener("contextmenu", function(e) {
    e.preventDefault(); // Prevent the default context menu
    document.querySelector('.message').style.display = 'block'; // Show a message
});

// Disable F12 (DevTools) key and Ctrl+Shift+I
document.addEventListener("keydown", function(e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault(); // Prevent opening DevTools
    }
});

    document.addEventListener("DOMContentLoaded", function() {
        var typed = new Typed(".typing-text", {
            strings: ["frontend development", "Mern Stack development", "web designing", "web development"],
            loop: true,
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 500,
        });
    });
    

    $(document).ready(function () {

        $('#menu').click(function () {
            $(this).toggleClass('fa-times');
            $('.navbar').toggleClass('nav-toggle');
        });
    
        $(window).on('scroll load', function () {
            $('#menu').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');
    
            if (window.scrollY > 60) {
                document.querySelector('#scroll-top').classList.add('active');
            } else {
                document.querySelector('#scroll-top').classList.remove('active');
            }
    
            // scroll spy
            $('section').each(function () {
                let height = $(this).height();
                let offset = $(this).offset().top - 200;
                let top = $(window).scrollTop();
                let id = $(this).attr('id');
    
                if (top > offset && top < offset + height) {
                    $('.navbar ul li a').removeClass('active');
                    $('.navbar').find(`[href="#${id}"]`).addClass('active');
                }
            });
        });
    
        // smooth scrolling
        $('a[href*="#"]').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top,
            }, 500, 'linear')
        });
    
       
    
    });


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

    /* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.timeline-item');

    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const scrollThreshold = window.innerHeight * 0.8; // Trigger when item is 80% in view

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            item.classList.add('visible');
            item.querySelector('.circle').classList.add('visible'); // Add visible class to the circle
        } else {
            item.classList.remove('visible');
            item.querySelector('.circle').classList.remove('visible'); // Remove visible class from the circle
        }
    });
});


