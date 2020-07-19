function formatear (a) {
    return String(a).padStart(2, '0');
};

const today = new Date();
let day = formatear(today.getDate());
let month = formatear(today.getMonth()+1);
let hour = formatear(today.getHours());
let min = formatear(today.getMinutes());
const date = day + '-' + month + '-' + today.getFullYear();
const time = hour + ':' + min;

export const dateTime = () =>{
    timeDate.innerHTML = time + ' ' + date ;
}
