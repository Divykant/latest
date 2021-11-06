//mera vala with index ques 

// import React, { useState, useEffect, createContext } from 'react'
// import "./Testapi.css";
// import axios from 'axios';
// import $ from "jquery";
// import Category from "../Category/Category";
// import { typography } from '@mui/system';
// import { colors } from '@material-ui/core';
// import Quesbar from '../quesbar/Quesbar';
// import { create } from '@mui/material/styles/createTransitions';

// function Testapi (props) {

//     const [users, setUsers] = useState([]);
//     const [checked, setchecked] = useState(false);

//     const questionid = parseInt(props.hello)
//     console.log(typeof questionid)


//     useEffect(function(){
//         axios.get("https://radiant-scrubland-91561.herokuapp.com/api/questions/search/html")
//         .then(response=>{
//             // setUsers(response.data)
//             // console.log(response.data)
//             // console.log(users)

//             <div className="option">

//                                 {response.map(( idx)=>{
//                                 return (
//                                     <div key={idx.id}>
//                                     <input checked={checked} onChange = {ischecked} type="radio" id="list"  value="list"/>
//                                     <label for="option1">{idx.Options.title}</label>
//                                     </div>
//                                 )
//                                  })}
//                                  {/* <li key={idx}>{d.name}</li> */}

                            
//                                 </div> 

//         }  )
//         .catch(error => console.log(error))

//     },[]);



//     // useEffect(function(){
//     //     axios.get("https://radiant-scrubland-91561.herokuapp.com/api/questions/search/CSS")
//     //     .then(response => {setUsers(response.data) 
//     //     console.log(response.data)
//     //     const quesData = response.data.filter((ques)=>{
//     //        return questionid=== ques.id 
                                            
//     //     })
//     //     setUsers(quesData)
//     //     console.log(quesData)
//     //     })
//     //     .then(error => console.log(error))
        
//     // },[props]);




//     // const singleusers = props => {
//     //     console.log(props)
//     //     {
//     //         users.map((user) => (
//     //             <div className="second-div"> 
//     //                  <div className="third">
//     //                     <div className="quesdiv"> Q-{user.id}   {user.name}</div>
//     //                      <div className="option">
//     //                          {/* <span>Q- {user.id} </span>
//     //                          <p>{user.name}</p> */}
//     //                          <input name="option" type="radio" className="optionInput" value="1"/>
//     //                          <label for="option1">{user.username}</label>
//     //                      </div>
                         
                         
//     //                      <div className="option">
//     //                          <input name="option" type="radio" className="optionInput" value="1"/>
//     //                          <label for="option1">{user.email}</label>
//     //                      </div>

//     //                      <div className="option">
//     //                          <input name="option" type="radio" className="optionInput" value="1"/>
//     //                          <label for="option1">{user.address.street}</label>
//     //                      </div>

//     //                      <div className="option">
//     //                          <input name="option" type="radio" className="optionInput" value="1"/>
//     //                          <label for="option1">{user.address.suite}</label>
//     //                      </div> 
//     //                  </div> 
//     //              </div>
//     //         ))}
        
//     // }

//     var visDiv=0;
    
//     function displayDiv(){
//         $(".third").hide();
//         $(".third:eq("+ visDiv +")").show();
//     }
//     displayDiv()

//     function NextQ() {
//         if(visDiv == $(".third").length-1){
//             visDiv=0;
//         }
//         else{
//             visDiv ++;
//         }
//         displayDiv();
//     }

//     function PrevQ() {
//         if(visDiv == 0){
//             visDiv=$(".third").length-1;
//         }
//         else{
//             visDiv --;
//         }
//         displayDiv();
//     }

    

//     function Preview() {

//         // if(visDiv == 0){
//         //     visDiv=$(".third").length-1;
//         // }
//         // else{
//         //     visDiv --;
//         // }
//         // displayDiv();

//     }
//     // = createContext();

    

//     const ischecked = () => {

//         if(checked == true)
//         setchecked(false);
        
//         else
//         setchecked(true);
//         console.log(!checked);
//     }

