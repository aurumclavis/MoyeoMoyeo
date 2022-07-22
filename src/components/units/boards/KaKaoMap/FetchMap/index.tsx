import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KaKaoMapFetch(props: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=107c600fa103c3cee537e6a2132c7e72&autoload=false&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        // 지도를 담을 영역의 DOM 레퍼런스
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(props.lat, props.lng), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        const imageSrc = "/icon/moyeoPing_1-removebg-preview.png"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = {
          offset: new window.kakao.maps.Point(27, 69),
        }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
        const markerPosition = new window.kakao.maps.LatLng(
          props.lat,
          props.lng
        ); // 마커가 표시될 위치입니다
        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        const iwContent = `<div style="padding:5px; position: absolute; left:-25px; bottom: -25px;width : 250px;border: 1px solid #D2D2D2; background-color:white;border-radius:5px; "><div style="font-size:1.1rem; font-weight:500; padding-left:5px; margin-bottom:3px;">${props.eventName}</div>
        <div style="padding-left:5px;">${props.address}</div><div style="padding-left:3px;"><a href="https://map.kakao.com/link/map/${props.eventName},${props.lat},${props.lng}" style="color:#FFD24C" target="_blank">카카오맵에서 큰지도보기</a></div></div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        const iwPosition = new window.kakao.maps.LatLng(props.lat, props.lng); // 인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        const infowindow = new window.kakao.maps.InfoWindow({
          position: iwPosition,
          content: iwContent,
        });

        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        infowindow.open(map, marker);
      });
    };
  }, [props.eventName]);

  return (
    <>
      <div
        id="map"
        style={{ width: "100%", height: "100%", borderRadius: "10px" }}
      ></div>
    </>
  );
}
