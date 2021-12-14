const alertapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5815599&appid=730c7eedd7a467502500821344c0b4c2&units=imperial";
fetch(alertapiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        const walert = jsonObject['alerts'];
        const container = document.querySelector('div.weatheralert');
       if(walert === undefined || walert.length == 0) {
        container.style.display = 'none';          
        }

        else {
            container.style.display = 'none';
            container.style.display = 'block';
            document.getElementById('sender').textContent = jsonObject.alerts.sender_name;
            document.getElementById('weatherevent').textContent = jsonObject.alerts.event;
            document.getElementById('description').textContent = jsonObject.alerts.description;
            
       }
    });

