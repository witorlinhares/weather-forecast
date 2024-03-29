

//key api
const key ="c0b197ed1de5f5db2a3c1241745a50b9"

//functions

function on_screen(data){ //data city
    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em <br>" + data.name
    document.querySelector(".temp-a").innerHTML = Math.floor (data.main.temp) + "°"
    document.querySelector(".temp-mi").innerHTML = "Min. °" +Math.floor (data.main.temp_min)
    document.querySelector(".temp-ma").innerHTML = "Máx. °" + Math.floor (data.main.temp_max) 
    document.querySelector(".forecast").innerHTML = data.weather[0].description
    document.querySelector(".moisture").innerHTML = "Umidade " + data.main.humidity + "%"
    document.querySelector(".icon") .src =  `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

}

async function search_city(city){ //info city
    
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`) .then( response => response.json()) //server
    on_screen(data)
}


function button(){ //hail city input
    
    const city = document.querySelector(".input-city") .value
    search_city(city) //hail function
}