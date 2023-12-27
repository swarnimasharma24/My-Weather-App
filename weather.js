const apiKey = "ffb0bc1249bdc42a6587e1fcb46ca032";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchbox = document.querySelector(".search input");
    const searchbtn = document.querySelector(".search button");
    const weathericon=document.querySelector(".weathericon");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        if(data.weather[0].main=="Clouds"){
            weathericon.src="clouds.png";
        }
        else if(data.weather[0].main=="Rain"){
            weathericon.src="rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weathericon.src="drizzle.png";
        }
        else if(data.weather[0].main=="Clear"){
            weathericon.src="clear.png";
        }
        else if(data.weather[0].main=="Mist"){
            weathericon.src="mist.png";
        }
         document.querySelector(".weather").style.display="block";
    }

    searchbtn.addEventListener("click", () => {
        checkWeather(searchbox.value);
        
    });

