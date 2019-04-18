

const userEnteredInput = () =>{
  let city = document.querySelector('input').value
  let url

  if(!isNaN(city)){
    url = `https://api.openweathermap.org/data/2.5/weather?zip=${city}&appid=717c7cedff97367485dce2336644d83f&units=imperial`
      console.log(url)

    checkZipWeather(url, city)
  }else{
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&id=524901&appid=717c7cedff97367485dce2336644d83f&units=imperial`
    checkCityWeather(url, city)
  }
}

const checkCityWeather = (url, city) => {
  fetch(url)
  .then(response => {
    if (response.status === 200){
      return response.json()
      
    }else{
      displayData(`Sorry, there are no results for '${city}', please try again.`)
    }
  })
  .then(weather => {
    console.log(weather)
    let weatherData = 
    `The City of ${weather.city.name}'s Weather for Today:`
    +  
    "\r\n"
    + 
     `Temperature: ${weather.list[0].main.temp}`
    + 
    "\r\n"
    +
    `Humidity: ${weather.list[0].main.humidity}`
    + 
    "\r\n"
    + 
     ` with...${weather.list[0].weather[0].description}`
    
    displayData(weatherData) 
    addWeatherToHTML(weather.city.name, zipweather.main.temp, zipweather.main.humidity, zipweather.weather[0].description)   
  })
}

const checkZipWeather = (url, zip) => {
fetch(url)
  .then(response => {
    if (response.status === 200){
      return response.json()
      
    }else{
      displayData(`Sorry, there are no results for '${zip}', please try again.`)
    }
  })
  .then(zipweather => {
    addWeatherToHTML(zipweather.name, zipweather.main.temp, zipweather.main.humidity, zipweather.weather[0].description)
  
  })
}


const displayData = (jsonResults) => {
  document.querySelector('#resultsText').textContent = jsonResults
}

const addWeatherToHTML = (city, temp, humidity, forecast) =>{
 let textContent = `The City of ${city}'s Weather for Today:`
    +  
    "\r\n"
    + 
     `Temperature: ${temp}`
    + 
    "\r\n"
    +
    `Humidity: ${humidity}`
    + 
    "\r\n"
    + 
     ` with...${forecast}`
    
    displayData(textContent)    
}

document.querySelector('button').addEventListener('click', userEnteredInput)


