import Image from "next/image";
import React from "react";

export default function Stories() {
  return (
    <div className="p-4 bg-white rounded-lg overflow-scroll shadow-md text-xs hide-scrollbar">
      <div className="flex gap-5 md:gap-8 w-max">
        {/* STORY */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="ring-2 w-20 h-20 rounded-full"
          />
          <span>Seashore</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/27810051/pexels-photo-27810051.jpeg"
            alt=""
            width={80}
            height={80}
            className="ring-2 w-20 h-20 rounded-full"
          />
          <span>Seashore</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/27695904/pexels-photo-27695904/free-photo-of-laughing-family-with-children-sitting-on-ground.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="ring-2 w-20 h-20 rounded-full"
          />
          <span>Seashore</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/27540338/pexels-photo-27540338/free-photo-of-a-woman-in-a-white-dress-is-leaning-on-a-log.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="ring-2 w-20 h-20 rounded-full"
          />
          <span>Seashore</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/27351031/pexels-photo-27351031/free-photo-of-essaouira-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="ring-2 w-20 h-20 rounded-full"
          />
          <span>Seashore</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/27496510/pexels-photo-27496510/free-photo-of-a-cup-of-coffee-surrounded-by-red-berries.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="ring-2 w-20 h-20 rounded-full"
          />
          <span>Seashore</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/27163415/pexels-photo-27163415/free-photo-of-residential-building-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="ring-2 w-20 h-20 rounded-full"
          />
          <span>Seashore</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/13576340/pexels-photo-13576340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="ring-2 w-20 h-20 rounded-full"
          />
          <span>Seashore</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="ring-2 w-20 h-20 rounded-full"
          />
          <span>Seashore</span>
        </div>
      </div>
    </div>
  );
}
