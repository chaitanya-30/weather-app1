var inputsearch=document.querySelector("#entercity");
var temperature=document.querySelector(".temperature p");
var locationele=document.querySelector(".location p");
var weatherdesc=document.querySelector(".weather-desc p");
 
var icon=document.getElementsByClassName("icon");

document.querySelector("#searchbtn").addEventListener("click",function(){
    console.log("clicked");
    if(inputsearch.value==""){
    alert("please enter some name");}
    else{
       
        let key="665503461215372d6c4231d675c7b2ce";
        var loc=inputsearch.value;
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}`
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data)
            const{name}=data
            const{feels_like}=data.main
            const{description}=data.weather[0]
            temperature.innerHTML=Math.floor(feels_like-273)+`<sup>o</sup>C`
            locationele.innerHTML=data.name
            weatherdesc.innerHTML=data.weather[0].description
            console.log(weatherdesc)
        })
        .catch(()=>{
            alert("enter valid location")
        });
        

    }

});
  
   
