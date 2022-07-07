import * as S from "./ProductsQuestionWrite.styles";
export default function ProductsQuestionWriteUI() {
  return (
    <S.FormWrapper>
      <S.WriteTitle>문의하기</S.WriteTitle>
      <S.WriteInput maxLength={200} placeholder="200자 이내로 입력해주세요." />
      <S.WriteBtnWrapper>
        <S.WriteBtn>등록</S.WriteBtn>
      </S.WriteBtnWrapper>
    </S.FormWrapper>
  );
}
