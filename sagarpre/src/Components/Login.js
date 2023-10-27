import './Login.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import cookie from "react-cookie";
import Cookies from 'universal-cookie';
import axios from "axios"
function Login() {
  // const cookies = new Cookies(null,{ path: '/' });
  const navigat = useNavigate();
  const [loginFields,setLoginFileds]=useState({
    Role:"STUDENT",
    Email:"",
    Password:"",
  });
  function changeHandler(event){
    setLoginFileds(previous=>{
      return{
        ...previous,
        [event.target.name]:event.target.value
      }
    })
  }
  const [user, setUser] = useState("Student");
  function teacherDetail() {
    setUser("Teacher");
    setLoginFileds({
      ...loginFields,
      Role:"TEACHER"
    });
  }

  function studentDetail() {
    setUser("Student");
    setLoginFileds({
      ...loginFields,
      Role:"STUDENT"
    });
  }
  //submittinf forms details
  const [checkFileds,setCheckField]=useState(false);
  async function submitLoginFields(event){
    event.preventDefault();
    var AllComplete=true;
        for(const key in loginFields){
            if(loginFields[key]==""){
                setCheckField(true);
                AllComplete=false;
                setTimeout(()=>{setCheckField(false)},700);
            }
        }
        if(AllComplete){
          const response = await axios.post("http://localhost:5000/signin", 
          {
            data: {
               Email : loginFields.Email,
               Password : loginFields.Password,
               Role:loginFields.Role
            }
            },
            { withCredentials: true},
           
            )
          if(response){
            console.log(response);
            console.log(response.headers,"i am response headers");
            if(loginFields.Role==="TEACHER"){
            navigat('/StudentPage');
            }
            else if(loginFields.Role==="STUDENT"){
            navigat('/StudentPageII');
            }
          }
          console.log(response);
        console.log(loginFields);
        }
  }
  return (
    <div className='wrapper'>
    <form className="LogIn">
      <img src="logo.png" className="projectName"></img>
      <h2 className="headingLogin">Choose Account Type</h2>
      <div className="accountType"> 
        <div
          className={`user ${user === "Student" ? "selected" : ""}`}
          onClick={studentDetail}
        >
          <img src="student.png" alt="Student" />
          <div className="userName">Student</div>
        </div>
        <div
          className={`user ${user === "Teacher" ? "selected" : ""}`}
          onClick={teacherDetail}
        >
          <img src="teacher.png" alt="Teacher" />
          <div className="userName">Teacher</div>
        </div>
      </div>
      <div className="userDetail">
        <p>Hello {user}!</p>
        <p>Please fill out the form below to get started</p>
      </div>
      <div className="formSection">
        <div className="email">
          <label htmlFor="EMail" className="text">E-mail</label>
          <input
            type="text"
            name= "Email"
            id="Email"
            placeholder="abcd@gmail.com"
            className="emailSec inputBox"
            onChange={changeHandler}
          ></input>
        </div>
        <div className="password">
          <label htmlFor="Password" className="text">Password</label>
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="abc@123"
            className="passwordSec inputBox"
            onChange={changeHandler}
          ></input>
        </div>
        {checkFileds?(<span className='IncompleteSpan'>*** Please Complete All Fileds ***</span>):(" ")}
      </div>
      <div className="footer">
        <p>
          No account?<NavLink to="/signup"><span className="spanTag"> Signup</span></NavLink>
        </p>
        <button onClick={submitLoginFields} className="btn">Login</button>
      </div>
    </form>
    </div>
  );
}

export default Login;
