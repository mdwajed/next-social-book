import Image from "next/image";
import React from "react";

export default function Ad({ size }) {
  //   const { sm, md, lg } = size;
  return (
    <div className="p-4 shadow-lg text-sm bg-white rounded-lg flex flex-col gap-6 text-gray-600">
      <div className="flex justify-between items-center font-bold">
        <span className="">Sponsored Ads</span>
        <Image
          src="/more.png"
          alt=""
          width={16}
          height={16}
          className="w-4 h-4 cursor-pointer"
        />
      </div>
      <div
        className={`w-full  relative ${
          size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
        }`}
      >
        <Image
          src="https://images.pexels.com/photos/931180/pexels-photo-931180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex gap-4 items-center font-bold">
        <Image
          src="https://images.pexels.com/photos/931180/pexels-photo-931180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="emoji.png"
          width={24}
          height={24}
          className=" rounded-full w-6 h-6 object-cover"
        />
        <p className="text-blue-500 flex-1">Bigchef Lounge</p>
      </div>
      <p className={size === "sm" ? "text-xs" : "text-sm"}>
        {size === "sm"
          ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          : size === "md"
          ? " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad accusamusodio repellendus placeat, laborum sequi."
          : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad accusamusodio repellendus placeat, laborum sequi.Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      </p>
      <button className="bg-gray-200  rounded-lg p-2 text-center hover:bg-gray-400">
        Learn More
      </button>
    </div>
  );
}
