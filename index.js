
function navDrop(tabletView){
    if(tabletView.matches) {
        nav.style.display = "none";
        menuBtn.style.display = "inline-block";
    } else {
        nav.style.display ="";
        menuBtn.style.display = "";
    }
}

let tabletView = window.matchMedia("(max-width: 800px)");
tabletView.addListener(navDrop);

let nav = document.querySelector('.nav-items');
// console.log(nav);
let menuBtn = document.querySelector('.menuBtn');
console.log(menuBtn);
