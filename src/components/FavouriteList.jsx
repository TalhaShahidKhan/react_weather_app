import { useContext } from "react";
import { FavouriteContext } from "../contexts";
import LocationProvider from "../contexts/providers/LocationProvider";

export default function FavouriteList() {
  const { favourites } = useContext(FavouriteContext);
  const { setSelectedLocation } = useContext(LocationProvider);
  return (
    <div className="absolute right-0 max-w-xs py-4 text-black bg-white border-gray-500 rounded-md shadow-lg top-16 ">
      <h3 className="px-4 text-lg font-bold">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourites.length > 0 ? (
          favourites.map((fav) => (
            <li
              onClick={() => setSelectedLocation({ ...fav })}
              key={fav.location}
              className="hover:bg-gray-200"
            >
              {fav.location}
            </li>
          ))
        ) : (
          <li className="hover:bg-gray-200">Nothing Here</li>
        )}
      </ul>
    </div>
  );
}
