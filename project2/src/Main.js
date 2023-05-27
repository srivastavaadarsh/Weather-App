import React, { useState, useEffect } from 'react'
import { WiDaySleetStorm } from "weather-icons-react";
import "./main.css";


const Myapp =() => {
    const [city, setCity] = useState('');
    const [cityname, setCityname] = useState('Lucknow');
    const[citydata, setCitydata] = useState(null);

    useEffect ( ()=>{

        const fetchApi = async () =>{
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=32e28d0aa85574a4980e124c8bbd2179`
        const response = await fetch(url);
        const res = await response.json();
        console.log(res);
        console.log(res.cod)

        if(res.cod=='404'){
            setCitydata(null);
        }
        else{
            setCitydata(res);
        }
    };

    fetchApi();
},[cityname])

function onSubmit(e) {
    
    e.preventDefault()

    localStorage.setItem('city', city);
    
}
function assign(e){
    setCity(e.target.value)

}

function onChangeCityname(e) {
    

    setCityname(city)
}


    return(

<>
<div>
<h1>
        Weather APP 
         </h1>
         
</div>

<div>
    
    <div className='formbg'>
    <form onSubmit={onSubmit}>
        <input
        type ="search"
        className='inputField'
        onChange={assign}
        placeholder="Enter city name"
        />

        <button className='btn' onClick={onChangeCityname}  >search</button>
    </form>
  
    </div>


{citydata == null ? (
    <h2> No data found!!</h2>
)   : (


<div>
    <div className='cardmain'>
        <h2>

        <i ></i> {citydata.name}
        </h2><h1>
                Temp : {citydata.main.temp} <sup>o</sup>C        </h1>
        <h3>
            Min: {citydata.main.temp_min}<br/>
            Max:  {citydata.main.temp_max}<br/>
            Wind: {citydata.wind.speed} km/h
        </h3>

        
    </div>
    
</div>


)
}



</div>  

</>

    )
}
export default Myapp;