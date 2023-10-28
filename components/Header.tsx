"use client";

import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <Image
          className="h-26 md:h-28 w-44 md:w-56 pb-10 md:pb-0 object-contain rounded-md"
          src="/logo.png"
          alt="Logo"
          width={300}
          height={100}
        ></Image>
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              className="flex-1 outline-none p-2"
              type="text"
              placeholder="Search"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          {/* Avatar */}
          <Avatar name="Victor Codeberg" round size="50" color="#7F1832" />
        </div>
      </div>
    </header>
  );
};

export default Header;
