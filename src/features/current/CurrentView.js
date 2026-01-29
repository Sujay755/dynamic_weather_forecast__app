import React from "react";
import Base from "../../components/Base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun,faMoon } from "@fortawesome/free-regular-svg-icons";
import {  useSelector } from "react-redux";

const CurrentView = () => {
  
const current = useSelector((state)=>state.current)
const day = useSelector((state)=>state.day)
const celcius = useSelector((state)=>state.celcius.celcius)

const time = current.location?.localtime ? current.location.localtime.substring(11,16) : ''

// Helper function to safely get temperature
const getTemperature = () => {
  if (!current.current || (!current.current.temp_c && !current.current.temp_f)) {
    return null;
  }
  return celcius ? parseInt(current.current.temp_f) : parseInt(current.current.temp_c);
}

const getFeelsLike = () => {
  if (!current.current || (!current.current.feelslike_c && !current.current.feelslike_f)) {
    return null;
  }
  return celcius ? parseInt(current.current.feelslike_f) : parseInt(current.current.feelslike_c);
}

const hasData = current.current && Object.keys(current.current).length > 0;


  return (
    <Base>
      <div className="w-full lg:w-2/4 justify-center mx-auto">
      <div className={"w-full lg:w-2/4 justify-center mx-auto my-3" + (current.loading ? ' visible' : ' hidden')}>
        <h1 className="font-bold text-lg">Loading...</h1>
      </div>
      <div className={"w-full lg:w-2/4 justify-center mx-auto my-3" + (current.error ? ' visible' : ' hidden')}>
        <h1 className="font-bold text-lg">{current.error}</h1>
      </div>
        {hasData && (
        <div className="w-full bg-slate-100 p-4 md:rounded-md md:p-7 md:pb-10 mx-auto my-10 mb-7">
          <div className="flex flex-row font-semibold w-full justify-between p-3">
            <h5 className="text-base">Current Weather</h5>
            <h5 className="text-base">{current.location?.name || ''}</h5>
            <h5 className="text-base">{time}</h5>
          </div>
          <hr />
          <div className="flex flex-col md:flex-row justify-center md:justify-between">
            <div className="flex flex-col">
              <div className="flex flex-row justify-center">
                {current.condition?.icon && (
                  <img className="text-4xl md:text-5xl" src={`https:${current.condition.icon}`} alt=""/>
                )}
                {getTemperature() !== null && (
                  <h1 className="text-4xl md:text-5xl px-2 py-5">
                    {getTemperature()}<span>&#176;</span>
                  </h1>
                )}
              </div>
              <div>
                <h1 className="text-xl md:text-left text-center pb-5">{current.condition?.text || ''}</h1>
              </div>
            </div>
            {getFeelsLike() !== null && (
              <div className="hidden md:flex">
                <h1 className="text-xl py-5">RealFeel {getFeelsLike()}<span>&#176;</span></h1>
              </div>
            )}
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col justify-between md:w-2/5">
                {getFeelsLike() !== null && (
                  <>
                    <div className="flex flex-row md:hidden justify-between">
                        <h5 className="text-lg">RealFeel</h5>
                        <h5 className="text-xl">{getFeelsLike()}<span>&#176;</span></h5>
                    </div>
                    <hr className="flex md:hidden my-3"/>
                  </>
                )}
                {current.current.uv !== undefined && (
                  <>
                    <div className="flex flex-row justify-between">
                        <h5 className="text-lg">Max UV Index</h5>
                        <h5 className="text-xl">{current.current.uv} out of 10</h5>
                    </div>
                    <hr className="my-3"/>
                  </>
                )}
                {current.current.wind_dir && current.current.wind_kph !== undefined && (
                  <>
                    <div className="flex flex-row justify-between">
                        <h5 className="text-lg">Wind</h5>
                        <h5 className="text-xl">{current.current.wind_dir} {current.current.wind_kph} km/h</h5>
                    </div>
                    <hr className="my-3"/>
                  </>
                )}
                {current.current.gust_kph !== undefined && (
                  <>
                    <div className="flex flex-row justify-between">
                        <h5 className="text-lg">Wind Gusts</h5>
                        <h5 className="text-xl">{current.current.gust_kph} km/h</h5>
                    </div>
                    <hr className="my-3"/>
                  </>
                )}
                {current.current.humidity !== undefined && (
                  <>
                    <div className="flex flex-row justify-between">
                        <h5 className="text-lg">Humidity</h5>
                        <h5 className="text-xl">{current.current.humidity} %</h5>
                    </div>
                    <hr className="flex md:hidden my-3"/>
                  </>
                )}
            </div>
            <div className="flex flex-col justify-between md:w-2/5">
                {current.current.precip_mm !== undefined && (
                  <>
                    <div className="flex flex-row justify-between">
                        <h5 className="text-lg">Precipitation</h5>
                        <h5 className="text-xl">{current.current.precip_mm} mm</h5>
                    </div>
                    <hr className="my-3"/>
                  </>
                )}
                {current.current.pressure_mb !== undefined && (
                  <>
                    <div className="flex flex-row justify-between">
                        <h5 className="text-lg">Pressure</h5>
                        <h5 className="text-xl">{current.current.pressure_mb} mb</h5>
                    </div>
                    <hr className="my-3"/>
                  </>
                )}
                {current.current.cloud !== undefined && (
                  <>
                    <div className="flex flex-row justify-between">
                        <h5 className="text-lg">Cloud Cover</h5>
                        <h5 className="text-xl">{current.current.cloud} %</h5>
                    </div>
                    <hr className="my-3"/>
                  </>
                )}
                {current.current.vis_km !== undefined && (
                  <div className="flex flex-row justify-between">
                      <h5 className="text-lg">Visibility</h5>
                      <h5 className="text-xl">{current.current.vis_km} km</h5>
                  </div>
                )}
            </div>

          </div>

        </div>
        )}
        {day.forecastDayOne && Object.keys(day.forecastDayOne).length > 0 && (
        <div className="w-full bg-slate-100 p-4 md:rounded-md md:p-7 md:pb-10 mx-auto mb-10">
          <div className="flex flex-col md:flex-row w-full justify-between">
            <div className="flex flex-col md:w-2/5">
                <h5 className="text-left text-xl py-5">Sunrise/Sunset</h5>
                <div className="text-left">
                  <FontAwesomeIcon className="text-4xl font-light text-orange-300 pb-5" icon={faSun}/>
                </div>
                <hr className="my-3"/>
                {day.forecastDayOne.sunrise && (
                  <>
                    <div className="flex flex-row justify-between">
                      <h5 className="text-lg">Rise</h5>
                      <h5 className="text-xl">{day.forecastDayOne.sunrise}</h5>
                    </div>
                    <hr className="my-3"/>
                  </>
                )}
                {day.forecastDayOne.sunset && (
                  <>
                    <div className="flex flex-row justify-between">
                      <h5 className="text-lg">Set</h5>
                      <h5 className="text-xl">{day.forecastDayOne.sunset}</h5>
                    </div>
                    <hr className="flex md:hidden my-3"/>
                  </>
                )}
            </div>
            <div className="flex flex-col md:w-2/5">
                <h5 className="text-left text-xl py-5">Moonrise/Moonset</h5>
                <div className="text-left">
                  <FontAwesomeIcon className="text-4xl font-light text-blue-300 pb-5" icon={faMoon}/>
                </div>
                <hr className="my-3"/>
                {day.forecastDayOne.moonrise && (
                  <>
                    <div className="flex flex-row justify-between">
                      <h5 className="text-lg">Rise</h5>
                      <h5 className="text-xl">{day.forecastDayOne.moonrise}</h5>
                    </div>
                    <hr className="my-3"/>
                  </>
                )}
                {day.forecastDayOne.moonset && (
                  <div className="flex flex-row justify-between">
                    <h5 className="text-lg">Set</h5>
                    <h5 className="text-xl">{day.forecastDayOne.moonset}</h5>
                  </div>
                )}
            </div>
          </div>
        </div>
        )}
      </div>
    </Base>
  );
};

export default CurrentView;

