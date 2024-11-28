import React from 'react'
import { useState } from 'react';
import { UserAuth } from '../context/UserContext';
import { addDoc,collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const SendMessage = () => {

const [message, setMessage]=useState("");
const { currentUser } = UserAuth();
const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if(message.trim() === "") {
      alert("Enter valid message!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser; 
      await addDoc(collection(db, "messages"), {
        text: message,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    } catch(error) {
      console.log(error);
    }
    setMessage("");
  }


  return (
    <div className="bg-gray-400 fixed bottom-1 w-full py-2 shadow-lg ">
  <form onSubmit={handleSendMessage}  className='"px-2 containerWrap flex'>
    <input placeholder="Send Message" value={message} onChange={e=>setMessage(e.target.value)}className="input w-full bg-200 focus:outline-none rounded-r-none" type ="text"/>
    <button  type="submit" className='w-auto bg-violet-700 rounded-r-lg px-5'>Send</button>
  </form>
  </div>
)
}

export default SendMessage