import React, { useEffect, useRef, useState}  from 'react';
import './itemcontainer.css'
import GetObjByPureId from '../components/DBHandler';
import formatter from '../components/CurConvert';
import ItemContext from '../store/item-context';
import { useContext } from 'react';

import BagContext from '../store/bag-context';






function UpdateRecView(incItemObj)
{
    let recArray;
    recArray = JSON.parse(localStorage.getItem('recViewed')); 

    // if it doesn't exist, pop default //latest arrivals perhaps
    if(recArray == null)
    {         
        recArray = [];   
        const Add1 = incItemObj;
        console.log(Add1)  ;
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

    //shuffle the new item into the array
    

    if(incItemObj.id != JSON.parse(recArray[0]).id)
    {
        recArray[2] = recArray[1];
        recArray[1] = recArray[0]
        recArray[0] = JSON.stringify(incItemObj);
        localStorage.setItem('recViewed', JSON.stringify(recArray));
    }
    
}





function Itemcontainer(){

    const itemCtx = useContext(ItemContext);
    const bagCtx = useContext(BagContext);

    const curItemObj = GetObjByPureId(sessionStorage.getItem("itemId"));
    

    const img1 = require(`../${curItemObj.images.a}`);
    const img2 = require(`../${curItemObj.images.b}`);


    const mainImg = useRef(null);
    const fImg = useRef(null);
    const rImg = useRef(null);

    const [isFiring, setIsFiring] = useState(false)

            
    /*
    document.addEventListener('keydown', function(e){
        if(e.key === '1')
        { 
            //TestLoad();
            sessionStorage.setItem("department", 'mens');
            
            //console.log(localStorage.getItem('bagData'));
            
        }  
    });

    document.addEventListener('keydown', function(e){
        if(e.key === '2')
        { 
            //TestLoad();
            //console.log(localStorage.clear());
            console.log(sessionStorage.getItem("department"))
        }  
    });*/

   
    
    function ChangeMainThumbf(){

        mainImg.current.src = img1;   
        fImg.current.className = "itemcontainer__item__box__thumbbox__thumb-imgsel";
        rImg.current.className = "itemcontainer__item__box__thumbbox__thumb-img";
    }

    function ChangeMainThumbr(){
        mainImg.current.src = img2;   
        fImg.current.className = "itemcontainer__item__box__thumbbox__thumb-img";
        rImg.current.className = "itemcontainer__item__box__thumbbox__thumb-imgsel";
    }

    

    function AddToBag(){
        const newAdd = JSON.parse(JSON.stringify(curItemObj));
        newAdd.quantity = 1;
        DupeCheckAdd(newAdd);
        
        setIsFiring(true);      

        setTimeout(function() {setIsFiring(false)}, 1000); 
    }

   

    function DupeCheckAdd(inc) // true if a dupe
    { 
        //console.log("inc dupeCheckNew",inc)
        let bagDataObj;
        if (localStorage.getItem('bagData') && localStorage.getItem('bagData').length > 0)
        {        
            bagDataObj = JSON.parse(localStorage.getItem('bagData')); 
            //console.log("existing", bagDataObj);
        }
        else// bagData is 0 or doesn't exist yet
        {
            //console.log("0 or not existing")
            bagDataObj = [];
            bagDataObj.push(JSON.stringify(inc));
            localStorage.setItem('bagData', JSON.stringify(bagDataObj));
            bagCtx.changeBag(bagDataObj);
            return
        }

        //bag data was found
        //console.log("data found   length",bagDataObj.length)

        //if(window.localStorage.length>0)
        //{
        for(let i=0;i<bagDataObj.length;i++)
        {
            const storedItem = JSON.parse(bagDataObj[i]);  
            //console.log(storedItem);         

            if(inc.id != storedItem.id)
            {
                continue;
            }

            //matched id's with something
            if(inc.label != storedItem.label)
            {
                // not dupe, continue
                continue;                          
            }
            if(inc.type != storedItem.type)
            {
                // not dupe, continue
                continue;    
            }
            if(inc.price != storedItem.price)
            {
                // not dupe, continue
                continue;    
            }

            //console.log("found a dupe");
            //if it gets here, it's a dupe. update the quantity
            storedItem.quantity = storedItem.quantity+1; 
            bagDataObj[i]= JSON.stringify(storedItem);

            window.localStorage.removeItem('bagData');
            window.localStorage.setItem('bagData', JSON.stringify(bagDataObj)); 
            
            bagCtx.changeBag(JSON.stringify(bagDataObj));           
            //PopBagModal();
            return;           
        }
        //}

        //didn't match id's with anything in storage
        //console.log("wasn't a dupe",inc)
        bagDataObj.push(JSON.stringify(inc));

        //const index = window.localStorage.length;            
        window.localStorage.setItem('bagData', JSON.stringify(bagDataObj)); 
        bagCtx.changeBag(bagDataObj);
        //PopBagModal();    
    }


    
    useEffect(()=>{           
        UpdateRecView(curItemObj);       
        //PopPage();
    }, []);

    return(
        <div className="itemcontainer">
            <div className="itemcontainer__item">  
                <div className="itemcontainer__item__box">
                    <img className="itemcontainer__item__box-main" src={img1} ref={mainImg} alt=""></img>                                                  
                    <div className="itemcontainer__item__box__thumbbox">
                        <div className="itemcontainer__item__box__thumbbox__thumb">
                            <img className="itemcontainer__item__box__thumbbox__thumb-imgsel" src={img1} onClick={ChangeMainThumbf} ref={fImg}  alt=""></img>                             
                        </div>
                        <div className="itemcontainer__item__box__thumbbox__thumb">
                            <img className="itemcontainer__item__box__thumbbox__thumb-img" src={img2} onClick={ChangeMainThumbr} ref={rImg}  alt=""></img>                             
                        </div>
                    </div>
                </div>               
            </div> 
            <div className="itemcontainer__right">
                <div className="itemcontainer__right__box"> 
                    <div className="itemcontainer__right__box__descbox">                        
                        <div className="itemcontainer__right__box__descbox-label">{curItemObj.label}</div>
                        <div className="itemcontainer__right__box__descbox__typebox">
                            <div className="itemcontainer__right__box__descbox__typebox-type">{curItemObj.type}</div>
                        </div>
                        <div className="itemcontainer__right__box__descbox__pricebox" > 
                            {curItemObj.oldprice != null  ?   
                                <div className="itemcontainer__right__box__descbox__pricebox__oldpricebox">
                                    <span className="itemcontainer__right__box__descbox__pricebox__oldpricebox-oldprice">{formatter.format(curItemObj.oldprice)}</span>
                                    <span className="itemcontainer__right__box__descbox__pricebox__oldpricebox-disc">
                                        {Math.round(((curItemObj.oldprice-curItemObj.price)/curItemObj.oldprice)*100)+'%'+" OFF"}
                                    </span>
                                    </div>
                                : null}               
                            <span className="itemcontainer__right__box__descbox__pricebox-price">{formatter.format(curItemObj.price)}</span>
                        </div>
                        <div className="itemcontainer__right__box__descbox__sizewrapper">
                            <div className="itemcontainer__sizebox">
                                <span className="itemcontainer__sizebox-size">S</span>
                            </div>
                            <div className="itemcontainer__sizebox">
                                <span className="itemcontainer__sizebox-size">M</span>
                            </div>
                            <div className="itemcontainer__sizebox">
                                <span className="itemcontainer__sizebox-size">L</span>
                            </div>
                            <div className="itemcontainer__sizebox">
                                <span className="itemcontainer__sizebox-size">XL</span>
                            </div>
                            <div className="itemcontainer__sizebox">
                                <span className="itemcontainer__sizebox-size">XXL</span>
                            </div>
                        </div>                        
                    </div>
                    <div className="itemcontainer__right__box__buttonbox">
                        <button type="button" id='addButton' className={isFiring ? "itemcontainer__right__box__buttonbox-button buttonAnim" : "itemcontainer__right__box__buttonbox-button"}  onClick={AddToBag}>Add to bag</button> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Itemcontainer; 