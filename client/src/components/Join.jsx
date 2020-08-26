import React, {userState, useState} from "react";
import {Link} from 'react-router-dom'

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return(
     <div className='font-mono'>
   <h1 className=''>Join</h1>
   <div><input placeholder='Name' className='' type='text' onChange={(event)=> setName(event.target.value)} /></div>
   <div><input placeholder='Room' className='' type='text' onChange={(event)=> setRoom(event.target.value)}/></div>
   <Link to={`/chat?name=${name}&room=${room}`}>
   <button typeof='submit'>Sign In</button>
   </Link>
   </div>
  )
};
export default Join;
