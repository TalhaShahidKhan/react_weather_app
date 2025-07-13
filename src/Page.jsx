import { useContext, useEffect, useState } from "react";
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";
import Header from "./components/Header";
import WeatherBoard from "./components/WeatherBoard";
import { WeatherContext } from "./contexts";

export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatterdCloudsImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      default:
        return ClearSkyImage;
    }
  }

  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);

  return (
    <div
      style={{ backgroundImage: `url('${climateImage}')` }}
      className="bg-body font-[Roboto] text-light bg-no-repeat bg-cover h-screen grid place-items-center"
    >
      <header className="fixed top-0 z-50 w-full pb-10 bg-gradient-to-b from-black/60 to-black/0">
        <Header />
      </header>
      <main>
        {loading ? (
          <div className="flex p-8 mx-auto bg-gray-200 rounded-md w-96 mt-14">
            <p className="text-3xl text-center text-black">{loading.message}</p>
          </div>
        ) : (
          <WeatherBoard />
        )}
      </main>
    </div>
  );
}
