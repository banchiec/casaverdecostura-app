import React, { useState } from "react";
import "./ColorsItem.css";

export const ColorsItem = (props) => {
  console.log(props, "los props de onShow");
  const showImage = (url) => {
    props.setImageShow(url);
  };
  return (
    <>
      {props.photos.map((item, i) => {
        return (
          <>
            <button
              style={{ backgroundColor: `${item.color}` }}
              data-index={i}
              key={i}
              name={item.url}
              color={item.color}
              value={item.color}
              onClick={() => showImage(item?.url)}
              className="color-btn"
            ></button>
          </>
        );
      })}
    </>
  );
};
