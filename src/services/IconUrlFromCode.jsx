// day
import clearIcon from "../assets/images/weather-icons/day/clear-day.svg";
import fewCloudsIcon from "../assets/images/weather-icons/day/few-clouds-day.svg";
import rainIcon from "../assets/images/weather-icons/day/rain-day.svg";

//nigth
import clearIconNight from "../assets/images/weather-icons/night/clear-night.svg";
import fewCloudsIconNight from "../assets/images/weather-icons/night/few-clouds-night.svg";
import rainIconNight from "../assets/images/weather-icons/night/rain-night.svg";

import cloudIcon from "../assets/images/weather-icons/all/clouds.svg";
import showerRainIcon from "../assets/images/weather-icons/all/shover-rain.svg";
import stormIcon from "../assets/images/weather-icons/all/thunderstorm.svg";
import snowIcon from "../assets/images/weather-icons/all/snow.svg";
import mist from "../assets/images/weather-icons/all/mist.svg";

const weatherIcons = {
  "01d": clearIcon,
  "01n": clearIconNight,
  "02d": fewCloudsIcon,
  "02n": fewCloudsIconNight,
  "09d": showerRainIcon,
  "09n": showerRainIcon,
  "10d": rainIcon,
  "10n": rainIconNight,
  "11d": stormIcon,
  "11n": stormIcon,
  "13d": snowIcon,
  "13n": snowIcon,
  "50d": mist,
  "50n": mist,
};
//for url open weather
// export const iconUrlFromCode = (code) =>
//   `http://openweathermap.org/img/wn/${code}@2x.png`;

// for custom
export const iconUrlFromCode = (code) => weatherIcons[code] || cloudIcon;
