import React from "react";
import data from "../data/data";
import imageData from "../data/imageData";
import Filter from "./Filter";
import ImageSlider from "./imageSlider";
import Pictures from "./players";
import Jersey from "./jersey"; 

export default function Main(){
  const [index,setIndex]=React.useState(0);
  const style1 = {
    backgroundColor: index == 0 ?"white":"transparent"
  }
  const style2 = {
    backgroundColor: index == 1 ?"white":"transparent"
  }
  const style3 = {
    backgroundColor: index == 2 ?"white":"transparent"
  }
  function toogle(value){
    if(value){
      if(index > 0)
       setIndex(prevIndex => prevIndex - 1)
       else
       setIndex(2)
    }
    else
    if(index<2)
    setIndex(prevIndex => prevIndex + 1)
    else
    setIndex(0)
  }
  const featuredTeams = ["manchester united",
  "arsenal",
  "chelsea",
  "liverpool",
  "manchester city",
  "barcelona",
  "real madrid",
  "psg",
  "juventus",
  "bayern munich",
  "brazil",
  "argentina",
  "germany",
  "france",
  "portugal",
  "ethiopia",

]
  const products = data.map(m =>{
    let n = null
    if ((featuredTeams.includes(m.club)||(featuredTeams.includes(m.country)))&& m.title.includes("home")){
    return (
    <Jersey item = {m} />
    )
    }
  })
    return(
      <div className="mainContent">
        <ImageSlider src = {imageData[index].src} text = {imageData[index].text} handleClick = {toogle}/>
        <div className="imageCircles">
          <div className="circle-1" style={style1} onClick={() =>setIndex(0)}></div>
          <div className="circle-2"  style={style2} onClick={() =>setIndex(1)} ></div>
          <div className="circle-3"  style={style3} onClick={() =>setIndex(2)}></div>
        </div>
        <Pictures />
        <div className="middle">
        <Filter/>
        <div className="products">
          <h2 className="feature">featured products</h2>{products}</div>
        </div>
      </div>
    )
                }