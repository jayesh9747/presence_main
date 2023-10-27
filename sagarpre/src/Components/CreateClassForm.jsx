import './CreateClassForm.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function ClassForm(){
    //use naviage hook
    const navigate=useNavigate();
    //class fileds
    const [classFileds,setClassFileds]=useState({
        AcademicYear:"",
        Section:"",
        Branch:"CSE",
        Subject:""
    })
    function changeHandler(event){
        setClassFileds(previous=>{
            return{
                ...previous,
                [event.target.name]:event.target.value
            }
        })
    }
    //submit data here 
    const [checkFileds,setCheckField]=useState(false);
    function submitClassForm(event){
        event.preventDefault();
        var AllComplete=true;
        for(const key in classFileds){
            if(classFileds[key]==""){
                setCheckField(true);
                AllComplete=false;
                setTimeout(()=>{setCheckField(false)},700);
            }
        }
        if(AllComplete){
        console.log(classFileds);
        }
    }
    return(
        <form className='ClassForm'>
            <div className='createClassHeading'>Create Class</div>
            <div className='classFromSection'>
                <label  htmlFor='AcademicYear'>Academic Year</label>
                <input  type="text" name="AcademicYear" id="AcademicYear" placeholder="Enter Academic Year" onChange={changeHandler} required></input>
            </div>
            <div className='classFromSection'>
                <label  htmlFor='Section'>Section</label>
                <input  type="text" name="Section" id="Section" placeholder="Enter Section" onChange={changeHandler} required></input>
            </div>
            <div className='classFromSection'>
                <label  htmlFor='Branch'>Branch</label>
                {/* <input  type="text" name="Branch" id="Branch" placeholder="Enter Branch" onChange={changeHandler} required></input> */}
                <select name="Branch" id="Branch" onChange={changeHandler}>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                </select>

            </div>
            <div className='classFromSection'>
                <label  htmlFor='Subject'>Subject</label>
                <input  type="text" name="Subject" id="Subject" placeholder="Enter Subject" onChange={changeHandler} required></input>
            </div>
            {checkFileds?(<span className='classFormIncompletemsg'>*** Please Complete All Fileds ***</span>):(" ")}
            <div className='CreateClassButtonSection'>
            <button onClick={()=>{navigate(-1)}}>Cancel</button>
            <button onClick={submitClassForm}>Create</button>
            </div>
        </form>
    )
};
export default ClassForm;
