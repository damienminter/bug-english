import React from "react";
import "./card.css";

export default function NaverSearchItem(props) {
  const { place } = props;

  return (
    <>
      {Object.keys(place).length > 0 && (
        <div className="card_mui">
          <div className="gridCol4">
            <img src={place.thumUrl} alt={place.display}></img>
            <div>
              <h2>{place.name}</h2>
              <h4>{place.display}</h4>
            </div>
          </div>
          <div className="gridCol2">
            <div className="grid-item1">
              <p>{place.address}</p>
              <p>{place.telDisplay}</p>
              <p>{place.bizhourInfo}</p>
              <p>{place.id}</p>

              <p>{place.homepage}</p>
            </div>
            <div className="grid-item2">
              <p>{place.roadAddress}</p>
              <p>{place.telDisplay}</p>
              <p>{place.bizhourInfo}</p>

              <p>
                {place.x} {place.y}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
