import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="w-full max-w-xs mx-auto flex justify-center p-8">
      
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <div className="font-sans text-lg text-center ">
       <h1 className="">Join</h1>
      </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="Room"
          >
            Room
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(event) => setRoom(event.target.value)}
            type="text"
            placeholder="Room"
          />
        </div>

        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
            typeof="submit"
          >
            Sign In
          </button>
        </Link>
      </form>
    </div>
  );
};
export default Join;
