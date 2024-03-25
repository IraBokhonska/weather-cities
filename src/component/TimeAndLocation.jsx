import React from "react";
import { formatToLocalTime } from "../services/WeatherService";

export const TimeAndLocation = ({
  weather: { dt, timezone, name, country },
}) => {
  return (
    <div className="local">
      <div className="local__date-and-time flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="local__city flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium ">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};
