import React from 'react';
import './insetlabel.css'

function Insetlabel(props){
    return(
        <div className="insetlabel">
            <span className="insetlabel-label">{props.label}</span>
            <span className="insetlabel-desc">{props.desc}</span>
            <span className="insetlabel-link">{props.link}</span>
        </div>
    );
}

export default Insetlabel;



