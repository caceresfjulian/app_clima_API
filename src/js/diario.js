const urlDaily = "https://api.openweathermap.org/data/2.5/onecall?lat=";

export const getDaily = async (jsonResponse, apikey) => {
    try {
        const response2 = await fetch( urlDaily + jsonResponse.coord.lat + "&lon=" + jsonResponse.coord.lon + apikey);
        if (response2.ok){
            const jsonResponse2 = await response2.json();
            console.log(jsonResponse2);
            return jsonResponse2;
        } throw new Error('Request failed')
    } catch (error){
        console.log(error);
    };
};