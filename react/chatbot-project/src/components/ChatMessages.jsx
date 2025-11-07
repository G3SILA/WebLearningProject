import {useRef, useEffect } from 'react'
import ChatMessage from './ChatMessage'

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
    }, dependencies);
    return ref;
}
