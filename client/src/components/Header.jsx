import React from "react";

const Header = ({ room }) => (
  <div className="">
    <div className="z-10 justify-between fixed w-full top-0 overflow-auto bg-blue-400 h-16 pt-2 text-white flex shadow-md">
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-12 h-12 my-1 text-blue-100 ml-2"
        >
          <path
            className="text-blue-100 fill-current"
            d="M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z"
          />
        </svg>
      </a>
      <div className="mx-auto p-3 content-center">{room}</div>
    </div>
  </div>
);

export default Header;
