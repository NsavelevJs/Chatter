import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message'
const Messages = ({messages,name}) => {
        return (
            <ScrollToBottom className='mt-20 mb-16 overflow-auto flex flex-auto'>
                {messages.map((message,i)=> <div  key={i}> <Message message={message} name={name}/> </div>)}
            </ScrollToBottom>
            
        );
    }


export default Messages;