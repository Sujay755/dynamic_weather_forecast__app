import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isActive = ({isActive})=>{
    return{
      color: isActive? 'yellow' : 'white'
    }
  }
  
  return (
    <div className=" flex flex-col bg-blue-600">
      <div className="flex md:hidden justify-end w-full mr-3">
        <button
          onClick={() => setOpen(!open)}
          className="text-slate-50 text-3xl p-1"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className={"min-w-full md:flex flex-grow" + (open ? " flex" : " hidden")}>
        <div className="flex flex-col items-start w-full md:flex-row md:justify-between md:w-2/4 md:mx-auto my-auto py-3 text-slate-50 font-bold text-base md:text-lg mx-2">
          <NavLink style={isActive} to="/">Current</NavLink>
          <NavLink style={isActive} to="/hours">Hourly</NavLink>
          <NavLink style={isActive} to="/days">3 Day</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
