import React from "react";
import Home from './Home/Home.js';
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function HomePage(){
    return (
        <div>
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default HomePage;