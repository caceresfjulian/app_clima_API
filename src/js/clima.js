const url = 'https://api.openweathermap.org/data/2.5/weather?q=';

const apikey = '&appid=8de836df4e3363996ed5231aa642ea98';

const units = '&units=metric';

export const getData = async () => {
    try {
      const response = await fetch(url + cityInput.value + units + apikey);
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        climaOutput.innerHTML = jsonResponse.main.temp + '°C';
     /*   if (jsonResponse.main.temp <= 20) {
          document.getElementById('imgOutput').src = "";
        } else {
          document.getElementById('imgOutput').src = "";
        }*/
        cityOutput.innerHTML = jsonResponse.name;
        return jsonResponse;
      } throw new Error('Request failed!')
    } catch (error) {
      console.log(error);
    };
  };

