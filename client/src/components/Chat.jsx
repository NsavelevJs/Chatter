import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
let socket;
let endpoint = "localhost:3000";

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(endpoint);
    setRoom(room);
    setName(name);

    socket.emit("join", { name, room },()=>{
      
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [endpoint, location.search]);

  return <div className='font-sans'>Chat</div>;
};
export default Chat;
