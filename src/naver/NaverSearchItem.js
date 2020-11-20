import React from "react";
import "./card.css";

export default function NaverSearchItem(props) {
  const { place } = props;

  const regex = (target) => target.replace(/(<([^>]+)>)/gi, "");

  return (
    <>
      {Object.keys(place).length > 0 && (
        <div className="card_mui">
          <div>
            {place.thumUrl && (
              <img src={place.thumUrl} alt={regex(place.display)}></img>
            )}
            <div>
              <h2>{regex(place.name)}</h2>
              <h4>{regex(place.display)}</h4>
            </div>
          </div>
          <div>
            <div>
              <p>{place.address}</p>
              <p>{place.telDisplay}</p>
              <p>{place.bizhourInfo}</p>
              <p>{place.id}</p>
              <p>
                {place.x} {place.y}
              </p>
              <p>{place.homepage}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
