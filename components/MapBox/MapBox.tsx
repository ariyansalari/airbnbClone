"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { DivIcon, Icon, LatLngExpression } from "leaflet";

export const MapBox = () => {
  const [propertyResult, setPropertyResult] = useState([]);
  const position = [51.521245, -0.109889];
  useEffect(()=>{
    const searchResult = fetch(
        "https://663a5dfe1ae792804bef15cc.mockapi.io/Properties"
      )
        .then((res) => res.json())
        .then((res) => setPropertyResult(res));
    
  },[])
  const foodIcon = new Icon({
    iconUrl: "https://img.icons8.com/doodle/48/apple.png",
    iconSize: [35, 35], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });
  return (
    <>
      <MapContainer
        style={{ width: '100%', height: '100%' }}
        center={position as LatLngExpression}
        zoom={13}
        scrollWheelZoom={false}
      >
        {propertyResult?.map((item: any) => {
    
          return (
            <>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker icon={foodIcon} position={[item.lat, item.long]}>
                <Popup>{item.title}</Popup>
              </Marker>
            </>
          );
        })}
      </MapContainer>
      ,
    </>
  );
};
