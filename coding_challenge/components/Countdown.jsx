import React from "react";
import Countdown from "react-countdown";

const MyCountdown = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    const formatNumber = num => {
      return num < 10 ? `0${num}` : num;
    };

    return (
      <div className="flex gap-4 justify-center lg:justify-normal mt-5 mb-10 lg:mb-0 lg:mt-10">
        <h1>
          <span className="text-4xl">{formatNumber(days)}</span>
          <span>D</span>
        </h1>
        <h1>
          {" "}
          <span className="text-4xl">{formatNumber(hours)}</span>
          <span>H</span>
        </h1>
        <h1>
          {" "}
          <span className="text-4xl">{formatNumber(minutes)}</span>
          <span>M</span>
        </h1>
        <h1>
          {" "}
          <span className="text-4xl">{formatNumber(seconds)}</span>
          <span>S</span>
        </h1>
      </div>
    );
  };

  return (
    <Countdown
      date={Date.now() + 500000000} // Replace with your target date/time
      renderer={renderer}
    />
  );
};

export default MyCountdown;
