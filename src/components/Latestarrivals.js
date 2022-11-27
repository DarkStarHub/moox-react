import React from 'react';
import './latestarrivals.css'
import Card from './Card';
import GetObjByPureId from './DBHandler';
import formatter from './CurConvert';


function Latestarrivals(props){  

    const itemObj1 = GetObjByPureId(props.id1);  
    const itemObj2 = GetObjByPureId(props.id2); 
    const itemObj3 = GetObjByPureId(props.id3); 

    const testimg1 = require(`../${itemObj1.images.a}`);   
    const testimg2 = require(`../${itemObj2.images.a}`);   
    const testimg3 = require(`../${itemObj3.images.a}`);   


    return(
        <div className="latestmain">           
            <div className="latestmain__inner">     
                <div className="latestmain__inner__titlebox">
                    <span className="latestmain__inner__titlebox-title">LATEST ARRIVALS</span>
               </div>
                <div className="latestmain__inner__cardbox"> 
                    <Card 
                    id={itemObj1.id}
                    img={testimg1}
                    label={itemObj1.label}
                    type={itemObj1.type}                    
                    oldprice={itemObj1.oldprice != null ? formatter.format(itemObj1.oldprice) : null}                    
                    disc={itemObj1.oldprice != null ? (Math.round(((itemObj1.oldprice-itemObj1.price)/itemObj1.oldprice)*100)) : null}
                    price={formatter.format(itemObj1.price)}                   
                    />   
                    <Card 
                    id={itemObj2.id}
                    img={testimg2}
                    label={itemObj2.label}
                    type={itemObj2.type}
                    oldprice={itemObj2.oldprice != null ? formatter.format(itemObj2.oldprice) : null}                    
                    disc={itemObj2.oldprice != null ? (Math.round(((itemObj2.oldprice-itemObj2.price)/itemObj2.oldprice)*100)) : null}
                    price={formatter.format(itemObj2.price)}                 
                    /> 
                    <Card 
                    id={itemObj3.id}
                    img={testimg3}
                    label={itemObj3.label}
                    type={itemObj3.type}
                    oldprice={itemObj3.oldprice != null ? formatter.format(itemObj3.oldprice) : null}                    
                    disc={itemObj3.oldprice != null ? (Math.round(((itemObj3.oldprice-itemObj3.price)/itemObj3.oldprice)*100)) : null}
                    price={formatter.format(itemObj3.price)}             
                    />  
                </div>
            </div>
        </div>
    );
}




export default Latestarrivals;