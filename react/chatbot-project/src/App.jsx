// loaded from node-modules
import { useState, useEffect } from 'react';
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';

// vite feature - import css
import './App.css'

function App() {

    const [chatMessages, setChatMessages]= useState(
        JSON.parse(localStorage.getItem('chatMessages')) || []
    ); 

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
    }, [chatMessages]);

    useEffect(() => {
        Chatbot.addResponses({
            'Which weekday is it today' : function () {
                const now = new Date();
                const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
                const weekday = day[now.getDay()];
                return `Today is ${weekday}`;  
            }, 
            'What\'s your name': 'I am Chatbot222.',
            'bye goodbye': 'Bye! Have a great day!'
        });
    }, []);


    return (
        <div className="app-container">
            {chatMessages.length === 0 && 
                <p className='welcome-message'>
                    Welcome to the chatbot project! Send a message using the textbox below
                </p>}
            <ChatMessages 
                chatMessages={chatMessages}
            />
            <ChatInput 
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            /> 
        </div>
    );
}


export default App;
