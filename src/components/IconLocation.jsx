import L from 'leaflet';
import iconUrl from '../assets/imagenes/venue_location_icon.svg'

export const IconLocation = L.icon ({
  iconUrl: (iconUrl),
  iconRetinaUrl: (iconUrl),
  iconAnchor: null,
  shadowURL: null,
  shadowSize: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon',
});