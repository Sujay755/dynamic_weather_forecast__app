import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faSoundcloud
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-slate-50 pb-5">
      <div className="flex flex-row w-full md:w-3/4 justify-between mx-auto my-auto mt-3 px-2">
        <div className="flex flex-row">
          <h4 className="text-black font-bold text-sm md:text-lg p-1 my-auto">Connect with us</h4>
          <div className="flex flex-col md:flex-row p-1 my-auto">
            <div className="flex flex-row">
              <a href="https://www.facebook.com/profile.php?id=100006480592010&mibextid=ZbWKwL"><FontAwesomeIcon className="bg-purple-200 hover:bg-blue-500 hover:text-slate-50 md:text-2xl rounded-full p-2 m-1" icon={faFacebook} /></a>
              <a href="https://twitter.com/sujaypaul755?t=gTifboE3hfzZ1VQk9N8U_g&s=09"><FontAwesomeIcon className="bg-purple-200 hover:bg-blue-500 hover:text-slate-50 md:text-2xl rounded-full p-2 m-1" icon={faTwitter} /></a>
            </div>
            <div className="flex flex-row">
              <a href="https://instagram.com/the_photography_addictt?igshid=YmMyMTA2M2Y="><FontAwesomeIcon className="bg-purple-200 hover:bg-blue-500 hover:text-slate-50 md:text-2xl rounded-full p-2 m-1" icon={faInstagram} /></a>
              <a href="https://youtube.com/@letstechtolife3622"><FontAwesomeIcon className="bg-purple-200 hover:bg-blue-500 hover:text-slate-50 md:text-2xl rounded-full p-2 m-1" icon={faYoutube} /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:mt-2">
            <div className="text-sm md:text-lg text-start font-bold mx-2 mt-2">
                <h5 className="-mb-1">The</h5>
                <h5 className="">Weather</h5>
                <h5 className="-mt-1">Company</h5>
                <h5 className="text-smx font-normal md:font-bold w-16 md:w-full -mt-1">An SSPL Business</h5>
            </div>
            <div className="text-slate-50 text-smx font-bold text-left bg-blue-800 my-auto p-1 mx-2">
          <h6>
            The
            <br />
            Weather
            <br />
            Channel
          </h6>
        </div>
        </div>
      </div>
      <div className="flex flex-row justify-center text-xs1 md:text-sm">
        <h5 className="m-2">Feedback</h5>
        <h5 className="m-2">Weather API</h5>
        <h5 className="m-2">Press Room</h5>
      </div> 
      <div className="flex flex-row justify-center font-bold text-smx md:text-sm">
        <h5 className="m-2">Terms of Use</h5>
        <h5 className="my-2 font-light">|</h5>
        <h5 className="m-2">Privacy Policy</h5>
        <h5 className="my-2 font-light">|</h5>
        <h5 className="m-2">Accessibility Statement</h5>
        <h5 className="my-2 font-light">|</h5>
        <h5 className="m-2">Data Vendors</h5>
      </div> 
      <div className="flex flex-row justify-center font-bold">
        <FontAwesomeIcon className="text-green-500 md:text-2xl m-2 my-auto" icon={faSeedling}/>
        <h5 className="text-orange-600 m-2 my-auto">Sambhavam</h5>
        <FontAwesomeIcon className="text-gray-500 md:text-2xl m-2 my-auto" icon={faMobileScreenButton}/>
      </div>
      <div>
        <h5 className="text-xs1 md:text-sm my-3">We recognise our responsibility to use data and technology for good. Take control of your data.</h5>
      </div>
      <div>
        <h5 className="font-bold text-smx md:text-sm m-4">Data Rights</h5>
      </div>
      <div>
        <h5 className="text-xs1 md:text-xs m-2"><span>&#169;</span>Copyright SWC Product and Technology LLC 2022, 2023</h5>
      </div>
      <div className="flex flex-row justify-center">
        <h5 className="m-2 my-auto text-xs1 md:text-sm">Powered by the</h5>
        <FontAwesomeIcon className="m-2 my-auto text-xs1 md:text-5xl text-blue-300" icon={faSoundcloud}/>
        <h5 className="m-2 my-auto text-xs1 md:text-sm font-semibold">SSPL <span className="font-normal">Cloud</span></h5>
      </div>
    </div>
  );
};

export default Footer;
