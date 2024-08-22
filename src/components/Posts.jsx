import { Avatar } from "@mui/joy";
import Image from "next/image";
import React from "react";
import Comments from "./Comments";

export default function Posts() {
  return (
    <div className="">
      {/* USER */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Avatar
            src="https://images.pexels.com/photos/27351031/pexels-photo-27351031/free-photo-of-essaouira-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className=" w-10 h-10"
          />
          <span>Andrew Robin</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* TEXT */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/3767028/pexels-photo-3767028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum
          animi distinctio! Ab corporis labore ullam, laudantium magni minima,
          reprehenderit maiores vitae fugit at, doloribus sequi officiis saepe
          optio quod animi distinctio! Ab corporis labore ullam, laudantium
          magni minima.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex justify-between items-center text-sm my-4">
        <div className="flex gap-4">
          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl">
            <Image src="/like.png" alt="" width={16} height={16} />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">123</span>
            <span className="hidden md:inline">Likes</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl">
            <Image src="/comment.png" alt="" width={16} height={16} />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">123</span>
            <span className="hidden md:inline">Comments</span>
          </div>
        </div>
        {/* <div className="flex gap-8"> */}
        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl">
          <Image src="/share.png" alt="" width={16} height={16} />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">123</span>
          <span className="hidden md:inline gray">Shares</span>
        </div>
      </div>
      <Comments/>
    </div>
    // </div>
  );
}
