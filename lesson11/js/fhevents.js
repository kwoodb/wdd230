const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const currentTown = towns.filter((towns) => towns.name === 'Fish Haven');
        console.table(currentTown);
        currentTown.forEach(specificTown => {
            let fishHaven = document.createElement('div');
            fishHaven.className = 'eventcontainer';
            
            specificTown.events.forEach((event) => {
                let p = document.createElement('p');
                p.innerHTML = `${event}`;
                fishHaven.appendChild(p);
                
            });



            document.querySelector('div.localevents').appendChild(fishHaven);

        });
    });