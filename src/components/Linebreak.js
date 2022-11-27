import React from 'react';
import './linebreak.css'

function Linebreak(props){
    return(
        <div className="linebreak__wrapper" style={{"marginTop": props.mt != null ? props.mt : 0,"marginBottom": props.mb != null ? props.mb : 0,"backgroundColor": props.bg == 'red' ? "#f3f3f3" : 'white'}}>
            <div className="linebreak__wrapper__line" style={{"width": props.width}}></div>
        </div>
    ); 
    
}

export default Linebreak;