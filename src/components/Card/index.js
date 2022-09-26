import React from "react";

import minusGold from "../../assets/icons/minusGold.png";
import minusRed from "../../assets/icons/minusRed.png";
import plusGold from "../../assets/icons/plusGold.png";
import plusRed from "../../assets/icons/plusRed.png";
import Sparkle from "../Sparkle";

const Card = ({
  item: { id, image, have, haveGold, name } = {},
  country,
  countryIndex,
  changeStickerStatus,
}) => {
  let imageClassName = "image";
  if (!have) {
    imageClassName = imageClassName.concat(" image-disabled");
  }

  const haveSticker = have || haveGold;
  const showRedPlus = !haveSticker;
  const showGoldPlus = !haveGold;

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
      <div className="icons-container">
        <img
          className="plus-icon"
          onClick={() =>
            changeStickerStatus({
              id,
              countryIndex,
              isGold: false,
              isAdd: showRedPlus,
            })
          }
          src={showRedPlus ? plusRed : minusRed}
          alt={`${showRedPlus ? "add" : "remove"} sticker`}
        ></img>
        <img
          className="plus-icon gold-icon"
          onClick={() =>
            changeStickerStatus({
              id,
              countryIndex,
              isGold: true,
              isAdd: showGoldPlus,
            })
          }
          src={showGoldPlus ? plusGold : minusGold}
          alt={`${showGoldPlus ? "add" : "remove"} gold sticker`}
        ></img>
      </div>
    </div>
  );
};

export default Card;
