import { useEffect } from "react";
import { IKaKaoMapProps } from "../../board/boardWrite/boardGeneral/BoardGeneralWrite.types";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KaKaoMap(props: IKaKaoMapProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=107c600fa103c3cee537e6a2132c7e72&autoload=false&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        // 지도를 담을 영역의 DOM 레퍼런스
        // 새로운 작성일 때 -> 행사주소를 좌표로 변환한 뒤 랜더링
        const geocoder = new window.kakao.maps.services.Geocoder();
        if (!props.isEdit) {
          if (!props.address) {
            const lat = 37.51;
            const lng = 127.02;
            props.setValue("LatLng", {
              lat,
              lng,
            });
            const mapContainer = document.getElementById("map"); // 지도를 표시할 div
            const mapOption = {
              center: new window.kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
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
            const markerPosition = new window.kakao.maps.LatLng(lat, lng); // 마커가 표시될 위치입니다

            // 마커를 생성합니다
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
              image: markerImage, // 마커이미지 설정
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            const callback = function (result: any, status: any) {
              if (status === window.kakao.maps.services.Status.OK) {
                props.setAddress(result[0].address.address_name);
              }
            };

            const searchDetailAddrFromCoords = (coords: any) => {
              // 좌표로 법정동 상세 주소 정보를 요청합니다
              return geocoder.coord2Address(
                coords.getLng(),
                coords.getLat(),
                callback
              );
            };

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
          } else {
            geocoder.addressSearch(
              props.address,
              function (result: any, status: any) {
                if (status === window.kakao.maps.services.Status.OK) {
                  const coords = new window.kakao.maps.LatLng(
                    result[0].y,
                    result[0].x
                  );
                  const lat = coords.getLat();
                  const lng = coords.getLng();
                  props.setValue("LatLng", {
                    lat,
                    lng,
                  });

                  const mapContainer = document.getElementById("map"); // 지도를 표시할 div
                  const mapOption = {
                    center: new window.kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
                    level: 3, // 지도의 확대 레벨
                  };

                  const map = new window.kakao.maps.Map(
                    mapContainer,
                    mapOption
                  ); // 지도를 생성합니다

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
                  const markerPosition = new window.kakao.maps.LatLng(lat, lng); // 마커가 표시될 위치입니다

                  // 마커를 생성합니다
                  const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage, // 마커이미지 설정
                  });

                  // 마커가 지도 위에 표시되도록 설정합니다
                  marker.setMap(map);

                  // 좌표 -> 주소 부분
                  const callback = function (result: any, status: any) {
                    if (status === window.kakao.maps.services.Status.OK) {
                      props.setAddress(result[0].address.address_name);
                    }
                  };

                  const searchDetailAddrFromCoords = (coords: any) => {
                    // 좌표로 법정동 상세 주소 정보를 요청합니다
                    return geocoder.coord2Address(
                      coords.getLng(),
                      coords.getLat(),
                      callback
                    );
                  };

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
                }
              }
            );
          }
        }

        // 수정일 경우 좌표정보가 이미 있음
        if (props.isEdit) {
          const mapContainer = document.getElementById("map"); // 지도를 표시할 div
          const mapOption = {
            center: new window.kakao.maps.LatLng(
              props.isEditAddress?.lat,
              props.isEditAddress?.lng
            ), // 지도의 중심좌표
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
            props.isEditAddress?.lat,
            props.isEditAddress?.lng
          ); // 마커가 표시될 위치입니다

          // 마커를 생성합니다
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage, // 마커이미지 설정
          });

          // 마커가 지도 위에 표시되도록 설정합니다
          marker.setMap(map);

          const callback = function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              props.setAddress(result[0].address.address_name);
            }
          };

          const searchDetailAddrFromCoords = (coords: any) => {
            // 좌표로 법정동 상세 주소 정보를 요청합니다
            return geocoder.coord2Address(
              coords.getLng(),
              coords.getLat(),
              callback
            );
          };

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
        }
      });
    };
  }, [props.isEdit, props.rerender]);

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
