"use client";

import { usePathname } from "next/navigation";
// CHƯA
import React, { useMemo } from "react";
import Box from "./Box";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

function Sidebar({ children }) {
  const pathName = usePathname();
  const routes = useMemo(() => {
    return [
      {
        icon: HiHome,
        label: "Home",
        active: pathName !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathName === "/search",
        href: "/search",
      },
    ];
  }, [pathName]);

  return (
    <div className="h-full flex">
      <div className="h-full w-[300px] p-2 hidden gap-y-2 bg-black md:flex md:flex-col">
        <Box>
          <div className="px-5 py-4 flex flex-col gap-y-4">
            {routes.map((value) => (
              <SidebarItem key={value.label} {...value} />
            ))}
          </div>
        </Box>

        <Box className="h-full overflow-y-auto">
          <Library />
        </Box>
      </div>

      <main className="h-full py-2 overflow-y-auto flex-1">{children}</main>
    </div>
  );
}

export default Sidebar;
