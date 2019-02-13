
const displayData = (jsonResults) => {
  document.querySelector('#resultsText').textContent = jsonResults
}

const userEnteredInput = () =>{
let city = document.querySelector('input').value

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&id=524901&appid=717c7cedff97367485dce2336644d83f&units=imperial`
  console.log(url)
  checkWeather(url, city)
}

const checkWeather = (url, city) => {
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
     ` with... ${weather.list[0].weather[0].description}`
    
    displayData(weatherData)    
  })
}

document.querySelector('button').addEventListener('click', userEnteredInput)


