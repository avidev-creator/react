import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();

  return (
    <div className="text-3xl text-center text-gray-700 w-full h-screen">
      <div className="h-screen flex items-center justify-center text-orange-500">
        User : {userId}
      </div>
    </div>
  );
}
