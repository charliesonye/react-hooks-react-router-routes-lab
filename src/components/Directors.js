import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsArr= directors.map((director)=>{
    return(
      <div key={director.name}>
       <h2> Name: {director.name}</h2>
       
       Movies:
       <ul>
       {director.movies.map((movie)=> {
        return  <li key={movie} >{movie}</li>
      
       }
       )}
        </ul>
        <hr />
      </div>
    )
  })
  
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsArr}
    </div>
  )
}

export default Directors;
