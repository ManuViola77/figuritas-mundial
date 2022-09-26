import React from "react";

import Sparkle from "../Sparkle";

const Card = ({
  item: { id, image, have, haveGold, duplicated, selected, name } = {},

  country,
}) => {
  let imageClassName = "image";
  if (have) {
    imageClassName = imageClassName.concat(" image-disabled");
  }

  return (
    <div className="card">
      <img
        className={imageClassName}
        //onClick={(e) => handleOnClick(e, { index })}
        src={image}
        alt={`${name}-${country}`}
      ></img>
      {haveGold && (
        <div
          style={{
            position: "relative",
            marginTop: -123,
            height: 120,
            width: 100,
          }}
        >
          <Sparkle count={50} overflowPx={0} fadeOutSpeed={35} />
        </div>
      )}
    </div>
  );
};

export default Card;
