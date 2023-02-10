const openButton = document.querySelector(".open-modal")
const closeButton = document.querySelector("#close-modal")
const video = document.getElementById("video")
const linkVideo = video.src
const modal = document.querySelector(".modal")

function alternarModal() {
    modal.classList.toggle("open")
}

openButton.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", linkVideo)
})

closeButton.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "")
})