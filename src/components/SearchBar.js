import { Input } from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
import React from "react";

export default function SearchBar() {
  return (
    <div className=" relative
    m-4 w-1/2 hover:border-fuchsia-400
    border-2 border-teal-500 rounded-lg transition-all delay-200 cursor-pointer ">
      <SearchIcon className=" absolute m-2" />
      <Input
        className=" ml-8 w-full"
        icon={<SearchIcon />}
        placeholder="Search for songs, albums, artists, and more"
      />
    </div>
  );
}
