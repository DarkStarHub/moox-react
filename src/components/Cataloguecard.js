import React from 'react';
import './cataloguecard.css'
import Linebreak from './Linebreak';
import { useNavigate } from 'react-router-dom';


function Cataloguecard(props){
    const navigate = useNavigate();

    function navigateItem(){
        sessionStorage.setItem("itemId", props.id);
        navigate('/item');
    }


    const cardImg = require(`../${props.img}`); 

    return(
        <div className="catcard"onClick={navigateItem}>
            <img className="catcard-img" src={cardImg}></img> 
            <Linebreak 
            width={'90%'}
            mt={'1vw'}
            mb={'1vw'}            
            />           
            <div className="catcard__textbox">
                <span className="catcard__textbox-label">{props.label}</span>
                <span className="catcard__textbox-type">{props.type}</span>
                <span className="catcard__textbox-price">{props.price}</span>
            </div>
        </div>
    );
}

export default Cataloguecard;


