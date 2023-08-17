import { useState } from "react";
import "./Navbar.css";
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  const [navBar, setNavbar] = useState("menu");
  const showNavbar = () => {
    console.log("hello");
    setNavbar("menu showNavbar");
  };
  const closeNavbar = () => {
    setNavbar("menu");
  };

  return (
    <div className="navbar">
      <div className="logoDiv">
        <BiLogoMediumOld className="icon" />
        <span>Travel Buddy</span>
      </div>
      <div className={navBar}>
        <ul>
          <li className="navList">Destination</li>
          <li className="navList">About us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>
        <AiFillCloseCircle className="closeIcon icon" onClick={closeNavbar} />
      </div>
      <button className="btn signInBtn ">Sign Up</button>
      <PiDotsNineBold className="menuIcon icon" onClick={showNavbar} />
    </div>
  );
};
export default Navbar;
