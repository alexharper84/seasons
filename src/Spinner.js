import React from "react";

const Spinner = props => {
  return (
    <div class="ui active dimmer">
      <div class="ui massive text loader">{props.message}</div>
    </div>
  );
};

// create a fallback loading message for the spinner component
Spinner.defaultProps = {
  message: "loading..."
};

export default Spinner;

// this is a reusable loading spinner component
