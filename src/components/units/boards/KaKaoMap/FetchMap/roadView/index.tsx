import { useEffect } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;
const ExitButton = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: white;
  border-radius: 5px;
  font-size: 1.6rem;
  color: gray;
  cursor: pointer;
`;

declare const window: typeof globalThis & {
  kakao: any;
};
export default function KaKaoRoadView(props: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=107c600fa103c3cee537e6a2132c7e72&autoload=false&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const roadviewContainer = document.getElementById("roadview"); // 로드뷰를 표시할 div
        const roadview = new window.kakao.maps.Roadview(roadviewContainer); // 로드뷰 객체
        const roadviewClient = new window.kakao.maps.RoadviewClient(); // 좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체
        const position = new window.kakao.maps.LatLng(props.lat, props.lng);

        // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
        roadviewClient.getNearestPanoId(position, 50, function (panoId) {
          roadview.setPanoId(panoId, position); // panoId와 중심좌표를 통해 로드뷰 실행
        });
      });
    };
  }, []);

  return (
    <Wrapper>
      <ExitButton onClick={props.onClickExitRoadView}>X</ExitButton>
      <div id="roadview" style={{ width: "100vw", height: "65vh" }}></div>
    </Wrapper>
  );
}
