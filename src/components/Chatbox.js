import React, { useRef, useState } from 'react';
import './chatbox.css'
import Linebreak from './Linebreak';

function Chatbox(props){ 
    const chatBox = useRef(null)
    const [ismin, setIsmin] = useState(false);      
    
    
    function minMaxChatBox()
    {
        if(ismin == false)// open, minimize it
        {
            chatBox.current.style.transform = "translate(" + 0 + "px," + 368 + "px)";
            setIsmin(true);
            return;
        }
        if(ismin == true)// minimized, max it
        {
            chatBox.current.style.transform = "translate(" + 0 + "px," + 0 + "px)";
            setIsmin(false);
            return;
        }

       
    }



    return(
        <div className="chatbox" ref={chatBox}>
            <div className="chatbox__bar">
                <div className="chatbox__bar__wrapper">
                    <span>Chat with us</span>
                    <div className="chatbox__bar__wrapper__box">
                        <div className="chatbox__bar__wrapper__box-opt">
                            <span onClick={minMaxChatBox}>_</span>
                        </div>
                        <div className="chatbox__bar__wrapper__box-opt">
                            <span onClick={props.close}>X</span>
                        </div>
                    </div>
                </div>
            </div>
            <span className="chatbox-caption">Welcome to MOOX Live Chat</span>
            <Linebreak width={'96%'}/>            
            <div className="chatbox__body">
                <div className="chatbox__body__namebox">
                    <span className="chatbox__body__namebox-name">To start a chat, enter your full name:*</span>
                    <input className="chatbox__body__namebox-inp" type="text"></input>
                    <br/>
                </div>
                <div className="chatbox__body__mailbox">
                    <span className="chatbox__body__mailbox-email">Please provide your email address:</span>
                    <input className="chatbox__body__mailbox-inp" type="text"></input>
                    <br/>
                </div>
                <div className="chatbox__body__cancelbox">
                    <button className="chatbox__body__cancelbox-cancel">Cancel</button>
                    <button className="chatbox__body__cancelbox-submit">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Chatbox;





