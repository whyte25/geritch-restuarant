import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import spoon from "../assets/spoon.png";
import Button from "./Button";

const date = new Date().getFullYear().toString();

function Footer() {
  return (
    <div className="flex footer  flex-col pb-16 items-center">
      <div className="flex bg-black flex-col items-center  w-4/6 space-y-5 sm:space-y-2 py-5   rounded-md md:w-5/6 ">
        <div className="flex flex-col items-center space-y-2  justify-center">
          <h3 className="flex  font-bold font-serif text-base">Newsletter</h3>
          <img src={spoon} className="w-6 mt-1 " alt="spoon" />
          <h1 className="font-serif text-cream font-bold  text-5xl lg:text-3xl sm:text-base">
            {" "}
            Subscribe To Our Newsletter
          </h1>
        </div>
        <p className="text-sm text-deep-gray sm:text-[12px]">
          and never miss latest Updates!
        </p>
        <form className="flex items-center flex-wrap justify-center w-full py-5 space-x-4">
          <input
            type="text"
            className="w-[400px] md:w-[200px] py-2 px-3 border text-deep-gray border-cream placeholder:text-sm placeholder:text-deep-gray placeholder:font-serif placeholder:font-bold bg-transparent outline-none text-sm"
            placeholder="Email Address"
          />
          <Button>Subscribe</Button>
        </form>
      </div>
      <div className="flex md:flex-col  items-start md:items-center justify-center space-x-10  md:space-x-0 md:space-y-10 my-10 w-full">
        <div className="flex flex-col gap-5 justify-center items-center text-sm text-deep-gray ">
          <h3 className="font-serif font-bold">Contact Us</h3>
          <p>9 W 53rd St, New York, NY 10019, USA </p>
          <div className="">
            <p> +1 212-344-1230 </p>
            <p>+1 212-555-1230</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-sm text-deep-gray gap-5">
          <h3 className="font-serif font-bold text-4xl text-cream">GERICHT</h3>
          <p className="md:w-5/6 sm:w--[90%] text-center ">
            {" "}
            "The best way to find yourself is to lose yourself in the service of
            others.”{" "}
          </p>
          <div className="flex flex-col items-center">
            <img src={spoon} alt={spoon} />
            <div className="flex mt-5 space-x-2">
              <AiOutlineFacebook style={{ width: "34px", height: "34px" }} />
              <AiOutlineTwitter style={{ width: "34px", height: "34px" }} />
              <AiOutlineInstagram style={{ width: "34px", height: "34px" }} />
            </div>
          </div>
          <small className="text-deep-gray  md:hidden">
            {date} Geritche. All Rights reserved
          </small>
        </div>
        <div className="flex flex-col items-center text-deep-gray gap-5 text-sm">
          <h3 className="font-serif font-bold text-xl"> Working Hours</h3>
          <p>
            <span className="block"> Monday-Friday: </span>
            <span> 08:00 am -12:00 am </span>
          </p>
          <p>
            <span className="block">Saturday-Sunday:</span>
            <span> 07:00am -11:00 pm</span>
          </p>
        </div>
      </div>
      <small className="text-deep-gray hidden md:block">
        {date} Geritche. All Rights reserved
      </small>
    </div>
  );
}

export default Footer;
