import React, { useRef, useState } from "react";

const TimerWithRef = () => {
  const [timer, setTimer] = useState(0);
  const timerIntervalRef = useRef(null);

  const handleStartTimer = () => {
    if (!timerIntervalRef.current) {
      timerIntervalRef.current = setInterval(() => {
        setTimer((prevState) => prevState + 1);
      }, 1000);
    }
  };

  const handleStopTimer = () => {
    clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = null;
  };

  const handleRestartTimer = () => {
    clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = null;
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

export default TimerWithRef;
