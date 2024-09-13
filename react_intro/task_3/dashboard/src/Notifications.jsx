import React from "react";
import "./Notifications.css";
import closeIcon from "./assets/close.png"; // Import the close icon image
import { getLatestNotification } from "./utils";

export function Notifications() {
  return (
    <div className="Notifications">
      <p style={{ display: "flex", justifyContent: 'space-between'}}>
        Here is the list of notifications
        <button
          style={{ textAlign: "right", display: "inline" }}
          aria-label="Close"
          onClick={() => console.log('Close button has been clicked')}
        >
          <img
            src={closeIcon}
            alt="close icon"
            style={{ width: "10px", height: "10px" }}
          />
        </button>
      </p>

      {/* Notification List */}
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}
