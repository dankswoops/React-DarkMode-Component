import React,{useState,useEffect} from 'react';
import './darkmode.css';
export default function Darkmode(){
    const getTheme=()=>{
        return JSON.parse(localStorage.getItem("theme"))||false
    }
    const [theme,setTheme]=useState(getTheme());
    useEffect(()=>{
        localStorage.setItem("theme",JSON.stringify(theme))
    },[theme])
    return (
        <>
            <div className={theme ? "theme-dark":""}>
                <div className="content-bg-color main content">
                    <h1>Text</h1>
                    <input type="checkbox" onChange={()=>setTheme(!theme)} checked={theme?"true":""}/>
                </div>
            </div>
        </>
    )
}