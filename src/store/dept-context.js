import { createContext, useState } from "react";






const DeptContext = createContext({
    //dept: "mens",
    changeDept: (incDept) => {}
});





export function DeptContextProvider(props){
    const [department, setDepartment] = useState('default');    

    function changeDepartment(inc){
        setDepartment((prevDepartment) => {
            return inc
        });
    }

    
    const newContext = {
        dept: department,
        changeDept: changeDepartment
    };

    return <DeptContext.Provider value={newContext}>    
        {props.children}
    </DeptContext.Provider>
}

export default DeptContext;