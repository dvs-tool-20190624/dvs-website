
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5750); 
}

//need to obtain info about each member of my team.
//place those things in an object and us DOM manipulation to replace text on the about page.

//1. Short Bio about yourself. 1 to 2 sentences.
//2. Why lambda?
//3. favorite hobby?
//4. Favorite book? 
//5. favorite movie?
//6. favorite sport/sports team?

let teamMember = {
    "hawke": {"name":"Hawke",
    "bio":"I spend a lot of time thinking about design and how things look. I live a pretty minimalist life, and when I'm not at a computer, I love to do anything involving bikes.",
    "lambda":"the short minimal risk was a huge draw for me, and I'm always one to try alternatives to the norm.",
    "hobby":"I like to create mixtapes on cassette in my freetime, as well as bootleg tape releases for my favorite Albums" },

    "neha": {"name":"Neha",
    "bio":"I'm a trained molecular biologist who is returning to her love of web dev! I started coding when I was a teenager in the early 2000s.",
    "lambda":"I applied to the Summer Hackers Program, in which I earned a spot! I've been wanting to learn in a more structured environment, and this is a great opportunity",
    "hobby":"I like to hike, especially in the spring when the wildflowers are blooming"},

    "hannah": {"name":"Hannah",
    "bio":"I am a wife and mother of twin two year old girls, I am currently studying web development at Lamnbda and I am really enjoying what I am learning.",
    "lambda":"I had friend who had gone through the whole Lambda course and she spoke so highly of the program that I started to look into it and got hooked.",
    "hobby":"Hiking with my family"},

    "jason": {"name":"Jason",
    "bio":" ",
    "lambda":" ",
    "hobby":" "},

    "mindy": {"name":"Mindy",
    "bio":"I am a wife and mother of two boys (10 and 13), we live in Maryland we enjoy the outdoors and going to different theme parks in different states",
    "lambda":"I wanted to add to my technical skills I already had  and gain knowledge in something new.",
    "hobby":"Reading"},
    }

const bio = document.querySelectorAll('.name-description p')
 bio[0].textContent = `"${teamMember['hawke']['bio']}"\n "I chose Lambda School because ${teamMember['hawke']['lambda']}"`
 bio[1].textContent = `"${teamMember['neha']['bio']}"\n "I chose Lambda School because ${teamMember['neha']['lambda']}"`
 bio[2].textContent = `"${teamMember['hannah']['bio']}"\n "I chose Lambda School because ${teamMember['hannah']['lambda']}"`

 const bottomDevBio = document.querySelectorAll(".bottom-developers p")
 //bottomDevBio[0].textContent = `"${teamMember['jason']['bio']}"`
 bottomDevBio[1].textContent = `"${teamMember['mindy']['bio']}"\n "I chose Lambda School because ${teamMember['mindy']['lambda']}"`
    
const largeText = document.querySelectorAll(".name-description")
largeText.forEach((lText) => {
    lText.addEventListener('mouseover', event => {
        event.target.style.transform = 'scale(1.1)'
        event.target.style.marginRight = "7%"
        event.target.style.paddingLeft = "2%"
    })
})
largeText.forEach((rText) => {
    rText.addEventListener('mouseleave', event => {
    event.target.style.transform = 'scale(1)'
    event.target.style.marginRight = "0%"
    event.target.style.paddingLeft = "2%"
})
})


const largetext = document.querySelectorAll('.font-enlarge')
largetext.forEach((lText) => {
    lText.addEventListener('mouseover', event => {
        event.target.style.transform = 'scale(1.1)'
    })
})

largetext.forEach((rText) => {
    rText.addEventListener('mouseleave', event => {
    event.target.style.transform = 'scale(.95)'
})
})

largetext.forEach((width) => {
    width.addEventListener('mouseover', event => {
        event.target.style.width = '90%'
        event.target.style.marginLeft = '5%'
        event.target.style.marginright = '5%'
    })
})

largetext.forEach((width) => {
    width.addEventListener('mouseleave', event => {
        event.target.style.width = '100%'
    })
})


// class TabLink {
//     constructor(element) {
//       // Assign this.element to the passed in DOM element
//       this.element = element;
//       //console.log('this is the class', this.element.dataset.tab)
//       // Get the custom data attribute on the Link
//       this.data = element.dataset.tab;
      
//       // Using the custom data attribute get the associated Item element
//       this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
//       //console.log(this.itemElement)
      
//       // Using the Item element, create a new instance of the TabItem class
//       this.tabItem = new TabItem(this.itemElement);
//       //console.log(tabItem)
//       // Add a click event listener on this instance, calling the select method on click
//       this.element.addEventListener('click', () => this.select())
  
//     };
  
//     select() {
//       // Get all of the elements with the tabs-link class
//       const links = document.querySelectorAll('.tabs-link');
  
//       // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
//       Array.from(links).forEach(item => item.classList.remove('tabs-link-selected'));
  
//       // Add a class named "tabs-link-selected" to this link
//       this.element.classList.add('tabs-link-selected');
      
//       // Call the select method on the item associated with this link
//       this.tabItem.select()
//     }
//   }
  
//   class TabItem {
//     constructor(element) {
//       // Assign this.element to the passed in element
//       this.element = element;
//     }
  
//     select() {
//       // Select all ".tabs-item" elements from the DOM
//       const items = document.querySelectorAll('.tabs-item');
//       console.log('items', items)
//       // Remove the class "tabs-item-selected" from each element
//       Array.from(items).forEach(item => item.classList.remove('tabs-item-selected'));
//       // Add a class named "tabs-item-selected" to this element
//       this.element.classList.add('tabs-item-selected');
//     }
//   }
  
  
//   links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));
  
