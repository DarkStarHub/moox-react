import React from 'react';
import './bigsmallad.css'

function Bigsmallad(props){
    const leftImg = require(`../${props.big}`);
    const rightImg = require(`../${props.small}`);

    return(
        <div className="bsmad">
        <div className="bsmad__inner">
            <div className="bsmad__inner__left">
                <div>
                    <img src={leftImg} className="bsmad__img-fit" alt=""></img>                   
                </div>
            </div>
            <div className="bsmad__inner__right">
                <div className="">
                    <img src={rightImg} className="bsmad__img-fit" alt=""></img>                    
                </div>  
                <div className="bsmad__inner__textbox">
                    <span className="bsmad__inner__textbox-label">{props.label}</span>
                    <span className="bsmad__inner__textbox-copy">{props.copy}</span>
                   <button type="button"  className="bsmad__inner__textbox-btn" >SHOP NOW</button>
                </div>    
            </div>
        </div>
    </div>

    );
}

export default Bigsmallad;


