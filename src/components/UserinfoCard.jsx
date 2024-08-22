import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UserinfoCard() {
  return (
    <div className="flex flex-col gap-6 p-4 shadow-lg text-sm bg-white rounded-lg text-gray-600">
      <div className="flex justify-between items-center font-bold">
        <span className="">User Information</span>
        <Link className="text-blue-600 text-xs" href="/">
          See All
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <span className="text-lg font-bold">
          Elva Wavear
          <b className="text-xs"> @wajed.com</b>
        </span>
      </div>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi
        consequatur veniam odit aspernatur facere.
      </p>
      <div className="flex gap-4 items-center">
        <Image src="/map.png" alt="" width={16} height={16} />
        <span className="text-xs">
          Living in
          <b className="text-sm font-semibold"> Denmark</b>
        </span>
      </div>
      <div className="flex gap-4 items-center">
        <Image src="/school.png" alt="" width={16} height={16} />
        <span className="text-xs">
          Went to
          <b className="text-sm font-semibold"> Edger High School</b>
        </span>
      </div>
      <div className="flex gap-4 items-center">
        <Image src="/work.png" alt="" width={16} height={16} />
        <span className="text-xs">
          Work at
          <b className="text-sm font-semibold"> Apple Inc</b>
        </span>
      </div>
      <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-2">
          <Image src="/link.png" alt="" width={16} height={16} />
          <Link href="https://wajed.com" className="text-xs text-blue-500 font-medium">Wajed.com</Link>
        </div>
        <div className="flex gap-2">
          <Image src="/date.png" alt="" width={16} height={16} />
          <span className="text-xs font-medium">Joined November 2024</span>
        </div>
      </div>
      <button className="bg-blue-600 text-white py-2 text-sm rounded-md">
        Following
      </button>
      <p className="text-red-200 text-xs flex justify-end cursor-pointer">Block User</p>
    </div>
  );
}
