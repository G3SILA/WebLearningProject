// loaded from node-modules
import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';

// vite feature - import css
import './App.css'

function App() {

  const [chatMessages, setChatMessages]= useState([]); 

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
