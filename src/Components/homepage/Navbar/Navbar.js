// import React,{ useState } from "react";
// import "./Navbar.css";
// import { BiLogoMediumOld } from "react-icons/bi";
// import { AiFillCloseCircle } from "react-icons/ai";
// import { PiDotsNineBold } from "react-icons/pi"

// export default function Navbar () {
//   const [navBar, setNavbar] = useState("menu")
//   const showNavbar = () => {
//     console.log("hello");
//     setNavbar("menu showNavbar");
//   };
//   const closeNavbar = () => {
//     setNavbar("menu");
//   };

//   return (
//     <div className="navbar">
//       <div className="logoDiv">
//         <BiLogoMediumOld className="icon" />
//         <span>Travel Buddy</span>
//       </div>
//       <div className={`menu ${navBar}`}>
//         <ul>
//           <li className="navList">Destination</li>
//           <li className="navList">About us</li>
//           <li className="navList">Testimonial</li>
//           <li className="navList">Gallery</li>
//         </ul>
//         <AiFillCloseCircle className="closeIcon icon" onClick={closeNavbar} />
//       </div>
//       <button className="btn signInBtn ">Sign Up</button>
//       <PiDotsNineBold className="menuIcon icon" onClick={showNavbar} />
//     </div>
//   );
// };
// // export default Navbar;
import React,{ useState,useEffect } from "react";
import "./Navbar.css";
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi"

export default function Navbar () {
  const [navBar, setNavbar] = useState("menu")
  const showNavbar = () => {
    console.log("hello");
    setNavbar("menu showNavbar");
  };
  const closeNavbar = () => {
    setNavbar("menu");
  };
  var count1 =0;
  var count2 =0;
  const click1=()=>{
    count1=count1+1;
  }
  const click2=()=>{
    count2=count2+1;
  }
  useEffect(()=>{
    showNavbar()
  },[count1]);
  useEffect(()=>{
    closeNavbar()
  },[count2]);
  return (
    <div className="navbar">
      <div className="logoDiv">
        <BiLogoMediumOld className="icon" />
        <span>Travel Buddy</span>
      </div>
      <div className={`menu ${navBar}`}>
        <ul>
          <li className="navList">Destination</li>
          <li className="navList">About us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>
        <AiFillCloseCircle className="closeIcon icon" onClick={click1} />
      </div>
      <button className="btn signInBtn ">Sign Up</button>
      <PiDotsNineBold className="menuIcon icon" onClick={click2} />
    </div>
  );
};
// export default Navbar;