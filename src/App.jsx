import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import TopButtons from "./component/TopButtons";
import { Inputs } from "./component/Inputs";
import { TimeAndLocation } from "./component/TimeAndLocation";
import { TemperatureAndDetails } from "./component/TemperatureAndDetails";
import { Forecast } from "./component/Forecast";
import getFormattedWeatherData from "./services/WeatherService";

function App() {
  const [query, setQuery] = useState(() => {
    // Load the query from local storage if available, otherwise use the default value
    const savedQuery = localStorage.getItem("weatherQuery");
    return savedQuery ? JSON.parse(savedQuery) : { q: "berlin" };
  });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";
      try {
        toast.info("Fetching weather for " + message);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const data = await getFormattedWeatherData({ ...query, units });
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        setWeather(data);
      } catch (error) {
        toast.error(`Unfortunately, an error occurred. Please try again.`);
      }
    };

    fetchWeather();
  }, [query, units]);

  useEffect(() => {
    saveToLocalStorage("weatherQuery", query);
  }, [query]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-800 to-blue-900";
    const threshold = units === "metric" ? 20 : 68;
    if (weather.temp <= threshold) return "from-cyan-800 to-blue-900";

    return "from-yellow-800 to-orange-900";
  };

  return (
    <div
      className={`wrapper bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <div className={`container mx-auto max-w-screen-lg py-5 px-16 md:px-32`}>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div className="weather">
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />
            <Forecast title="Hourly forecast" items={weather.hourly} />
            <Forecast title="Daily forecast" items={weather.daily} />
          </div>
        )}
        <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
      </div>
    </div>
  );
}

export default App;
