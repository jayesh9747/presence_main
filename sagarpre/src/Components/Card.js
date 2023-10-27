import './Card.css';
import React,{ useState } from 'react';
function Card(){
    const [Subject,setSubject]=useState("Python");
    const [Section,setSection]=useState("B");
    const [Branch,setBranch]=useState("CSE");
    const [Teacher,setTeacher]=useState("Bhupendra Sir")

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