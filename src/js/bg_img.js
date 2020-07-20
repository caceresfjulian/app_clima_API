let bgBody = document.getElementById('container').style;
let bgBody2 = document.getElementById('container2').style;

function nextImage() {
    bgBody2.backgroundImage = bgBody.backgroundImage;
    bgBody2.opacity = "1";
}


export const setBackgroundImage = (a) => {
    if (a < 300) {
        bgBody.backgroundImage = "url('https://images.pexels.com/photos/1118869/pexels-photo-1118869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
    } else if (a < 600) {
        bgBody.backgroundImage = "url('https://images.pexels.com/photos/110874/pexels-photo-110874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
    } else if (a < 700) {
        bgBody.backgroundImage = "url('https://images.pexels.com/photos/773953/pexels-photo-773953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
    } else if (a < 801) {
        bgBody.backgroundImage = "url('https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
    } else {
        bgBody.backgroundImage = "url('https://images.pexels.com/photos/414659/pexels-photo-414659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
    };
    bgBody2.opacity = "0";
    setTimeout(nextImage, 1000);
}