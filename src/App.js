import React, {useState} from 'react'
import axios from 'axios'
import './index.css'






function App() {

const [ data, setData] = useState({});
const [location, setLocation] = useState('');

const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=be01ce03c5e8bf379b35505cf6f0d036`;


const searchLocation = (event) => {
    if(event.key ==='Enter') {
      axios.get(api).then((response) =>{
        setData(response.data)
        console.log(response.data)
      },)
    }
  }


    return ( 

      <div className="app">

        <div className="search">
          <input 
          value={location}
          onChange = {event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"  />
          <p>Check the Current Weather in your Area</p>
        </div>

      <div className="container">

        <div className="top">
            <div className="location">
               <h1>{data.name}</h1>
              { data.sys ? <p className='country'>{data.sys.country}</p> : null}
            </div>
            <div className="temp">
               {data.main ? <p>{data.main.temp.toFixed()} °C</p>: null}
            </div>
            <div className="description">
               {data.weather ?<p> { data.weather[0].main}</p> : null}
            </div>
        </div>


{data.name !== undefined && 

        <div className="bottom">
           <div className="feel">
              {data.main ? <p>{data.main.feels_like.toFixed()} °C</p> : null}
            <p>Feels Like</p>
           </div>
           <div className="humidity">
           {data.main ? <p>{data.main.humidity} % </p> : null}
             <p>Humidity</p>
           </div>
           <div className="wind">
                {data.wind ? <p>{data.wind.speed} Kmh</p> : null}
                  <p>Wind Speed</p>
           </div>       
        </div>
}

        
    </div> {/** Container*/}
  </div>   /**end App  */
    )
}

export default App;