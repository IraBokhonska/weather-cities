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
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";
      toast.info("Fetching weather for " + message);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div
      className={`wrapper bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 `}>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div>
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
