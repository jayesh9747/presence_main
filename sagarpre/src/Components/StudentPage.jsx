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
   const {teacherClasses,setTeacherClasses}=useContext(AppContext);
   async function getdatafromApi(){
      try{
         console.log('i am  in try blovk')
         const response = await axios.get("http://localhost:5000/teacher/class/cl");
        console.log("api called");
        console.log(response, ' ia m calss respne ');
        setClasses(response.data.class);
      setTeacherClasses(response.data.class);
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
                      <NavLink to="/StudentPage/profile"> <div className="profile"><img src="profile.png" className="profilePhoto"></img></div></NavLink>
                      <NavLink to="/StudentPage/createclass"><div className="joinClass">+</div></NavLink> 
                   </div>
             </div>
             <div className="cards">
               {console.log(teacherClasses)}
               {teacherClasses.map(element=>{
                  return(
                     <NavLink to={`/studentPage/${element._id}`}>
                     <Card key={element._id} props={element}></Card>
                     </NavLink>
                     // // <div>
                     // {/* <Routes> */}
                     // {/* <Route to={`/StudentPage/${element._id}`} element={<SubClasses subData={element.subclasses}/>}></Route> */}
                     // {/* <Link to={`/StudentPage/${element._id}`}> */}
                     // {/* </Link>   */}
                     // {/* </Routes> */}
                     // {/* </div>   */}
                  )
               })}
                
             </div>
        </div>
     )
}
export default StudentPage;