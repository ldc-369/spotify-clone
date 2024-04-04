"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import Button from "../Button";

// CHƯA
function Header({ children, className }) {
  const router = useRouter();

  const handleLogout = () => {};

  return (
    <div
      className={twMerge(
        `h-fit p-6 bg-gradient-to-b from-emerald-800`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden gap-x-2 items-center md:flex">
          <button
            onClick={() => router.back()}
            className="rounded-full flex items-center justify-center bg-black hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>

          <button
            onClick={() => router.forward}
            className="rounded-full flex items-center justify-center bg-black hover:opacity-75 transition"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>

        <div className="flex gap-x-2 items-center md:hidden">
          <button className="rounded-full p-2 flex items-center justify-center bg-white hover:opacity-75 transition">
            <HiHome className="text-black" size={20} />
          </button>

          <button className="rounded-full p-2 flex items-center justify-center bg-white hover:opacity-75 transition">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>

        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                onClick={() => {}}
                className="font-medium text-neutral-300 bg-transparent"
              >
                Sign up
              </Button>
            </div>

            <div>
              <Button onClick={() => {}} className="px-6 py-2 bg-white">
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>

      {children}
    </div>
  );
}

export default Header;
