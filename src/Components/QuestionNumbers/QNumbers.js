import React from 'react'
import "./QNumbers.css"

export default function QNumbers() {
     let marked=5;
     let visited=7;
     let unvisited=5;
    return (
        <>
             <div className="QNumbersWrapper">
                  <div className="QNumbers">1</div>
                  <div className="QNumbers">2</div>
                  <div className="QNumbers">3</div>
                  <div className="QNumbers">4</div>
             </div>
             <div className="QNumbersWrapper">
                  <div className="QNumbers">5</div>
                  <div className="QNumbers">6</div>
                  <div className="QNumbers">7</div>
                  <div className="QNumbers">8</div>
             </div>
             <div className="QNumbersWrapper">
                  <div className="QNumbers">9</div>
                  <div className="QNumbers">10</div>
                  <div className="QNumbers">11</div>
                  <div className="QNumbers">12</div>
             </div>
             <div className="QinfoWrapper"> 
                  <div className="Qinfo">Mark for Review : {marked}</div>
                  <div className="Qinfo">Visited : {visited}</div>
                  <div className="Qinfo">Unvisited : {unvisited}</div>
             </div>
        </>
    )
}
