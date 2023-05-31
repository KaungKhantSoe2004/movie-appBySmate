import logo from './logo.svg';
import './index.css';
import { useEffect, useReducer, useState } from 'react';
import NavBar from './navBar';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import HomeCard from './homeCard';
import axios from "axios";
import Series from './series';
import Favourites from './favourite';
import Movie from './movies';
import { ApiCall } from './api';
function App() {
  let [isAdded, setIsAdded] = useState(false);
  let [text, setText] = useState("ok");
  let [data, setData] = useState(null);
  console.log(isAdded)
  return( <div className='app'>
 <div className="toastAlert"  style={{
    top: isAdded? "-9px" : "-50px"
    }}>{text}</div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar setData={setData} />}>
  <Route index element={<Home data={data} setData= {setData} setIsAdded={setIsAdded} setText={setText}/>} />
  <Route path='series' element={<Series setIsAdded={setIsAdded} setText={setText}/>}/>
  <Route path='favourites' element={<Favourites/>} />
  <Route path='movie' element={<Movie setIsAdded={setIsAdded} setText={setText}/>} />
      </Route>
    </Routes>
    </BrowserRouter>
      </div>
    );
  }
const Home = ({ data, setData, setIsAdded, setText})=> {
 

  useEffect(  ()=> {
axios.get(`https://www.omdbapi.com/?s=Godzilla&apikey=68e7a9af` ).then((Response)=> {
   setData(Response.data.Search)
    })
  }, [])
  return(
    <div className='homeLayout'>
    {
              data?.map((movie, index) => <HomeCard key={index} setText={setText} setIsAdded={setIsAdded} poster={movie.Poster} title={movie.Title} year={movie.Year} type={movie.Type} movie={movie}/>)
    }
    {data===null && <h1>Loading</h1>}
    {data?.length === 0 && <h1>No Movies</h1>}
    </div>
  )
}


export default App;
