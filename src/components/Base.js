import React, { useCallback, useEffect } from "react";
import Switch from "react-switch";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather } from "../features/current/currentSlice";
import { fetchHoursWeather } from "../features/hour/hoursSlice";
import { fetchDaysWeather } from "../features/day/daysSlice";
import { fetchDayWeather } from "../features/day/daySlice";
import { changeC } from "../features/celcius/celciusSlice";
import {changeCity} from "../features/city/citySlice"

const Base = ({ children }) => {
  const city = useSelector((state)=>state.city.city)
  const dispatch = useDispatch();

  const handleDispatch = useCallback(
    (e)=>{
      const {value} = e.target;
      dispatch(changeCity(value));
    },
    [dispatch]
  )

  const allFn = [
    fetchCurrentWeather({city}),
    fetchHoursWeather({city}),
    fetchDaysWeather({city}),
    fetchDayWeather({city})
]

const fetchAllData = ()=>{
    allFn.map((fn)=>dispatch(fn))
}

useEffect(()=>{
    fetchAllData()
},[])

  const celcius = useSelector((state)=>state.celcius.celcius)

  const handleChange = () => {
    dispatch(changeC());
  };

  return (
    <div>
      <div className="bg-blue-400">
      <div className="flex mx-2 md:mx-auto justify-between md:w-4/5">
        <div className="text-blue-500 text-smx2 md:text-sm font-bold text-left bg-slate-50 my-3 p-2">
          <h6>
            The
            <br />
            Weather
            <br />
            Channel
          </h6>
        </div>
        <div className="text-center hidden lg:inline text-smx lg:text-xl text-white my-auto">
          <h4>
            An <span className="font-semibold">SSPL</span> Business
          </h4>
        </div>
        <div className="text-center bg-red-600 text-smx2 xsm:text-smx md:text-lg font-bold text-slate-50 my-auto px-2 py-1">
          <h4>THE WEATHER TIMES</h4>
        </div>
        <div className="flex flex-row text-smx md:text-sm my-auto items-center">
          <input
            className="rounded-3xl h-6 w-24 sm:h-auto sm:w-auto text-center text-sm font-medium text-gray-500 p-1 mr-1"
            type="text"
            placeholder="Search city"
            onChange={handleDispatch}
          />
          <button onClick={fetchAllData}><FontAwesomeIcon className="text-slate-50 text-base ml-2 font-bold" icon={faSearch}/></button>
        </div>
        <div className="flex flex-row text-slate-50 font-bold text-smx md:text-sm my-auto">
          <h6 className="mr-1 md:-my-1">
            <span>&#176;</span>C
          </h6>
          <Switch
            className=""
            onChange={handleChange}
            checked={celcius}
            offColor="#dcdcdc"
            onColor="gray"
            uncheckedIcon={false}
            checkedIcon={false}
            handleDiameter={15}
            height={10}
            width={30}
          />
          <h4 className="ml-1 md:-my-1">
            <span>&#176;</span>F
          </h4>
        </div>
      </div>
      <Navbar/>
    </div>
    <div>
      {children}
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
};

export default Base;
