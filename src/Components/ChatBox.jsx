import React, { useEffect, useState } from 'react'
import Messages from './Messages'
import { collection, query, where, onSnapshot,orderBy,limit } from "firebase/firestore";
import { db } from '../firebase';

const ChatBox = () => {
  const [msgs, setMsgs] = useState([]);
  
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50),
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push({ ...doc.data(), id: doc.id });
      });
      setMsgs(msgs);
    });

    return () => unsubscribe;
  }, []);
  return (
    <div className="pb-45 pt-7 containerWrap">
      {msgs.map (message => (
        <Messages key={message.id} message={message} />
      )
      )
      }
    </div>
  )
}

export default ChatBox