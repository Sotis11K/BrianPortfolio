var aboutMe = document.getElementById("about-me")
var openAboutMe = document.getElementById("open-about-me")
var exitAboutMe = document.getElementById("exit-about-me")

openAboutMe.addEventListener("click", e => {
    aboutMe.style = "display: flex;"
})

exitAboutMe.addEventListener("click", e => {
    aboutMe.style = "display: none;"
})

// Write your JavaScript code.
