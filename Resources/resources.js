const resourceLinks = document.querySelectorAll('.resourceList a');

resourceLinks.forEach((link) => {
    link.addEventListener('mouseover', event => {
        event.target.style.color = '#ff7b00';
    })
});

resourceLinks.forEach((link) => {
    link.addEventListener('mouseleave', event => {
        event.target.style.color = '';
    })
})

// console.log(resourceLinks);