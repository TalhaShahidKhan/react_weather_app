import FavouriteProvider from "./contexts/providers/FavouriteProvider";
import LocationProvider from "./contexts/providers/LocationProvider";
import WeatherProvider from "./contexts/providers/WeatherProvider";
import Page from "./Page";

export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
