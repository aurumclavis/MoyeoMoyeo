import * as S from "./LayoutFooter.Styles";

export default function LayoutFooterUI() {
  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.LogoImg src="/icon/mainlogo2.png" />
          <S.ListWrapper>
            <S.ListTitle>사업자 번호</S.ListTitle> 000-00-0000
          </S.ListWrapper>
          <S.ListWrapper>
            <S.ListTitle>고객센터</S.ListTitle> 0505-6345-2538
          </S.ListWrapper>
          <S.ListWrapper>
            <S.ListTitle>운영시간</S.ListTitle> AM 10:00 ~ PM 7:00
          </S.ListWrapper>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.ListWrapper>
            <S.ListTitle>capyrigth</S.ListTitle> moyeomoyeo
          </S.ListWrapper>
          <S.ListWrapper>
            <S.ListTitle>주소</S.ListTitle>
            <S.ListContents>
              서울특별시 구로구 구로동 188-25 지밸리패스트 파이브 구로점 12층
            </S.ListContents>
          </S.ListWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
