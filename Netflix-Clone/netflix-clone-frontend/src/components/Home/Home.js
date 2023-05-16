
import axios from 'axios';
import { useEffect, useState } from 'react'
import MovieList from '../MovieList/MovieList';

function Home(){

const [movieData, setMovieData] = useState([]);


const getTrending = () =>{

const serverURL = 'http://localhost:3023/trending';

fetch(serverURL)
.then(response=>{
  response.json().then(data=>{
    console.log(data)
    setMovieData(data)
  })

})};


 useEffect(()=>{
  getTrending()
},[])


  return(
  
    <>
  <h1>home</h1>
    
    < MovieList dataa={movieData}/>

    </>
  )
  
  
  }
  
  export default Home;