const api = {
    key: '8891bb28669c20eba28fe48ae7363c8d',
    baseurl: 'http://api.openweathermap.org/data/2.5/'
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(e) {
    if (e.keyCode == 13) { // The return key on the keyboard is 13
        getResults(searchbox.value);
    }
    if (e.keyCode == 13) {
        getResults(searchbox.value);
    }

}

$('.enter').click(function() {
    getResults(searchbox.value);
});

$('.button').hide();

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}
var mapURL;

function displayResults(weather) {
    $('.button').show();
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.querySelector('.current .temp');
    temperature.innerHTML = `${Math.round(weather.main.temp).toFixed(0)}<span>ºC</span>`;

    let weather_conditions = document.querySelector('.current .weather');
    weather_conditions.innerText = weather.weather[0].main;

    let highLow = document.querySelector('.high-low');
    highLow.innerText = `${Math.round(weather.main.temp_min)}\xB0C / ${Math.round(weather.main.temp_max)}\xB0C`

    let feelsLike = document.querySelector('.feels-like');
    feelsLike.innerText = `Feels like: ${Math.round(weather.main.feels_like)}\xB0C`

    let windSpeed = document.querySelector('.wind-speed');
    let speed_in_mps = weather.wind.speed;
    windSpeed.innerText = `Wind: ${Math.round(weather.wind.deg)}\xB0  ${Math.round(speed_in_mps * 2.237)} mph`

    if (weather.weather[0].main == "Clear") {
        $('body').css('background-image', 'url("https://torange.biz/photofxnew/1/HD/mirror-macro-blurring-top-bottom-sky-clear-1049.jpg")');
    } else if (weather.weather[0].main == "Clouds") {
        $('body').css('background-image', 'url("https://thewallpaper.co//wp-content/uploads/2016/10/free-weather-background-hd-wallpapers-windows-apple-amazing-4k-samsung-wallpapers-free-download-1920x1080.jpg")');
    } else if (weather.weather[0].main == "Rain") {
        $('body').css('background-image', 'url("https://i.pinimg.com/originals/ad/99/0c/ad990c716c1487af6e7d6f95cc38d937.jpg")');
    }
    mapURL = `https://www.google.co.uk/maps/@${weather.coord.lat},${weather.coord.lon},14z`;
    console.log($('.city')[0].innerHTML);
}

$('.button').click(function() {
    window.open(mapURL);

    // window.open(`https://www.google.co.uk/maps/place/${$('.city')[0].innerHTML}`, `${$('.city')[0].innerHTML}`)
    // window.location.replace(`https://www.google.co.uk/maps/place/${$('.city')[0].innerHTML}`);
});

$('.fahrenheitswitch').click(function() {
    // degF = degC.value;
    // tempF.innerHTML = 'Hello';
    degC = $('.current .temp').html().replace('<span>ºC</span>', '');
    if (degC == '?') {
        $('.current .temp').html('? ºF');
    } else {
        degF = (degC * (9 / 5)) + 32;
        degF = Math.round(degF).toFixed(0);
        $('.current .temp').html(degF + ' <span>ºF</span>');
    }
});