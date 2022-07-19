import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import styled from "@emotion/styled";
import geoData from "./geoData.json";

const Map = styled.div`
  width: 100vw;
  height: 80vh;
`;

export default function MapBoxComponent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.js";
    const link = document.createElement("link");
    link.href =
      "https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.css";
    link.rel = "stylesheet";
    document.head.appendChild(script);
    document.head.appendChild(link);
    script.onload = () => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiZGlzYWdyZWVkZCIsImEiOiJjbDVxbWlyb2swY3d0M3BsZjl5ODM2NDgyIn0.cbwt1AK2rjUoUvsQVlii_Q";
      //   const color_breaks = [0, 10000, 20000, 30000, 40000, 50000];
      //   const color_stops = [
      //     [0, "rgb(237,248,251)"],
      //     [10000, "rgb(191,211,230)"],
      //     [20000, "rgb(158,188,218)"],
      //     [30000, "rgb(140,150,198)"],
      //     [40000, "rgb(136,86,167)"],
      //     [50000, "rgb(129,15,124)"],
      //   ];
      const layers = [
        "0-10",
        "10-20",
        "20-50",
        "50-100",
        "100-200",
        "200-500",
        "500-1000",
        "1000+",
      ];
      const colors = [
        "#FFEDA0",
        "#FED976",
        "#FEB24C",
        "#FD8D3C",
        "#FC4E2A",
        "#E31A1C",
        "#BD0026",
        "#800026",
      ];

      const map = new mapboxgl.Map({
        container: "map",
        language: "it",
        style: "mapbox://styles/mapbox/light-v10",
        center: [127, 37.51],
        zoom: 10.8,
        boxZoom: false,
        pitch: 45,
        bearing: -15,
        data: geoData,
        color_property: "인구",
        color_default: "red",
      });
      map.on("load", () => {
        map.addSource("seoul", {
          type: "geojson",
          data: geoData,
        });
        map.addLayer({
          id: "seoul",
          type: "fill",
          source: "seoul",
          layout: {},
          paint: {
            "fill-color": "#0080ff",
            "fill-opacity": 0.5,
          },
        });
        map.addLayer({
          id: "outline",
          type: "line",
          source: "seoul",
          layout: {},
          paint: {
            "line-color": "#000",
            "line-width": 3,
          },
        });
      });
    };
  }, []);

  return (
    <>
      <Map id="map"></Map>
    </>
  );
}
