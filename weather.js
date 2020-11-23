var cl = $('div.current-location')
var apikey = '213e34b5b99cbb7997d67789450f4dfbf40cd2551b11b37918d8469d'
var apikey2 = '8891bb28669c20eba28fe48ae7363c8d'
var lat;
var lon;
var temperature1 = 'unknown';
var data;
var hello;
var location;
var useIP = 0;
$('#button0').show()
$('input#customloc').val('');
$('#button1').hide()
$('#units').hide()
$('#how').show()
$('#dropdown1').show();
$('.table1').hide()

if (document.getElementById('how').value == "Custom Location") {
    $('input#customloc').show()
} else {
    $('input#customloc').hide()
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
    } else {
        cl.append("Geolocation is not supported by this browser.");
    }
}

function changehow() {
    if (document.getElementById('how').value == "Custom Location") {
        $('input#customloc').show()
    } else {
        $('input#customloc').hide()
    }
}

function getLocationFromIP() {
    $.get(`https://api.ipdata.co?api-key=${apikey}`, function(response) {
        lat = response.latitude
        lon = response.longitude
        var coords = lat + "," + lon
        console.log(coords)
        console.log('Location Received')
        $('#button0').hide()
        $('#button1').show()
    }, "json");
}

function locationSuccess(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    var coords = lat + "," + lon
    console.log(coords)
    $('#button0').hide();
    $('#button1').show();
}

function locationError(position) {
    alert("Could not determine your location. \n Trying using IP...");
    getLocationFromIP();
}

function getWeather(lat, lon, units) {
    let degrees = (units == 'imperial') ? "F" : "C";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apikey2}`;
    fetch(url)
        .then(res => res.json())
        .then((out) => {
            temperature1 = out.main.temp
            data = `<img src='https://static.thenounproject.com/png/1605384-200.png' height='20px' width=auto> ${out.name}, ${out.sys.country}<br><br><span id='degrees'>${temperature1} º${degrees}</span><br> <img src='http://openweathermap.org/img/wn/${out.weather[0].icon}@2x.png'><br> <span id='conditions'>${out.weather[0].description}</span>`;
            $('div.current-location').append(data);
            $('div.map1').append(`<br><br><iframe id="googlemap" src="https://maps.google.com/maps?q=${lat.toFixed(2)}, ${lon.toFixed(2)}&z=15&output=embed" width="80%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe><br><br><input type="submit" style="background-color:orange; font-size=13px" value="Find locations with similar weather" id='button2' class="button0" onclick="onButtonClick2()">`);
        })
        .catch(err => {
            $('div.current-location').append('<h5 style="color: red">error</h5>')
            throw err
        });
    return data
}

function onButtonClick() {
    var how = $('#how').find(":selected").attr('id')
    if (how == 'ip') {
        $('div.current-location').empty();
        getLocationFromIP();
        $('input#customloc').hide()
        $('.hideafter').hide();
        $('#dropdown1').hide();
        $('#dropdown2')
            .show()
            .children().show();
    } else if (how == 'ls') {
        $('div.current-location').empty();
        getLocation();
        $('input#customloc').hide()
        $('.hideafter').hide();
        $('#dropdown1').hide();
        $('#dropdown2')
            .show()
            .children().show();
    } else if (how == 'custom') {
        city = $('input#customloc').val()
        if (!city || city == '') {
            $('div.current-location').append('Please input a city or choose a different option');
            window.location.reload();
        }
        $.get(`http://api.opencagedata.com/geocode/v1/json?q=${city}&key=be12e76f6e0247d682e4d8ac8fe421da`, function(response) {
            lat = response.results[0].geometry.lat;
            lon = response.results[0].geometry.lng;
        }, "json");
        var coords = lat + "," + lon
        console.log(coords)
        console.log('Location Received')
        $('input#customloc').hide()
        $('.hideafter').hide();
        $('#dropdown1').hide();
        $('#button0').hide();
        $('#button1').show();
        $('#dropdown2')
            .show()
            .children().show();
    }
}

function onButtonClick1() {
    let units = $('#units').find(":selected").attr('id')
    getWeather(lat, lon, units)
    $('#dropdown2').hide();
    $('.hideafter').hide();
}
var temparray = [];
var cityarray = [];

function onButtonClick2() {
    $('#button2').hide();
    setTimeout(function() {
        let apikey0 = 'RNzfTGv0z8PSws5PWh6ekO85O76d1SZz'
        let url0 = 'http://dataservice.accuweather.com/currentconditions/v1/topcities/150?apikey=' + apikey0;
        let temp = $('#degrees').html()
        let temp2 = temp.split('º');
        let tempc;
        if (temp2[1].toLowerCase().includes("f")) {
            tempc = (temp2[0] - 32) * (5 / 9);
        } else {
            tempc = temp2[0];
        }
        console.log(tempc)
        $.get(url0, function(response) {
            for (let i = 0; i < 150; i++) {
                console.log(response[i].Temperature.Metric.Value + ' ... ' + Math.abs(response[i].Temperature.Metric.Value - tempc))
                if (Math.abs(response[i].Temperature.Metric.Value - tempc) <= 1.1) {
                    temparray.push(response[i].Temperature.Metric.Value);
                    cityarray.push(response[i].LocalizedName + ',' + response[i].Country.LocalizedName);
                    $('tbody.other-locations').append(`<tr><td>${response[i].LocalizedName} <br> <small>${response[i].Country.LocalizedName}</small></td>
                        <td> ${response[i].Temperature.Metric.Value}ºC</td></tr>`)
                }
            }
        }, "json");
        $('.table1')
            .show()
            .children().show();
    }, 2000);


}