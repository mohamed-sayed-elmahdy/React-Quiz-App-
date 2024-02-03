import "./Timer.scss"
import { useState, useEffect } from "react";
// eslint-disable-next-line react/prop-types
function Timer({ onTimeout}) {
  const [seconds, setSeconds] = useState(90);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(timer);
        onTimeout();
        setSeconds(90);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, onTimeout]);

  return <div className="timer">Time Left : <span>{seconds < 10 ? `0${seconds}` : seconds}</span> seconds</div>;
}

export default Timer;