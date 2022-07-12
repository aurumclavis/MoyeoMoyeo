import * as S from "./List.Styles";

export default function ListWrapperUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.TabLeftWrapper>
          <S.Tab>행사 일정</S.Tab>
        </S.TabLeftWrapper>
        <S.TabRigthWrapper>
          <S.Tab>추천 행사</S.Tab>
        </S.TabRigthWrapper>
      </S.Wrapper>
    </>
  );
}
