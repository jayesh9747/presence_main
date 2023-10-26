import './Signup.css';
import React, { useState } from 'react';

function Signup() {
  const [user, setUser] = useState("Student");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  function teacherDetail() {
    setUser("Teacher");
  }

  function studentDetail() {
    setUser("Student");
  }
  function emailText(e){
    setEmail(e.target.value);
  }
  function passwordText(e){
    setPassword(e.target.value);
    console.log(password);
  }
  return (
    <div className="wrapper">
    <div className="LogIn">
      <img src="logo.png" className="projectName"></img>
      <h2 className="headingLogin">Choose Account Type</h2>
      <div className="accountType">
        <div
          className={`student user ${user === "Student" ? "selected" : ""}`}
          onClick={studentDetail}
        >
          <img src="student.png" alt="Student" />
          <div className="userName">Student</div>
        </div>
        <div
          className={`teacher user ${user === "Teacher" ? "selected" : ""}`}
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
          <label className="text">E-mail</label>
          <input
            type="text"
            placeholder="abcd@gmail.com"
            className="emailSec inputBox"
            onChange={emailText}
          ></input>
        </div>
        <div className="password">
          <label className="text">Password</label>
          <input
            type="password"
            placeholder="abc@123"
            className="passwordSec inputBox"
            onChange={passwordText}
          ></input>
        </div>
      </div>
      <div className="footer">
        <p>
          No account?<span className="spanTag"> Signup</span>
        </p>
        <button className="btn">Login</button>
      </div>
    </div>
    </div>
  );
}

export default Signup;
