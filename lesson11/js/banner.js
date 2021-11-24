let today = new Date();
const friday = today.getDay();
function bannerCalculator() {
const pancake = document.querySelector(".pancakefriday");

if (friday == 5) {
    pancake.style.display = 'block';

}

else {
    pancake.style.display = 'none';
}
}
bannerCalculator();