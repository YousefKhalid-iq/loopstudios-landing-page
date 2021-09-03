const share = document.querySelector(".share-img-bg");
const active = document.querySelector(".share-change");

share.addEventListener("click", function () {
	active.classList.toggle("press");
});