//     return (
//             <h1>hiii</h1>
            
//         <div className="main-div">
//            <div className="categoryContainer">
//                 <Category/>
//            </div>
//                {
//                    users.map((user) => (
//                        <div className="second-div"> 
//                             <div className="third">
//                             <div className="quesdiv">
//                                 {user.Question.Title}
//                              </div>

                            


//                                 <div className="option">

//                                 {users.map(( idx)=>{
//                                 return (
//                                     <div key={idx.id}>
//                                     <input checked={checked} onChange = {ischecked} type="radio" id="list"  value="list"/>
//                                     <label for="option1">{idx.Options.title}</label>
//                                     </div>
//                                 )
//                                  })}
//                                  {/* <li key={idx}>{d.name}</li> */}

                            
//                                 </div> 
                                

//                                 {/* render() {
//     const data =[{"name":"test1"},{"name":"test2"}];
//     return (
//       <div>
//       {data.map(function(d, idx){
//          return (<li key={idx}>{d.name}</li>)
//        })}
//       </div>
//     );
//   } */}
                                
                                
//                             </div> 
//                         </div>
//                    ))}
//                    <div className="btndiv">
//                     <button onClick={PrevQ} className="lastbtns" id="pre">Previous</button>
//                    <button   onClick={()=>Preview()} className="lastbtns" id="mrk">Mark for review</button>
//                    <button onClick={NextQ} className="lastbtns" id="nxt">Next</button>
//                    </div>
                    
//         </div>
//     );
// }

// export default Testapi;





//deepak vala code

// import React, { useState, useEffect } from 'react';
// import "./Testapi.css";
// import axios from 'axios';
// import $ from "jquery";
// import { typography } from '@mui/system';


// function Testapi (props) {

//     const [users, setUsers] = useState([]);
     
//      const questionid = parseInt(props.hello)
//      console.log(typeof questionid)
//         useEffect(function(){
//         axios.get("https://radiant-scrubland-91561.herokuapp.com/api/questions/search/html")
//         .then(response => {setUsers(response.data) 
//         console.log(response.data)
//         const quesData = response.data.filter((ques)=>{
//            return questionid=== ques.id 
                                            
//         })
//         setUsers(quesData)
//         console.log(quesData)
//         })
//         .then(error => console.log(error))
        
//     },[props]);


//     var visDiv=0;
    
//     function displayDiv(){
//         $(".third").hide();
//         $(".third:eq("+ visDiv +")").show();
//     }
//     displayDiv()

//     function NextQ() {
//         if(visDiv == $(".third").length-1){
//             visDiv=0;
//         }
//         else{
//             visDiv ++;
//         }
//         displayDiv();
//     }

//     function PrevQ() {
//         if(visDiv == 0){
//             visDiv=$(".third").length-1;
//         }
//         else{
//             visDiv --;
//         }
//         displayDiv();
//     }

//     function Preview() {
//         if(visDiv == 0){
//             visDiv=$(".third").length-1;
//         }
//         else{
//             visDiv --;
//         }
//         displayDiv();
//     }
    


//     return (
//         <div className="main-div">
           
//                {
//                    users.map((user) => (
//                        <div className="second-div">
//                             <div className="third">
//                                 Q-{user.Question.Title} 
//                                 <div className="option">
//                                     {/* <span>Q- {user.id} </span>
//                                     <p>{user.name}</p> */}
//                                     <input name="option" type="radio" className="optionInput" value="1"/>
//                                     <label for="option1">{user.Question.Category}</label>
//                                 </div>
                                
                                
//                                 <div className="option">
//                                     <input name="option" type="radio" className="optionInput" value="1"/>
//                                     <label for="option1">{user.Question.Category}</label>
//                                 </div>
//                                 <div className="option">
//                                     <input name="option" type="radio" className="optionInput" value="1"/>
//                                     <label for="option1">{user.Question.Category}</label>
//                                 </div>
//                                 <div className="option">
//                                     <input name="option" type="radio" className="optionInput" value="1"/>
//                                     <label for="option1">{user.Question.Category}</label>
//                                 </div>
                                
                                
//                             </div> 
//                         </div>    
                       
