/* const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImages = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImages}`;
document.body.style.backgroundImage = "url('img/"+chosenImages+"')"; */

const colors = [
    "#EC9A9A",
    "#B7D78F",
    "#99B6CA",
    "#B0A5DD",
    "#AAC596",
    "#658AC0",
    "#D1B48B",
    "#849382"
];

const body = document.querySelector("body");

function handleLoad() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = `${color}`
}

window.addEventListener("load",handleLoad);