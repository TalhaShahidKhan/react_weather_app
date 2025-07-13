import { useState } from "react";
import Heart from "../assets/heart.svg";
import Logo from "../assets/logo.svg";
import FavouriteList from "./FavouriteList";
export default function Header() {
  const [showFav, setShowFav] = useState(false);
  return (
    <nav className="container flex items-center justify-between py-6 mx-auto">
      <a href="./index.html">
        <img className="h-9" src={Logo} alt="Weather App" />
      </a>

      <div className="relative flex items-center gap-4">
        <div className="flex items-center gap-2 p-2 transition-all rounded-md cursor-pointer hover:bg-black/30">
          <img src={Heart} alt="" />
          <span onClick={() => setShowFav(!showFav)}>Favourite Locations</span>
        </div>
        {showFav && <FavouriteList />}
      </div>
    </nav>
  );
}
