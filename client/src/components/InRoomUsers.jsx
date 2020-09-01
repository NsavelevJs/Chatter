import React from 'react'

const InRoomUsers=()=>(

  <div className="textContainer">
    <div>
      <h1>Pick-up, a Chat app which lets you pick up where you left off <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with React, Express, Node, Socket.IO and ultimately with love <span role="img" aria-label="emoji">❤️</span>!</h2>
      
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default InRoomUsers