import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProfileCard() {
  return (
    <div className="flex flex-col gap-6 p-4 shadow-lg text-sm bg-white rounded-lg ">
      <div className="relative h-20">
      <Image
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
         fill
            className="object-cover  rounded-md "
          />
      <Image
            src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
         width={48}
         height={48}
            className="object-cover  rounded-full absolute left-0 right-0 z-10 -bottom-6 w-12 h-12 m-auto ring-1 ring-white"
          />
      </div>
      <div className="flex flex-col items-center gap-4"> 
      <h1 className=" font-semibold ">Wdward Gabriel May</h1>
      <div className="flex gap-4 "> 
      <div className="flex "> 
      <Image
            src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
         width={12}
         height={12}
            className="object-cover  rounded-full w-3 h-3"
          />
      <Image
            src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
         width={12}
         height={12}
            className="object-cover  rounded-full w-3 h-3"
          />
      <Image
            src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
         width={12}
         height={12}
            className="object-cover  rounded-full w-3 h-3"
          />
      </div>
      <p className="text-xs">500 followers</p>
      </div>
      <Link href="/">
          <button className="bg-blue-500 text-white text-xs p-2 rounded-md flex items-center">
            My Profile
          </button>
        </Link>
    </div>
    </div>
  )
}
