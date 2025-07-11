import useWeather from "../hooks/useWeather";

const Weather = () => {
  const { city, setCity, weather, error, fetchWeather } = useWeather();
  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans bg-zinc-950">
      <div className="w-full max-w-md bg-[#161616] border border-[#333] rounded-2xl shadow-2xl p-8 space-y-6 text-white relative overflow-hidden">
        <div className="text-center">
          <h1 className="text-3xl font-bold">WeatherCheck</h1>
          <p className="text-sm text-gray-400 mt-1">
            Real-time weather updates for your city
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city..."
            className="flex-1 px-4 py-3 rounded-md bg-[#252525] text-white placeholder-gray-400 border border-[#444]"
          />
          <button
            onClick={fetchWeather}
            className="bg-white hover:bg-white/40 text-black px-5 py-3 rounded-md font-medium"
          >
            Search
          </button>
        </div>

        {error && (
          <p className="text-center text-red-400 bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-md text-sm font-medium">
            {error}
          </p>
        )}

        {weather && (
          <div className="bg-[#1e1e1e] border border-[#333] rounded-xl p-6 shadow-md text-center space-y-5">
            <h2 className="text-xl font-semibold">
              {weather.name}, {weather.sys.country}
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt={weather.weather[0].description}
                className="w-24 h-24 drop-shadow-xl"
              />
              <div className="space-y-1">
                <div className="text-5xl font-extrabold text-white">
                  {weather.main.temp}°C
                </div>
                <p className="capitalize text-gray-300 text-sm">
                  {weather.weather[0].main}
                </p>
                <p className="capitalize text-gray-400 text-xs italic">
                  {weather.weather[0].description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 text-xs gap-4 text-gray-400 mt-4">
              <div>
                <p className="font-semibold text-white">
                  {weather.main.humidity}%
                </p>
                <p>Humidity</p>
              </div>
              <div>
                <p className="font-semibold text-white">
                  {weather.wind.speed} m/s
                </p>
                <p>Wind</p>
              </div>
              <div>
                <p className="font-semibold text-white">
                  {weather.main.feels_like}°C
                </p>
                <p>Feels like</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
