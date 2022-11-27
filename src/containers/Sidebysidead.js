import React from 'react';
import './sidebysidead.css'
import Halfpagead from '../components/Halfpagead';


function Sidebysidead(props){
    return(
        <div className="sidebysidemain">
            <div className="sidebysidemain__inner">
                <Halfpagead 
                img={props.img1}
                title={props.title1}
                copy={props.copy1}
                linkedcopy={props.linkedcopy1}
                />
                <Halfpagead 
                img={props.img2}
                title={props.title2}
                copy={props.copy2}
                linkedcopy={props.linkedcopy2}
                />          
            </div>
        </div>
    );
}

export default Sidebysidead;