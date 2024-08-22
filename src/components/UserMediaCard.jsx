import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function UserMediaCard() {
  return (
    <div className="flex flex-col gap-4 p-4 shadow-lg text-sm bg-white rounded-lg text-gray-600">
      <div className="flex justify-between items-center font-bold">
        <span className="">User Media</span>
        <Link className="text-blue-600 text-xs" href="/">
          See All
        </Link>
      </div>
      <div className="flex gap-4 flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1731041/pexels-photo-1731041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover  cursor-pointer rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1731041/pexels-photo-1731041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover  cursor-pointer rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1731041/pexels-photo-1731041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover  cursor-pointer rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1731041/pexels-photo-1731041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover  cursor-pointer rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1731041/pexels-photo-1731041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover  cursor-pointer rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1731041/pexels-photo-1731041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover  cursor-pointer rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1731041/pexels-photo-1731041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover  cursor-pointer rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1731041/pexels-photo-1731041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover  cursor-pointer rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
