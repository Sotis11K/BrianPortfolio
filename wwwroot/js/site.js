// OPEN & CLOSE ABOUT ME POPUP

var aboutMe = document.getElementById("about-me")
var openAboutMe = document.getElementById("open-about-me")
var exitAboutMe = document.getElementById("exit-about-me")

openAboutMe.addEventListener("click", e => {
    aboutMe.style = "display: flex;"
})

exitAboutMe.addEventListener("click", e => {
    aboutMe.style = "display: none;"
})




// OPEN & CLOSE PROJECT POPUP

const projectItems = document.querySelectorAll(".project-item");
const popup = document.getElementById("project-popup");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const popupLink = document.getElementById("popup-link");
const popupClose = document.getElementById("popup-close");

projectItems.forEach(project => {

    project.addEventListener("click", () => {

        const title = project.dataset.title;
        const description = project.dataset.description;
        const link = project.dataset.link;

        popupTitle.textContent = title;
        popupDescription.textContent = description;
        popupLink.href = link;

        popup.classList.add("active");

    });

});

popupClose.addEventListener("click", e => {
    popup.classList.remove("active");
})
