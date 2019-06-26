//need to obtain info about each member of my team.
//place those things in an object and us DOM manipulation to replace text on the about page.

// class TeamMembers {
//     constructor(teamMember){
//         this.teamMember = teamMember.teamMember
//         this.lambda = teamMember.lambda
//         this.hobbie = teamMember.hobbie
//         this.work = teamMember.work
//     }
// }

// let jason = new TeamMembers ({
//     teamMember: 'Jason'
//     lambda: 
//     hobbie:
//     work:
// })

// let neha = new TeamMembers ({
//     teamMember: 'Neha'
//     lambda: 
//     hobbie:
//     work:
// })

// let hawke = new TeamMembers ({
//     teamMember: 'Hawke'
//     lambda: 
//     hobbie:
//     work:
// })

// let mindy = new TeamMembers ({
//     teamMember: 'Mindy'
//     lambda: 
//     hobbie:
//     work:
// })

// let hannah = new TeamMembers ({
//     teamMember: 'Hannah';
//     lambda: ""
//     hobbie:
//     work:
// })

//1. Short Bio about yourself. 1 to 2 sentences.
//2. Why lambda?
//3. favorite hobby?
//4. Favorite book? 
//5. favorite movie?
//6. favorite sport/sports team?

let teamMember = {
    "hawke": {"name":"Hawk",
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
 bottomDevBio[1].textContent = `"${teamMember['mindy']['bio']}"`
    
const largeText = document.querySelectorAll(".name-description")
largeText.forEach((lText) => {
    lText.addEventListener('mouseover', event => {
        event.target.style.transform = 'scale(1.1)'
    })
})
largeText.forEach((rText) => {
    rText.addEventListener('mouseleave', event => {
    event.target.style.transform = 'scale(1)'
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

