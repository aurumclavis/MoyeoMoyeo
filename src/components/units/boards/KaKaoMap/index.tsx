import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KaKaoMap(props: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=107c600fa103c3cee537e6a2132c7e72&autoload=false&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        // 지도를 담을 영역의 DOM 레퍼런스
        const container = document.getElementById("map");
        let options = {};
        !props.isEdit &&
          (options = {
            center: new window.kakao.maps.LatLng(37.5378, 126.8939),
            level: 3,
          });
        props.isEdit &&
          (options = {
            center: new window.kakao.maps.LatLng(props.lat, props.lng),
            level: 3,
          });

        // 지도 생성 및 객체 리턴 // container에 options를 그려라
        const map = new window.kakao.maps.Map(container, options);

        const geocoder = new window.kakao.maps.services.Geocoder();

        // 지도를 클릭한 위치에 표출할 마커 이미지
        const imageSrc = "/icon/moyeoPing_1-removebg-preview.png"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
          image: markerImage, // 마커이미지 설정
        });

        // 지도에 마커를 표시하는 함수
        marker.setMap(map);

        // 좌표 -> 주소 부분
        const callback = function (result: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            props.setAddress(result[0].address.address_name);
          }
        };

        function searchDetailAddrFromCoords(coords: any) {
          // 좌표로 법정동 상세 주소 정보를 요청합니다
          return geocoder.coord2Address(
            coords.getLng(),
            coords.getLat(),
            callback
          );
        }

        // 지도에 클릭 이벤트를 등록
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옴
            const latLng = mouseEvent.latLng;
            // 마커 위치를 클릭한 위치로 이동시킴
            marker.setPosition(latLng);
            // setValue로 레지스터에 위도경도값 입력
            props.setValue("LatLng", {
              lat: latLng.getLat(),
              lng: latLng.getLng(),
            });
            searchDetailAddrFromCoords(latLng);
          }
        );
      });
    };
  }, [props.isEdit]);

  return (
    <>
      <div
        id="map"
        style={{
          width: "100%",
          height: "24.188rem",
          borderRadius: "10px",
        }}
      ></div>
    </>
  );
}
