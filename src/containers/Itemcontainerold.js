import React, { useEffect, useRef }  from 'react';
import './itemcontainer.css'
import GetObjByPureId from '../components/DBHandler';
import formatter from '../components/CurConvert';



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

    const curItemObj = GetObjByPureId(sessionStorage.getItem("itemId"));

    const img1 = require(`../${curItemObj.images.a}`);
    const img2 = require(`../${curItemObj.images.b}`);


    const mainImg = useRef(null);
    const fImg = useRef(null);
    const rImg = useRef(null);
    const lbl = useRef(null);
    const iType = useRef(null);

    const price = useRef(null);

    const oldPrice = useRef(null);
    const disc = useRef(null);



    //set the department links, men women



    function PopPage()
    {           
        mainImg.current.src = img1;    
        fImg.current.src = img1;
        rImg.current.src = img2;
        
        lbl.current.innerHTML = curItemObj.label;        
        iType.current.innerHTML = curItemObj.type;

           
        
        if(curItemObj.oldprice != null)
        {
            oldPrice.current.innerHTML = formatter.format(curItemObj.oldprice)
            let discAmt = (curItemObj.oldprice-curItemObj.price)/curItemObj.oldprice;
            discAmt = Math.round(discAmt*100); 
            disc.current.innerHTML = discAmt+'%'+" OFF";
        }       
    

        price.current.innerHTML = formatter.format(curItemObj.price); 
        
        
        UpdateRecView(curItemObj);
    }
    
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
        console.log("clicked");

    }


    useEffect(()=>{
        PopPage();
    }, []);

    return(
        <div className="itemcontainer">
            <div className="itemcontainer__item">  
                <div className="itemcontainer__item__box">
                    <img className="itemcontainer__item__box-main" ref={mainImg} alt=""></img>                                                  
                    <div className="itemcontainer__item__box__thumbbox">
                        <div className="itemcontainer__item__box__thumbbox__thumb">
                            <img className="itemcontainer__item__box__thumbbox__thumb-imgsel" onClick={ChangeMainThumbf} ref={fImg}  alt=""></img>                             
                        </div>
                        <div className="itemcontainer__item__box__thumbbox__thumb">
                            <img className="itemcontainer__item__box__thumbbox__thumb-img" onClick={ChangeMainThumbr} ref={rImg}  alt=""></img>                             
                        </div>
                    </div>
                </div>               
            </div> 
            <div className="itemcontainer__right">
                <div className="itemcontainer__right__box"> 
                    <div className="itemcontainer__right__box__descbox">                        
                        <div className="itemcontainer__right__box__descbox-label" ref={lbl}></div>
                        <div className="itemcontainer__right__box__descbox__typebox">
                            <div className="itemcontainer__right__box__descbox__typebox-type" ref={iType}></div>
                        </div>
                        <div className="itemcontainer__right__box__descbox__pricebox" > 
                            {curItemObj.oldprice != null  ?   
                                <div className="itemcontainer__right__box__descbox__pricebox__oldpricebox">
                                    <span className="itemcontainer__right__box__descbox__pricebox__oldpricebox-oldprice" ref={oldPrice}></span>
                                    <span className="itemcontainer__right__box__descbox__pricebox__oldpricebox-disc" ref={disc}></span>
                                    </div>
                                : null}               
                            <span className="itemcontainer__right__box__descbox__pricebox-price" ref={price}></span>
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
                        <button type="button"  className="itemcontainer__right__box__buttonbox-button" onClick={AddToBag}>Add to bag</button> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Itemcontainer;