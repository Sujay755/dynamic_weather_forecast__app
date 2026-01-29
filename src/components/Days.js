import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faDroplet, faSun, faWind, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

const Days = ({day}) => {
    const [open,setOpen] = useState(false);
    const celcius = useSelector((state)=>state.celcius.celcius)

  return (
        <div>
        <div className={'w-full lg:w-2/4 mx-auto flex-col bg-slate-100 rounded-md p-5'}>
            <div className='flex flex-row w-full justify-between text-xs sm:text-sm'>
                <div className='flex flex-row justify-between w-2/5'>
                    <h4 className='font-semibold text-smx sm:text-sm sm:px-2 my-auto'>{day.date}</h4>
                    <h4 className='font-semibold my-auto px-2 sm:px-0'>{celcius? parseInt(day.day.maxtemp_f) : parseInt(day.day.maxtemp_c)}<span>&#176;</span></h4>
                    <h4 className='sm:px-2 text-smx sm:text-sm my-auto'>{day.day.condition.text}</h4>
                </div>
                <div className='flex flex-row justify-between w-2/5'>
                <div className='flex flex-row sm:px-2'>
                    <FontAwesomeIcon className='my-auto mr-1 text-blue-600 ' icon={faDroplet}/>
                    <h5 className='my-auto font-semibold'>{day.day.daily_chance_of_rain}%</h5>
                </div>
                <div className='flex flex-row sm:px-2'>
                    <FontAwesomeIcon className='my-auto mr-1 text-blue-600' icon={faWind}/>
                    <h5 className='my-auto'><span className='font-semibold'>{day.day.maxwind_kph} </span>km/h</h5>
                </div>
                <div className='sm:px-2 my-auto'>
                    <button onClick={()=>setOpen(!open)}>{open? (<FontAwesomeIcon icon={faAngleDown}/>) : (<FontAwesomeIcon icon={faAngleUp}/>)}</button>
                </div>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-2/4 justify-center mx-auto">
            <div className={"w-full bg-slate-100 p-4 md:rounded-md md:p-7 md:pb-10 mx-auto mt-1 sm:mt-0 mb-1" + (open? " visible" : " hidden")}>
          <hr />
          <div className="flex flex-col md:flex-row justify-center md:justify-between">
            <div className="flex flex-col">
              <div className="flex flex-row justify-center">
                <img className="text-4xl md:text-5xl py-4" src={`https:${day.day.condition.icon}`} alt="nothing"/>
                <h1 className="text-4xl md:text-5xl px-2 py-5">
                  {celcius? parseInt(day.day.maxtemp_f) : parseInt(day.day.maxtemp_c)}<span>&#176;</span><span className="text-xl font-medium"> Hi </span>/ {celcius? parseInt(day.day.mintemp_f) : parseInt(day.day.mintemp_c)}<span>&#176;</span> <span className="text-xl font-medium">Low</span>
                </h1>
              </div>
              <div>
                <h1 className="text-xl md:text-left text-center pb-5">{day.day.condition.text}</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col justify-between md:w-2/5">
                <div className="flex flex-row justify-between">
                    <h5 className="text-lg">Max UV Index</h5>
                    <h5 className="text-xl">{day.day.uv} out of 10</h5>
                </div>
                <hr className="my-3"/>
                <div className="flex flex-row justify-between">
                    <h5 className="text-lg">Wind</h5>
                    <h5 className="text-xl">{day.day.maxwind_kph} km/h</h5>
                </div>
                <hr className="my-3"/>
                <div className="flex flex-row justify-between">
                    <h5 className="text-lg">Humidity</h5>
                    <h5 className="text-xl">{day.day.avghumidity}%</h5>
                </div>
                <hr className="flex md:hidden my-3"/>
            </div>
            <div className="flex flex-col justify-between md:w-2/5">
            <div className="flex flex-row justify-between">
                    <h5 className="text-lg">Precipitation</h5>
                    <h5 className="text-xl">{day.day.totalprecip_mm} mm</h5>
                </div>
                <hr className="my-3"/>
                <div className="flex flex-row justify-between">
                    <h5 className="text-lg">Probabilit of Precipitation</h5>
                    <h5 className="text-xl">{day.day.daily_chance_of_rain}%</h5>
                </div>
                <hr className="my-3"/>
                <div className="flex flex-row justify-between">
                    <h5 className="text-lg">Visibility</h5>
                    <h5 className="text-xl">{day.day.avgvis_km} km</h5>
                </div>
            </div>

          </div>

            </div>
            <div className={"w-full bg-slate-100 p-4 md:rounded-md md:p-7 md:pb-10 mx-auto mb-10" + (open? " flex" : " hidden")}>
          <div className="flex flex-col md:flex-row w-full justify-between">
            <div className="flex flex-col md:w-2/5">
                <h5 className="text-left text-xl py-5">Sunrise/Sunset</h5>
                <div className="text-left">
                  <FontAwesomeIcon className="text-4xl font-light text-orange-300 pb-5" icon={faSun}/>
                </div>
                <hr className="my-3"/>
                <div className="flex flex-row justify-between">
                  <h5 className="text-lg">Rise</h5>
                  <h5 className="text-xl">{day.astro.sunrise}</h5>
                </div>
                <hr className="my-3"/>
                <div className="flex flex-row justify-between">
                  <h5 className="text-lg">Set</h5>
                  <h5 className="text-xl">{day.astro.sunset}</h5>
                </div>
                <hr className="flex md:hidden my-3"/>
            </div>
            <div className="flex flex-col md:w-2/5">
                <h5 className="text-left text-xl py-5">Moonrise/Moonset</h5>
                <div className="text-left">
                  <FontAwesomeIcon className="text-4xl font-light text-blue-300 pb-5" icon={faMoon}/>
                </div>
                <hr className="my-3"/>
                <div className="flex flex-row justify-between">
                  <h5 className="text-lg">Rise</h5>
                  <h5 className="text-xl">{day.astro.moonrise}</h5>
                </div>
                <hr className="my-3"/>
                <div className="flex flex-row justify-between">
                  <h5 className="text-lg">Set</h5>
                  <h5 className="text-xl">{day.astro.moonset}</h5>
                </div>
            </div>
          </div>
            </div>
        </div>
        </div>
  )
}

export default Days;