import * as S from "./List.Styles";

export default function ListWrapperUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.TabWrapper>
          <S.Tab
            isActive={props.activedTab === "list"}
            id="list"
            onClick={props.onClickTab}
          >
            행사 일정
          </S.Tab>
          <S.Tab
            isActive={props.activedTab === "plus"}
            id="plus"
            onClick={props.onClickTab}
          >
            추천 행사
          </S.Tab>
        </S.TabWrapper>
      </S.Wrapper>
    </>
  );
}
