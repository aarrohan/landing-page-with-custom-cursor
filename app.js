const cursor = document.querySelector('.cursor');
const logo = document.querySelector('.logo');
const navLinks = document.querySelectorAll('ul li');
const heroImg = document.querySelector('.hero-right img');

document.addEventListener('mousemove', (e) => {

    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";

});

// Logo
logo.addEventListener('mouseover', () => {

    cursor.classList.add('logoCursor');
    logo.classList.add('whiteLogo');

});

logo.addEventListener('mouseleave', () => {

    cursor.classList.remove('logoCursor');
    logo.classList.remove('whiteLogo');

});

// Nav Links
navLinks.forEach(link => {

    link.addEventListener('mouseover', () => {

        cursor.classList.add('navLinksCursor');
        link.classList.add('whiteNavLink');

    });

    link.addEventListener('mouseleave', () => {

        cursor.classList.remove('navLinksCursor');
        link.classList.remove('whiteNavLink');

    });
    
});

// Hero Image
heroImg.addEventListener('mouseover', () => {

    cursor.classList.add('imgCursor');

});

heroImg.addEventListener('mouseleave', () => {

    cursor.classList.remove('imgCursor');

});