import { Children, useState } from "react"
import "./index.css"
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import axios from "axios";
export default  function NavBar({setData}){
 
const handleToHome = ()=> {
    axios.get(`https://www.omdbapi.com/?s=Godzilla&apikey=68e7a9af`).then((Response)=> {{ setData(Response.data.Search)}
  
   
 })
}

    const handleInput = (value)=> {
 axios.get(`https://www.omdbapi.com/?s=${value}&apikey=68e7a9af`).then((Response)=> {
   if(Response.data.Search){
    setData(Response.data.Search)
   }
   else{
setData([])
   }
 })
    
    }
    return (<div>
            <div className="navBar">
              
        <NavLink to="/" >  <img src="https://th.bing.com/th/id/OIP.OK9pwXPkqDj4b0QakH-BdwAAAA?w=203&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="logo" onClick={
                ()=> {
 handleToHome()
                }
            }></img></NavLink> 
        <NavLink to="movie" className={({isActive})=> (isActive? "active": "notActive")}> <div>Movies</div></NavLink>
       <NavLink to="series" className={({isActive})=> (isActive? "active": "notActive")}>  <div>Series</div></NavLink>
       <NavLink to="favourites" className={({isActive})=> (isActive? "active" : "notActive")}><div>Favourites</div></NavLink>
         <input placeholder="...search" type="email" onKeyDown={
    (e)=> {
        if (e.key === "Enter"){
           handleInput(e.target.value)
        }
    }
         }></input>
 
      </div> 
     <Outlet />
    </div>

    )
}