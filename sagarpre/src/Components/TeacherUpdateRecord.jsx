import { useState } from "react";
export default function(){
    const [totalMarked,setTotalMarked]=useState("0");
    const [data,setData]=useState([{}]);
    return(
        <div className="TeacherUpdateRecord">
            <div className="teacherUpdateSub1">
                <p>{totalMarked}</p>
                <span>Students Marked Attendence</span>
            </div>
            <div className="teacherUpdateSub2">
                <div className='recordsAttribute'>
                    <div>MisNO</div>
                    <div>Name</div>
                    <div>Absent</div>
                </div>
                {data.map(element=>{
                    return(
                        <div className='records'>
                        <div>{element.date}</div>
                        <div className='present'>{element.status=="P"?("P"):("")}</div>
                        <div className='absent'>{element.status=="A"?("A"):("")}</div>
                        </div>
                    )
                 })
                }
            </div>
        </div>
    )
}; 