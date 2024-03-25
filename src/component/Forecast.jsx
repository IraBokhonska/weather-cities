import React from "react";
import { iconUrlFromCode } from "../services/IconUrlFromCode";

export const Forecast = ({ title, items }) => {
  console.log(items);
  return (
    <div className="forecast">
      <div className="forecast__title flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <ul className="forecast__list flex flex-row items-center justify-between text-white gap-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="forecast__item flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm text-center">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt="icon"
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
