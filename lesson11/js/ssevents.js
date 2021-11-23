const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const currentTown = towns.filter((towns) => towns.name === 'Soda Springs');
        console.table(currentTown);
        currentTown.forEach(currentTown => {
            let sodaSprings = document.createElement('div');
            let eventOne = document.createElement('p');
            let eventTwo = document.createElement('p');
            let eventThree = document.createElement('p');

            sodaSprings.className = 'eventcontainer';
            eventOne.innerHTML = `${currentTown.events[0]}`;
            eventTwo.innerHTML = `${currentTown.events[1]}`;
            eventThree.innerHTML = `${currentTown.events[2]}`;

            sodaSprings.appendChild(eventOne);
            sodaSprings.appendChild(eventTwo);
            sodaSprings.appendChild(eventThree);

            document.querySelector('div.localevents').appendChild(sodaSprings);

        });
    });