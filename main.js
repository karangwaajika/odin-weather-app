const userInput = document.querySelector('.locationName');
const searchBtn = document.querySelector('.btn');
const image = document.querySelector('.image img');
const infoDiv = document.querySelector('.info');
const infoHeader = document.querySelector('.info-header');
const infoPara1 = document.querySelector('.para1');
const infoPara2 = document.querySelector('.para2');
const errorDiv = document.querySelector('.error');
const imageDiv = document.querySelector('.image');
const laoderDiv = document.querySelector('.loader-div');

async function checkWeather(){
    laoderDiv.style.display="block";
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
        errorDiv.style.display="none";
        infoDiv.style.display="block";
        imageDiv.style.display="block";
        laoderDiv.style.display="none";
    } catch (error) {
        infoDiv.style.display="none";
        imageDiv.style.display="none";
        errorDiv.style.display="block";
        errorDiv.textContent = `Location not Found or Check your Internet Connection [${error}]`;
        laoderDiv.style.display="none";
    }
}

searchBtn.addEventListener('click', checkWeather)