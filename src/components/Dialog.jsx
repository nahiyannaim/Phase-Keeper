import React from "react";
import "../styles/dialog.css";

const Dialog = props => {
  return (
    <div className="dialog">
      <i className="fa fa-exclamation-triangle"> </i>
      {props.message}
    </div>
  );
};

export default Dialog;
