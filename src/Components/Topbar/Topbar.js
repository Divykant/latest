import React, {useState,useEffect, useRef} from 'react'
import './Topbar.css';

export default function Topbar() {
    const [timerHours,setTimerHours]=useState('00');
    const [timerMinutes,setTimerMinutes]=useState('00');
    const [timerSeconds,setTimerSeconds]=useState('00');

    let interval=useRef();

    const startTimer=()=>{
        var countDownDate = new Date("NOV 06, 2021 22:00:00").getTime();

        var x = setInterval(()=> {
            var now = new Date().getTime();
            var distance = countDownDate - now;
        
            var hours = ("0"+ Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
            var minutes = ("0"+ Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
            var seconds = ("0"+ Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
          
            if (distance < 0) {
              clearInterval(x);
            }
            else{
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
          }, 1000);
    }
    useEffect(() => {
         startTimer();
         return()=>{
           clearInterval(interval.current);
         };
     });
    

    return (
        <>
        <div className="topbarContainer">
         <div className="topbarLeft">
             <span className="logo">CSI</span>
         </div>
         <div className="topbarCenter">  
             <div className="topbarTitle">
                 Exam-Page
             </div>
         </div>
         <div className="topbarRight">
             <div>
             <span style={{marginRight: "7px"}}>Timer</span>
             <span>{timerHours}:</span>
             <span>{timerMinutes}:</span>
             <span>{timerSeconds}</span>
             </div>
             <button>Submit</button>
         </div> 
        </div> 
        </>
    )
}
