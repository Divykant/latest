import React, { useState } from "react";
import "./Login.css";
import "../FontAwesomeIcons";
import { NavLink } from "react-router-dom";
import PasswordToggle from "../PasswordToggle/PasswordToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = (props) => {
  const [PasswordInputType, ToggleIcon] = PasswordToggle();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allCandidate, setAllCandidate] = useState([]);

  const submitForm = (e) => {
    if (email && password) {
      e.preventDefault();
      const newEntry = {
        id: new Date().getTime().toString(),
        email: email,
        password: password,
      };
      setAllCandidate([...allCandidate, newEntry]);
      console.log(allCandidate);
      // setEmail("");
      // setPassword("");
      props.history.push('/instruction');

    }
    else
    {
        alert("Please fill all details")
    }
  };
  
  return (
    <>
      <div className="maindiv">
        <div className="login_Leftside">
          <img className="login_img" src="assets/heading.svg" alt="Graphic" />
          <div className="form_area">
            <form onSubmit={submitForm}>
              <div className="registerFields">
                <img className="user_svg" src="assets/user.svg" />
                <input
                  type="text"
                  className="input1"
                  placeholder="Roll Number"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="registerFields">
                <img className="pass_svg" src="assets/pass.svg" />
                <input
                  type={PasswordInputType}
                  className="input2"
                  placeholder="Password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="password-toogle-icon">{ToggleIcon}</span>
              </div>
              <div className="lastdiv">
                <button type="submit" className="submit_button">
                  Login
                </button>
              </div>
            </form>
            <div className="lastdiv">
              <p className="lastLine">
                {" "}
                Not registered yet?
                <span id="register">
                  <NavLink to="/register">Register</NavLink>
                </span>
              </p>
            </div>
          </div>
          {/* <div>
                   {
                       allCandidate.map((currEntry)=>{
                             return(
                                 <div id={currEntry.id}>
                                    <p>{currEntry.email}</p>
                                    <p>{currEntry.password}</p>
                                 </div>
                             )
                       })
                   }
               </div> */}
        </div>
        <div className="img_Righside">
          <img className="girl_img" src="assets/Girl.png" alt="Graphic" />
        </div>
      </div>
    </>
  );
};

export default Login;
