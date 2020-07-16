/*
PLAN PARA ESTE PROYECTO: 

1. Añadir una solicitud sobre información histórica del clima basada en la respuesta de la solicitud actual
(las búsquedas históricas se realizan por lat y long, datos que son provistos por el resultado de la solicitud
  actual)
  1.0 Revisar documentación https://openweathermap.org/api/one-call-api
  1.1 Descomponer el script en módulos. 
2. Mostrarlo en pantalla con un histograma. 
3. Mejorar el diseño de los elementos (CSS - Bootstrap).
4. Añadir un elemento clicqueable para desplegar otro diseño con información más detallada sobre
la búsqueda realizada. 
5. Agregar algún script que, utilizando el scroll, lleve a otros proyectos de mi portafolio.

*Nota: Utilizar sólo JavaScript sin librerías para este proyecto. 

*/

const cityInput = document.getElementById('cityInput');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=';

const apikey = '&appid=8de836df4e3363996ed5231aa642ea98';

const units = '&units=metric';

const climaOutput = document.getElementById('climaOutput');

const cityOutput = document.getElementById('cityOutput');

function buscarClima() {
  console.log(cityInput.value);
};

const getData = async () => {
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

document.getElementById('buscarBtn').addEventListener('click', getData);

