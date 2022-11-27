import { createContext, useState } from "react";


const BagContext = createContext({    
    bag: null,
    changeBag: (incBag) => {}
});



export function BagContextProvider(props){
    const [curBag, setCurBag] = useState(localStorage.getItem('bagData'));    

       
    function changeCurBagHandler(inc){  
            
        setCurBag((prevBag) => {
            return inc
        });
    }

    
    const context = {
        bag: curBag,
        changeBag: changeCurBagHandler
    };

    return <BagContext.Provider value={context}>    
        {props.children}
    </BagContext.Provider>
}



export default BagContext;