import './StudentPage.css';
import Card from './Card'

function StudentPage(){
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
                <Card></Card>
             </div>
        </div>
     )
}
export default StudentPage;