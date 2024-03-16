import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>You must be logged in to view your profile</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
