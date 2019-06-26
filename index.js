
function navDrop(tabletView){
    if(tabletView.matches) {
        nav.style.display = "none";
    } else {
        nav.style.display ="";
    }
}

let tabletView = window.matchMedia("(max-width: 800px)");
tabletView.addListener(navDrop);

let nav = document.querySelector('.nav-items');
console.log(nav);