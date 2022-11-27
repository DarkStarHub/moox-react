import { createContext, useState } from "react";


const ItemContext = createContext({    
    item: null,
    changeItem: (incItem) => {}
});



export function ItemContextProvider(props){
    const [curItem, setCurItem] = useState(sessionStorage.getItem('itemId'));    

       
    function changeCurItemHandler(inc){         
        setCurItem((prevItem) => {
            return inc
        });
    }

    
    const context = {
        item: curItem,
        changeItem: changeCurItemHandler
    };

    return <ItemContext.Provider value={context}>    
        {props.children}
    </ItemContext.Provider>
}



export default ItemContext;