import React from "react";
import Image from "next/image";
import searchIcon from "public/icons/search-icon.svg";

function Search() {
  return (
    <form className="flex items-center ml-7">
      <input type="text" placeholder="Kategory   |   Lokasi" className="border border-gray-50 px-4 py-3 rounded-l-md text-sm text-gray-50 md:w-60 w-50" />

      <button type="submit" className="flex justify-center items-center bg-blue-100 border border-blue-100 text-white text-sm rounded-r-md h-[46px] w-[46px] ">
        <Image src={searchIcon} height="24" width="24" alt="Search Icon" />
      </button>
    </form>
  );
}

export default Search;
