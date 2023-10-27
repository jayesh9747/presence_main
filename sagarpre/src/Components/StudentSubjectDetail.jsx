import './StudentSubjectDetail.css';
import './StudentPage.css';
import MarkAttendance from './MarkAttendance';
import StuPastRecord from './StuPastRecord';
import {useState} from 'react';
export default function StudentSubjectDetail(){
  const [activeTab,setActiveTab]=useState("markAttendence");
     return(
        <div className="wrapper3">
               <div className='subjectDetail'>
                  <div className="navBar">
                     <div className="logo"> <img src="logo.png" className="logoImage"></img></div>
                     <div className="right">
                       <div className="profile"><img src="profile.png" className="profilePhoto"></img></div>
                       <div className="joinClass">+</div>
                     </div>
                  </div>
                   <div className='upperPartStuSubDet'>
                       <div className='leftPartStuSubDet'>Python Programming</div>
                       <div className='rightPartStuSubDet'>                  
                         Bhupendra Sir
                       </div>
                   </div>

                   <div className='middlePartStuSubDet'>
                       <div className='pastRecord' onClick={()=>{setActiveTab("pastRecord")}}>View Past Record</div>
                       <div className='markAttendance' onClick={()=>{setActiveTab("markAttendence")}}>Mark Attendance</div>
                   </div>
                   <div className='lowerPartStuSubDet'>
                        {(activeTab==="markAttendence"?(<MarkAttendance/>):"")}
                        {(activeTab==="pastRecord"?( <StuPastRecord/>):"")}
                       
                   </div>


               </div>
        </div>
     )
};
