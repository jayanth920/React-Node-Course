import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const themeColor = useSelector((state) => state.theme.value);

  return (
    <div style={{ color: themeColor }}>
      <h1> Profile Page</h1>
    </div>
  );
}

export default Profile;