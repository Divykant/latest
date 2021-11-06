import React ,{useState} from 'react'
import "./Category.css"
import {NavLink} from "react-router-dom"

export default function Category() {
    let url=window.location.href;
    url=url.split("/").pop();
    return (
        <div>
         <div className="categoryBox">
           <NavLink exact activeclassName="activeClass" to="/">HTML</NavLink>
         </div>
         <div className="categoryBox">
           <NavLink exact activeclassName="activeClass" to="/">Css</NavLink>
         </div>
         <div className="categoryBox">
           <NavLink exact activeclassName="activeClass" to="/">{url}</NavLink>
         </div>
         <div className="categoryBox">
           <NavLink exact activeclassName="activeClass" to="/">Aptitude</NavLink>
         </div>
        </div>
    )
}