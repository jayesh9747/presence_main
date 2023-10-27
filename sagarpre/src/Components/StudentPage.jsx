import './StudentPage.css';
import {useState} from 'react';
import { useEffect } from 'react';
import Card from './Card'
import axios from 'axios';
function StudentPage(){
   const [classes,setClasses]=useState([]);
   async function getdatafromApi(){
      console.log("i am clling backend /cl")
      try{
      // const link="http://localhost:5000/teacher/class/cl";
      // const res = await fetch(link)
      // console.log("THis is response",res);
      const response = await axios.get("http://localhost:5000/student/class/cl", 
        { withCredentials: true},
       
        )
        console.log(response, ' ia m calss respne ');
        setClasses(response.data.classes);
      }
      catch(e){
         console.log(e);
      }
   };
   useEffect(()=>{
      getdatafromApi();
   },[]);
     return(
        <div className="mainPage">
             <div className="navBar">
                   <div className="logo"> <img src="logo.png" className="logoImage"></img></div>
                   <div className="right">
                       <div className="profile"><img src="profile.png" className="profilePhoto"></img></div>
                       <div className="joinClass">+</div>
                   </div>
             </div>
             <div className="cards">
               {console.log(classes)}
               {classes.map(element=>{
                  return(
                     <Card></Card>
                  )
               })}
                
             </div>
        </div>
     )
}
export default StudentPage;