
//mera vala with index ques

import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./Quesbar.css";
import { display } from '@mui/system';


export const Quesbar = (props) => {

    
    const [users, setUsers] = useState([]);
    const [singleusers, setSingleUsers] = useState([]);



    const forGettingIndex = (e)=>{
        console.log("helooa")
         console.log(e)
        props.onclickhandler(e.target.innerText)
        console.log(e.target.innerText);
        
    }


    
    useEffect(function(){
        axios.get("https://radiant-scrubland-91561.herokuapp.com/api/questions/search/html")
        .then((response) => setUsers(response.data))
        .catch((error) => console.log(error));
    },[]);


    const singleques=(e)=>{
        alert(e.target.innerText);


        axios.get("https://radiant-scrubland-91561.herokuapp.com/api/questions/search/CSS" + e.target.innerText)
        .then((response) => setSingleUsers(response.data))
        .catch((error) => console.log(error));
    };
    

    return (
        <div className="first">
            <div className="second">
                {users.map((user)=>(
                    <button className="numbox" onClick={forGettingIndex}  > {users.indexOf(user)+1} </button>
                ))}
            </div>
            <hr/>
            <div className="buttondiv">
                <span className="countbtn"><button className="visbtn"> </button> visted </span><br/><br/>
                <span className="countbtn"> <button className="notvisbtn"></button> Not visted  </span><br/><br/>
                <span className="countbtn"><button className="markbtn"> </button> Marked for review </span><br/><br/>
            </div>
        </div>
    )
}
export default Quesbar;





//deepak vala

// import userEvent from '@testing-library/user-event';
// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import "./Quesbar.css";


// export const Quesbar = (props) => {

    
//     const [users, setUsers] = useState([]);
//      const forGettingIndex = (e)=>{
//          console.log("helooa")
//          console.log(e)
//          props.onclickhandler(e.target.innerText)
//       console.log(e.target.innerText);
//      }


    
//     useEffect(function(){
//         axios.get("https://jsonplaceholder.typicode.com/users")
//         .then(response => setUsers(response.data))
//         .then(error => console.log(error))
//     },[]);


//     var count=0;

    

//     const Visted = () => {
//          var count = 0;
//     }


//     function NotVisted(){
        
//     }
//     function Marked(){
        
//     }

//     return (
//         <div className="first">
//             <div className="second">
//             {users.map((user)=>(
//                 <button className="numbox" onClick={forGettingIndex}>{users.indexOf(user)+1}</button>
//             ))
//                 }

//             </div>
//             <span>visted {Visted}</span><br/>
//             <span>Not visted {NotVisted}</span><br/>
//             <span>Marked {Marked}</span><br/>
//         </div>
//     )
// }
// export default Quesbar;







//mine old code.... with index ques 

// import userEvent from '@testing-library/user-event';
// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import "./Quesbar.css";
// import { display } from '@mui/system';


// export const Quesbar = () => {

    
//     const [users, setUsers] = useState([]);
//     const [singleusers, setSingleUsers] = useState([]);

    
//     useEffect(function(){
//         axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((response) => setUsers(response.data))
//         .then((error) => console.log(error));
//     },[]);


//     const singleques=(e)=>{
//         // alert(e.target.innerText);


//         axios.get("https://jsonplaceholder.typicode.com/users/" + e.target.innerText)
//         .then((response) => setSingleUsers(response.data))
//         .then((error) => console.log(error));
//     };
    
    
    
    
    
//     var count=0;

//     function Visted(){
        
//     }
//     function NotVisted(){
//     }
//     function Marked(){
        
//     }




//     return (
//         <div className="first">
//             <div className="second">
//             {users.map((user)=>(
//                 <button className="numbox" onClick={singleques}> {user.id} </button>
//             ))
//                 }

//             </div>
                

            
//             <hr/>
//             <div className="buttondiv">
//                 <span className="countbtn"><button className="visbtn"> 5 </button> visted
//                  {()=>Visted()}</span><br/><br/>
//                 <span className="countbtn"><button className="notvisbtn"> 5 </button> Not visted 
//                 {()=>NotVisted()}</span><br/><br/>
//                 <span className="countbtn"> <button className="markbtn"> 5 </button> Marked for review
//                 {()=>Marked()}</span><br/><br/>
//             </div>
//         </div>
//     )
// }
// export default Quesbar;