

fetch('data/business.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const business = jsonObject['business']
        for (let i = 0; i < business.length; i++) {
          
            let viewleft = document.createElement('div.viewleftlist');
            let image = document.createElement('img');
            image.setAttribute('src', business[i].logo);
            image.setAttribute('alt', business[i].name + ' logo.');
            viewleft.appendChild(image);
            document.querySelector('div.listitem').appendChild(viewleft);

            let viewright = document.createElement('div.viewrightlist')
            let h4 = document.createElement('h4');
            h4.textContent = business[i].name 
            viewright.appendChild(h4);
            
  
            let phone = document.createElement('p');
            phone.textContent =  business[i].phone;
            viewright.appendChild(phone);
            

            let address = document.createElement('p');
            address.textContent = business[i].address;
            viewright.appendChild(address);
  

            let website = document.createElement('p');
            website.textContent = business[i].website;
            viewright.appendChild(website);
            document.querySelector('div.listitem').appendChild(viewright); 
        }
    });

    fetch('data/business.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const business = jsonObject['business']
        for (let i = 0; i < business.length; i++) {
            let viewleft = document.createElement('div.viewleftgrid');
            let image = document.createElement('img');
            image.setAttribute('src', business[i].logo);
            image.setAttribute('alt', business[i].name + ' logo.');
            viewleft.appendChild(image);
            document.querySelector('div.griditem').appendChild(viewleft);

            let viewright = document.createElement('div.viewrightgrid')
            let h4 = document.createElement('h4');
            h4.textContent = business[i].name 
            viewright.appendChild(h4);
            
  
            let phone = document.createElement('p');
            phone.textContent =  business[i].phone;
            viewright.appendChild(phone);
            

            let address = document.createElement('p');
            address.textContent = business[i].address;
            viewright.appendChild(address);
  

            let website = document.createElement('p');
            website.textContent = business[i].website;
            viewright.appendChild(website);
            document.querySelector('div.griditem').appendChild(viewright); 
        }
    });

