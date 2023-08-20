import React from "react";
import NavBar from "./nav-bar";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "../pages/Home";
import Products from "../pages/Products";

export default function App(){
    return (
        <Router>
           <div>
            <NavBar/>
            <Routes>
                <Route exact path = '/'  element = {<Home/>}/>
                <Route exact path = '/Home'  element = {<Home/>}/>
                <Route path = '/Products'  element = {<Products/>}/>
            </Routes>
          </div>
        </Router>
    )
}