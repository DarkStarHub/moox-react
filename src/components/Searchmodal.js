import React from 'react';
import './searchmodal.css'

function Searchmodal(props){
    const iconImg = require(`../${'assets/Icons/search.png'}`); //"./assets/Icons/search.png"

    return(
        <div className="searchmodal">
            <div className="searchmodal__inner"></div>
                <img className="searchmodal__inner-icon" src={iconImg}></img>
                <input className="searchmodal__inner-inp" type="text" placeholder="Search"></input>
            <div className="searchmodal__x" onClick={props.close}>X</div>
        </div>
    );
}

export default Searchmodal;











