import { createContext, useState } from "react";


const SortContext = createContext({    
    sort: null,
    changeSort: (incSort) => {}
});


export function SortContextProvider(props){
    const [curSort, setCurSort] = useState(0);    

       
    function changeCurSortHandler(inc){  
            
        setCurSort((prevSort) => {
            return inc
        });
    }

    
    const context = {
        sort: curSort,
        changeSort: changeCurSortHandler
    };

    return <SortContext.Provider value={context}>    
        {props.children}
    </SortContext.Provider>
}






export default SortContext;