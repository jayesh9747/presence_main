import './App.css';
import SingUpForm from './Components/SignUpForm';
import ProfilePage from './Components/ProfilePage';
import ProfilePageStu from './Components/ProfilePage';
import JoinClass from './Components/JoinClass';
import {Routes,Route} from 'react-router-dom';

import TeacherUpdateRecord from './Components/TeacherUpdateRecord';
import { CookiesProvider } from "react-cookie";
import Login from './Components/Login';
import StudentPage from './Components/StudentPage';
import CreateForm from './Components/CreateClassForm';
import StudentProfile from './Components/StudentProfile';
import { useState } from 'react';
import SubClasses from './Components/SubClasses';
import StudentPageII from "./Components/StudentPageII";
import { useContext } from 'react';
import { AppContext } from './AppContext';
import StudentSubjectDetail from './Components/StudentSubjectDetail'
function App() {
  const {studentClasses,setStudentClasses,teacherClasses,setTeacherClasses}=useContext(AppContext);
  return (
    <div className="App">
      <Routes>
        {teacherClasses.map(ele=>{
          return(
            <Route path={`/studentPage/${ele._id}`} element={<SubClasses subData={ele.subclasses}/>}></Route>
          )
        })}
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={ <SingUpForm/>}></Route>
        <Route path="/StudentPage" element={<StudentPage/>}></Route>
        <Route path="/StudentPage/createclass" element={<CreateForm/>}></Route>
        <Route path="/StudentPage/profile" element={<ProfilePage/>}></Route>
        <Route path="/StudentPage/profile/editprofile" element={<StudentProfile/>}></Route>
        {/* --- */}
        <Route path="/StudentPageII" element={<StudentPageII/>}></Route>
        <Route path="/StudentPageII/profile" element={<ProfilePageStu/>}></Route>
        <Route path="/StudentPageII/joinclass" element={<JoinClass/>}></Route>
        <Route path="/studentSubjectDetail" element={<StudentSubjectDetail/>}></Route>
        {/* <Route path="/teacherupdaterecord" element={<TeacherUpdateRecord/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
