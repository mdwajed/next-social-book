import { Avatar } from "@mui/joy";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Birthday() {
  return (
    <div className="flex flex-col gap-6 p-4 shadow-lg text-sm bg-white rounded-lg text-gray-600">
      <span className="font-bold">Birthday</span>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar
            src="https://images.pexels.com/photos/27351031/pexels-photo-27351031/free-photo-of-essaouira-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className=" w-10 h-10"
          />
          <span className="font-bold">Andre Russel</span>
        </div>
        <button className="bg-blue-500 text-xs text-white px-2 py-2 rounded-md">
          Celebrate
        </button>
      </div>
      <div className="p-4 bg-gray-50 flex gap-4 items-center rounded-lg">
      <Image
            src="/gift.png"
            alt=""
            width={24}
            height={30}
       
          />
          <Link href="/" className="flex flex-col gap-2 text-sm">
          <span className="text-gray-600 font-bold">Upcoming Birthdays</span>
          <span className="text-gray-500">See other 16 have upcoming birthdays</span>
          </Link>
      </div>
    </div>
  );
}
