import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapNew(props) {
  useEffect(() => {
    // if (props.address !== "") {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=21da148329e9447c55831eab394b9234&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.4851, 126.8969), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(props.address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const info = new window.kakao.maps.InfoWindow({
              content: `<div style="width:210px;text-align:center;padding:5px 0;">${props.address}</div>`,
            });
            info.open(map, marker);
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
        // 마커를 클릭했을 때 해당 장소의 상세정보를 보여줄 커스텀오버레이입니다
        const placeOverlay = new window.kakao.maps.CustomOverlay({ zIndex: 1 });
          const contentNode = document.createElement("div"); // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다
          let markers = []; // 마커를 담을 배열입니다
          let currCategory = ""; // 현재 선택된 카테고리를 가지고 있을 변수입니다
        // 장소 검색 객체를 생성합니다
        const ps = new window.kakao.maps.services.Places(map);

        // 지도에 idle 이벤트를 등록합니다
        window.kakao.maps.event.addListener(map, "idle", searchPlaces);

        // 커스텀 오버레이의 컨텐츠 노드에 css class를 추가합니다
        contentNode.className = "placeinfo_wrap";

        // 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
        // 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다
        addEventHandle(
          contentNode,
          "mousedown",
          window.kakao.maps.event.preventMap
        );
        addEventHandle(
          contentNode,
          "touchstart",
          window.kakao.maps.event.preventMap
        );

        // 커스텀 오버레이 컨텐츠를 설정합니다
        placeOverlay.setContent(contentNode);

        // 각 카테고리에 클릭 이벤트를 등록합니다
        addCategoryClickEvent();

        // 엘리먼트에 이벤트 핸들러를 등록하는 함수입니다
        function addEventHandle(target, type, callback) {
          if (target.addEventListener) {
            target.addEventListener(type, callback);
          } else {
            target.attachEvent("on" + type, callback);
          }
        }

        // 카테고리 검색을 요청하는 함수입니다
        function searchPlaces() {
          if (!currCategory) {
            return;
          }

          // 커스텀 오버레이를 숨깁니다
          placeOverlay.setMap(null);

          // 지도에 표시되고 있는 마커를 제거합니다
          removeMarker();

          ps.categorySearch(currCategory, placesSearchCB, {
            useMapBounds: true,
          });
        }

        // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
        function placesSearchCB(data, status, pagination) {
          if (status === window.kakao.maps.services.Status.OK) {
            // 정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다
            displayPlaces(data);
          } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
            // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요
          } else if (status === window.kakao.maps.services.Status.ERROR) {
            // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
          }
        }

        // 지도에 마커를 표출하는 함수입니다
        function displayPlaces(places) {
          // 몇번째 카테고리가 선택되어 있는지 얻어옵니다
          // 이 순서는 스프라이트 이미지에서의 위치를 계산하는데 사용됩니다
          const order = document
            .getElementById(currCategory)
            .getAttribute("data-order");

          for (let i = 0; i < places.length; i++) {
            // 마커를 생성하고 지도에 표시합니다
            const marker = addMarker(
              new window.kakao.maps.LatLng(places[i].y, places[i].x),
              order
            );

            // 마커와 검색결과 항목을 클릭 했을 때
            // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
            (function (marker, place) {
              window.kakao.maps.event.addListener(marker, "click", function () {
                displayPlaceInfo(place);
              });
            })(marker, places[i]);
          }
        }

        // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
        function addMarker(position, order) {
          const imageSrc =
              "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png"; // 마커 이미지 url, 스프라이트 이미지를 씁니다
            const imageSize = new window.kakao.maps.Size(27, 28); // 마커 이미지의 크기
            const imgOptions = {
              spriteSize: new window.kakao.maps.Size(72, 208), // 스프라이트 이미지의 크기
              spriteOrigin: new window.kakao.maps.Point(46, order * 36), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
              offset: new window.kakao.maps.Point(11, 28), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
            };
            const markerImage = new window.kakao.maps.MarkerImage(
              imageSrc,
              imageSize,
              imgOptions
            );
            const marker = new window.kakao.maps.Marker({
              position, // 마커의 위치
              image: markerImage,
            });

          marker.setMap(map); // 지도 위에 마커를 표출합니다
          markers.push(marker); // 배열에 생성된 마커를 추가합니다

          return marker;
        }

        // 지도 위에 표시되고 있는 마커를 모두 제거합니다
        function removeMarker() {
          for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
          }
          markers = [];
        }

        // 클릭한 마커에 대한 장소 상세정보를 커스텀 오버레이로 표시하는 함수입니다
        function displayPlaceInfo(place) {
          let content =
            '<div class="placeinfo">' +
            '   <a class="title" href="' +
            place.place_url +
            '" target="_blank" title="' +
            place.place_name +
            '">' +
            place.place_name +
            "</a>";

          if (place.road_address_name) {
            content +=
              '    <span title="' +
              place.road_address_name +
              '">' +
              place.road_address_name +
              "</span>" +
              '  <span class="jibun" title="' +
              place.address_name +
              '">(지번 : ' +
              place.address_name +
              ")</span>";
          } else {
            content +=
              '    <span title="' +
              place.address_name +
              '">' +
              place.address_name +
              "</span>";
          }

          content +=
            '    <span class="tel">' +
            place.phone +
            "</span>" +
            "</div>" +
            '<div class="after"></div>';

          contentNode.innerHTML = content;
          placeOverlay.setPosition(
            new window.kakao.maps.LatLng(place.y, place.x)
          );
          placeOverlay.setMap(map);
        }

        // 각 카테고리에 클릭 이벤트를 등록합니다
        function addCategoryClickEvent(event) {
          const category = document.getElementById("category");
            const children = category.children;

          for (let i = 0; i < children.length; i++) {
            children[i].onclick = onClickCategory;
          }
        }

        // 카테고리를 클릭했을 때 호출되는 함수입니다
        function onClickCategory() {
          const id = this.id;
            const className = this.className;

          placeOverlay.setMap(null);

          if (className === "on") {
            currCategory = "";
            changeCategoryClass("");
            removeMarker();
          } else {
            currCategory = id;
            changeCategoryClass(this);
            searchPlaces();
          }
        }

        // 클릭된 카테고리에만 클릭된 스타일을 적용하는 함수입니다
        function changeCategoryClass(el) {
          const category = document.getElementById("category");
            const children = category.children;
            let i;

          for (i = 0; i < children.length; i++) {
            children[i].className = "";
          }

          if (el) {
            el.className = "on";
          }
        }
      });
      // };
    };
  }, [props.address]);

  return (
    <>
      <div
        className="map_wrap"
        id="map"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          float: "left",
        }}
      >
        {/* <div id="map" style={{ width: "100%", height: "100%" }}></div> */}
      </div>
      <div>
        <ul id="category">
          <li id="BK9" data-order="0">
            <span className="category_bg bank"></span>
            은행
          </li>
          <li id="MT1" data-order="1">
            <span className="category_bg mart"></span>
            마트
          </li>
          <li id="PM9" data-order="2">
            <span className="category_bg pharmacy"></span>
            약국
          </li>
          <li id="OL7" data-order="3">
            <span className="category_bg oil"></span>
            주유소
          </li>
          <li id="CE7" data-order="4">
            <span className="category_bg cafe"></span>
            카페
          </li>
          <li id="CS2" data-order="5">
            <span className="category_bg store"></span>
            편의점
          </li>
          <li id="MT1" data-order="6">
            <span className="category_bg"></span>
            대형마트
          </li>
          <li id="SW8" data-order="7">
            <span className="category_bg subway"></span>
            지하철역
          </li>
        </ul>
      </div>
    </>
  );
}

// MT1 대형마트
// CS2 편의점
// PS3 어린이집, 유치원
// SC4 학교
// AC5 학원
// PK6 주차장
// OL7 주유소, 충전소
// SW8 지하철역
// BK9 은행
// CT1 문화시설
// AG2 중개업소
// PO3 공공기관
// AT4 관광명소
// AD5 숙박
// FD6 음식점
// CE7 카페
// HP8 병원
// PM9 약국
