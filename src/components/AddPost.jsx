import { Avatar } from "@mui/joy";
import Image from "next/image";
import React from "react";

export default function AddPost() {
  return (
    <div className="flex gap-3 md:gap-5 bg-white p-4 justify-between shadow-md text-sm rounded-lg">
      {/* AVATER */}
      <Avatar
        src="https://images.pexels.com/photos/27351031/pexels-photo-27351031/free-photo-of-essaouira-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className=" w-12 h-12"
      />
      {/* TEXTAREA */}
      <div className="">
        <div className="flex gap-2 md:gap-6 items-center justify-center">
          <textarea
            placeholder="what on your mind ?"
            className="px-2 md:px-6 w-48 md:w-96 py-2 flex  outline-none  bg-gray-100 rounded-lg border-none"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="object-cover w-5 h-5 cursor-pointer "
          />
        </div>
        <div className="flex items-center gap-4 mt-4 text-gray-900 flex-wrap">
          <div className="flex gap-2 items-center cursor-pointer">
            <Image
              src="/addimage.png"
              alt=""
              width={20}
              height={20}
              className="object-cover w-5 h-5 cursor-pointer "
            />
            Photo
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <Image
              src="/addVideo.png"
              alt=""
              width={20}
              height={20}
              className="object-cover w-5 h-5 cursor-pointer "
            />
            Video
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <Image
              src="/poll.png"
              alt=""
              width={20}
              height={20}
              className="object-cover w-5 h-5 cursor-pointer "
            />
            Poll
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <Image
              src="/addevent.png"
              alt=""
              width={20}
              height={20}
              className="object-cover w-5 h-5 cursor-pointer "
            />
            Event
          </div>
        </div>
      </div>
    </div>
  );
}
