import "./App.css";
// import {CssBaseline,Grid, Switch} from '@material-ui/core';
// import Navbar from "./Componeimportnts/homepage/Navbar/Navbar";
// import home from "./Components/home"

// import Footer from "./Components/homepage/Footer/Footer";
// import HomePage from "./Components/homepage/HomePage";

import Header from "./Components/maps/header/Header";
import Home from "./Components/homepage/Home/Home";
 import Maps from "./Components/maps/Maps"
import {BrowserRouter, Route,Routes } from "react-router-dom"
import HomePage from "./Components/homepage/HomePage";
function App() {
  return (
   
 <BrowserRouter>
   <Routes>
   <Route path={"/"} element= {<HomePage/>}></Route>
  <Route path={"/maps"} element= {<Maps/>}></Route> 
   </Routes>
 </BrowserRouter>

 



   
      
    
  );
}

export default App;
