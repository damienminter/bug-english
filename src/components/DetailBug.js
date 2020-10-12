import React from "react";

export default function DetailBug() {
  return (
    <div>
      <div className="loction-container">
        <h4>Location</h4>
      </div>
      <div className="date-added-container">
        <h4>Date</h4>
      </div>
      <div className="company-website-container">
        <h4>Company Website</h4>
      </div>
      <div className="bug-status-container">
        <h4>Status: New</h4>
      </div>
      <div className="bug-status-container">
        <h4>
          <a>Image Link</a>
        </h4>
      </div>
      <div className="bug-status-container">
        <h4>Suggestion: Improve your english here</h4>
      </div>

      <div className="bug-status-container">
        <h4>+</h4>
      </div>
    </div>
  );
}
