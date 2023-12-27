/* eslint-disable react/prop-types */

const Weather = ({ weatherData }) => {
  return (
    <div>
      {weatherData.weather ? (
        <div className="w-[500px] h-[220px] bg-slate-300 shadow-lg rounded-xl m-auto px-6 top-[10%] ">
          <div className="flex justify-between w-full p-2">
            <div className="w-1/2 my-6 mx-auto flex justify-between items-center">
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <p className="text-xl">
                    {weatherData.name},{weatherData.sys.country}
                  </p>
                  <p className="text-sm ">
                    {weatherData.weather[0].description}
                  </p>
                </div>
                <div>
                  <h1 className="text-6xl font-semibold">
                    {weatherData.main.temp.toFixed()} °C
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex flex-col justify-between items-end">
              <div>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  className="w-[100px]"
                  alt="icon"
                />
              </div>
              {weatherData.name !== undefined ? (
                <div className="flex flex-col  justify-evenly gap-y-2 my-4  text-xs items-end">
                  <div className="flex gap-x-8 ">
                    <p>Feels like </p>
                    <p className="font-bold w-20">
                      {weatherData.main.feels_like.toFixed()} °C
                    </p>
                  </div>{" "}
                  <div className="flex justify-between gap-x-8">
                    <p>Humidity </p>
                    <p className="font-bold w-20">
                      {weatherData.main.humidity} %
                    </p>
                  </div>
                  <div className="flex justify-between gap-x-8">
                    <p>Wind </p>
                    <p className="font-bold w-20">
                      {weatherData.wind.speed.toFixed()} KPH
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
