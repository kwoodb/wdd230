let d = new Date();
const today = d.getDay();
function bannerCalculator() {
const pancake = document.querySelector(".pancakefriday");

if (today == 5) {
    pancake.style.display = 'block';

}

else {
    pancake.style.display = 'none';
}
}
bannerCalculator();