//                    ))}
//                    <button onClick={()=>PrevQ()}>Previous</button>
//                    <button onClick={()=>Preview()}>Mark for Preview</button>
//                     <button onClick={()=>NextQ()}>Next</button>
//         </div>
//     );
// }

// export default Testapi;



//mine old code with index ques 

// import React, { useState, useEffect, createContext } from 'react'
// import "./Testapi.css";
// import axios from 'axios';
// import $ from "jquery";
// import Category from "../Category/Category";
// import { colors } from '@material-ui/core';
// import Quesbar from '../quesbar/Quesbar';
// import { create } from '@mui/material/styles/createTransitions';
// import Questions from '../Question/Questions';

// function Testapi () {

//     const [users, setUsers] = useState([]);
//     const [singleusers, setSingleUsers] = useState([]);

//     useEffect(function(){
//         axios.get("https://radiant-scrubland-91561.herokuapp.com/api/questions/search/html")
//         .then(response => setUsers(response.data))
//         .then(error => console.log(error))
//     },[]);

    

    
//     // const singleusers = props => {
//     //     console.log(props)
//     //     {
//     //         users.map((user) => (
//     //             <div className="second-div"> 
//     //                  <div className="third">
//     //                     <div className="quesdiv"> Q-{user.id}   {user.name}</div>
//     //                      <div className="option">
//     //                          {/* <span>Q- {user.id} </span>
//     //                          <p>{user.name}</p> */}
//     //                          <input name="option" type="radio" className="optionInput" value="1"/>
//     //                          <label for="option1">{user.username}</label>
//     //                      </div>
                         
                         
//     //                      <div className="option">
//     //                          <input name="option" type="radio" className="optionInput" value="1"/>
//     //                          <label for="option1">{user.email}</label>
//     //                      </div>

//     //                      <div className="option">
//     //                          <input name="option" type="radio" className="optionInput" value="1"/>
//     //                          <label for="option1">{user.address.street}</label>
//     //                      </div>

//     //                      <div className="option">
//     //                          <input name="option" type="radio" className="optionInput" value="1"/>
//     //                          <label for="option1">{user.address.suite}</label>
//     //                      </div> 
//     //                  </div> 
//     //              </div>
//     //         ))}
        
//     // }

//     var visDiv=0;
    
//     function displayDiv(){
//         $(".third").hide();
//         $(".third:eq("+ visDiv +")").show();
//     }
//     displayDiv()

//     function NextQ() {
//         if(visDiv == $(".third").length-1){
//             visDiv=0;
//         }
//         else{
//             visDiv ++;
//         }
//         displayDiv();
//     }

//     function PrevQ() {
//         if(visDiv == 0){
//             visDiv=$(".third").length-1;
//         }
//         else{
//             visDiv --;
//         }
//         displayDiv();
//     }


//     function Markfor() {}
//     // = createContext();


//     return (

            
//         <div className="main-div">
//            <div className="categoryContainer">
//                 <Category/>
//            </div>
//                {
//                    users.map((user) => (
//                        <div className="second-div"> 
//                             <div className="third">
//                             <div className="quesdiv">
//                                 Ques-{user.Question.Title}
//                              </div>
//                                 <div className="option">
//                                     {/* <span>Q- {user.id} </span>
//                                     <p>{user.name}</p> */}
//                                     <input name="option" type="radio" className="optionInput" value="1"/>
//                                     <label for="option1">{user.Question.Category}</label>
//                                 </div>
                                
                                
//                                 <div className="option">
//                                     <input name="option" type="radio" className="optionInput" value="1"/>
//                                     <label for="option1">{user.Question.Category}</label>
//                                 </div>

//                                 <div className="option">
//                                     <input name="option" type="radio" className="optionInput" value="1"/>
//                                     <label for="option1">{user.Question.Category}</label>
//                                 </div>

