import React from 'react'
import "./Register.css"
import {NavLink} from "react-router-dom"

export default function Register() {
    return (
        <>
        <div className="register">
          <div className="registerWrapper">
          <h2 className="registerHeading">Register Here</h2>
          <div className="registerWrapper2" >
          <div className="registerLeft">
             <form action="" method="" className="registerForm">
               <div className="registerFields">
                    <label className="registerLabel">Name</label>
                    <input type="text" required className="registerInput" placeholder="Name*"/>
               </div>
               <div className="registerFields">
                    <label className="registerLabel">Student Number</label>
                    <input type="text" required className="registerInput" placeholder="Student Number*"/>
               </div>
               <div className="registerFields">
                    <label className="registerLabel">Roll Number</label>
                    <input type="text" required className="registerInput" placeholder="Roll Number*"/>
               </div>
               <div className="registerFields">
                    <label className="registerLabel">Email-ID</label>
                    <input type="text" required className="registerInput" placeholder="Email*"/>
               </div>
               <div className="registerFields">
                    <label className="registerLabel">Mobile Number</label>
                    <input type="text" required className="registerInput" placeholder="Mobile Number*"/>
               </div>
               <div className="registerFields">
                     <label for="year" className="registerLabel" style={{marginRight: "44px"}}>Year</label>
                     <select name="year">
                         <option value disabled>Year</option>
                         <option value="2">2</option>
                     </select>      
               </div>
               <div className="registerFields">
                   <label for="branch" className="registerLabel">Branch</label>
                   <select name="branch">
                       <option value="null">Branch</option>
                       <option value="CSE">CSE</option>
                       <option value="CS-IT">CS-IT</option>
                       <option value="CS">CS</option>
                       <option value="IT">IT</option>
                       <option value="ECE">ECE</option>
                       <option value="EN">EN</option>
                   </select>    
               </div>
               <div className="registerFields">
                   <label className="registerLabel">
                      <input type="radio" name="isHostler" value="true"/>Hostler
                   </label>
                   <label className="registerLabel">
                       <input type="radio" name="isHostler" value="true"/>Day Scholor
                   </label>
               </div>
               <div  className="registerFields">
                  <button id="registerButton" type="submit"><NavLink exact activeclassName="ActiveClass" to="/instruction">Register</NavLink></button>
               </div>
             </form>
             <div id="login">
             Already Registered?<a href="">Login Here</a>
             </div>  
            </div>
            <div className="registerRight">
                  <img src="assets/illustration2.png" alt="no image"/>
            </div>
          </div>
          </div>
        </div>
        </>
    )
}
