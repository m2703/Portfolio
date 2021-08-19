//for the mobile menu

const menu = document.querySelector('.menu_toggle');
const links = document.querySelector('.nav_menu');

//creating a function to get the menu

const hamMenu = ()=>
{
    menu.classList.toggle('is-active');
    links.classList.toggle('active');
}

//adding event listener to the hamburger
menu.addEventListener('click',hamMenu)

