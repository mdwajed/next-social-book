import React from "react";
import Image from "next/image";
import Link from "next/link";
import PostCard from "./ProfileCard";
import Ad from "./Ad";

export default function LeftMenu({ type }) {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <PostCard />}

      <div className="flex flex-col gap-2 p-2 shadow-lg text-sm bg-white rounded-lg text-gray-600">
        <Link
          href="/"
          className="flex items-center rounded-lg  gap-5 p-2 hover:bg-gray-200"
        >
          <Image src="/posts.png" alt="" width={20} height={20} />
          <span>My Posts</span>
        </Link>
        <Link
          href="/"
          className="flex items-center rounded-lg  gap-5 p-2 hover:bg-gray-200"
        >
          <Image src="/activity.png" alt="" width={20} height={20} />
          <span>Activity</span>
        </Link>
        <Link
          href="/"
          className="flex items-center rounded-lg  gap-5 p-2 hover:bg-gray-200"
        >
          <Image src="/market.png" alt="" width={20} height={20} />
          <span>Market Place</span>
        </Link>
        <Link
          href="/"
          className="flex items-center rounded-lg  gap-5 p-2 hover:bg-gray-200"
        >
          <Image src="/events.png" alt="" width={20} height={20} />
          <span>Events</span>
        </Link>
        <Link
          href="/"
          className="flex items-center rounded-lg  gap-5 p-2 hover:bg-gray-200"
        >
          <Image src="/albums.png" alt="" width={20} height={20} />
          <span>Album</span>
        </Link>
        <Link
          href="/"
          className="flex items-center rounded-lg  gap-5 p-2 hover:bg-gray-200"
        >
          <Image src="/videos.png" alt="" width={20} height={20} />
          <span>Videos</span>
        </Link>

        <Link
          href="/"
          className="flex items-center rounded-lg  gap-5 p-2 hover:bg-gray-200"
        >
          <Image src="/news.png" alt="" width={20} height={20} />
          <span>News</span>
        </Link>

        <Link
          href="/"
          className="flex items-center rounded-lg  gap-5 p-2 hover:bg-gray-200"
        >
          <Image src="/map.png" alt="" width={20} height={20} />
          <span>Maps</span>
        </Link>
        <Link
          href="/"
          className="flex items-center rounded-lg  gap-5 p-2 hover:bg-gray-200"
        >
          <Image src="/link.png" alt="" width={20} height={20} />
          <span>Links</span>
        </Link>
        <Link
          href="/"
          className="flex items-center rounded-lg  gap-5 p-2 hover:bg-gray-200"
        >
          <Image src="/settings.png" alt="" width={20} height={20} />
          <span>Settings</span>
        </Link>
      </div>
      <Ad size="sm"/>
    </div>
  );
}
