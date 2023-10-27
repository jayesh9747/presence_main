import { useState } from "react";
export default function(){
    const [totalMarked,setTotalMarked]=useState("0");

    const [data,setData]=useState([
        {Misno:123,
        Name:"sagar",
        status:"P"},
        {Misno:122,
            Name:"sahil",
            status:"A"},
    ]);
    //chagnehandler function
    function changeHandler(val,index){
        const obj={...data};
        obj[index].status=val;
        // setData(obj);
        console.log(obj);
    }

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
                    <div>Present</div>
                    <div>Absent</div>
                </div>
                {data.map((element,index)=>{
                    return(
                        <div className='records' key={index}>
                        <div>{element.Misno}</div>
                        <div>{element.Name}</div>
                        <div><span className="alpha" onClick={()=>{changeHandler("P",index)}}></span></div>
                        <div><span className="alpha" onClick={()=>{changeHandler("A",index)}}></span></div>

                        </div>
                    )
                 })
                }
            </div>
        </div>
    )
}; 