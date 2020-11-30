import React from "react";
import ReactPlayer from "react-player";

import "../../utililty.css";

const media = "https://www.youtube.com/watch?v=yY4pdpbsCh8";

export const BugCard = () => {
  return (
    <div className="BugCard">
      <div className="BugCardContent">
        <div className="BugCardHeader">This is a header</div>
        <div className="BugCardBody">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              controls
              url={media}
              onError={() => console.log(`Cannot play: ${media}`)}
            />
          </div>
        </div>
        <div className="BugCardFooter"></div>
      </div>
    </div>
  );
};
