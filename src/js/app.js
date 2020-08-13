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
import { getData } from './clima.js';
import {dateTime} from './time_date.js';

dateTime();
document.getElementById('buscarBtn').addEventListener('click', getData);

