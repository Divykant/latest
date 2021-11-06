import React from 'react'
import "./Questions.css"
import Category from '../Category/Category'

export default function Questions() {
    return (
        <>
          <div className="categoryContainer">
              <Category/>
          </div>
          <div className="questionContainer">
              <div className="questionWrapper">
                <div className="question">
                    <span style={{fontWeight: "bold"}}>Q1.</span>
                    <span style={{marginLeft: "10px"}}>What is my name?</span>
                </div>
                <div className="options">
                    <div className="option">
                        <input name="option" type="radio" className="optionInput" value="1"/>
                        <label for="option1">Option 1</label>
                    </div>
                    <div className="option">
                        <input name="option" type="radio" className="optionInput" value="2"/>
                        <label for="option2">Option 2</label>
                    </div>
                    <div className="option">
                        <input name="option" type="radio" className="optionInput" value="3"/>
                        <label for="option3">Option 3</label>
                    </div>
                    <div className="option">
                        <input name="option" type="radio" className="optionInput" value="4"/>
                        <label for="option4">Option 4</label>
                    </div>
                </div>
              </div>
          </div>
          <div className="btns">
              <button className="btn">Previous</button>
              <button className="btn">Mark For Review</button>
              <button className="btn">Next & Save</button>
          </div>
        </>
    )
}
