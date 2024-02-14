import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocation"


export default function Markered() {
  return <Marker position={{ lat: '-32.9071434', lng: '-68.8514735' }} icon={IconLocation} />;
}
