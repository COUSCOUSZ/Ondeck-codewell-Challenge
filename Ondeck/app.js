// dropdown
let ddm = document.querySelector('.dropdown-menu');
let dd_btn = document.querySelector('.dropdown a');
let close_dd = document.querySelector('.close-dropdown');


dd_btn.addEventListener('click', () => {
    ddm.classList.add('show');
})

close_dd.addEventListener('click', () => {
    ddm.classList.remove('show');
})

// nav
let nav = document.querySelector('nav');
let open_menu = document.querySelector('.open-menu');
let close_menu = document.querySelector('.close-menu');

open_menu.addEventListener('click', () => {

    gsap.to(nav, { right: 0, ease: Power1.inOut });

});
close_menu.addEventListener('click', () => {

    gsap.to(nav, { right: "100%", ease: Power4.out });

});


// hero