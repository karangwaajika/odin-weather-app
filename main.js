async function checkWeather(location){
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`;
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
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

checkWeather("kigali")