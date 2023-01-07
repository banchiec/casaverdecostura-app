import React from "react";
import { ColorsItem } from "./ColorsItem";
import "./Colors.css";

export const Colors = (props) => {
  return (
    <div className="container-color">
      <ColorsItem {...props}></ColorsItem>
    </div>
  );
};
