

fetch('data/business.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const business = jsonObject['business']
        for (let i = 0; i < business.length; i++) {
            let listbox = document.createElement('div');
            listbox.setAttribute('class', 'listbox');
            document.querySelector('div.listitem').appendChild(listbox);

            let viewleft = document.createElement('div');
            viewleft.setAttribute('class', 'viewleftlist');
            let image = document.createElement('img');
            image.setAttribute('src', business[i].logo);
            image.setAttribute('alt', business[i].name + ' logo.');
            listbox.appendChild(viewleft);
            viewleft.appendChild(image);
            

            let viewright = document.createElement('div')
            viewright.setAttribute('class', 'viewrightlist');
            let h4 = document.createElement('h4');
            h4.textContent = business[i].name 
            listbox.appendChild(viewright);
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
          
        }
    });

    fetch('data/business.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const business = jsonObject['business']
        for (let i = 0; i < business.length; i++) {
            let gridbox = document.createElement('div');
            gridbox.setAttribute('class', 'gridbox');
            document.querySelector('div.griditem').appendChild(gridbox);

            let viewleft = document.createElement('div');
            viewleft.setAttribute('class', 'viewleftgrid');
            let image = document.createElement('img');
            image.setAttribute('src', business[i].logo);
            image.setAttribute('alt', business[i].name + ' logo.');
            gridbox.appendChild(viewleft);
            viewleft.appendChild(image);

            let viewright = document.createElement('div')
            viewright.setAttribute('class', 'viewrightgrid');
            let h4 = document.createElement('h4');
            h4.textContent = business[i].name 
            gridbox.appendChild(viewright);
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
        }
    });

const liLinks = document.querySelectorAll('.links ul li');
const lists = document.querySelectorAll('.list');

liLinks.forEach(function(link){
  link.addEventListener('click', function(){
    liLinks.forEach(function(item){
      item.classList.remove('active');
    })
    link.classList.add('active');

    const liView = link.getAttribute('data-view');
    console.log(liView);

    lists.forEach(function(view){
      view.style.display = "none";
    })

    if(liView == 'listview'){
      document.querySelector('.' + liView).style.display = 'block';
    }
    else{
      document.querySelector('.' + liView).style.display = 'none';
    }
    if(liView == 'gridview'){
      document.querySelector('.' + liView).style.display = 'block';
    }
    else{
      document.querySelector('.' + liView).style.display = 'none';
    }
  })
})
