import { useState } from 'react';
import {Chatbot} from 'supersimpledev';
import dayjs from 'dayjs';
import Loading from '../assets/loading-spinner.gif';
import './ChatInput.css';

export function ChatInput({chatMessages, setChatMessages}) {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false); 

    function saveInputText(event) {
        setInputText(event.target.value); 
    }
    
    async function sendMessage() {
        if (isLoading || inputText === '') return; 
        setIsLoading(true); 
        // matches with value={inputText}, to clear the input box after sent
        setInputText('');

        const newChatMessages = [
            ...chatMessages, 
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID(),
                time: dayjs().format('h:mma')
            }
        ];
        // store in a variable because ChatMessages is not updated
        //   immediately, but after the function is done. 
        // setChatMessages(newChatMessages); 
        
        setChatMessages([
            ...newChatMessages, 
            {
                message: <img src={Loading} className="loading-img" />,
                sender: 'robot',
                id: crypto.randomUUID(),
                time: ''
            }
        ]); 

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatMessages, 
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID(),
                time: dayjs().format('h:mma')
            }
        ]); 
        setIsLoading(false); 
    }
    
    function clearMessage() {
        setChatMessages([]);
    }


    return (
        <div className="chat-input-container">
            <input 
                placeholder="Send a message to Chatbot" 
                size="30" 
                onChange={saveInputText}
                value={inputText}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') sendMessage();
                    else if (event.key === 'Escape')  setInputText('');
                }}
                className="chat-input"
            />  
            <button 
                onClick= {sendMessage}
                className="send-button"
            >Send</button> 
            <button
                onClick={clearMessage}
                className="clear-button"
            >Clear</button>
            </div>
    ); 
}
