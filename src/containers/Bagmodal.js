import React from 'react';
import './bagmodal.css'
import BagmodalItem from '../components/BagmodalItem';
import formatter from '../components/CurConvert';
//import Linebreak from '../components/Linebreak';
import { useNavigate } from 'react-router-dom';

import BagContext from '../store/bag-context';
import { useContext } from 'react';



function Bagmodal(props){  

    const bagCtx = useContext(BagContext);
    

    const bagDataObj2 = JSON.parse(localStorage.getItem('bagData'));     
    const bagArray = [];
   
    let bagTotal = 0;
    
    if(bagDataObj2.length >0)
    {
        bagDataObj2.forEach(element => {
        element = JSON.parse(element);
            bagTotal += (element.quantity * element.price);
            bagArray.push(element);        
        });
    }
    

    const navigate = useNavigate();

    function navigateCart(){        
        navigate('/cart');
    }
    
       

    return(
        <div className='bag'>
            <div className='bag__inner'>
                <span className='bag__inner-title'>SHOPPING BAG</span>
                <div className='bag__inner__linediv'>
                    <div className='bag__inner__linediv-line'></div>
                </div>
                <div className='bag__inner__scroll'>
                    <div className='bag__inner__scroll__box'>
                        <div className='bag__inner__scroll__box-content'>
                        {bagArray != null ? 
                        bagArray.map((item) => (                            
                            <BagmodalItem
                            key={item.id} 
                            id={item.id}                          
                            image={item.images.a}
                            label={item.label}
                            type={item.type}
                            qty={item.quantity}
                            price={formatter.format(item.price)}
                            />  
                        )) : null
                        }
                        </div>
                    </div>
                </div>
                <div className='bag__inner__summaries'>
                    <div className='bag__inner__summaries__box'>
                        <span className='bag__inner__summaries__box-total'>Total</span>
                        <span className='bag__inner__summaries__box-totalNumDisp'>{formatter.format(bagTotal)}</span>
                    </div>
                </div>
                <button className='bag__inner__modal-button'onClick={navigateCart} >GO TO SHOPPING BAG</button>
            </div>
        </div>
    );
}

export default Bagmodal;

