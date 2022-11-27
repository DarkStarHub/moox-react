import React, { useContext } from 'react';
import './bagmodalItem.css'
import { useNavigate} from 'react-router-dom';
import ItemContext from '../store/item-context';


function BagmodalItem(props){

    const cardImg = require(`../${props.image}`); 
    const navigate = useNavigate(); 
    const itemCtx = useContext(ItemContext);

    
    
    

    function navigateItem(){        
        sessionStorage.setItem("itemId", props.id);
        
        itemCtx.changeItem(props.id);     
        
        navigate('/item');        
    }


    return(
        <div className='bagitem'  onClick={navigateItem}>
            <div className='bagitem__row'>
                <div className='itemleft'>
                    <img className='itemimg' src={cardImg} alt=''></img>
                </div>
                <div className='itemright'>
                    <span className='label'>{props.label}</span>
                    <span className='type'>{props.type}</span>
                    <div className='itemright-inner'>
                        <span className='label'>{props.price}</span>
                        <span className='smallfont'>{"Qty "+ props.qty}</span>
                    </div>
                </div>
            </div>
            <div className='linediv'>
                <div className='line'></div>
            </div>
        </div>
    );
}


export default BagmodalItem;
