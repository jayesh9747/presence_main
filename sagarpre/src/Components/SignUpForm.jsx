import './SignUpForm.css';
import {useState} from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
export default function SingUpForm(){
    const navigat=useNavigate();
    const [signUpFields,setSignUpFileds]=useState({
        Name:"",
        Email:"",
        MAC:"",
        Password:"",
        MisNo:"1",
        Role:"STUDENT",
        TID:"1",
    });
    function changeHandler(event){
        setSignUpFileds(previous=>{
            return{
                ...previous,
                [event.target.name]:event.target.value
            }
        });
    }
    //maintaing role input section
    const [toDisplay,setToDisplay]=useState(false);
    useEffect(()=>{
        console.log("Role changeg")
        setToDisplay(!toDisplay);
    },[signUpFields.Role]);
    //submit data here 
    const [checkFileds,setCheckField]=useState(false);
    function submitSignUp(event){
        console.log("enter inside");
         event.preventDefault();
        var AllComplete=true;
        for(const key in signUpFields){
            if(signUpFields.Role==="STUDENT"&&key==="TID"){
                continue;
            }
            else if(signUpFields.Role==="TEACHER"&&key==="MisNo"){
                continue;
            }
            if(signUpFields[key]==""){
                setCheckField(true);
                AllComplete=false;
                setTimeout(()=>{setCheckField(false)},700);
            }
        }
        if(AllComplete){
            async function submitLoginFields(){
                console.log("aagya");
                var AllComplete=true;
                    for(const key in signUpFields){
                        if(signUpFields[key]==""){
                            setCheckField(true);
                            AllComplete=false;
                            setTimeout(()=>{setCheckField(false)},700);
                        }
                    }
                    console.log('kjkhjkhjk');
                    if(AllComplete){
                        console.log('khkhnk');
                      const response = await axios.post("http://localhost:5000/signup", 
                      {
                        data: {
                           Name : signUpFields.Name,
                           Email: signUpFields.Email,
                           MAC: signUpFields.MAC,
                           Password: signUpFields.Password,
                           Role: signUpFields.Role,
                           MisNo: signUpFields.MisNo,
                           TID: signUpFields.TID
                        }
                        },
                        { withCredentials: true},
                        )
                      if(response){
                        console.log(response);
                        console.log(response.headers,"i am response headers");
                        if(signUpFields.Role==="TEACHER"){
                        navigat('/StudentPage');
                        }
                        else if(signUpFields.Role==="STUDENT"){
                        navigat('/StudentPageII');
                        }
                      }
                      console.log(response);
                    }
              }
            //   useEffect(()=>{
               submitLoginFields();
            //   },[]);
        console.log(signUpFields);
        }
    }
    return(

        <div className="wrapper4">
            <form className="signUpForm">

            <div className='sections'>
                <label htmlFor='Role'>Role</label>
                <select name="Role" id="Role" value={signUpFields.Role} onChange={changeHandler}>
                    <option value="STUDENT">STUDENT</option>
                    <option value="TEACHER">TEACHER</option>
                </select>
            </div>
            <div className='sections'>
                <label className="inputLabels" htmlFor='name'>Name</label>
                <input className="inputfileds" type="text" name="Name" id="Name" placeholder="Enter your Name" onChange={changeHandler} required></input>
            </div>
            <div className='sections'>
                <label htmlFor='Email'>Email</label>
                <input type="email" name="Email" id="Email" placeholder="Enter your EMail" onChange={changeHandler}></input>
            </div>
            <div className='sections'>
                <label htmlFor='MAC'>MAC</label>
                <input type="text" name="MAC" id="MAC" placeholder="MAC" onChange={changeHandler}></input>
            </div>
            <div className='sections'>
                <label htmlFor='Password'>Password</label>
                <input type="password" name="Password" id="Password" placeholder="Enter Password" onChange={changeHandler}></input>
            </div>
            {toDisplay?
            ( <div className='sections'>
            <label htmlFor='MisNo'>MisNo</label>
            <input type="number" name="MisNo" id="MisNo" placeholder="Enter your student MIS NO" onChange={changeHandler}></input>
              </div>):
            ( <div className='sections'>
            <label htmlFor='TID'> TID</label>
            <input type="number" name="TID" id="TID" placeholder="Enter your Teacher ID" onChange={changeHandler}></input>
            </div>)
            }
            {checkFileds?(<span>*** Please Complete All Fileds ***</span>):(" ")}
            <input type="submit" onClick={submitSignUp} className='submitButton' value="SIGN UP"></input>
            
            
        </form>

        </div> 

    )
}