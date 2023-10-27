import './Card.css';
import React,{ useEffect, useState } from 'react';
function Card({props}){
    const [Subject,setSubject]=useState("");
    const [Section,setSection]=useState("");
    const [Branch,setBranch]=useState("");
    const [Teacher,setTeacher]=useState("");
    useEffect(()=>{
        setSubject(props.Subject);
        setSection(props.Section);
        setBranch(props.Branch);
        setTeacher(props.Name);
    },[props]);
    
    return(
        <div className='wrapper2'>
        <div className="card">
              <div className='upperPartCard'>
                  <div className='subject'>{Subject}</div>
                  <div className='otherDetail'>
                  <div className='sectionCard'>Section {Section}</div>
                  <div className='branchCard'>Branch {Branch}</div>
                  </div>
              </div>
              <div className="lowerPartCard">
                      <img src="https://lh3.googleusercontent.com/a/default-user=s75-c" className="cardImage"></img>
                      <div className='teacher'>{Teacher}</div>

              </div>
              <div className='tilt'>
              </div>
        </div>
        </div>
    )

}

export default Card;