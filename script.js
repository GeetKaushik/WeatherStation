function fetch_data() {
    var city_name = document.getElementById("city").value
    console.log(city_name)
    if (city_name === "") {
        document.getElementById('result').innerHTML = "Enter city name"
        document.getElementById('result').className = "h1 mt-4 alert alert-danger"
    }

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + String(city_name) + "&appid=7b2dba1ab684a2f434e1dc2adfb75594&units=metric"
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            // console.log(data)
            var resp_code = data['cod']
            if (resp_code === '404') {
                // alert("City not found") 
                document.getElementById('result').innerHTML = "City not found"
                document.getElementById('result').className = "h1 mt-4 alert alert-danger"
            } else {
                var city_temp = data['main']['temp']
                // console.log(city_temp)
                var city_weather = data['weather']['0']['icon']
                var weather_icon = "https://openweathermap.org/img/wn/" + city_weather + "@2x.png";
                // console.log(city_weather) 
                document.getElementById('result').innerHTML = "<img src=" + weather_icon + " alt = 'weathericon' >" + "<br>" + city_temp + " °C";
                document.getElementById('result').className = "h1 mt-4 alert alert-success"

            }
        }) 
} 