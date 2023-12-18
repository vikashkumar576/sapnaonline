import React, { useState, useEffect } from 'react';

const Test = () => {
  // Set the target date and time (7 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  // Calculate the remaining time
  const calculateRemainingTime = () => {
    const now = new Date();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateRemainingTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateRemainingTime());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  });

  return (
    <div className="countdown-wrapper">
      <div className="time-unit">
        <div className="time">{timeRemaining.days}</div>
        <div className="dimension">days</div>
      </div>
      <div className="time-unit">
        <div className="time">{timeRemaining.hours}</div>
        <div className="dimension">hours</div>
      </div>
      <div className="time-unit">
        <div className="time">{timeRemaining.minutes}</div>
        <div className="dimension">minutes</div>
      </div>
      <div className="time-unit">
        <div className="time">{timeRemaining.seconds}</div>
        <div className="dimension">seconds</div>
      </div>
    </div>
  );
};

export default Test;
