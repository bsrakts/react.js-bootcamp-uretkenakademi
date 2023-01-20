const container = document.querySelector(".content");
const baseURL = "https://source.unsplash.com/random/"
const rows = 5

for (let i = 0; i < rows * 3; i++){
    const image = document.createElement('img');
    image.src = `${baseURL}${randomSize()}`;
    container.appendChild(image);
}

function randomSize(){
    return `${randomNumber()}x${randomNumber()}`;
}

function randomNumber() {
    return Math.floor(Math.random()*20) + 300;
}
