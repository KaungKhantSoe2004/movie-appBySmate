import { useEffect, useState } from "react"
import "./index.css"
import axios from "axios";
import { ApiCall } from "./api";
let FvCard = ({movie, setFvData})=> {
let handleDelete =async (movie)=> {
let id = movie.id;
console.log(movie.id)
 await axios.delete(`http://localhost:3000/favorites/${id}`)
 await axios.get(` http://localhost:3000/favorites`).then((Response)=> {
            console.log(Response.data)
            setFvData(Response.data)
              })
}
let handleEdit =async (movie)=> {
await axios.put(`http://localhost:3000/favorites/${movie.id}`, {...movie, Title:"Naruto"})
await axios.get(` http://localhost:3000/favorites`).then((Response)=> {
  console.log(Response.data)
  setFvData(Response.data)
    })
}
    return(
        <div className="homeCard">
        
        <img src={movie.Poster} className="img"></img>
        <div>Title: {movie.Title}</div>
        <div>Year:{movie.Year}</div>
        <div>Type: {movie.Type}</div>
        <button className="delete" onClick={()=> {handleDelete(movie)}}>Delete</button>
        <button onClick={()=> {
          handleEdit(movie)
        }}>Edit</button>
     </div>  
    )
}

export default function Favourites (){
let  [fvData, setFvData] = useState([]);
 /*const loadData = ()=> {
 const data=  ApiCall(`http://localhost:3000/favorites`, "get")
  console.log(data)
  setFvData(data)
}*/

         useEffect(()=> {
      
         axios.get(` http://localhost:3000/favorites`).then((Response)=> {
            console.log(Response.data)
            setFvData(Response.data)

              })}, [])
              
            return(
              <div className='homeLayout'>
              {
                     fvData?.map((movie, index) =>( <FvCard movie={movie}  key={index} setFvData={setFvData}/>) )
              }
              {fvData?.length === 0 && <h1>No Movies</h1>}
              </div>
            )
        
    
}