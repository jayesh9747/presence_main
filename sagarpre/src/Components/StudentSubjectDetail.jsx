import './StudentSubjectDetail.css';
import './StudentPage.css';
import MarkAttendance from './MarkAttendance';
function StudentSubjectDetail(){
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
                       <div className='pastRecord'>View Past Record</div>
                       <div className='markAttendance'>Mark Attendance</div>
                   </div>
                   <div className='lowerPartStuSubDet'>
                        <MarkAttendance></MarkAttendance>
                   </div>


               </div>
        </div>
     )
}

export default StudentSubjectDetail;