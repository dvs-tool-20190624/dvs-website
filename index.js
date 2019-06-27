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

// let tabletView = window.matchMedia("(max-width: 800px)");
// tabletView.addListener(navDrop);

// let nav = document.querySelector('.nav-items');
// // console.log(nav);

const menuItems = document.querySelector('.menu-items');
// console.log(menuItems);

let menuBtn = document.querySelector('.menuBtn');
menuBtn.addEventListener('click', toggleMenu, true);
// console.log(menuBtn);

// Button Hover Effect (Hawke)
let button = document.querySelector('.da-real-btn');
console.log(button);

let glow = () => {
  console.log("LET THERE BE LIGHT!");
  button.classList.add('btn-hover')
  button.classList.remove('btn-leave')
};

let unglow = () => {
  console.log("NO, GET THOSE LIGHTS OFF!");
  button.classList.add('btn-leave')
  button.classList.remove('btn-hover')
};

button.addEventListener('mouseover', glow);
button.addEventListener('mouseout', unglow);
console.log(button.classList);
