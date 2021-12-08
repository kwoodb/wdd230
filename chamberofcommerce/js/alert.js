const alertapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5815599&appid=730c7eedd7a467502500821344c0b4c2&units=imperial";
fetch(alertapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
       console.log(jsObject);
        if('alerts'.length > 0) {
            
        }

        else {
            
        }
    });