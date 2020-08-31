import React from "react";
import ReactEmoji from 'react-emoji'
const Message = ({ message: { user, text }, name }) => {
  let currentUser = false;
  const trimName = name.trim().toLowerCase();

  if (user === trimName) {
    currentUser = true;
  }
  return currentUser ? (
  
    <div id="message container " className='flex justify-end rounded-l-lg '>
      <p id="sent text" className='flex items-center tracking-normal pr-10'>{trimName}</p>
      <div id="message box" className='bg-blue-900 w-auto mx-4 my-2 p-2 rounded-lg clearfix'>
        <p id="message text" className='text-blue-100 tracking-normal'>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
    
  ) : (
    <div id="message container " className='flex justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-auto mx-4 my-2 p-2 rounded-lg flex items-center'>
      <p id="message text" className='text-blue-900 tracking-normal'>{ReactEmoji.emojify(text)}</p>
    </div>
    <p id="sent text" className='pl-10 flex items-center tracking-normal'>{user}</p>
    </div>



    
  );
};

export default Message;
