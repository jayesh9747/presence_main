import './CreateClassForm.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function StudentProfileForm(){
    //use naviage hook
    const navigate=useNavigate();
    //class fileds
    const [studentsFileds,setStudentsFileds]=useState({
        Name:"",
        Email:"",
        MisNo:"",
        Department:"",
        Degree:"",
        AcademicYear:"",
        Branch:""
    })
    function changeHandler(event){
        setStudentsFileds(previous=>{
            return{
                ...previous,
                [event.target.name]:event.target.value
            }
        })
    }
    //submit data here 
    const [checkFileds,setCheckField]=useState(false);
    function submitStudentProfileForm(event){
        event.preventDefault();
        var AllComplete=true;
        for(const key in studentsFileds){
            if(studentsFileds[key]==""){
                setCheckField(true);
                AllComplete=false;
                setTimeout(()=>{setCheckField(false)},700);
            }
        }
        if(AllComplete){
        console.log(studentsFileds);
        }
    }
    return(
        <form className='ClassForm'>
            <div className='createClassHeading'>Set Your Profile</div>
            <div className='classFromSection'>
                <label  htmlFor='Name'>Your Name</label>
                <input  type="text" name="Name" id="Name" placeholder="Enter Your Name" onChange={changeHandler} required></input>
            </div>
            <div className='classFromSection'>
                <label  htmlFor='Email'>EMail</label>
                <input  type="text" name="Email" id="Email" placeholder="Enter EMail" onChange={changeHandler} required></input>
            </div>
            <div className='classFromSection'>
                <label  htmlFor='MisNo'>MIS NO</label>
                <input  type="text" name="MisNo" id="MisNo" placeholder="Enter MIS NO" onChange={changeHandler} required></input>
            </div>
            <div className='classFromSection'>
                <label  htmlFor='Department'>Department</label>
                <input  type="text" name="Department" id="Department" placeholder="Enter Your Department" onChange={changeHandler} required></input>
            </div>
            <div className='classFromSection'>
                <label  htmlFor='Degree'>Degree</label>
                {/* <input  type="text" name="Branch" id="Branch" placeholder="Enter Branch" onChange={changeHandler} required></input> */}
                <select name="Degree" id="Degree" onChange={changeHandler}>
                    <option value="BTECH">BTECH</option>
                    <option value="MTECH">MTECH</option>
                </select>

            </div>
            <div className='classFromSection'>
                <label  htmlFor='AcademicYear'>Admission Academic Year</label>
                <input  type="number" placeholder="YYYY" min="1999" max="2023" name="AcademicYear" id="AcademicYear" onChange={changeHandler} required></input>
            </div>
            <div className='classFromSection'>
                <label  htmlFor='Branch'>Branch</label>
                {/* <input  type="text" name="Branch" id="Branch" placeholder="Enter Branch" onChange={changeHandler} required></input> */}
                <select name="Branch" id="Branch" onChange={changeHandler}>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                </select>

            </div>
            
            {checkFileds?(<span className='classFormIncompletemsg'>*** Please Complete All Fileds ***</span>):(" ")}
            <div className='CreateClassButtonSection'>
            <button onClick={()=>{navigate(-1)}}>Cancel</button>
            <button onClick={submitStudentProfileForm}>Set Profile</button>
            </div>
        </form>
    )
};
export default StudentProfileForm;
