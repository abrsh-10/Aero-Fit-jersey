import React from 'react'
import Main from "../components/MainContent";
import data from "../data/data.js"
import Jersey from '../components/jersey'
export default function Home(){
    const jersey = data.map(item => {
        return(
            <Jersey
             item = {item}
            />
        )
    })
    return(
        <div>
        <Main/>
        </div>
    )
}