import React, { useState } from 'react';
import Chatbutton from '../components/Chatbutton';
import Chatbox from '../components/Chatbox';


function Chatopts(props){
    const [buttonclicked, clickButton]=  useState(false)
    const [boxClosed, setBoxClosed] = useState(false);
    const [systemUp, setSystemUp]= useState(false);
    //useState here for a timed delay too

    setTimeout(function() {setSystemUp(true)}, props.delay); 

    function beginChatOpt(){
        return(
        <>
            {buttonclicked ?  setBox()
            : <Chatbutton select={clickButton}></Chatbutton> }        
        </>        
        );
    }

    function setBox(){
        return(
        <>
            {boxClosed ? null : <Chatbox close={setBoxClosed}></Chatbox>}
        </>
        );
    }
    

    return(
        <>
        {systemUp ? beginChatOpt() : null}
        </>
    );
    
}

export default Chatopts;