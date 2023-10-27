import './ProfilePage.css';
import React,{ useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
export default function ProfilePageStu(){
    const [Name,setname]=useState("");
    const [Email,setEmail]=useState("");
    const [MisNo,setMIS]=useState("");
    const [Department,setdepartment]=useState("CSE");
    const [Degree,setdegree]=useState("");
    const [AcademicYear,setAcademicYear]=useState("");
    const [Branch,setbranch]=useState("");
    async function getinfoAPI(){
        console.log('khkhk')
        try{
        const response = await axios.get("http://localhost:5000/student/cl");
        console.log("asdfgh",response);
        const obj=response.data.teacher; 
        setname(obj.Name);
        setEmail(obj.Email);
        setMIS(obj.Tid);
        }
        catch(e){
          console.log(e);  
        }
        }
    useEffect(()=>{
        getinfoAPI();
    },[]);
    return(
        <div className="profilePP">
            <div className="upperPart">
                <div className="image"><img src="https://wallpapers.com/images/hd/cartoon-profile-pictures-3opqz8op53khmhjp.jpg" className="photo"></img></div>
                <div className="nameAndemail">
                    <div className="name">{Name}</div>
                    <div className="email">{Email}</div>
                    <NavLink to="/StudentPage/profile/editprofile"><button className='profilePageEditButton'>Edit</button></NavLink>
                </div>
            </div>
            <div className="lowerPart">
                {/* <div className="details"> */}
                    <p className="detail"><span className='Att'>MIS:</span><span className='val'>{MisNo}</span></p>
                    <p className="detail"><span className='Att'>Department:</span><span className='val'> {Department}</span></p>
                    <p className="detail"><span className='Att'>Degree: </span><span className='val'>{Degree}</span></p>
                    <p className="detail"><span className='Att'>Admission AcademicYear:</span><span className='val'> {AcademicYear}</span></p>
                    <p className="detail"><span className='Att'>Branch: </span><span className='val'>{Branch}</span></p>
                {/* </div> */}
            </div>

        </div>
    )
};