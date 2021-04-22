import React from "react";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <span className="close-btn" onClick={() => props.setTrigger(false)}>
          &times;
        </span>
        <h3>{props.title}</h3>
        <div>{props.children}</div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
