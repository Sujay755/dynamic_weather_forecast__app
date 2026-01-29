import React,{useState} from "react";
import { faAngleDown, faAngleUp, faCloud, faDroplet, faEye, faSun, faTemperatureHigh, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from "react-redux";

const Hours = ({hour}) => {
    const current = useSelector((state)=>state.current)
    const celcius = useSelector((state)=>state.celcius.celcius)

    const [open,setOpen]= useState(false)
    const time = hour? hour.time.substring(11,16) : ''

    const currentTime = current.location.localtime? current.location.localtime.substring(11,13) : ''

    
  return (

        <div className={'w-full lg:w-2/4 mx-auto flex-col bg-slate-100 rounded-md p-5' + (parseInt(time) <= parseInt(currentTime) ? ' hidden' : ' flex' )}>
            <div className='flex flex-row w-full justify-between text-xs sm:text-sm'>
                <div className='flex flex-row justify-between w-2/5'>
                    <h4 className='font-semibold sm:px-2 my-auto'>{time}</h4>
                    <h4 className='font-semibold my-auto px-2 sm:px-0'>{celcius? parseInt(hour.temp_f) : parseInt(hour.temp_c)}<span>&#176;</span></h4>
                    <h4 className='sm:px-2 my-auto'>{hour.condition.text}</h4>
                </div>
                <div className='flex flex-row justify-between w-2/5'>
                <div className='flex flex-row sm:px-2'>
                    <FontAwesomeIcon className='my-auto mr-1 text-blue-600 ' icon={faDroplet}/>
                    <h5 className='my-auto font-semibold'>{hour.chance_of_rain}%</h5>
                </div>
                <div className='flex flex-row sm:px-2'>
                    <FontAwesomeIcon className='my-auto mr-1 text-blue-600' icon={faWind}/>
                    <h5 className='my-auto'><span className="hidden sm:visible">{hour.wind_dir}</span> <span className='font-semibold'>{hour.wind_kph} </span>km/h</h5>
                </div>
                <div className='sm:px-2 my-auto'>
                    <button onClick={()=>setOpen(!open)}>{open? (<FontAwesomeIcon icon={faAngleDown}/>) : (<FontAwesomeIcon icon={faAngleUp}/>)}</button>
                </div>
                </div>
            </div>
            <hr className={"mt-2" + (open? ' hidden' : ' flex')}/>
            <div className={'hidden flex-col w-full text-lg' + (open? ' sm:flex' : ' sm:hidden')}>
                <hr className='my-5'/>
                <div className='flex flex-row w-full justify-between'>
                    <div className='flex flex-col'>
                         <div className='flex flex-row'>
                            <FontAwesomeIcon className='my-auto mr-1 text-blue-600' icon={faTemperatureHigh}/>
                            <h4 className='text-xl'>Feels Like</h4>    
                        </div>
                        <h4 className='font-bold text-base'>{celcius? parseInt(hour.feelslike_f) : parseInt(hour.feelslike_c)}<span>&#176;</span></h4>
                    </div>
                    <div className='flex flex-col'>
                         <div className='flex flex-row'>
                            <FontAwesomeIcon className='my-auto mr-1 text-blue-600' icon={faWind}/>
                            <h4 className='text-xl'>Wind</h4>    
                        </div>
                        <h4 className='text-base'>{hour.wind_dir} <span className='font-bold'>{hour.wind_kph} </span>km/h</h4>
                    </div>
                    <div className='flex flex-col'>
                         <div className='flex flex-row'>
                            <FontAwesomeIcon className='my-auto mr-1 text-blue-600' icon={faDroplet}/>
                            <h4 className='text-xl'>Humidity</h4>    
                        </div>
                        <h4 className='font-bold text-base'>{hour.humidity} %</h4>
                    </div>
                </div>
                <hr className='my-5'/>
                <div className='flex flex-row w-full justify-between'>
                    <div className='flex flex-col'>
                         <div className='flex flex-row'>
                            <FontAwesomeIcon className='my-auto mr-1 text-blue-600' icon={faSun}/>
                            <h4 className='text-xl'>UV Index</h4>    
                        </div>
                        <h4 className='text-base'><span className='font-bold'>{hour.uv} </span>of <span className='font-bold'>10</span></h4>
                    </div>
                    <div className='flex flex-col'>
                         <div className='flex flex-row'>
                            <FontAwesomeIcon className='my-auto mr-1 text-blue-600' icon={faCloud}/>
                            <h4 className='text-xl'>Cloud Cover</h4>    
                        </div>
                        <h4 className='font-bold text-base'>{hour.cloud} %</h4>
                    </div>
                    <div className='flex flex-col'>
                         <div className='flex flex-row'>
                            <FontAwesomeIcon className='my-auto mr-1 text-blue-600' icon={faEye}/>
                            <h4 className='text-xl'>Visibility</h4>    
                        </div>
                        <h4><span className='font-bold text-base'>{hour.vis_km} </span>km</h4>
                    </div>

                </div>
                <hr className='mt-5 mb-2'/>
            </div>
            <div className={'sm:hidden flex-col w-full text-sm pt-4 px-5' + (open? ' flex' : ' hidden')}>
                <div className='flex flex-row w-full justify-between'>
                    <div className='flex flex-col'>
                         <div className='flex flex-row'>
                            <FontAwesomeIcon className='my-auto mr-1 text-blue-600' icon={faTemperatureHigh}/>
                            <h4 className='text-sm'>Feels Like</h4>    
                        </div>
                        <h4 className='font-bold text-xs text-center'>{celcius? parseInt(hour.feelslike_f) : parseInt(hour.feelslike_c)}<span>&#176;</span></h4>
                    </div>
                    <div className='flex flex-col'>
                         <div className='flex flex-row'>
                            <FontAwesomeIcon className='my-auto mr-1 text-blue-600' icon={faWind}/>
                            <h4 className='text-sm'>Wind</h4>    
                        </div>
                        <h4 className='text-xs text-center'>{hour.wind_dir} <span className='font-bold'>{hour.wind_kph} </span>km/h</h4>
                    </div>
                </div>
                <hr className='my-3'/>
                <div className='flex flex-row w-full justify-between'>
                    <div className='flex flex-col'>
                         <div className='flex flex-row'>
                            <FontAwesomeIcon className='my-auto mr-1 text-blue-600' icon={faDroplet}/>
                            <h4 className='text-sm'>Humidity</h4>    
                        </div>
                        <h4 className='font-bold text-xs text-center'>{hour.humidity} %</h4>
                    </div>
                    <div className='flex flex-col'>
                         <div className='flex flex-row'>
                            <FontAwesomeIcon className='my-auto mr-1 text-blue-600' icon={faSun}/>
                            <h4 className='text-sm'>UV Index</h4>    
                        </div>
                        <h4 className='text-xs text-center'><span className='font-bold'>{hour.uv} </span>of <span className='font-bold'>10</span></h4>
                    </div>
                </div>
                <hr className='my-3'/>
                <div className='flex flex-row w-full justify-between'>
                    <div className='flex flex-col'>
                         <div className='flex flex-row'>
                            <FontAwesomeIcon className='my-auto mr-1 text-blue-600' icon={faCloud}/>
                            <h4 className='text-sm'>Cloud Cover</h4>    
                        </div>
                        <h4 className='font-bold text-xs text-center'>{hour.cloud} %</h4>
                    </div>
                    <div className='flex flex-col'>
                         <div className='flex flex-row'>
                            <FontAwesomeIcon className='my-auto mr-1 text-blue-600' icon={faEye}/>
                            <h4 className='text-sm'>Visibility</h4>    
                        </div>
                        <h4><span className='font-bold text-xs text-center'>{hour.vis_km} </span>km</h4>
                    </div>
                </div>
                <hr className='my-3'/>
            </div>
        </div>
  )
}

export default Hours;