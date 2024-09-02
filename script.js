const button = document.getElementById('search-button');
const input = document.getElementById('city-input');


const cityname = document.getElementById('city-name');
const citTime = document.getElementById('city-time');
const citytemp = document.getElementById('city-temp');

async function getData(cityname){
   const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=1ca7b7c059f24917952174205240109&q=${cityname}&aqi=yes`);
   return await promise.json()
}

button.addEventListener('click',async ()=>{
    const value = input.value;
    const result = await getData(value);
    cityname.innerText = `${result.location.name},${result.location.region},${result.location.country}`
    citTime.innerText =  result.location.localtime;
   // console.log(result);
});

//http://api.weatherapi.com/v1/current.json?key=1ca7b7c059f24917952174205240109&q=London&aqi=yes