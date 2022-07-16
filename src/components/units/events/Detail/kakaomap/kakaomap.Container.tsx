import { useEffect } from "react";
import KakakomapPageUI from "./Kakaomap.Presenter";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakakomapPage(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=105b9fd39ffdb2805ac7b372a8d3797d&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.4846, 126.8979), // 지도의 중심좌표.
          level: 4, // 지도의 레벨(확대, 축소 정도)
          isPanto: true,
        };
        const map = new window.kakao.maps.Map(container, options);

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

        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          `제주특별자치도 제주시 첨단로 242`,
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
                image: markerImage,
              });

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
              marker.setMap(map);
            }
          }
        );
      });
    };

    // div에 지도를 그려줘
  }, []);
  return <KakakomapPageUI />;
}
