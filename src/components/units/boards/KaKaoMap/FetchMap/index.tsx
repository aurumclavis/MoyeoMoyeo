import { useEffect } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
const Wrapper = styled.div`
  width: 100px;
  height: 40px;
  background-color: black;
`;
const Info = styled.div``;
const Title = styled.div``;
const Close = styled.div``;
const Body = styled.div``;
const ImgWrapper = styled.div``;
const Img = styled.img``;
const Desc = styled.div``;
const Location = styled.div``;
const Homepage = styled.div``;
// const Wrapper = styled.div``;
// const Wrapper = styled.div``;

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

        const content = `
          <Wrapper className="wrap">
            <Info className="info">
              <Title className="title">
                카카오 스페이스닷원
                <Close className="close" onClick={closeOverlay} title="닫기"></Close>
              </Title>
              <Body className="body">
                <ImgWrapper>
                  <Img className="img"
                    src="https://cfile181.uf.daum.net/image/250649365602043421936D"
                    width="73"
                    height="70"
                    alt="행사사진"
                  />
                </ImgWrapper>
                <Desc className="desc">
                  <Location className="ellipsis">제주특별자치도 제주시 첨단로 242</Location>
                  <Homepage>
                    <a
                      href="https://www.kakaocorp.com/main"
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      홈페이지
                    </a>
                  </Homepage>
                </Desc>
              </Body>
            </Info>
          </Wrapper>
        `;
        // 마커 위에 커스텀오버레이를 표시합니다
        // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
        const overlay = new window.kakao.maps.CustomOverlay({
          content: content,
          map: map,
          position: marker.getPosition(),
        });
        console.log(overlay);

        // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
        window.kakao.maps.event.addListener(marker, "click", function () {
          overlay.setMap(map);
        });

        // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
        function closeOverlay() {
          overlay.setMap(null);
        }
      });
    };
  }, [props]);

  return (
    <>
      <div
        id="map"
        style={{ width: "100%", height: "100%", borderRadius: "10px" }}
      ></div>
    </>
  );
}
