import React from "react";
import pic from "./anusha.jpg";

export default function Header()
{
    return(
        
        <header className="header">
        <img src={pic} alt="img" className="header--img"/>
        <h2 className="header--title">MEME GENERATOR</h2>
        <h4 className="header--project">Fun with memes</h4>
        </header>

    )
}