import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Header from "./Header";
import Input from "./Input";
import Messages from "./Messages";
let socket;
let endpoint = "localhost:3000";

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(endpoint);
    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [endpoint, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div> 
      <Header room={room}/>
      <Messages messages={messages} name={name} />    
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
      </div>
  );
};
export default Chat;
