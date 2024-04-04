"use client";

import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

// CHƯA
function Library(props) {
  const onClick = () => {};

  return (
    <div className="flex flex-col">
      <div className="px-5 pt-4 flex items-center justify-between">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />

          <p className="text-md font-medium text-neutral-400">Lib</p>
        </div>

        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>

      <div className="mt-4 px-3 flex flex-col gap-y-2">list</div>
    </div>
  );
}

export default Library;
