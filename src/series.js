import { useState } from "react"
import HomeCard from "./homeCard"
import axios from "axios"
import './index.css'
export default function Series  ({setIsAdded, setText}) {
    let [seriesData, setSeriesData] = useState(null)
    
   let fun = async()=> { await axios.get("https://www.omdbapi.com/?s=superman&type=series&apikey=68e7a9af").then((Response)=> {
    setSeriesData(Response.data.Search)
}) }
    
  fun();
    return( 
        <div className="homeLayout">
            {
                seriesData?.map((eachSeries, index)=> (
                    <HomeCard title={eachSeries.Title} year={eachSeries.Year} setIsAdded={setIsAdded} setText={setText}
                    type={eachSeries.Type} poster={eachSeries.Poster} key={index} movie={eachSeries}/>
                ))
            }
        </div>
    )
}