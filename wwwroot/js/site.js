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
        const images = JSON.parse(project.dataset.images);


        popupTitle.textContent = title;
        popupDescription.textContent = description;
        popupLink.href = link;

        currentImages = images;
        currentImageIndex = 0;
        showImage();

        popup.classList.add("active");

    });

});

popupClose.addEventListener("click", e => {
    popup.classList.remove("active");
})



// PROJECT POPUP SLIDER

const popupImage = document.getElementById("popup-image");
const previousButton = document.getElementById("previous-image");
const nextButton = document.getElementById("next-image");

let currentImages = [];
let currentImageIndex = 0;

function showImage() {
    if (currentImages.length === 0) {
        popupImage.src = "";
        popupImage.alt = "";
        return;
    }
    popupImage.src = currentImages[currentImageIndex];
    popupImage.alt = `Project screenshot ${currentImageIndex + 1}`;
}

nextButton.addEventListener("click", () => {
    if (currentImages.length === 0) return;
    currentImageIndex++;
    if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    }
    showImage();
});

previousButton.addEventListener("click", () => {
    if (currentImages.length === 0) return;
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    }
    showImage();
});