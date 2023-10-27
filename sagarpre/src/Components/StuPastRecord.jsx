import {useState} from 'react';
import './StuPastRecord.css';
function StuPastRecord(){
    const [data,setData]=useState([{Name:"sagar",Email:"112215153@cse.iiitp.ac.in",date:"10/12/23",status:"P"},
    {Name:"sagar",Email:"112215153@cse.iiitp.ac.in",date:"11/12/23",status:"A"},
    {Name:"sagar",Email:"112215153@cse.iiitp.ac.in",date:"11/12/23",status:"A"},
    {Name:"sagar",Email:"112215153@cse.iiitp.ac.in",date:"11/12/23",status:"A"},
    {Name:"sagar",Email:"112215153@cse.iiitp.ac.in",date:"11/12/23",status:"A"},
    {Name:"sagar",Email:"112215153@cse.iiitp.ac.in",date:"11/12/23",status:"A"},
    {Name:"sagar",Email:"112215153@cse.iiitp.ac.in",date:"11/12/23",status:"A"},
    {Name:"sagar",Email:"112215153@cse.iiitp.ac.in",date:"11/12/23",status:"A"},
    {Name:"sagar",Email:"112215153@cse.iiitp.ac.in",date:"11/12/23",status:"A"},
    {Name:"sagar",Email:"112215153@cse.iiitp.ac.in",date:"11/12/23",status:"A"},
    {Name:"sagar",Email:"112215153@cse.iiitp.ac.in",date:"11/12/23",status:"A"},
    {Name:"sagar",Email:"112215153@cse.iiitp.ac.in",date:"11/12/23",status:"A"},
    {Name:"sagar",Email:"112215153@cse.iiitp.ac.in",date:"11/12/23",status:"A"}]);
    return(
        <div className="studentPastRecord">
            <div className='studentPastRecordHeader'>
                <div className='stuDetails'>
                    <p>{data[0].Name}</p>
                    <span>{data[0].Email}</span>
                </div>
                <div className='attendancePercentage'>
                    <span>Attendance</span>
                    <p>percentage</p>
                </div>
            </div>
            <div className='studentPastRecordBody'>
                <div className='recordsAttribute'>
                    <div>Date</div>
                    <div>Present</div>
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
export default StuPastRecord;