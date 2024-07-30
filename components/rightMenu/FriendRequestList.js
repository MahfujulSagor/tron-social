"use client";

import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";
import Image from "next/image";
import { useState } from "react";

const FriendRequestList = ({ requests }) => {
  const [optimisticRequests, setOptimisticRequests] = useState(requests);

  const handleAccept = async (requestId, userId) => {
    setOptimisticRequests((prev) => prev.filter((req) => req.id !== requestId));
    try {
      await acceptFollowRequest(userId);
    } catch (err) {
      // Handle error and possibly revert optimistic update
    }
  };

  const handleDecline = async (requestId, userId) => {
    setOptimisticRequests((prev) => prev.filter((req) => req.id !== requestId));
    try {
      await declineFollowRequest(userId);
    } catch (err) {
      // Handle error and possibly revert optimistic update
    }
  };

  return (
    <div>
      {optimisticRequests.map((request) => (
        <div className="flex items-center justify-between" key={request.id}>
          <div className="flex items-center gap-4">
            <Image
              src={request.sender.avatar || "/noAvatar.png"}
              alt="User Avatar"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">
              {request.sender.name && request.sender.surname
                ? `${request.sender.name} ${request.sender.surname}`
                : request.sender.username}
            </span>
          </div>
          <div className="flex gap-3 justify-end">
            <button onClick={() => handleAccept(request.id, request.sender.id)}>
              <Image
                src="/accept.png"
                alt="Accept"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
            <button onClick={() => handleDecline(request.id, request.sender.id)}>
              <Image
                src="/reject.png"
                alt="Reject"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestList;
