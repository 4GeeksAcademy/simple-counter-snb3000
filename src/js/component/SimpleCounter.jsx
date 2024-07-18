// File: /workspaces/simple-counter-snb3000/src/js/component/SimpleCounter.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./SimpleCounter.css";

const SimpleCounter = ({ digitFour, digitThree, digitTwo, digitOne }) => {
  return (
    <div className="card">
      <FontAwesomeIcon icon={faClock} /> {/* Clock icon */}
      <div className="counter">
        <span>{digitFour}</span>
        <span>{digitThree}</span>
        <span>{digitTwo}</span>
        <span>{digitOne}</span>
      </div>
    </div>
  );
};

export default SimpleCounter;
