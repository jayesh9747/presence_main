import { createContext} from "react";
import {useState} from 'react';
export const AppContext=createContext();
export default function AppContextProvider({children}){
    const [teacherClasses,setTeacherClasses]=useState([]);
    const [studentClasses,setStudentClasses]=useState([]);
    const value={teacherClasses,setTeacherClasses};
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}