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

// let teamMember = [
//     {"name":"Hawk",
//     "bio":"I spend a lot of time thinking about design and how things look. I live a pretty minimalist life, and when I'm not at a computer, I love to do anything involved bikes.",
//     "lambda":"The short minimal risk was a huge draw for me, and I'm always one to try alternatives to the norm.",
//     "hobby":"I like to create mixtapes on cassette in my freetime, as well as bootleg tape releases for my favorite Albums" },
//     {"name":"Neha",
//     "bio":" ",
//     "lambda":" ",
//     "hobby":" "},
//     {"name":"Hannah",
//     "bio":"I am a wife and mother of twin two year old girls, I am currently studying web development at Lamnbda and i am really enjoying what i am learning.",
//     "lambda":"I had friend who had gone through the whole Lambda course and she spoke so highly of the program that I started to look into it and got hooked.",
//     "hobby":"Hiking with my family"},
//     {"name":"Jason",
//     "bio":" ",
//     "lambda":" ",
//     "hobby":" "},
//     {"name":" ",
//     "bio":"I am a wife and mother of two boys (10 and 13), we live in Maryland we enjoy the outdoors and going to different theme parks in different states",
//     "lambda":"I wanted to add to my technical skills I already had  and gain knowledge in something new.",
//     "hobby":"Reading"},
//     ]

//     const biography = document.querySelectorAll(".bio")
    
const largeText = document.querySelectorAll(".dev")
largeText.forEach((n) => {
    n.addEventListener('click', event => {
        event.target.style.transform = 'scale(1.1)'
    })
})