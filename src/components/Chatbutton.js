import React from 'react';
import './chatbutton.css'

function Chatbutton(props){
    return(
        <div className="expertchat" onClick={props.select}>
            <div className="expertchat-dot"></div>
            <svg width="14" height="14" className='expertchat-svg' viewBox="0 0 14 14">
                <g fill="none" fillRule="evenodd" transform="translate(-1 -1)">
                    <polygon points="0 16 16 16 16 0 0 0"></polygon>
                    <path fill="#FFF" d="M1,1 L1,11.001 L4,11.001 L4,15 L7,11.001 L15,11.001 L15,1 L1,1 Z M2,2.001 L14,2.001 L14,10 L6.5,10 L6.2,10.4 L5,12.001 L5,10 L2,10 L2,2.001 Z"></path>
                </g>
            </svg>
            <p className="expertchat-copy">Chat with an expert</p>
        </div>

    );
}

export default Chatbutton;