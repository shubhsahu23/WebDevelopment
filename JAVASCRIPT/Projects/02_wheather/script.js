document.addEventListener('DOMContentLoaded',()=>{
  const cityinput=document.getElementById('city-input');
  const getwheatherbutton=document.getElementById('get-weather-btn');
  const wheatherinfo=document.getElementById('weather-info');
  const citynamedisplay=document.getElementById('city-name');
  const temperaturedisplay=document.getElementById('temperature');
  const descriptiondisplay=document.getElementById('description');
  const errormsg=document.getElementById('error-message');
  const API_KEY="YOUR_OPENWEATHER_API_KEY";
  getwheatherbutton.addEventListener('click',async()=>{
    const city=cityinput.value.trim();
    if(!city) return;
    try{
      const weatherdata=await fetchWeatherData(city);
      displayWeatherData(weatherdata);
      

    }catch(error){
      showError();
    }

  })

  async function  fetchWeatherData(city){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response= await fetch(url);
    console.log(typeof(response));
    console.log((response));

    if(!response.ok){
      throw new Error("city not found");
    }
    const data=await response.json();
    return data;
  }

 function displayWeatherData(weatherData) {
    console.log(weatherData);

    const { name, main, weather } = weatherData;

    citynamedisplay.textContent = name;
    temperaturedisplay.textContent = `${main.temp} °C`;
    descriptiondisplay.textContent = weather[0].description;

    wheatherinfo.classList.remove('hidden');
    errormsg.classList.add('hidden');
}

  function showError(){
    wheatherinfo.classList.add('hidden');
    errormsg.classList.remove('hidden');
  }

})