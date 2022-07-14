import React from 'react';

function Banner(){
    const backgroundBanner= {
        paddingTop: "10px",
        fontSize: "36px",
        padding:"0px",
        margin: "0px",
        lineHeight:"100px",
        backgroundColor: "black",
        textShadow:" 0 -1px 1px rgba(0,0,0,0.25)",
        width:"100%",
        float:"left",
        color:"white",
    }
    
    return(
        <h1  style={backgroundBanner} > Movie Hub</h1>
        
    )
}

export default Banner;