import React from "react";

const Card = ({
  item: { id, image, have, haveGold, duplicated, selected, name } = {},

  country,
}) => {
  return (
    <div className="card">
      <img
        className="image"
        //onClick={(e) => handleOnClick(e, { index })}
        src={image}
        alt={`${name}-${country}`}
      ></img>
    </div>
  );
};

export default Card;
