import "./SubClass.css";
export default function SubClasses({subData}){
    return(
        <div className="subClassWrapper">
            <ol className="listContainer">
           { subData.map((element)=>{
                 return(
                    <li  className="subdiv" key={element._id}>
                        <p>{element.date.substring(0,9)}</p>
                        <p>{element.date.substring(11,18)}</p>
                    </li>
                 )
            })
           }
        </ol>
        </div>
    )
};