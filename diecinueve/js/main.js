

let userSingUp = JSON.parse(localStorage.getItem("userLogin"))|| {}

let userLogIn = userSingUp ? userSingUp : []

let WelcomeIn = document.getElementById("Welcome");
WelcomeIn.style.display = Object.keys(userSingUp).length > 0 ? "block" : "none";

document
    .getElementById("save-user")
    .addEventListener("click", (event)=>{
        event.preventDefault()
        let inputs = document.querySelectorAll("#User-Log-In input" )
        
        inputs.forEach((input)=>{
            let value = input.value
            let name = input.name
            userSingUp[name] = value 
        
        })
        localStorage.setItem("userLogin", JSON.stringify({userSingUp}))
    })