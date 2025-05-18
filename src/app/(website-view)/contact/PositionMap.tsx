"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const position: LatLngExpression = [23.8103, 90.4125];
const customIcon = new L.Icon({
  iconUrl: '/icon/location.png', 
  iconSize: [32, 32], 
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32],
});

const PositionMap = () => {
    return (
        <div className="w-full h-[300px] rounded-xl overflow-hidden">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        Dhaka
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default PositionMap;