//                                 <div className="option">
//                                     <input name="option" type="radio" className="optionInput" value="1"/>
//                                     <label for="option1">{user.Question.Category}</label>
//                                 </div> 
//                             </div> 
//                         </div>
//                    ))}
//                    <div className="btndiv">
//                     <button onClick={PrevQ} className="lastbtns" id="pre">Previous</button>
//                    <button   onClick={()=>Markfor()} className="lastbtns" id="mrk">Mark for review</button>
//                    <button onClick={NextQ} className="lastbtns" id="nxt">Next</button>
//                    </div>
                    
//         </div>
//     );
// }

// export default Testapi;




//new latest code

import React, { useState, useEffect, createContext } from 'react'
import "./Testapi.css";
import axios from 'axios';
import $ from "jquery";
import Category from "../Category/Category";
import { typography } from '@mui/system';
import { colors } from '@material-ui/core';
import Quesbar from '../quesbar/Quesbar';
import { create } from '@mui/material/styles/createTransitions';


export default function Testapi() {

    let url=window.location.href;
    url=url.split("/").pop();

    console.log(url.toString())
    let Language = url.toString();
    const [users, setUsers] = useState([]);
    const [singleusers, setSingleUsers] = useState([]);
    const [checked, setchecked] = useState(false);
    const [category, setCategory] = useState('html');
    const [refreshKey, setRefreshKey] = useState(0);

    console.log(category)

    useEffect(function(){
            axios.get("https://radiant-scrubland-91561.herokuapp.com/api/questions/search/" + category)
        .then(response => {
            console.log(response)
            setUsers(response.data)
        })
        .catch(error => console.log(error))
        
    },[refreshKey]);
    

        var visDiv=0;
    
    function displayDiv(){
        $(".third").hide();
        $(".third:eq("+ visDiv +")").show();
    }
    displayDiv()

    function NextQ() {
        if(visDiv == $(".third").length-1){
            visDiv=0;
        }
        else{
            visDiv ++;
        }
        displayDiv();
    }

    function PrevQ() {
        if(visDiv == 0){
            visDiv=$(".third").length-1;
        }
        else{
            visDiv --;
        }
        displayDiv();
    }


    function Markfor() {}


    const ischecked = () => {

                if(checked == true)
                setchecked(false);
                
                else
                setchecked(true);
                console.log(!checked);
            }
            
            const callAPI =()=>{
                  axios.get("https://radiant-scrubland-91561.herokuapp.com/api/questions/search/" + category)
                 .then(response => {
                 setUsers(response.data)
                 console.log("called")
                 setRefreshKey(oldKey => oldKey+1)
        })
        .catch(error => console.log(error))
            }

    return (
        <>
          <div className="main-div">
            <div className="categoryContainer">
            <button onClick={() => {setCategory("html"); callAPI();}}> HTML</button>
            <button onClick={() => {setCategory("CSS"); callAPI();}}> CSS</button>
            <button onClick={() => {setCategory("aptitude"); callAPI();}}> Aptitude</button>
            <button onClick={() => {setCategory({Language}); callAPI();}}>{url}</button>
           </div>
           
                {
                    users.map((user) => (
                        <div className="second-div"> 
                             <div className="third">
                             <div className="quesdiv">
                                 Ques-{user.Question.Title}
                              </div>
                              <div>
                                  {user.Options.map((option)=>(
                                      <div>
                                      <input name="option" type="radio" className="optionInput" value="1"/>
                                      <label for="option1">{option.title}</label>
                                      {/* <input  onChange = {ischecked} type="radio" id="list"  value="list"/>
                                      <label for="option1">{option.title}</label> */}
                                      
                                      </div>
                                  ))}
                              </div>
                             </div> 
                         </div>
                    ))}
                    <div className="btndiv">
                     <button onClick={PrevQ} className="lastbtns" id="pre">Previous</button>
                    <button   onClick={()=>Markfor()} className="lastbtns" id="mrk">Mark for review</button>
                    <button onClick={NextQ} className="lastbtns" id="nxt">Next</button>
                    </div>
                    
         </div>
        </>
    )
}
