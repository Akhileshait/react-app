import './App.css';
import Auth from "./components/auth"
import {db} from "./firebase_config";
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [movie, setMovie]=useState([]);

  const movieRef=collection(db, "movies");
  useEffect(()=>{
    const getMovieList=async()=>{
      try{
        const data =await getDocs(movieRef);
        const filtData= data.docs.map((doc)=>({
          ...doc.data(),
          id:doc.id
        }));
        setMovie(filtData);
      }catch(err){
        console.error(err);
      }
    };
    getMovieList();
  }, []);

  return (
    <div className="App">
      <Auth></Auth>
      <div>
      {
        movie.map((movie)=>(
          <div>
            <h1>{movie.title}</h1>
            <p>Date: {movie.Date}</p>
            <p>IMDB: {movie.IMDB}</p>
          </div>
        ))
      }
    </div>
    </div>
  );
}

export default App;
