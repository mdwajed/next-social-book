"use client";
import React from "react";
import { Navbar, IconButton, Collapse } from "../MTailwind";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import CircularProgress from "@mui/material/CircularProgress";
import { AccountCircleOutlined } from "@mui/icons-material";
export default function Nabvar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 md:flex-row lg:items-center lg:gap-6 text-blue-gray-900">
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Image width="16" height="17" alt="" src="/home.png" />

        <Link href="/" className="flex items-center">
          Home
        </Link>
      </li>
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Image src="/friends.png" width="16" height="17" alt="" />

        <Link href="friends" className="flex items-center">
          Friends
        </Link>
      </li>
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Image src="/stories.png" width="16" height="17" alt="" />

        <Link href="/stories" className="flex items-center">
          Stories
        </Link>
      </li>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link
          href="/"
          className=" cursor-pointer py-1.5 font-semibold  text-xl text-[#1769aa]"
        >
          Social Book
        </Link>
        <div className="hidden md:flex">{navList}</div>
        <div className="hidden xl:flex p-2 bg-gray-100 items-center rounded-xl">
          <input
            type="text"
            placeholder="search..."
            className=" outline-none bg-transparent p-1 "
          />
          <Image src="/search.png" alt="" width={14} height={14} />
        </div>
        <div className="hidden sm:flex items-center gap-x-2">
          <ClerkLoading>
            <CircularProgress />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <div className="cursor-pointer">
                <Image src="/people.png" width={24} height={24} alt="" />
              </div>
              <div className="cursor-pointer">
                <Image src="/messages.png" width={20} height={20} alt="" />
              </div>
              <div className="cursor-pointer">
                <Image src="/notifications.png" width={20} height={20} alt="" />
              </div>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="flex items-center gap-2 text-blue-gray-900">
                <AccountCircleOutlined />
                <Link href="/sign-in">Login/Register</Link>
              </div>
            </SignedOut>
          </ClerkLoaded>
        </div>
        <IconButton
          variant="text"
          className="md:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-2">
          <ClerkLoading>
            <CircularProgress />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <div className="cursor-pointer">
                <Image src="/people.png" width={24} height={24} alt="" />
              </div>
              <div className="cursor-pointer">
                <Image src="/messages.png" width={20} height={20} alt="" />
              </div>
              <div className="cursor-pointer">
                <Image src="/notifications.png" width={20} height={20} alt="" />
              </div>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="flex items-center gap-2 text-blue-gray-900">
                <AccountCircleOutlined />
                <Link href="/sign-in">Login/Register</Link>
              </div>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </Collapse>
    </Navbar>
  );
}
