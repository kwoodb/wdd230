let d = new Date();
document.getElementById("copyrightYear").textContent = d.getFullYear();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}

document.getElementById("currentDate").textContent = d.toLocaleDateString('en-UK', options);

function bannerCalculator() {
    
const d = new Date();
const today = d.getDay();
const pancake = document.querySelector(".pancakefriday");

if (today == 5) {
    pancake.style.display = 'block';

}

else {
    pancake.style.display = 'none';
}
}
bannerCalculator();