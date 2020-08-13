import { getDaily } from './diario.js';
import { dateTime } from './time_date.js';
import { setBackgroundImage } from './bg_img.js';
import { setBackup } from './bg_img.js';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=';

const apikey = '&appid=8de836df4e3363996ed5231aa642ea98';

const units = '&units=metric';

const lang = '&lang=es';

const iconoSalida = document.getElementById('iconoSalida');

export const getData = async () => {
  try {
    const response = await fetch(url + cityInput.value + units + apikey + lang);
    if (response.ok) {
      dateTime();
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      climaOutput.innerHTML = jsonResponse.main.temp + '°C';
      cityOutput.innerHTML = jsonResponse.name + ', ' + jsonResponse.sys.country;
      description.innerHTML = jsonResponse.weather[0].description;
      iconoSalida.src = 'http://openweathermap.org/img/wn/' + jsonResponse.weather[0].icon + '@2x.png';
      setBackgroundImage(jsonResponse.weather[0].id).then(setBackup());
      getDaily(jsonResponse, apikey, lang, units);
      return jsonResponse;
    } throw new Error('Request failed!')
  } catch (error) {
    console.log(error);
  };
};

