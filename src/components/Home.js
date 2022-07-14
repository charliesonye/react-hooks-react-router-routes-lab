import React from "react";
import image from '../components/img/Movie-img.jpeg';


function Home() {
  const homeImg = {
    width:"100%",
    height:"600px",
  }

  
  return (
    <div>
   
      <img src={image}  alt="Movie Images" style={homeImg} />
    </div>
  )
  
}

export default Home;
        