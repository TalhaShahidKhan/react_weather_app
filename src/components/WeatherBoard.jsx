import FavouriteBtn from "./FavouriteBtn";
import Location from "./Location";
import WeatherDetails from "./WeatherDetails";

export default function WeatherBoard() {
  return (
    <section className="">
      <div className="container">
        <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
          <div className="grid gap-10 md:grid-cols-2 md:gap-6">
            <FavouriteBtn />
            <Location />
            <WeatherDetails />
          </div>
        </div>
      </div>
    </section>
  );
}
