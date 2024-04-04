"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";

// CHƯA
function ListItem({ image, name, href }) {
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className="rounded-md pr-4 relative overflow-hidden flex items-center gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition group"
    >
      <div className="min-w-[64px] min-h-[64px] relative">
        <Image className="object-cover" fill src={image} alt="" />
      </div>

      <p className="py-5 truncate font-medium">{name}</p>

      <div className="rounded-full p-4 absolute right-5 flex items-center justify-center bg-green-500 drop-shadow-md transition opacity-0 group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
}

export default ListItem;
