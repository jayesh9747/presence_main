import "./JoinClass.css"
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
export default function JoinClass(){
    //navigateback
    const [field,setFiled]=useState({Name:"Sagar",Email:"112215153@cse.iiitp.ac.in"});
    const navigate=useNavigate();
    //classcode
    const [classCode,setClassCode]=useState("");
    //submit class code
    function submitCode(){
        console.log(classCode);
    }
    return(
        <div className="JoinClass">
            <div className="JoinClassNavBar">
                <div>
                    <img src="crossIcon.png" onClick={()=>{navigate(-1)}}></img>
                    <span>Join Class</span>
                </div>
                <button onClick={submitCode}>JOIN</button>
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