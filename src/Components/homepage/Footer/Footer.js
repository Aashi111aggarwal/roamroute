import React from 'react'
import "./Footer.css";
import { BiLogoMediumOld } from "react-icons/bi";
import {ImFacebook} from "react-icons/im"
import { AiFillInstagram } from "react-icons/ai";
import {BsTwitter} from "react-icons/bs"
const Footer = () => {
  return (
    <div className="footer">
    <div className="secContainer container grid">
        <div className="logoDiv">
            <div className="footerLogo">
                <BiLogoMediumOld className="icon"/>
           <span>OU-Trips</span>
           
            </div>

            <div className="socials flex">
            <ImFacebook className='icon'/>
            <BsTwitter className="icon"/>
            <AiFillInstagram className="icon"/>
            
            </div>

            <div className="footerlinks">
                <span className="linktitle">
                Information
                    
                </span>
                <li>
                <a href="#">Home</a>
                <a href="#">Explore</a>
                <a href="#">Travel</a>
                <a href="#">Blog</a>
                </li>
            </div>
            <div className="footerlinks">
                <span className="linktitle">
                Helpful links
                    
                </span>
                <li>
                <a href="#">Destination</a>
                </li>
                <li>
                <a href="#">Support</a> </li>
                <li>
                <a href="#">Travel &Condition</a></li>
                <li>
                <a href="#">Privacy</a>
                </li>
            </div>

            <div className="footerlinks">
                <span className="linktitle">
             Contact Details
                    
                </span>
                <span className="phone">
            +651125658
                    
                </span>
                <span className="email">
             xyz@gmail.com
                    
                </span>
                </div>
        </div>
    </div>



</div>
  )
}

export default Footer