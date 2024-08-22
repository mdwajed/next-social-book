import Link from "next/link";
import React from "react";
import { Avatar } from "@mui/joy";
export default function FriendRequest() {
  return (
    <div className="flex flex-col gap-6 p-4 shadow-lg text-sm bg-white rounded-lg text-gray-600">
      <div className="flex justify-between items-center font-bold">
        <span className="">Friend Request</span>
        <Link className="text-blue-600 text-xs" href="/">
          See All
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar
            src="https://images.pexels.com/photos/27351031/pexels-photo-27351031/free-photo-of-essaouira-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className=" w-10 h-10"
          />
          <span className="font-bold">Andre Russel</span>
        </div>
        <div className="flex gap-2">
          <Avatar
            src="/accept.png"
            alt=""
            className=" w-5 h-5 cursor-pointer"
          />
          <Avatar
            src="/reject.png"
            alt=""
            className=" w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar
            src="https://images.pexels.com/photos/27351031/pexels-photo-27351031/free-photo-of-essaouira-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className=" w-10 h-10"
          />
          <span className="font-bold">Pamela Anderson</span>
        </div>
        <div className="flex gap-2">
          <Avatar
            src="/accept.png"
            alt=""
            className=" w-5 h-5 cursor-pointer"
          />
          <Avatar
            src="/reject.png"
            alt=""
            className=" w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar
            src="https://images.pexels.com/photos/27351031/pexels-photo-27351031/free-photo-of-essaouira-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className=" w-10 h-10"
          />
          <span className="font-bold">Elon Mask</span>
        </div>
        <div className="flex gap-2">
          <Avatar
            src="/accept.png"
            alt=""
            className=" w-5 h-5 cursor-pointer"
          />
          <Avatar
            src="/reject.png"
            alt=""
            className=" w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
