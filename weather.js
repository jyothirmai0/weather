// apikey and url link
//  let apiKey='c615730ac15be6f868393c50256a420c'
//  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

// accessing all the html elements
const locationVal=document.getElementById('loc')
const GetBtn=document.getElementById('btn')
const TempVal=document.getElementById('temp')
const DisVal=document.getElementById('weather-dis')
const PlaceVal=document.getElementById('loc-dis')


let apiKey='c615730ac15be6f868393c50256a420c'
GetBtn.onclick=function(){
    if(locationVal.value ===''){
    alert('plz enter the location')
}else{
    loc=locationVal.value
    URL=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid={apiKey}`
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{console.log(data)
    const{name}=data
    const{feels_like}=data.main
    const{description}=data.weather[0]
    TempVal.innerText=Math.round(feels_like-273)
    PlaceVal.innerText=name
    DisVal.innerText=description
})
.catch(()=>{
    alert('enter a valid location')
})

}
locationVal.value=''
}

 




























