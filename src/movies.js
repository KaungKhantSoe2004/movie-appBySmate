import { useState } from "react"
import HomeCard from "./homeCard"
import axios from "axios"
import './index.css'
export default function Movie ({setIsAdded, setText}) {
    let [movieData, setMovieData] = useState(null);
  let fun = async()=> {
    await   axios.get("https://www.omdbapi.com/?s=Batman&type=movie&apikey=68e7a9af").then((Response)=> {
        setMovieData(Response.data.Search)
    })
  }
  fun();
    return( 
        <div className="homeLayout">
            {
                movieData?.map((eachMovie, index)=> (
                    <HomeCard title={eachMovie.Title} year={eachMovie.Year} setIsAdded={setIsAdded} setText={setText}
                    type={eachMovie.Type} poster={eachMovie.Poster} key={index} movie={eachMovie}/>
                ))
            }
        </div>
    )
}