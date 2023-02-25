const likebutton = document.getElementById("likeButton");
const dislikebutton = document.getElementById("dislikeButton");
const likedCount = document.querySelector("p#liked span");
const dislikedCount = document.querySelector("p#disliked span");
const resetbutton = document.getElementById("resetButton");

fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const buttonsDiv = document.querySelector("h1").nextSibling;
        const img = document.createElement("img");
        img.id = "dog";
        img.src = data.message;
        img.alt = "Cute doggo";
        document.querySelector('body').insertBefore(img, buttonsDiv);
    });

if (localStorage.getItem("liked") === null) {
    localStorage.setItem("liked", 0);
}
if (localStorage.getItem("disliked") === null) {
    localStorage.setItem("disliked", 0);
}

likedCount.innerHTML = localStorage.getItem("liked");
dislikedCount.innerHTML = localStorage.getItem("disliked");

likebutton.addEventListener("click", function () {
    localStorage.setItem("liked", parseInt(localStorage.getItem("liked")) + 1);
});
dislikebutton.addEventListener("click", function () {
    localStorage.setItem("disliked", parseInt(localStorage.getItem("disliked")) + 1);
});
resetbutton.addEventListener("click", function () {
    localStorage.clear();
});
