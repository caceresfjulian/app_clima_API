import {getDaily} from './diario.js';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=';

const apikey = '&appid=8de836df4e3363996ed5231aa642ea98';

const units = '&units=metric';

const lang = '&lang=es'

export const getData = async () => {
    try {
      const response = await fetch(url + cityInput.value + units + apikey + lang);
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
        getDaily(jsonResponse, apikey, lang, units);
        return jsonResponse;
      } throw new Error('Request failed!')
    } catch (error) {
      console.log(error);
    };
  };

