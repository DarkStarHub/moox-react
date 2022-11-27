import React from 'react';
import './halfpagead.css'


function Halfpagead(props){

    const mainImg = require(`../${props.img}`);
    
    return(
        <div className="halfpagemain">
            <img src={mainImg} alt=""></img>                
            <div className="halfpagemain__textbox">
                <span className="halfpagemain__textbox-title">{props.title}</span>
                <span className="halfpagemain__textbox-copy">{props.copy}</span>
                <span className="halfpagemain__textbox-link">{props.linkedcopy}</span>
            </div>
        </div>

    );
}

export default Halfpagead;