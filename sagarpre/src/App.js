import './App.css';
import SingUpForm from './Components/SignUpForm';
import {Routes,Route} from 'react-router-dom';
import Login from './Components/Login'
//check
import ClassForm from './Components/CreateClassForm';
//check
// import StudentProfileForm from './Components/StudentProfile';
import StudentPage from './Components/StudentPage'
import StudentSubjectDetail from './Components/StudentSubjectDetail';
function App() {
  return (
    <div className="App">
       <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={ <SingUpForm/>}></Route>
      </Routes>
      {/* <ClassForm/> */}
      {/* <StudentProfileForm/> */}
      {/* <StudentPage></StudentPage> */}
      {/* <StudentSubjectDetail></StudentSubjectDetail> */}
      
    </div>
  );
}

export default App;
