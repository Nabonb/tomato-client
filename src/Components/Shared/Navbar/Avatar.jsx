import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { assets } from "../../../assets/images/assets";

const Avatar = () => {
  const { user } = useContext(AuthContext);
  return (
      <img
        className="rounded-full cursor-pointer w-9 h-9"
        referrerPolicy="no-referrer"
        src={user ? user.photoURL : assets.avatar_null}
        alt="Profile"
      />
  );
};

export default Avatar;
