import React from 'react';
import './vidbanner.css'



function Vidbanner(props){

    const testvid = require(`../${props.vidref}`);
    return(
        <div className="vidbanner">
        <div className="vidbanner__inner">
            <div className="vidbanner__inner-textbox">
                <div className="vidbanner__inner-textbox-title">{props.title}</div>
                <div className="vidbanner__inner-textbox-copy">{props.copy}</div>
                <div className="vidbanner__inner-textbox-link">{props.link}</div>
            </div>
            <video className="vidbanner__inner-vid" loop muted autoPlay src={testvid} type="video/webm"></video>
        </div>
       </div> 
    );
}

export default Vidbanner;






