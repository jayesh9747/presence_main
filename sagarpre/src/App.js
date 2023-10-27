import './App.css';
import SingUpForm from './Components/SignUpForm';
import ProfilePage from './Components/ProfilePage';
import JoinClass from './Components/JoinClass';
import {Routes,Route} from 'react-router-dom';
import StuPastRecord from './Components/StuPastRecord';
import TeacherUpdateRecord from './Components/TeacherUpdateRecord';
import StudentPage from './Components/StudentPage';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/StudentPage" element={<StudentPage/>}></Route>
        <Route path="/s" element={ <JoinClass/>}></Route>
        <Route path="/signup" element={ <SingUpForm/>}></Route>
        <Route path="/profile" element={<ProfilePage/>}></Route>
        <Route path="/studentpastrecord" element={<StuPastRecord/>}></Route>
        <Route path="/teacherupdaterecord" element={<TeacherUpdateRecord/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
