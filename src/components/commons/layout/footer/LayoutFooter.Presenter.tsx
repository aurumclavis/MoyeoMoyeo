import * as S from "./LayoutFooter.Styles";

export default function LayoutFooterUI() {
  return (
    <>
      <S.Wrapper>
        <S.InsideWrapper>
          <S.ListWrapper>
            <S.LeftListWrapper>
              <S.LogoImg src="/icon/mainlogo2.png" />
              <S.ListContents>
                <S.ListTitle>사업자 번호</S.ListTitle>
                <S.ListText> 000-00-0000</S.ListText>
              </S.ListContents>
              <S.ListContents>
                <S.ListTitle>고객센터</S.ListTitle>
                <S.ListText>0505-6345-2538</S.ListText>
              </S.ListContents>
              <S.ListContents>
                <S.ListTitle>운영시간</S.ListTitle>
                <S.ListText> AM 10:00 ~ PM 7:00</S.ListText>
              </S.ListContents>
            </S.LeftListWrapper>
            <S.RightListWrapper>
              <S.ListContents>
                <S.ListTitle>copyright</S.ListTitle>
                <S.ListText> moyeomoyeo</S.ListText>
              </S.ListContents>
              <S.ListContents>
                <S.ListTitle>주소</S.ListTitle>
                <S.ListText>
                  서울특별시 구로구 구로동 188-25 지밸리 패스트파이브 구로점
                  13층 1328호
                </S.ListText>
              </S.ListContents>
            </S.RightListWrapper>
          </S.ListWrapper>
        </S.InsideWrapper>
      </S.Wrapper>
    </>
  );
}
