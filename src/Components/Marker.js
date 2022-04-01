import React from "react";
import "../Styling/marker.css";

function Marker({ name }) {
  return (
    <div
      className='marker'
      style={{ backgroundColor: "red", cursor: "pointer" }}
      title={name}></div>
  );
}

export default Marker;
