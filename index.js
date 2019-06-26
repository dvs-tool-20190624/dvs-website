
function navDrop(tabletView){
    if(tabletView.matches) {
        nav.style.display = "none";
        menuBtn.style.display = "inline-block";


    } else {
        nav.style.display ="";
        menuBtn.style.display = "";
    }
}

const toggleMenu = () => {
    menuItems.classList.toggle('menu--open');
}

let tabletView = window.matchMedia("(max-width: 800px)");
tabletView.addListener(navDrop);

let nav = document.querySelector('.nav-items');
// console.log(nav);

const menuItems = document.querySelector('.menu-items');
// console.log(menuItems);

let menuBtn = document.querySelector('.menuBtn');
menuBtn.addEventListener('click', toggleMenu, true);
// console.log(menuBtn);



// Button Hover Effect (Hawke)
