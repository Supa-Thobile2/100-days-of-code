// Api credentials
const apiKey = "7981e06bae5919f02702f9a3160c71eb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid{981e06bae5919f02702f9a3160c71eb}";

// Elements to be manipulated
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

// Checking weather function


        async function checkWeather(city){

            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                
            document.querySelector('.weather').style.display = "block";
            }else{
                    if(data.weather[0].main == "Clouds"){
                    weatherIcon.src = "images/clouds.png"

                } else if(data.weather[0].main == "Clear"){
                    weatherIcon.src = "images/clear.png"

                }else if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "images/rain.png"
                    
                }else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "images/drizzle.png"
                    
                }else if(data.weather[0].main == "Mist"){
                    weatherIcon.src = "images/mist.png"
                    
                }

                
            document.querySelector('.weather').style.display = "block";
            }

            let data = await response.json()

            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "c";
            document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
            document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
            
           


        }

// Event handling
        searchButton.addEventListener("click", ()=>{
            checkWeather(searchBox.value)
        })