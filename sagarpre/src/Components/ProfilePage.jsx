import './ProfilePage.css';
import React,{ useState } from 'react';
function ProfilePage(){
    const [Name,setname]=useState("");
    const [Email,setEmail]=useState("");
    const [MisNo,setMIS]=useState("");
    const [Department,setdepartment]=useState("");
    const [Degree,setdegree]=useState("");
    const [AcademicYear,setAcademicYear]=useState("");
    const [Branch,setbranch]=useState("");



    return(
        <div className="profile">
            <div className="upperPart">
                <div className="image"><img src="https://wallpapers.com/images/hd/cartoon-profile-pictures-3opqz8op53khmhjp.jpg" className="photo"></img></div>
                <div className="nameAndemail">
                    <div className="name">{Name}Sahil</div>
                    <div className="email">{Email}singhsahil8400</div>
                </div>
            </div>
            <div className="lowerPart">
                {/* <div className="details"> */}
                    <p className="detail"><span className='Att'>MIS:</span><span className='val'>{MisNo} 112215155</span></p>
                    <p className="detail"><span className='Att'>Department:</span><span className='val'> {Department} cse</span></p>
                    <p className="detail"><span className='Att'>Degree: </span><span className='val'>{Degree} B.Tech</span></p>
                    <p className="detail"><span className='Att'>Admission AcademicYear:</span><span className='val'> {AcademicYear} 2022</span></p>
                    <p className="detail"><span className='Att'>Branch: </span><span className='val'>{Branch} CSE</span></p>
                {/* </div> */}
            </div>

        </div>
    )
};
export default ProfilePage;