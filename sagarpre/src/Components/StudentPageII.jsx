import './StudentPage.css';
import {useState} from 'react';
import { useEffect } from 'react';
import Card from './Card'
import axios from 'axios';
import {Routes,Route} from 'react-router-dom';
import SubClasses from './SubClasses';
import {Link} from 'react-router-dom';
import {NavLink}  from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
function StudentPage(){
   const [classes,setClasses]=useState([]);
   const {studentClasses,setStudentClasses,teacherClasses,setTeacherClasses}=useContext(AppContext);
   async function getdatafromApi(){
      try{
         console.log('i am  in try blovk')
         const response = await axios.get("http://localhost:5000/student/class/cl");
        console.log("api called");
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
                   <div className="logo"><img src="logo.png" className="logoImage"></img></div>
                   <div className="right">
                      <NavLink to="/StudentPageII/profile"> <div className="profile"><img src="profile.png" className="profilePhoto"></img></div></NavLink>
                      <NavLink to="/StudentPageII/joinclass"><div className="joinClass">+</div></NavLink> 
                   </div>
             </div>
             <div className="cards">
               {console.log(classes)}
               {console.log(teacherClasses)}
               {classes.map(element=>{
                  return(
                     <NavLink to={``}>
                     <Card key={element._id} props={element}></Card>
                     </NavLink>
                  )
                })
               }
                
             </div>
        </div>
     )
}
export default StudentPage;