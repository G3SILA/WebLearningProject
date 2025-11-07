import {useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import './ChatMessages.css';

export function ChatMessages({chatMessages}) {

    const chatMessagesRef = useAutoScroll([chatMessages]); 
    
    return (
        <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage 
                        message={chatMessage.message}
                        sender={chatMessage.sender} 
                        key={chatMessage.id}
                        time={chatMessage.time}
                    />
                );
            })}
        </div>
    );
}

function useAutoScroll(dependencies) {
    const ref = useRef(null);
    // hook in React, runs a function after the component is created/updated
    useEffect(() => {
        const containerElem = ref.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight; 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
    return ref;
}
