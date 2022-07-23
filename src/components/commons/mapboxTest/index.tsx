import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import styled from "@emotion/styled";
import geoData from "./geoData.json";
import { breakPoints } from "../../../commons/styles/media";

const Map = styled.div`
  width: 100%;
  height: 600px;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export default function MapBoxComponent() {
  // geoData 업데이트부분
  const guEvent = [
    { 강동구: 1 },
    { 송파구: 3 },
    { 강남구: 0 },
    { 서초구: 3 },
    { 관악구: 10 },
    { 동작구: 4 },
    { 영등포구: 8 },
    { 금천구: 4 },
    { 구로구: 11 },
    { 강서구: 12 },
    { 양천구: 4 },
    { 마포구: 6 },
    { 서대문구: 11 },
    { 은평구: 5 },
    { 노원구: 6 },
    { 도봉구: 10 },
    { 강북구: 15 },
    { 성북구: 9 },
    { 중랑구: 3 },
    { 동대문구: 6 },
    { 광진구: 7 },
    { 성동구: 14 },
    { 용산구: 10 },
    { 중구: 6 },
    { 종로구: 18 },
  ];
  geoData.features.forEach((guItem: any) => {
    guEvent.forEach((el) => {
      if (Object.keys(el)[0] === guItem.properties.name) {
        guItem.properties.eventCount = Object.values(el)[0];
      }
    });
  });
  // 색상, 높이 레이어 정의, 대응하는 키 추가 부분
  const myLayers = [
    [1, "#FFE69A", 200],
    [2, "#FFD24C", 400],
    [5, "#EC994B", 600],
    [10, "#8A4C44", 800],
    ["", "#683235", 1000],
  ];
  geoData.features.forEach((guItem: any) => {
    if (guItem.properties.eventCount <= myLayers[0][0]) {
      guItem.properties.color = myLayers[0][1];
      guItem.properties.height = myLayers[0][2];
    } else if (guItem.properties.eventCount <= myLayers[1][0]) {
      guItem.properties.color = myLayers[1][1];
      guItem.properties.height = myLayers[1][2];
    } else if (guItem.properties.eventCount <= myLayers[2][0]) {
      guItem.properties.color = myLayers[2][1];
      guItem.properties.height = myLayers[2][2];
    } else if (guItem.properties.eventCount <= myLayers[3][0]) {
      guItem.properties.color = myLayers[3][1];
      guItem.properties.height = myLayers[3][2];
    } else {
      guItem.properties.color = myLayers[4][1];
      guItem.properties.height = myLayers[4][2];
    }
  });

  // mapBox랜더링부분
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
      const start = {
        center: [127.003, 37.516],
        zoom: 9.8,
        pitch: 55,
        bearing: 0,
      };
      const end = {
        center: [127.003, 37.516],
        zoom: 10.8,
        pitch: 45,
        bearing: -15,
      };
      const map = new mapboxgl.Map({
        container: "map",
        language: "it",
        style: "mapbox://styles/disagreedd/cl5sy3s1g000614mu3p25897n",
        ...start,
        boxZoom: false,
        data: geoData,
      });
      map.on("load", () => {
        map.addSource("seoul", {
          type: "geojson",
          data: geoData,
        });
        map.addLayer({
          id: "seoul",
          type: "fill-extrusion",
          source: "seoul",
          paint: {
            "fill-extrusion-color": ["get", "color"],
            "fill-extrusion-height": ["get", "height"],
            "fill-extrusion-opacity": 0.8,
          },
        });
        map.flyTo({
          ...end,
          duration: 3000,
          essential: true,
        });
      });
      geoData.features.map((el) => {
        const marker = new mapboxgl.Marker({
          color: "#FFE69A",
          scale: 0.7,
        })
          .setLngLat(el.properties.centerCrd)
          .setPopup(
            new mapboxgl.Popup({ closeButton: false }).setHTML(
              `<h2>${el.properties.name}</h2><div style="color:#FFD24C">${el.properties.eventCount}개의 이벤트</div>`
            )
          )
          .addTo(map);
        return marker;
      });
      map.scrollZoom.disable();

      // map.on("click", (el) => {
      //   const result = map.queryRenderedFeatures(el.point, {
      //     layers: ["seoul"],
      //   });
      //   if (result.length) {
      //     const guName = result[0].properties.name;
      //     const eventCount = result[0].properties.eventCount;
      //     const popup = new mapboxgl.Popup({ closeButton: false });
      //     popup
      //       .setLngLat(el.lngLat)
      //       .setHTML(`<h2>${guName}</h2><div>${eventCount}개의 행사</div>`)
      //       .addTo(map);
      //   }
      // });
    };
  }, []);

  return (
    <>
      <Map id="map"></Map>
    </>
  );
}
