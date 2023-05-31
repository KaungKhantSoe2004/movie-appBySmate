import axios from "axios"
import "./index.css"
import { useNavigate } from "react-router-dom";
export default function HomeCard({title, year, poster, type, movie, setIsAdded, setText}) {
    let navigate = useNavigate();
    const handleFavourite =async ()=> {
 await axios.post(' http://localhost:3000/favorites', movie);
console.log(movie)

setIsAdded(true)
setText(`${movie.Title} is added to Favorites`)
setTimeout(()=> {
setIsAdded(false)
}, 4000)
    }
return(
    <div className="homeCard">
<img src={poster} className="img"></img>
<div>Title: {title}</div>
<div>Year:{year}</div>
<div>Type: {type}</div>
<button onClick={(movie)=> {
    handleFavourite(movie)
}}>Add toFavourites</button>
    </div>
)
}