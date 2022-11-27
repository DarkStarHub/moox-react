import React, { useContext } from 'react';
import './card.css'
import {useNavigate } from 'react-router-dom';
import ItemContext from '../store/item-context';



function Card(props){ 
    const navigate = useNavigate();
    
    const itemCtx = useContext(ItemContext);


    function navigateItem(){
        sessionStorage.setItem("itemId", props.id);        
        itemCtx.changeItem(props.id);        
        navigate('/item');
    }
    

    return(       
        <div className="card" data-item={props.id} onClick={navigateItem}>
           <img className='card-img' src={props.img} alt=''></img>
            <div className="card-infobox">
                <span className="card-label">{props.label}</span>
                <span className="card-category">{props.type}</span>
                {props.oldprice != null  ?   
                <div className="card-oldprice-box">
                    <span className="card-oldprice">{props.oldprice}</span>
                    <span className="card-discount">{props.disc}% OFF</span>
                </div>
                : null}
                <span className="card-price">{props.price}</span>                    
            </div>
        </div>
    );
}


export default Card;