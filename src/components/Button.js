import React from "react";
import "./Button.css";

function Button(props) {
  return <button {...props} className="btn btn-primary mt-3 mb-5" />;
}

export default Button;
