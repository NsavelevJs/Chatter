import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message'
const Messages = ({messages,name}) => {
    // mt-20 mb-16
        return (
            <ScrollToBottom className=' mt-20 mb-16'>
                {messages.map((message,i)=> <div key={i}> <Message message={message} name={name}/> </div>)}
            </ScrollToBottom>
            
        );
    }


export default Messages;