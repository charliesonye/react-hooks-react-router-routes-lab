import React from "react";
import { movies } from "../data";


function Movies() {

  const movie= movies.map((movieObj)=> {
   
    

    return(
      <div key={movieObj.title}  >
        <h2>Name: {movieObj.title} </h2>
        <>Time:{ movieObj.time}</>
        <br />
        <br />
        Genres:
        <br />
        <div>
        <ul>
          {movieObj.genres.map((genre)=>{
            return <li key= {genre} >{genre}</li>
            })
         
          }
        </ul>
        <hr />
        </div>
     
      </div>

      
    )
  })
 
  return (
   <div>
    <h1>Movies Page</h1>
    <br />
    {movie}
   </div>
  )
}

export default Movies;
