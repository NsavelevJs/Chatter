import React from "react";

const Input = ({message, setMessage,sendMessage}) => {
    return(
        
  <form className='fixed w-full flex justify-between bg-blue-200 bottom-0'>
    <input
      className=" w-5 outline-none flex-grow m-2 p-2 px-4 mr-1 rounded-full border focus:bg-white resize-none"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className="m-2 outline-none  border-none " onClick={(event)=> sendMessage(event)} >
           <svg
            class="svg-inline--fa text-blue-400 fa-paper-plane fa-w-16 w-12 h-12 py-2 mr-2 outline-none"
            aria-hidden="true"
           focusable="false"
            data-prefix="fas"
            data-icon="paper-plane"
            role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
   >
    <path
      fill="currentColor"
      d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
    />
        </svg>
        </button>
      </form> 
 
  )
};

export default Input;
