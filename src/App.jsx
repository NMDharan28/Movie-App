import React, {useState,useEffect} from "react";
import MovieCard from './MovieCard.jsx';
import './App.css';
import SearchIcon from './search.svg';


const API_URL='https://www.omdbapi.com?apikey=f4cd2aa8';



function App()
{
  const [searchTerm,setsearchTerm]=useState("");
  const [movies,setmovies]=useState([]);

  useEffect(()=>{
    searchMovies("Avengers");
  },[]);



  const searchMovies= async (title)=>{
    const response = await fetch (`${API_URL} &s=${title}`);
    const data= await response.json();

    setmovies(data.Search);

  };

 

  return (
    <div className="app">
      <h1>MovieLander</h1>

      <div className="search">

        <input
            value={searchTerm}
            onChange={(e)=>setsearchTerm(e.target.value)}
            placeholder="Search for movies"
         />

        <img 
          src={SearchIcon}
          alt="search"
          onClick={()=>searchMovies(searchTerm)}
        />

      </div>

      {movies?.length > 0 ?(
        <div className="container">
          {movies.map((movie)=>(
            <MovieCard movie={movie} />
          ))}

        </div>

      ) : (
        <div className="empty">
          <h2> No Movies Found </h2>
        </div>
      )
      }


    </div>
  );
};
export default App;