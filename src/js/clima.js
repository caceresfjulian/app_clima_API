import { getDaily } from './diario.js';
import { dateTime } from './time_date.js';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=';

const apikey = '&appid=8de836df4e3363996ed5231aa642ea98';

const units = '&units=metric';

const lang = '&lang=es';

const iconoSalida = document.getElementById('iconoSalida');

export const getData = async () => {
  dateTime();
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
      cityOutput.innerHTML = jsonResponse.name + ', ' + jsonResponse.sys.country;
      description.innerHTML = jsonResponse.weather[0].description;
      iconoSalida.src = 'http://openweathermap.org/img/wn/'+ jsonResponse.weather[0].icon + '@2x.png';
      getDaily(jsonResponse, apikey, lang, units);
      return jsonResponse;
    } throw new Error('Request failed!')
  } catch (error) {
    console.log(error);
  };
};

