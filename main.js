const userInput = document.querySelector('.locationName');
const searchBtn = document.querySelector('.btn');
const image = document.querySelector('.image img');
const infoDiv = document.querySelector('.info');
const infoHeader = document.querySelector('.info-header');
const infoPara1 = document.querySelector('.para1');
const infoPara2 = document.querySelector('.para2');

async function checkWeather(){
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${userInput.value}`;
    const options = {
        mode: 'cors',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '308b26f693msh43034a1aa6f53b7p193b4ajsna2f51012c09a',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    try {

        const response = await fetch(url, options);
        const result = await response.json();
        image.src = `https:${result.current.condition.icon}`;
        infoHeader.textContent = `${result.location.name}/${result.location.region}/${result.location.country}, ${result.current.condition.text}`;
        infoPara1.textContent = `Feels like ${result.current.feelslike_c} degree celcius, humidity ${result.current.humidity}, cloud ${result.current.cloud}%, wind ${result.current.wind_mph} mph. `;
        infoPara2.textContent = `Geo Coords [${result.location.lat}, ${result.location.lon}]`
    
        console.log(result);
    } catch (error) {
        console.error(`${error}`);
    }
}

searchBtn.addEventListener('click', checkWeather)