import React, { useEffect, useState } from "react";

import "./index.css";

const TrafficSignals = () => {
  const [activeTrafficLight, setActiveTrafficLight] = useState("green");

  useEffect(() => {
    let timer;

    if (activeTrafficLight === "green") {
      timer = setTimeout(() => {
        setActiveTrafficLight("yellow");
      }, 4000);
    }

    if (activeTrafficLight === "yellow") {
      timer = setTimeout(() => {
        setActiveTrafficLight("red");
      }, 1000);
    }

    if (activeTrafficLight === "red") {
      timer = setTimeout(() => {
        setActiveTrafficLight("green");
      }, 3000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [activeTrafficLight]);

  return (
    <div className="traffic-lights-container">
      <div
        className="traffic-light"
        style={{
          background: activeTrafficLight === "green" ? "green" : "gray",
        }}
      ></div>
      <div
        className="traffic-light"
        style={{
          background: activeTrafficLight === "yellow" ? "yellow" : "gray",
        }}
      ></div>
      <div
        className="traffic-light"
        style={{
          background: activeTrafficLight === "red" ? "red" : "gray",
        }}
      ></div>
    </div>
  );
};

export default TrafficSignals;
