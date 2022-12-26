import React from "react";
import PropTypes from "prop-types";

function Progress({ precentage }) {
  return (
    <div className="progress mt-3">
      <div
        className="progress-bar progress-bar-striped bg-success"
        role="progressbar"
        style={{ width: `${precentage}%` }}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100">
        {precentage}%
      </div>
    </div>
  );
}

Progress.prototype = {
  precentage: PropTypes.number.isRequired,
};

export default Progress;
