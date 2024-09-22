"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const path = usePathname();
  const [activePath, setActivePath] = useState(path);
  useEffect(() => {
    // console.log(path);
    setActivePath(path);
  }, [path]);
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src={"/logo.svg"} alt="logo" width={60} height={60} />
      <ul className="hidden md:flex gap-6">
        <li className={`hover:text-primary-500 hover:font-bold transition-all cursor-pointer ${activePath === "/dashboard" && 'text-red-500 font-bold'}`}>
          Dashboard
        </li>
        <li className={`hover:text-primary-500 hover:font-bold transition-all cursor-pointer ${activePath === "/questions" && 'text-red-500 font-bold'}`}>
          Questions
        </li>
        <li className={`hover:text-primary-500 hover:font-bold transition-all cursor-pointer ${activePath === "/upgrade" && 'text-red-500 font-bold'}`}>
          Upgrade
        </li>
        <li className={`hover:text-primary-500 hover:font-bold transition-all cursor-pointer ${activePath === "/how-it-works" && 'text-red-500 font-bold'}`}>
          How it works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
};

export default Header;
