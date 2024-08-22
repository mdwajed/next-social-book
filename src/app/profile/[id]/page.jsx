import Feeds from "@/components/Feeds";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";
import React from "react";

export default function ProfilePage() {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%] ">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-center items-center ">
            <div className="relative w-full h-64">
              <Image
                src="https://images.pexels.com/photos/2227774/pexels-photo-2227774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src="https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={128}
                height={128}
                className="absolute m-auto left-0 right-0 w-32 h-32 -bottom-16 ring-4 ring-white object-gover rounded-full"
              />
            </div>
            <h1 className="text-2xl font-semibold mt-20 mb-6">Elva Weaver</h1>
            <div className="flex gap-12 mb-6 items-center justify-center font-medium">
              <div className="flex flex-col items-center">
                <p className="font-medium">142</p>
                <p className="text-sm">Posts</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-medium">12 K</p>
                <p className="text-sm">Followers</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-medium">1.4 K</p>
                <p className="text-sm">Following</p>
              </div>
            </div>
          </div>
          <Feeds />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
}
