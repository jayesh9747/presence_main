import "./JoinClass.css"
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
export default function JoinClass(){
    //navigateback 
    const [field,setFiled]=useState({Name:"Sagar",Email:"112215153@cse.iiitp.ac.in"});
    const navigate=useNavigate();
    //classcode
    const [classCode,setClassCode]=useState("");
    //submit class code
    async function getData(){
        console.log("kjhk");
        try{
        const response = await axios.post("http://localhost:5000/student/jc", 
          { 
            data:{
                CID : classCode,
            }
            },
            { withCredentials: true},
            )
          if(response){
            console.log(response);
            console.log(response.headers,"i am response headers");
            alert(Object.values(response.data));
            // if(response.data.msg){
            //     alert(response.data.msg);
            // }
            // else if(response.data.Error){
            //     alert(response.data[Error]);
                
            // }
            // navigat('/StudentPage');
          }
          console.log(response);
        }
        catch(e){
            console.log(e);
        }
    }
    return(
        <div className="JoinClass">
            <div className="JoinClassNavBar">
                <div>
                    <img src="crossIcon.png" onClick={()=>{navigate(-1)}}></img>
                    <span>Join Class</span>
                </div>
                <button onClick={getData}>JOIN</button>
            </div>
            <div className="joinClassSub1">
             <p>You are currently As:</p>
                <div className="joinClassSub1sub">
                    <div>
                        <img src="profile1.png"></img>
                    </div>
                    <div>
                        <p>{field.Name}</p>
                        <span>{field.Email}</span>
                    </div>
                 </div>
            </div>
            <div className="joinClassSub1 temp">
                <p>Class Code</p>
                <span>Ask yout techer for the class code,then enter it here</span>
                <input type="text" onChange={(event)=>{setClassCode(event.target.value)}}></input>
            </div>
            <div className="joinClassSub2">
                <span>To signin with a class code</span>
                <ul>
                    <li>Use an authorised account</li>
                    <li>Use a class code with 5-7 letters or numbers, and no spaces or symbols</li>
                </ul>
            </div>
        </div>
    )
}