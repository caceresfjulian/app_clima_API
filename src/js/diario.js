const urlDaily = "https://api.openweathermap.org/data/2.5/onecall?lat=";

let forecast = []

export const getDaily = async (jsonResponse, apikey, lang, units) => {
    try {
        const response2 = await fetch(urlDaily + jsonResponse.coord.lat + "&lon=" + jsonResponse.coord.lon + apikey + lang + units);
        if (response2.ok) {
            const jsonResponse2 = await response2.json();
            console.log(jsonResponse2);
            forecast.push(jsonResponse2.daily);
            console.log(forecast[0][1].temp);
            return jsonResponse2;
        } throw new Error('Request failed')
    } catch (error) {
        console.log(error);
    };
};