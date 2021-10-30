import React from "react";
import { BiBrightness } from "react-icons/bi";
export default function Title({ title, subTitle }) {
  return (
    <div className="title__container">
      <div className="title">
        <h2>{title}</h2>
        <h4>{subTitle}</h4>
      </div>
      <div className="icon">
        <BiBrightness />
      </div>
    </div>
  );
}
