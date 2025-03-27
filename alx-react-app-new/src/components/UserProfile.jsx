import React from "react";

function UserProfile(props) {
  return (
    <div
      style={{
        fontSize: ".5rem",
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      {/* ["Age", "Bio", Name] */}
      <h2 style={{ color: "blue" }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ fontSize: "9px", color: "green" }}> Bio: {props.bio}</p>
    </div>
  );
}
export default UserProfile;
