import React from 'react';
import './fullpagead.css'

function Fullpagead(props){
    const mainImg = require(`../${props.img}`);
    return(
        <div className="fullpagemain">
            <div className="fullpagemain__inner">
                <img src={mainImg} className="fullpagemain__inner-img" alt=""></img>            
                <span className="fullpagemain__inner-title">{props.title}</span>
                <div className="fullpagemain__inner__wrapper">
                    <div className="fullpagemain__inner__wrapper__copybox">                    
                        <span className="fullpagemain__inner__wrapper__copybox-copy">{props.maincopy}</span>                    
                    </div>
                    <div className="fullpagemain__inner__wrapper__detailbox">                    
                        <span>{props.detailcopy}</span>  
                        <span className="fullpagemain__inner__wrapper__detailbox-link">{props.linkcopy}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fullpagead;

