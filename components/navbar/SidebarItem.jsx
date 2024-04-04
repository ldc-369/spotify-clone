import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

// CHƯA
function SidebarItem({ icon: Icon, label, active, href }) {
  return (
    <Link
      href={href}
      className={twMerge(
        `h-auto w-full py-1 flex flex-row items-center gap-x-4 text-md font-medium text-neutral-400 cursor-pointer hover:text-white transition`,
        active && "text-white"
      )}
    >
      <Icon size={26} />

      <p className="w-full truncate">{label}</p>
    </Link>
  );
}

export default SidebarItem;
