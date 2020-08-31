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
      <Header room={room} className='bg-fixed' />
      <Messages messages={messages} name={name} />
{/* This is being used for testing for Styling*/}


         

      {/* <div id="message container " className=' flex overflow-auto flex-auto justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className=' bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>

    <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
      <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>name</p>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>text</p>
      </div>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div>
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>text</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>user</p>
    </div> */}



    
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
};
export default Chat;
