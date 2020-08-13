function formatear(a) {
    return String(a).padStart(2, '0');
};

export let dateTime = () => {
    const today = new Date();
    let day = formatear(today.getDate());
    let month = formatear(today.getMonth() + 1);
    let hour = formatear(today.getHours());
    let min = formatear(today.getMinutes());
    let date = day + '-' + month + '-' + today.getFullYear();
    let time = hour + ':' + min;
    timeDate.innerHTML = time + ' ' + date;
}
