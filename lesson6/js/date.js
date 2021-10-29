let d = new Date();
document.getElementById("copyrightYear").textContent = d.getFullYear();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}

document.getElementById("currentDate").textContent = d.toLocaleDateString('en-UK', options);

//banner
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

//datesbetween
const lastVisit = localStorage.getItem('lastVisit') || today; 
const displayDate = '';
const millisecondsToDays = 8640000;
if (lastVisit == today) {
    document.querySelector('#galleryVisits').textContent = `Last visit: Today is your first visit!`;
}
else {
    displayDate = (lastVisit - today / millisecondsToDays).toFixed(0);
    document.querySelector('#galleryVisits').textContent =  `Last visit: ${displayDate}`;
}
 localStorage.setItem('lastVisit', today); 
    



