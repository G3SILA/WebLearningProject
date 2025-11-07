import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import Loading from '../assets/loading-spinner.gif'

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

        // copy the array into this new array
        // ...is the spread operator
        const newChatMessages = [
            ...chatMessages, 
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
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
                id: crypto.randomUUID()
            }
        ]); 

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatMessages, 
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]); 
        setIsLoading(false); 
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
            </div>
    ); // size: # of characters fit 
    // Notice React use className instead of class!
}
