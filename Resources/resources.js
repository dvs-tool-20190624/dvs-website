const resourceLinks = document.querySelectorAll('.resourceList a');

resourceLinks.forEach((link) => {
    link.addEventListener('mouseover', event => {
        event.target.style.color = '#ff7b00';
        event.target.style.fontSize = '3.2rem';
    })
});

resourceLinks.forEach((link) => {
    link.addEventListener('mouseleave', event => {
        event.target.style.color = '';
        event.target.style.fontSize = '';
    })
})

const logos = document.querySelectorAll('.logo-img');
logos.forEach((logo) => {
    logo.addEventListener('mousedown', event => {
        event.target.style.width = '105%';
    })
});
logos.forEach((logo) => {
    logo.addEventListener('mouseout', event => {
        event.target.style.width = '';
    })
})

// console.log(resourceLinks);