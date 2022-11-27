import React, { useState, useContext} from 'react';
import './cartdisp.css'
import Linebreak from '../components/Linebreak';
import Cartitem from '../components/Cartitem';
import formatter from '../components/CurConvert';

import BagContext from '../store/bag-context';


function Cartdisp(props){
    const [bagDataObj2, setBagDataObj2] = useState(JSON.parse(localStorage.getItem('bagData')));
    

    const bagCtx = useContext(BagContext);  

        
    const bagArray = [];
   
    let subTotal = 0;   
    let total = 0;

    
    
    bagDataObj2.forEach(element => {
        element = JSON.parse(element);       
        subTotal += (element.quantity * element.price);
        bagArray.push(element);        
    });

    total = props.sendState+subTotal;


   

    function getIndexByObj(inc,arr)
    {     
        for(let i=0;i<arr.length;i++)
        {
            const storedItem = JSON.parse(arr[i]);                         
 
            if(inc.id != storedItem.id)
            {                
                continue;
            }
 
            //matched id's with something
            if(inc.label != storedItem.label)
            {
                console.log(inc.label,storedItem.label);
                // not dupe, continue
                continue;                          
            }
            if(inc.type != storedItem.type)
            {
                console.log(inc.type,storedItem.type);
                // not dupe, continue
                continue;    
            }
            if(inc.price != formatter.format(storedItem.price))
            {
                console.log(inc.price,formatter.format(storedItem.price));
                // not dupe, continue
                continue;    
            }
 
         
            //if it gets here, it's a dupe. update the quantity        
            return i;           
        } 
        //didn't match id's with anything in storage
        return null;
    }

    
    function removeItem(inc){        
        let bagArray2 = JSON.parse(localStorage.getItem('bagData')); 
        
        //check if bagdata exits, and length is >0
        const ind = getIndexByObj(inc,bagArray2);           
    
        // if it has a quantity of 1, remove it    
        if((JSON.parse(bagArray2[ind])).quantity == 1)
        {        
         bagArray2.splice(ind,1);        
            localStorage.setItem('bagData', JSON.stringify(bagArray2));
            setBagDataObj2(bagArray2);
            bagCtx.changeBag(JSON.stringify(bagArray2));  
            return;
        }
      
        if((JSON.parse(bagArray2[ind])).quantity > 1)
        {            
            const modObj = JSON.parse(bagArray2[ind]);
            modObj.quantity = modObj.quantity-1;
            bagArray2[ind] = JSON.stringify(modObj);
            localStorage.setItem('bagData', JSON.stringify(bagArray2));
            setBagDataObj2(bagArray2);
            bagCtx.changeBag(JSON.stringify(bagArray2));  
            return;
        }        
    }

   

    return(
        <div className="cartdisp">
            <div className="cartdisp-title">Your Shopping Bag</div>            
            <div className="cartdisp__box">                        
                <div className="cartdisp__box__left">
                    <Linebreak 
                    width={'100%'}                   
                    />                     
                    <div className="cartdisp__box__left__dispbox" id="bagDispID"> 
                    {
                        bagArray != null ? 
                        bagArray.map((item) => (                            
                            <Cartitem
                            key={item.id}  
                            id={item.id}                         
                            img={item.images.a}
                            label={item.label}
                            type={item.type}
                            qty={item.quantity}
                            price={formatter.format(item.price)}
                            total={formatter.format(item.price*item.quantity)}
                            remove={removeItem}
                            />  
                        )) : null

                    }                              
                    </div>
                </div> 
                <div className="cartdisp__box__right">                                
                    <span className="cartdisp__box__right-summary" >ORDER SUMMARY</span>               
                    <div className="cartdisp__box__right__subbox">                   
                        <span className="cartdisp__box__right__subbox-sub">Item subtotal</span>
                        <span className="cartdisp__box__right__subbox-subamt">{formatter.format(subTotal)}</span>
                    </div> 
                    <div className="cartdisp__box__right__shipbox">                   
                        <span className="cartdisp__box__right__shipbox-ship" >Shipping</span>
                        <span className="cartdisp__box__right__shipbox-shiptotal">{props.sendState != 0 ?  formatter.format(props.sendState) : 'Free'}</span>
                    </div>   
                    <Linebreak 
                    width={'100%'}
                    mt={'1vw'}                    
                    /> 
                    <div className="cartdisp__box__right__totalbox">                   
                        <span className="cartdisp__box__right__totalbox-total">TOTAL</span>
                        <span className="cartdisp__box__right__totalbox-totalamt">{formatter.format(total)}</span>
                    </div>               
                </div>
            </div>
        </div>
    );
}

export default Cartdisp;