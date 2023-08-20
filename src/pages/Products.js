import React from "react";
import Jersey from "../components/jersey";
import data from "../data/data";
import Main from "../components/MainContent";
export default function Products(){
    const jersey = data.map(item => {
        return(
            <Jersey
             item = {item}
            />
        )
    })
    return(
        <div className="products">
           <h2 className="slogan">all you want in one place!!<span>Call to order:<a href="tel:+251923599260">0923599260</a></span></h2>
           <hr />
           
        </div>
    )
}