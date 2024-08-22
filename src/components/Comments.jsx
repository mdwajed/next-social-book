import { Avatar } from "@mui/joy";
import Image from "next/image";
import React from "react";

export default function Comments() {
  return (
    <div>
      {/* WRITE */}
      <div className="flex gap-2 md:gap-6 items-center">
        <Image
          src="https://images.pexels.com/photos/6152262/pexels-photo-6152262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={32}
          height={32}
          className="rounded-full w-8 h-8"
        />
        <div className="flex-1 flex items-center justify-between  bg-gray-100 p-2  w-full rounded-lg text-sm">
          <input
            type="text"
            placeholder="Write Your Comment ..."
            className="bg-transparent outline-none "
          />
          <Image src="/emoji.png" alt="" width={16} height={16} />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="flex justify-between gap-2 md:gap-4 mt-6">
      <Avatar
        src="https://images.pexels.com/photos/27351031/pexels-photo-27351031/free-photo-of-essaouira-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className=" w-10 h-10"
      />
      <div className="flex flex-col gap-2">
        <span className="font-medium">Richard Johnson</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolore velit minima numquam adipisci quam. Quae officia neque commodi omnis quo. Expedita maxime doloremque iure architecto ipsa nulla quisquam, quia aliquam autem provident sed quod.</p>      
        <div className="flex gap-4 md:gap-8 items-center text-xs text-gray-500 mt-4">
        <Image src="/like.png" alt="" width={16} height={16} className="w-4 h-4 cursor-pointer"/>
        <span className="text-gray-300">|</span>
        <span className="text-gray-500">123 Likes</span>
        < div className="">Reply</div>
        </div>
       
      </div>
      <Image src="/more.png" alt="" width={16} height={16} className="w-4 h-4 cursor-pointer"/>
      </div>
    </div>
  );
}
