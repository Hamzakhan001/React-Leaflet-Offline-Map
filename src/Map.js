import React, { useState } from "react";
import {
  MapContainer,
  useMapEvents,
  Marker,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import L from "leaflet"; // Remember that this must also be imported

const Mainmap = () => {
  const [zoomLevel, setZoomLevel] = useState(16); // initial zoom level provided for MapContainer

  const main1 = new L.Icon({
    iconUrl: require("./resources/main1.png"),
    iconSize: [200, 200],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });
  const main2 = new L.Icon({
    iconUrl: require("./resources/main2.png"),
    iconSize: [200, 200],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });
  const s3c5 = new L.Icon({
    iconUrl: require("./resources/s1c4.png"),
    iconSize: [150, 150],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });

  const s1c4 = new L.Icon({
    iconUrl: require("./resources/s1c4.png"),
    iconSize: [150, 150],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });

  const s3c7 = new L.Icon({
    iconUrl: require("./resources/s3c7.png"),
    iconSize: [150, 150],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });
  const s2c3 = new L.Icon({
    iconUrl: require("./resources/s2c3.png"),
    iconSize: [150, 150],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });
  const s2c8 = new L.Icon({
    iconUrl: require("./resources/s2c8.png"),
    iconSize: [150, 150],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });

  
  //  const {map}=useMap()
  function MyComponent() {
    const mapEvents = useMapEvents({
      zoomend: () => {
        setZoomLevel(mapEvents.getZoom());
        console.log("myzoom", zoomLevel);
      },
    });
    console.log(zoomLevel);
    return null;
  }
  const mainlocations = [
    {
      name: "main_location2",
      lat: 25.1956508,
      lng: 55.2775217,
    },
    {
      name: "main_location1",
      lat: 25.196441,
      lng: 55.283081,
    },
  ];

  const sublocations = [
    { name: "sub1", lat: 25.1958226, lng: 55.2778008, count: 4 },
    { name: "sub2", lat: 25.1956812, lng: 55.2776127, count: 8 },
    { name: "sub3", lat: 25.1956308, lng: 55.27771, count: 7 },
    { name: "sub1", lat: 25.196441, lng: 55.283381, count: 4 },
    { name: "sub2", lat: 25.196441, lng: 55.283081, count: 3 },
    { name: "sub3", lat: 25.196209, lng: 55.28243, count: 5 },
  ];
  const mymap=()=>{
    const map = L.map('map')
    return map

  }
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <div className="col">
            <MapContainer
              center={[25.1956812, 55.2776127]}
              zoom={zoomLevel}
              style={{
                height: "100vh",
                width: "178%",
              }}
              scrollWheelZoom={true}
              minZoom={12}
              maxZoom={17}
              maxBoundsViscosity={1.0}
              attributionControl={true}
              animate={true}
            > 
              <MyComponent />
              <TileLayer
                url={"12/{z}/{x}/{y}.png"}
              />
              {zoomLevel > 10 && zoomLevel <=12? (
                <Marker position={[25.1956508, 55.2775217]} icon={main1} />
              ) : (
                ""
              )}
              {zoomLevel > 10&& zoomLevel <=12?(
                <Marker position={[25.196441, 55.283081]} icon={main2} />
              ) : (
                ""
              )}

              {zoomLevel >= 14? (
                <Marker position={[25.196209, 55.28243]} icon={s3c7} />
              ) : (
                ""
              )}
              {zoomLevel >=  14 ? (
                <Marker position={[25.1956308, 55.27771]} icon={s1c4} />
              ) : null}
              {zoomLevel >=  14 ? (
                <Marker position={[25.195681, 55.277613]} icon={s2c8} />
              ) : (
                ""
              )}
              {zoomLevel >=  14 ? (
                <Marker position={[25.1964413, 55.28308144]} icon={s3c7} />
              ) : (
                ""
              )}
              {zoomLevel >=  14 ? (
                <Marker position={[25.195822, 55.2778]} icon={s3c7} />
              ) : (
                ""
              )}
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainmap;
