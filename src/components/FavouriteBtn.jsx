import { useContext } from "react";
import Heart from "../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../contexts";

export default function FavouriteBtn() {
  const { favourites, setFavourites } = useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);
  return (
    <>
      <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
          <button
            onClick={() =>
              setFavourites([
                ...favourites,
                {
                  location: weatherData.location,
                  longitude: weatherData.longitude,
                  latitude: weatherData.latitude,
                },
              ])
            }
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          >
            <span>Add to Favourite</span>
            <img src={Heart} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
