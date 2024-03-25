import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";

import { formatToLocalTime } from "../services/WeatherService";
import { iconUrlFromCode } from "../services/IconUrlFromCode";

export const TemperatureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <div>
      <div className="weather__details flex items-center justify-center py-6 text-xl text-white ">
        <p>{details}</p>
      </div>
      <div className="weather__icon flex flex-row items-center justify-between text-white py-3">
        <img
          src={iconUrlFromCode(icon)}
          alt="icon"
          className="w-20
         "
        />
        <p className=" weather__temperature text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="weather__info flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>
      <div className="details flex flex-row justify-center items-center space-x-2 text-white text-sm py-3">
        <div className="details__item flex flex-row justify-center items-center space-x-2">
          <UilSun />
          <p className="font-light ">
            Rise:{" "}
            <span className="font-medium ml-1  ">
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </span>
          </p>
        </div>
        <p className="font-light line-vertical">|</p>
        <div className="details__item flex flex-row justify-center items-center space-x-2">
          <UilSunset />
          <p className="font-light ">
            Set:{" "}
            <span className="font-medium ml-1  ">
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </span>
          </p>
        </div>
        <p className="font-light line-vertical">|</p>
        <div className="details__item flex flex-row justify-center items-center space-x-2">
          <UilArrowUp />
          <p className="font-light ">
            High:{" "}
            <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
          </p>
        </div>
        <p className="font-light line-vertical">|</p>
        <div className="details__item flex flex-row justify-center items-center space-x-2">
          <UilArrowDown />
          <p className="font-light ">
            Low:{" "}
            <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
