import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header>
      <div className="flex">
        <Image
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
          src="/logo.png"
          alt="Logo"
          width={300}
          height={100}
        ></Image>
        <div>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
