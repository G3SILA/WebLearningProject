import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'

function ChatMessage(props) {

  const {message, sender} = props; 
  
  // move "if" inside
  return (
      <div className={sender === 'robot'? 'chat-message-robot' : 'chat-message-user'}>
          {sender === 'robot' && <img src={RobotProfileImage} />}
          <div className="chat-message-text"> {message} </div>
          {sender === 'user' && <img src={UserProfileImage} />}
      </div>
  );
}

export default ChatMessage;
// default export - no need curly bracket when importing
