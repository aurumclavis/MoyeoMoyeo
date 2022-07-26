import * as S from "./Pagination01.Styles";

export default function Pagination01UI() {
  return (
    <S.PaginationWrapper>
      <S.LeftIcon />
      {new Array(10).fill(1).map((_, index) => (
        <S.PageButton key={index + 1}>{index + 1}</S.PageButton>
      ))}
      <S.RightIcon />
    </S.PaginationWrapper>
  );
}
