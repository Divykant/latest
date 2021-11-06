import React from 'react'
import './Feedback.css'


export default function Feedback() {
    return (
        <div className="main-feedback-div">
            <div className="top-headings">
                <h1>THANK YOU !</h1>
                <h3>Your Test Has Been Submitted</h3>
            </div>
            <div className="feedback-input-div">
                <input placeholder="Add Feedback..." type="text" className="feedback-input" cols="40" aria-rowspan="20"></input>
            </div>
            <div className="feedback-submit-div">
                <button className="feedback-submit" type="submit">Submit Your Feedback </button>
            </div>
        </div>
    )
}
