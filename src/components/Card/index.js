import React from "react";

import minusGold from "../../assets/icons/minusGold.png";
import minusRed from "../../assets/icons/minusRed.png";
import plusGold from "../../assets/icons/plusGold.png";
import plusRed from "../../assets/icons/plusRed.png";
import Sparkle from "../Sparkle";

const getGoldIds = [1, 4, 5, 8];

const Card = ({
  item: { id, image, have, haveGold, name, duplicated } = {},
  country,
  countryIndex,
  changeStickerStatus,
  isHaveMode,
}) => {
  let imageClassName = "image";
  if ((!have && isHaveMode) || (!duplicated && !isHaveMode)) {
    imageClassName = imageClassName.concat(" image-disabled");
  }

  const haveSticker = have || haveGold;
  const showRedPlus = !haveSticker;
  const showGoldPlus = !haveGold;

  const showDuplicatedMinus = duplicated > 0;

  const couldBeGold = getGoldIds.includes(id) && !haveGold;

  return (
    <div className="card">
      {!isHaveMode && (
        <>
          <text>{duplicated}</text>
          {couldBeGold && <text>Dorada </text>}
          <br></br>{" "}
        </>
      )}
      {isHaveMode && (
        <>
          {/* <text>{couldBeGold ? "Dorada" : ""}</text> */}
          {id}
          <br></br>{" "}
        </>
      )}
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
        {isHaveMode ? (
          <>
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
          </>
        ) : (
          <>
            {showDuplicatedMinus && (
              <img
                className="plus-icon"
                onClick={() =>
                  changeStickerStatus({
                    id,
                    countryIndex,
                    isAdd: false,
                    isDuplicated: true,
                  })
                }
                src={minusRed}
                alt={"decrement duplicated sticker"}
              ></img>
            )}
            <img
              className="plus-icon"
              onClick={() =>
                changeStickerStatus({
                  id,
                  countryIndex,
                  isAdd: true,
                  isDuplicated: true,
                })
              }
              src={plusRed}
              alt={"increment duplicated sticker"}
            ></img>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
