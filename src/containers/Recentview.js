import React from 'react';
import './recentview.css'
import Card from '../components/Card';
import GetObjByPureId from '../components/DBHandler';
import formatter from '../components/CurConvert';


function Recentview(){  

    // get the recently veiwed array
    let recArray;
    recArray = JSON.parse(localStorage.getItem('recViewed')); 
  
    // if it doesn't exist, pop default //latest arrivals perhaps
    if(recArray == null)
    {         
        recArray = [];   
        const Add1 = {
            "id": 300,
            "label": null,
            "price": null,
            "oldprice": null,
            "type": "clothing",
            "images":{
                "a":null,
                "b": null,
                "c":null,
                "d":null,
                "aL":null,
                "bL":null,
                "cL":null,
                "dL":null
            }
        };        
        recArray.push(JSON.stringify(Add1));
        const Add2 = {
            "id": 200,
            "label": null,
            "price": null,
            "oldprice": null,
            "type": "accessories",
            "images":{
                "a":null,
                "b": null,
                "c":null,
                "d":null,
                "aL":null,
                "bL":null,
                "cL":null,
                "dL":null
            }
        };
        recArray.push(JSON.stringify(Add2));
        const Add3 = {
            "id": 100,
            "label": null,
            "price": null,
            "oldprice": null,
            "type": "boots",
            "images":{
                "a":null,
                "b": null,
                "c":null,
                "d":null,
                "aL":null,
                "bL":null,
                "cL":null,
                "dL":null
            }
        };
        recArray.push(JSON.stringify(Add3));
        localStorage.setItem('recViewed', JSON.stringify(recArray));
    }

   

    const itemObj1 = GetObjByPureId(JSON.parse(recArray[0]).id);  
    const itemObj2 = GetObjByPureId(JSON.parse(recArray[1]).id); 
    const itemObj3 = GetObjByPureId(JSON.parse(recArray[2]).id); 

    //should move this to the card
    const testimg1 = require(`../${itemObj1.images.a}`);   
    const testimg2 = require(`../${itemObj2.images.a}`);   
    const testimg3 = require(`../${itemObj3.images.a}`);   


    return(
        <div className="recentmain">           
            <div className="recentmain__inner">     
                <div className="recentmain__inner__titlebox">
                    <span className="recentmain__inner__titlebox-title">RECENTLY VIEWED</span>
               </div>
                <div className="recentmain__inner__cardbox" id="appPar"> 
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

export default Recentview;