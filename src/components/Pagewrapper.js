import React from 'react';
import './pagewrapper.css'

function Pagewrapper(props){
    return(
        <div className ='pagewrapper'>
            <div className = 'pagewrapper__inner'>
                {props.children}
            </div>            
        </div>
    );
}

export default Pagewrapper;