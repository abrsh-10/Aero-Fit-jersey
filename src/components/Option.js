import React from "react";

export default function Options(props){
    return(<option value= {props.name}>
        {props.name}
        </option>)
}