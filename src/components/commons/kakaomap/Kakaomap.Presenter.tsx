import * as S from "./Kakaomap.Styles";
export default function KakakomapPageUI(props) {
  return (
    <S.Wrapper>
      <S.MapWrapper>
        <div id="map" style={{ width: 800, height: 500 }}></div>
      </S.MapWrapper>

      <>
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
    </S.Wrapper>
  );
}
