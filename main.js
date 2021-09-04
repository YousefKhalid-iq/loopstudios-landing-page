const toggleOn = document.querySelector(".toggle-on-cont");
const active = document.querySelector(".menu-container");

const toggleOff = document.querySelector(".toggle-off-cont");

const logo = document.querySelector(".logo-img");


toggleOn.addEventListener("click", function () {
	active.classList.toggle("press");
});

toggleOn.addEventListener("click", function () {
	toggleOff.classList.toggle("press2");
});

toggleOn.addEventListener("click", function() {
	toggleOn.classList.toggle("press3")
});

toggleOff.addEventListener("click", function() {
	active.classList.toggle("press")
});

toggleOff.addEventListener("click", function() {
	toggleOff.classList.toggle("press2")
});

toggleOff.addEventListener("click", function() {
	toggleOn.classList.toggle("press3")
});

toggleOn.addEventListener("click", function () {
	logo.classList.toggle("press4")
});

toggleOff.addEventListener("click", function () {
	logo.classList.toggle("press4")
});
	




