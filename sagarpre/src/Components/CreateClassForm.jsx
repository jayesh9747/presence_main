import './CreateClassForm.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function ClassForm(){
    //use naviage hook
    const navigate=useNavigate();
    //class fileds
    const [classFileds,setClassFileds]=useState({
        Name:"",
        Section:"",
        // Branch:"CSE",
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
    async function submitClassForm(event){
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
            const response = await axios.post("http://localhost:5000/teacher/class/nc", 
            {
              body: {
                Section :classFileds.Section,
                Name: classFileds. Name,
                Subject:classFileds.Subject
              }
              },
              { withCredentials: true},
             
              )
            if(response){
              console.log(response);
              console.log(response.headers,"i am response headers");
            //   navigat('/StudentPage');
            }

            console.log(classFileds);
        }
    }
    return(
        <div className='wrapper4 wrapper5'>
        <form className='ClassForm signUpForm'>
            <div className='createClassHeading'>Create Class</div>
            <div className='classFromSection sections'>
                <label  htmlFor='Name'>Name</label>
                <input  type="text" name="Name" id="Name" placeholder="Enter Class Name" onChange={changeHandler} required></input>
            </div>
            <div className='classFromSection sections'>
                <label  htmlFor='Section'>Section</label>
                <input  type="text" name="Section" id="Section" placeholder="Enter Section" onChange={changeHandler} required></input>
            </div>
            {/* <div className='classFromSection'>
                <label  htmlFor='Branch'>Branch</label>
                <select name="Branch" id="Branch" onChange={changeHandler}>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                </select>
            </div> */}
            <div className='classFromSection sections'>
                <label  htmlFor='Subject'>Subject</label>
                <input  type="text" name="Subject" id="Subject" placeholder="Enter Subject" onChange={changeHandler} required></input>
            </div>
            {checkFileds?(<span className='classFormIncompletemsg'>*** Please Complete All Fileds ***</span>):(" ")}
            <div className='CreateClassButtonSection sections'>
            <button onClick={()=>{navigate(-1)}} className='submitButton'>Cancel</button>
            <button onClick={submitClassForm} className='submitButton'>Create</button>
            </div>
        </form>
        </div>
    )
};
export default ClassForm;
