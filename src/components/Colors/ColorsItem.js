import React, { useState } from "react";
import "./ColorsItem.css";

export const ColorsItem = (props) => {
  console.log(props.photos[0].color);

  const showImage = (url, name) => {
    props.setImageShow(url);
    props.setActive({ active: name });
  };
  return (
    <>
      {props.photos.map((item, i) => {
        console.log(i === 0);
        console.log(props.active.active === i);
        let firstIndex = i == 0;
        console.log(
          firstIndex == props.active.active,
          "he pillado first index"
        );
        return (
          <>
            <button
              style={{ backgroundColor: `${item.color}` }}
              data-index={i}
              key={i}
              name={item.url}
              color={item.color}
              value={item.color}
              onClick={() => showImage(item?.url, i)}
              className={`color-btn ${
                i === 0 && props.active.active
                  ? props.active.active
                  : props.active.active === i
                  ? "active"
                  : ""
              }`}
            ></button>
          </>
        );
      })}
    </>
  );
};
