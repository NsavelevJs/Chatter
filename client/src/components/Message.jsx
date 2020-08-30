import React from "react";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimName = name.trim().toLowerCase();

  if (user === trimName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div id="message container " className='flex justify-end rounded-l-lg '>
      <div id="message box" className='bg-blue-900 w-3/4 mx-4 my-2 p-2 rounded-lg'>
        <p id="message text" className='text-blue-100 tracking-normal'>{text}</p>
      </div>
      <p id="sent text" className='pr-10'>{trimName} </p>
    </div>
  ) : (
    <div id="message container " className='justify-start rounded-r-lg'>
    <div id="message box" className='bg-blue-100 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix'>
      <p id="message text" className='text-blue-900 tracking-normal'>{text}</p>
    </div>
    <p id="sent text" className='pl-10'>{user}</p>
    </div>
  );
};

export default Message;
