const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a55aa2f557msh14f3e9023e57149p1d0faejsna3dec0044364',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    city_name.innerHTML=city 
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
    .then(response => response.json())
    .then((response) => {
        
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        
        console.log(response)
    }) 

    .catch(err => console.error(err));
}  


submit.addEventListener("click", (e)=>{
    event.preventDefault();
    getWeather(city.value) 
}) 
  getWeather("Seattle") 
/*try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad',options)
.then(response => response.json())
.then((response) => {
    
    hcloud_pct.innerHTML = response.cloud_pct
    htemp.innerHTML = response.temp
    hfeels_like.innerHTML = response.feels_like
    hhumidity.innerHTML = response.humidity
    hmin_temp.innerHTML = response.min_temp
    hmax_temp.innerHTML = response.max_temp
    hwind_speed.innerHTML = response.wind_speed
    hwind_degrees.innerHTML = response.wind_degrees
    hsunrise.innerHTML = response.sunrise
    hsunset.innerHTML = response.sunset
    console.log(response)
}) 

.catch(err => console.error(err));



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore',options)
.then(response => response.json())
.then((response) => {
    
    bcloud_pct.innerHTML = response.cloud_pct
    btemp.innerHTML = response.temp
    bfeels_like.innerHTML = response.feels_like
    bhumidity.innerHTML = response.humidity
    bmin_temp.innerHTML = response.min_temp
    bmax_temp.innerHTML = response.max_temp
    bwind_speed.innerHTML = response.wind_speed
    bwind_degrees.innerHTML = response.wind_degrees
    bsunrise.innerHTML = response.sunrise
    bsunset.innerHTML = response.sunset
    console.log(response)
}) 

.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai',options)
.then(response => response.json())
.then((response) => {
    
    ccloud_pct.innerHTML = response.cloud_pct
    ctemp.innerHTML = response.temp
    cfeels_like.innerHTML = response.feels_like
    chumidity.innerHTML = response.humidity
    cmin_temp.innerHTML = response.min_temp
    cmax_temp.innerHTML = response.max_temp
    cwind_speed.innerHTML = response.wind_speed
    cwind_degrees.innerHTML = response.wind_degrees
    csunrise.innerHTML = response.sunrise
    csunset.innerHTML = response.sunset
    console.log(response)
}) 
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi',options)
.then(response => response.json())
.then((response) => {
    
    dcloud_pct.innerHTML = response.cloud_pct
    dtemp.innerHTML = response.temp
    dfeels_like.innerHTML = response.feels_like
    dhumidity.innerHTML = response.humidity
    dmin_temp.innerHTML = response.min_temp
    dmax_temp.innerHTML = response.max_temp
    dwind_speed.innerHTML = response.wind_speed
    dwind_degrees.innerHTML = response.wind_degrees
    dsunrise.innerHTML = response.sunrise
    dsunset.innerHTML = response.sunset
    console.log(response)
}) 
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options)
.then(response => response.json())
.then((response) => {
    
    mcloud_pct.innerHTML = response.cloud_pct
    mtemp.innerHTML = response.temp
    mfeels_like.innerHTML = response.feels_like
    mhumidity.innerHTML = response.humidity
    mmin_temp.innerHTML = response.min_temp
    mmax_temp.innerHTML = response.max_temp
    mwind_speed.innerHTML = response.wind_speed
    mwind_degrees.innerHTML = response.wind_degrees
    msunrise.innerHTML = response.sunrise
    msunset.innerHTML = response.sunset
    console.log(response)
}) 
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata',options)
.then(response => response.json())
.then((response) => {
    
    kcloud_pct.innerHTML = response.cloud_pct
    ktemp.innerHTML = response.temp
    kfeels_like.innerHTML = response.feels_like
    khumidity.innerHTML = response.humidity
    kmin_temp.innerHTML = response.min_temp
    kmax_temp.innerHTML = response.max_temp
    kwind_speed.innerHTML = response.wind_speed
    kwind_degrees.innerHTML = response.wind_degrees
    ksunrise.innerHTML = response.sunrise
    ksunset.innerHTML = response.sunset
    console.log(response)
}) 
.catch(err => console.error(err));

