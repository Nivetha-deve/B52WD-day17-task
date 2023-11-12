var result = fetch("https://restcountries.com/v3.1/all");
result.then((data)=>data.json()).then((data1)=>{
for(var i=0; i<data1.length; i++){
    console.log("name:",data1[i].name.common)
    var div =document.createElement("div");
    div.className = "col-xs-12 col-sm-6 col-md-3";
    div.innerHTML=`<div class ="card">
    <h5 class="card-title1">${data1[i].name.common}</h5>
   <img src="${data1[i].flags.png}"class="card-img-top">
   <div class="card-body">
    <h5 class="card-title">Region:${data1[i].region}</h5>
    <h5 class="card-title">Sub-Region:${data1[i].subregion}</h5>
    <h5 class="card-title">Country Code: ${data1[i].cca3}</h5>
    <button class="btn1" data-country="${data1[i].name.common}" onclick="getWeather(this)">Click for Weather</button>
    <div id="weatherInfo-${data1[i].name.common}"></div>                                   
    </div>
</div>`;
document.getElementById("cards").appendChild(div);
}
});
//const apiKey = '887b21e087c4760b958d7e4062132a77';

   function getWeather(button) {
    var countryName = button.getAttribute("data-country");
    var apiKey = "887b21e087c4760b958d7e4062132a77";
    var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`;
  
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((weatherData) => {
        var weatherInfo = document.getElementById(`weatherInfo-${countryName}`);
        weatherInfo.innerHTML = `<p>Temperature: ${weatherData.main.temp} &#8451;</p>
                                    <p>Weather: ${weatherData.weather[0].description}</p>
                                    <p>Pressure: ${weatherData.main.pressure}</P>
                                    <p>Humidity: ${weatherData.main.humidity}</p>`;    
      })     
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }
