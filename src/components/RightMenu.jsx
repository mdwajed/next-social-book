import React from "react";
import FriendRequest from "./FriendRequest";
import Birthday from "./Birthday";
import Ad from "./Ad";
import UserinfoCard from "./UserinfoCard";
import UserMediaCard from "./UserMediaCard";

export default function RightMenu({ userId }) {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserinfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequest />
      <Birthday />
      <Ad size="md" />
    </div>
  );
}
