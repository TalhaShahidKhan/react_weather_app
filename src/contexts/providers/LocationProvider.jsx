import { useState } from "react";
import { LocationConext } from "..";
export default function LocationProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });

  return (
    <LocationConext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationConext.Provider>
  );
}
