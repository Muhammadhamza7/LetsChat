import React from 'react'
import { UserAuth } from '../context/UserContext';

const Messages = ({message}) => {
  const { currentUser } = UserAuth();
  return (
    <div>   
      <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img
         
          src={message.avatar} />
      </div>
    </div>
    <div className="chat-header">
      {message.name}
     
    </div>
    <div className="chat-bubble">{message.text}</div>
    <div className="chat-footer opacity-50">Delivered</div>
  </div>
  </div>

  )
}

export default Messages