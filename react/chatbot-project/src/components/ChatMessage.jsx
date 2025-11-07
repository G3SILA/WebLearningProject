import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';

function ChatMessage(props) {

  const {message, sender, time} = props; 
  
  // move "if" inside
  return (
      <div className={sender === 'robot'? 'chat-message-robot' : 'chat-message-user'}>
          {sender === 'robot' && <img src={RobotProfileImage} />}
          <div className="chat-message-text"> 
            {message} 
            <div className="chat-message-time">
              {time}
            </div>
          </div>
          {sender === 'user' && <img src={UserProfileImage} />}
      </div>
  );
}

export default ChatMessage;
// default export - no need curly bracket when importing
