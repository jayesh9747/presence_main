import './App.css';
import Login from '../../sagarpre/src/Components/Login'
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
