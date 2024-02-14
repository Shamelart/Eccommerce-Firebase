// Importar los paquetes necesarios
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../assets/style/mapView.css'
import Markered from './Markered';

// Crear el componente del mapa
export default function MapView() {
  // Definir las coordenadas que me diste
  
  return (
    <MapContainer className="map" center={{ lat: '-32.9071434', lng: '-68.8514735' }} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />      
      <Markered position={{ lat: '-32.9071434', lng: '-68.8514735' }} />
    </MapContainer>
  );
}
