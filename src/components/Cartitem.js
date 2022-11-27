import React from 'react';
import './cartitem.css'
import { useNavigate } from 'react-router-dom';



function Cartitem(props){
    const cardImg = require(`../${props.img}`); 

    const navigate = useNavigate();

    function navigateItem(){
        sessionStorage.setItem("itemId", props.id);
        navigate('/item');
    }    

    function removeMe(){  
        const sendObj = {
            id:props.id,
            label:props.label,
            type:props.type,
            price:props.price                 
        }      
       props.remove(sendObj);
    }

    return(
        <div className="cartitem">
            <div className="cartitem__wrapper">
                <img src={cardImg} className="cartitem__wrapper-img" onClick={navigateItem}></img>                
                <div className="cartitem__wrapper__textbox">
                    <span className="cartitem__wrapper__textbox-label">{props.label}</span>
                    <span className="cartitem__wrapper__textbox-type">{props.type}</span>
                    <span className="cartitem__wrapper__textbox-desc">size,color, ect</span>
                    <div className="cartitem__wrapper__textbox__pricebox">
                        <span className="cartitem__wrapper__textbox__pricebox-sub">{props.price}</span>
                        <span className="cartitem__wrapper__textbox__pricebox-qty">Qty {props.qty}</span>
                        <span className="cartitem__wrapper__textbox__pricebox-total">{props.total}</span>
                    </div>
                    <span className="cartitem__wrapper__textbox-remove" onClick={removeMe}>Remove from bag</span>
                </div>
            </div>
        </div>
    );
}

export default Cartitem;