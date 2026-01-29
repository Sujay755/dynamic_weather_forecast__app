import React, { useCallback, useEffect, useState, useRef } from "react";
import Switch from "react-switch";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather } from "../features/current/currentSlice";
import { fetchHoursWeather } from "../features/hour/hoursSlice";
import { fetchDaysWeather } from "../features/day/daysSlice";
import { fetchDayWeather } from "../features/day/daySlice";
import { changeC } from "../features/celcius/celciusSlice";
import {changeCity} from "../features/city/citySlice";
import { fetchSearchSuggestions, setQuery, clearSuggestions } from "../features/search/searchSlice";

const Base = ({ children }) => {
  const city = useSelector((state)=>state.city.city)
  const searchState = useSelector((state)=>state.search)
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);
  const debounceTimerRef = useRef(null);

  const handleSearchChange = useCallback(
    (e)=>{
      const {value} = e.target;
      setSearchValue(value);
      dispatch(setQuery(value));
      
      // Clear previous timer
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      
      if (value.length >= 2) {
        // Debounce API call
        debounceTimerRef.current = setTimeout(() => {
          dispatch(fetchSearchSuggestions({ query: value }));
          setShowSuggestions(true);
        }, 300);
      } else {
        dispatch(clearSuggestions());
        setShowSuggestions(false);
      }
    },
    [dispatch]
  );

  const handleSelectCity = useCallback(
    (selectedCity) => {
      dispatch(changeCity(selectedCity));
      setSearchValue(selectedCity);
      setShowSuggestions(false);
      dispatch(clearSuggestions());
    },
    [dispatch]
  );

  const handleSearchSubmit = useCallback(() => {
    if (searchValue.trim()) {
      dispatch(changeCity(searchValue.trim()));
      setShowSuggestions(false);
      dispatch(clearSuggestions());
    }
  }, [dispatch, searchValue]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const handleDispatch = useCallback(
    (e)=>{
      handleSearchChange(e);
    },
    [handleSearchChange]
  )

  const fetchAllData = useCallback(() => {
    if (city) {
      dispatch(fetchCurrentWeather({city}));
      dispatch(fetchHoursWeather({city}));
      dispatch(fetchDaysWeather({city}));
      dispatch(fetchDayWeather({city}));
    }
  }, [city, dispatch]);

  useEffect(()=>{
    fetchAllData()
  },[fetchAllData])

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target) &&
      suggestionsRef.current &&
      !suggestionsRef.current.contains(event.target)
    ) {
      setShowSuggestions(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
  };
}, []);

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
        <div className="relative flex flex-row text-smx md:text-sm my-auto items-center" ref={searchRef}>
          <input
            className="rounded-3xl h-10 w-32 sm:h-auto sm:w-auto text-center text-sm font-medium text-gray-500 p-2 mr-1"
            type="text"
            placeholder="Search city"
            value={searchValue}
            onChange={handleDispatch}
            onKeyPress={handleKeyPress}
            onFocus={() => searchValue.length >= 2 && setShowSuggestions(true)}
          />
          <button onClick={handleSearchSubmit}><FontAwesomeIcon className="text-slate-50 text-base ml-2 font-bold" icon={faSearch}/></button>
          {showSuggestions && searchState.suggestions.length > 0 && (
            <div
              ref={suggestionsRef}
              className="absolute z-50 top-full mt-2 left-0 w-full sm:w-auto min-w-[200px] bg-white rounded-lg shadow-xl border border-gray-200 max-h-60 overflow-y-auto"
            >
              {searchState.loading ? (
                <div className="p-4 text-center text-gray-500">Loading...</div>
              ) : (
                searchState.suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectCity(suggestion.name)}
                    className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0 flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 text-sm" />
                    <div className="flex-1">
                      <div className="font-medium text-gray-800 text-sm">
                        {suggestion.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {suggestion.region && `${suggestion.region}, `}
                        {suggestion.country}
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          )}
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
