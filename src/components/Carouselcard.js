import React from 'react';
import './carouselcard.css'

function Carouselcard(props){  
    
    const img1 = require(`../${props.image}`);

       
    return(
        <div className="carcard" >                        
            <img className="carcard-img" src={img1}></img>                         
            <span className="carcard-text">{props.text}</span>
         </div>  

    );
}

export default Carouselcard;