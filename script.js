
let images = [
    "https://picsum.photos/500/300?1",
    "https://picsum.photos/500/300?2",
    "https://picsum.photos/500/300?3"
];

let index = 0;
let carouselImage = document.getElementById("carouselImage");

function nextImage() {
    index = (index + 1) % images.length;
    carouselImage.src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    carouselImage.src = images[index];
}


function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").innerText =
                data.setup + " — " + data.punchline;
        })
        .catch(error => {
            document.getElementById("joke").innerText =
                "Error fetching joke";
        });
}