//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const hours = new Date().getHours();
let greeting = "";
const customStyle = {
  color: "blue"
};

if (hours <= 0 && hours < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (hours >= 12 && hours <= 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else if (hours > 18) {
  greeting = "Good evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={customStyle}>{greeting}</h1>,
  document.getElementById("root")
);
