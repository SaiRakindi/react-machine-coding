import React, { useState } from "react";

const TimerWithoutRef = () => {
  const [timer, setTimer] = useState(0);
  const [timeIntervalId, setTimeIntervalId] = useState(null);

  const handleStartTimer = () => {
    if (!timeIntervalId) {
      const timerId = setInterval(() => {
        setTimer((prevState) => prevState + 1);
      }, 1000);

      setTimeIntervalId(timerId);
    }
  };

  const handleStopTimer = () => {
    clearInterval(timeIntervalId);
    setTimeIntervalId(null);
  };

  const handleRestartTimer = () => {
    clearInterval(timeIntervalId);
    setTimeIntervalId(null);
    setTimer(0);
  };

  return (
    <div>
      <h2>Timer: {timer}</h2>
      <div>
        <button onClick={handleStartTimer}>Start</button>
        <button onClick={handleStopTimer}>Stop</button>
        <button onClick={handleRestartTimer}>Restart</button>
      </div>
    </div>
  );
};

export default TimerWithoutRef;
