import React from 'react';
import Insetlabel from '../components/BannersCallouts/Insetlabel';
import './mainad.css'

function Mainad(props){
    return(
        <div className="fullwidthimg" id="appPar2">
            <img src={props.img} className="fullwidthimg-img" alt="" ></img> 
            <Insetlabel 
            label="Alexander Julian"
            desc="Fall Collection"
            link="Learn more"            
            />      
        </div>
    );
}

export default Mainad;